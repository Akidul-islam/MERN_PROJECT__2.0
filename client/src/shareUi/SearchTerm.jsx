import React from 'react';

const SearchTerm = ({ inputValue, changeHandler }) => {

  return (
    <div style={{ display: 'grid', placeItem: 'center' }}>
      <input
        type={'search'}
        className="search-input"
        placeholder={'Search your '}
        value={inputValue}
        onChange={changeHandler}
      />
    </div>
  );
};

export default SearchTerm;
