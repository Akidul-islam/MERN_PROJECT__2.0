import React from 'react';

const SearchTerm = () => {
  return (
    <div style={{ display: 'grid', placeItem: 'center' }}>
      <input
        type={'text'}
        className="search-input"
        placeholder={'Search your favorite doctor'}
      />
    </div>
  );
};

export default SearchTerm;
