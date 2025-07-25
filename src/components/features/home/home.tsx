import { useItems } from "../../../hooks/useItems";
import type { Item } from "../../../redux/slices/item.slice";
import PageContainer from "../../layouts/pageContainer";
import ProductCard from "../../ui/productCard";
import Filter from "./filter";
import { useMemo, useState } from "react";

const Home = () => {
  const { items } = useItems();

  const allCategories = Array.from(new Set(items.map((item) => item.category)));
  const allConditions = Array.from(new Set(items.map((item) => item.condition)));
  const allAvailability = ["Available", "Not Available"];

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);

  const handleFilterChange = (
    type: "category" | "condition" | "availability",
    selected: string[]
  ) => {
    if (type === "category") setSelectedCategories(selected);
    else if (type === "condition") setSelectedConditions(selected);
    else if (type === "availability") setSelectedAvailability(selected);
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

      return matchesCategory && matchesCondition && matchesAvailability;
    });
  }, [items, selectedCategories, selectedConditions, selectedAvailability]);

  return (
    <PageContainer>
      <div style={{ display: "flex", gap: "2rem", width: "100%" }}>
        <aside
          style={{
            width: "240px",
            flexShrink: 0,
            minWidth: "240px",
          }}
        >
          <Filter
            categories={allCategories}
            conditions={allConditions}
            availability={allAvailability}
            selectedCategories={selectedCategories}
            selectedConditions={selectedConditions}
            selectedAvailability={selectedAvailability}
            onChange={handleFilterChange}
          />
        </aside>

        <section
          style={{
            flex: 1,
            display: "grid",
            gap: "1.5rem",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            minWidth: 0,
          }}
        >
          {filteredItems.map((item: Item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </section>
      </div>
    </PageContainer>
  );
};

export default Home;
