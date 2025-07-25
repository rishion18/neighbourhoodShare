import { useMemo } from "react";
import { useItems } from "./useItems";

export const useFilteredItems = (search: string, category: string) => {
  const { items } = useItems();

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const matchesName = item.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || item.category === category;
      return matchesName && matchesCategory && !item.sold;
    });
  }, [items, search, category]);

  return filtered;
};
