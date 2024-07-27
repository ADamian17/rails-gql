"use client";
import { useState, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import debounce from 'lodash/debounce';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const pathname = usePathname();
  // Debounced function to update the URL
  const debouncedUpdateQuery = useCallback(
    debounce((newQuery) => {
      router.push(pathname + '?search=' + newQuery);
    }, 500),
    [router, pathname]
  );

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    debouncedUpdateQuery(newQuery);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Search..."
    />
  );
};

export default SearchBar;
