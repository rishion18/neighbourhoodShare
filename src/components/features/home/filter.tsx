import { useMemo } from "react";
import MultiSelectDropdown from "../../ui/mutiSelectDropdown";

interface FilterProps {
  categories: string[];
  conditions: string[];
  availability: string[];
  selectedCategories: string[];
  selectedConditions: string[];
  selectedAvailability: string[];
  onChange: (
    type: "category" | "condition" | "availability",
    selected: string[]
  ) => void;
}

const Filter = ({
  categories,
  conditions,
  availability,
  selectedCategories,
  selectedConditions,
  selectedAvailability,
  onChange,
}: FilterProps) => {
  const categoryOptions = useMemo(() => [ ...categories], [categories]);

  const handleSelect =
    (type: "category" | "condition" | "availability") => (values: string[]) => {
      if (type === "category" && values.includes("All")) {
        onChange("category", []);
      } else {
        onChange(type, values);
      }
    };

  return (
    <div>
      <h3 style={{ marginBottom: "1rem" }}>Filters</h3>
      <MultiSelectDropdown
        title="Categories"
        options={categoryOptions}
        selectedOptions={selectedCategories
        }
        onChange={handleSelect("category")}
      />
      <MultiSelectDropdown
        title="Condition"
        options={conditions}
        selectedOptions={selectedConditions}
        onChange={handleSelect("condition")}
      />
      <MultiSelectDropdown
        title="Availability"
        options={availability}
        selectedOptions={selectedAvailability}
        onChange={handleSelect("availability")}
      />
    </div>
  );
};

export default Filter;
