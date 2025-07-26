import { useItems } from "../../../hooks/useItems";
import type { Item } from "../../../redux/slices/item.slice";
import PageContainer from "../../layouts/pageContainer";
import { useMemo, useState } from "react";
import ProductSection from "./productSection";
import Filter from "./filter";

const Home = () => {
  const { items } = useItems();

  const allCategories = Array.from(new Set(items.map((item) => item.category)));
  const allConditions = Array.from(new Set(items.map((item) => item.condition)));
  const allAvailability = ["Available", "Not Available"];

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
    const [mobileOpen, setMobileOpen] = useState(false);
  

  const handleFilterChange = (
    type: "category" | "condition" | "availability" | "search",
    selected: string[] | string
  ) => {
    if (type === "category") setSelectedCategories(selected as string[]);
    else if (type === "condition") setSelectedConditions(selected as string[]);
    else if (type === "availability") setSelectedAvailability(selected as string[]);
    else if (type === "search") setSearchQuery(selected as string);
  };

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(item.category);

      const matchesCondition =
        selectedConditions.length === 0 || selectedConditions.includes(item.condition);

      const availabilityLabel = item.available ? "Available" : "Not Available";
      const matchesAvailability =
        selectedAvailability.length === 0 || selectedAvailability.includes(availabilityLabel);

      const lowerQuery = searchQuery.toLowerCase();
      const matchesSearch =
        item.name.toLowerCase().includes(lowerQuery) ||
        item.category.toLowerCase().includes(lowerQuery) ||
        item.owner.toLowerCase().includes(lowerQuery) ||
        item.condition.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery);

      return matchesCategory && matchesCondition && matchesAvailability && matchesSearch;
    });
  }, [
    items,
    selectedCategories,
    selectedConditions,
    selectedAvailability,
    searchQuery,
  ]);

  return (
    <PageContainer>
      <div style={{ display: "flex", gap: "2rem" }}>

          <Filter
            categories={allCategories}
            conditions={allConditions}
            availability={allAvailability}
            selectedCategories={selectedCategories}
            selectedConditions={selectedConditions}
            selectedAvailability={selectedAvailability}
            searchQuery={searchQuery}
            onSearchChange={(query) => handleFilterChange("search", query)}
            onChange={handleFilterChange}
            setMobileOpen={setMobileOpen}
            mobileOpen={mobileOpen}
          />
        <ProductSection
         filteredItems={filteredItems} 
         setMobileOpen={setMobileOpen}
         mobileOpen={mobileOpen}
         />
      </div>
    </PageContainer>
  );
};

export default Home;
