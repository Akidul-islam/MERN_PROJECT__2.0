import { useState } from 'react';
import { deepClone, isObjEmpty } from '../uitilities/objectBreak';

const useForm = ({ init, validate }) => {
  const [state, setState] = useState(mapValuesToState(init));
  // it just hande our input form value
  const handleChange = (e) => {
    const { name: key, value, type } = e.target;

    const oldState = deepClone(state);
    if (type === 'checkbox') {
      oldState[key].value = 'checked';
    } else {
      oldState[key].value = value;
    }

    const { errors } = getErrors();

    if (oldState[key].touched && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key].error = '';
    }
    setState(oldState);
  };
  //  if users focus our input and left blank fileds then throw error
  const handleFocus = (e) => {
    const { name } = e.target;

    const oldState = deepClone(state);
    oldState[name].focused = true;

    if (!oldState[name].touched) {
      oldState[name].touched = true;
    }

    setState(oldState);
  };

  const handleBlur = (e) => {
    const key = e.target.name;

    const { errors } = getErrors();
    const oldState = deepClone(state);

    if (oldState[key].touched && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key].error = '';
    }

    oldState[key].focused = false;
    setState(oldState);
  };

  const handleSubmit = (e, cb) => {
    e.preventDefault();
    const { errors, hasError, values } = getErrors();

    cb({
      hasError,
      errors,
      values,
      touched: mapStateToKeys(state, 'touched'),
      focused: mapStateToKeys(state, 'focused'),
    });
  };

  const clear = () => {
    const newState = mapValuesToState(init, true);
    setState(newState);
  };

  const getErrors = () => {
    let hasError = null,
      errors = null;

    const values = mapStateToKeys(state, 'value');

    if (typeof validate === 'boolean') {
      hasError = validate;
      errors = mapStateToKeys(state, 'error');
    } else if (typeof validate === 'function') {
      const errorsFromCb = validate(values);
      hasError = !isObjEmpty(errorsFromCb);
      errors = errorsFromCb;
    } else {
      throw new Error('validate property must be boolean or function');
    }

    return {
      hasError,
      errors,
      values,
    };
  };

  return {
    formState: state,
    handleChange,
    handleFocus,
    handleBlur,
    handleSubmit,
    clear,
  };
};

export default useForm;

// helper functions
const mapValuesToState = (values, shouldClear = false) => {
  return Object.keys(values).reduce((acc, key) => {
    acc[key] = {
      value: shouldClear ? '' : values[key],
      error: '',
      focused: false,
      touched: false,
    };
    return acc;
  }, {});
};

const mapStateToKeys = (state, key) => {
  return Object.keys(state).reduce((acc, cur) => {
    acc[cur] = state[cur][key];
    return acc;
  }, {});
};


// how to use this form 

// const {
//   formState: state,
//   handleBlur,
//   handleChange,
//   handleFocus,
//   handleSubmit,
//   clear,
// } = useForm({ init, validate });

// const cb = ({ hasError, values, errors }) => {
//   if (hasError) {
//     alert('[ERROR]' + JSON.stringify(errors));
//   } else {
//     alert('[SUCCESS]' + JSON.stringify(values));
//   }
// };