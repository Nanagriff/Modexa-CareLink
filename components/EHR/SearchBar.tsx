import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    onSearch(value);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Search Health Records"
        className="w-[400px] p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-teal-500"
      />
    </div>
  );
};

export default SearchBar;
