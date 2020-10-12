import React from 'react';

import { Container } from './styles';

interface SearchBarProps {
  placeholder: string;
  label: string;
  onChange: any;
  onBlur: any;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onChange,
  onBlur,
  placeholder,
}) => {
  return (
    <Container>
      <label htmlFor="search">Search</label>
      <input
        id="search"
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
    </Container>
  );
};

export default SearchBar;
