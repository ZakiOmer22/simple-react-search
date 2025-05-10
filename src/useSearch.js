import { useState, useMemo, useCallback } from "react";

export function useSearch(items) {
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, items]);

  const handleSearchChange = useCallback((event) => {
    setQuery(event.target.value);
  }, []);

  return { filteredItems, handleSearchChange };
}
