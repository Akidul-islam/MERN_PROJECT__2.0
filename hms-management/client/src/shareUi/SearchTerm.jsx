import React, { useState } from 'react';

const SearchTerm = ({ searchItem }) => {
  const [inputValue, setValue] = useState('');
  const changeHandler = (e) => {
    e.preventDefault();
    setValue(e.target.value);
    searchItem(e.target.value);
  };

  return (
    <div style={{ display: 'grid', placeItem: 'center' }}>
      <input
        type={'text'}
        className="search-input"
        placeholder={'Search your '}
        value={inputValue}
        onChange={changeHandler}
      />
    </div>
  );
};

export default SearchTerm;
