import { useEffect, useState } from "react";
import type { CardFilterProps } from "../../types/FilterOptions";
import "../../styles/CardFilter.css"

export function CardFilter({ onFilterChange }: CardFilterProps) {
  const [colors, setColors] = useState<string[]>([]);
  const [types, setTypes] = useState<string[]>([]);
  const [rarities, setRarities] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number | null>(Infinity);

  const colorOptions = [
    { code: "W", name: "White" },
    { code: "U", name: "Blue" },
    { code: "B", name: "Black" },
    { code: "R", name: "Red" },
    { code: "G", name: "Green" },
  ];

  const typesOptions = [
    { code: "Creature", name: "Creature" },
    { code: "Instant", name: "Instant" },
    { code: "Sorcery", name: "Sorcery" },
    { code: "Enchantment", name: "Enchantment" },
    { code: "Artifact", name: "Artifact" },
    { code: "Planeswalker", name: "Planeswalker" },
    { code: "Land", name: "Land" },
  ];

  const raritiesOptions = [
    { code: "common", name: "Common" },
    { code: "uncommon", name: "Uncommon" },
    { code: "rare", name: "Rare" },
    { code: "mythic", name: "Mythic" },
  ];

  const handleColorToggle = (colorCode: string) => {
    setColors(
      colors.includes(colorCode)
        ? colors.filter((color) => color !== colorCode)
        : [...colors, colorCode]
    );
  };

  const handleTypesToggle = (typeCode: string) => {
    setTypes(
      types.includes(typeCode)
        ? types.filter((type) => type !== typeCode)
        : [...types, typeCode]
    );
  };

  const handleRaritiesToggle = (rarityCode: string) => {
    setRarities(
      rarities.includes(rarityCode)
        ? rarities.filter((rarity) => rarity !== rarityCode)
        : [...rarities, rarityCode]
    );
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMaxPrice(value ? parseFloat(value) : null);
  };

  useEffect(() => {
    onFilterChange({ colors, types, rarities, maxPrice });
  }, [colors, types, rarities, maxPrice]);
  return (
    <section className="filterOptions">
      <div className="filterColor">
        <h3>Colours</h3>
        {colorOptions.map((color) => (
          <label key={color.code}>
            <input
              type="checkbox"
              checked={colors.includes(color.code)}
              onChange={() => handleColorToggle(color.code)}
            />
            {color.name}
          </label>
        ))}
      </div>
      <div className="filterTypes">
        <h3>Types</h3>
        {typesOptions.map((typeOption) => (
          <label key={typeOption.code}>
            <input
              type="checkbox"
              checked={types.includes(typeOption.code)}
              onChange={() => handleTypesToggle(typeOption.code)}
            />
            {typeOption.name}
          </label>
        ))}
      </div>
      <div className="filterRarities">
        <h3>Rarities</h3>
        {raritiesOptions.map((rarity) => (
          <label key={rarity.code}>
            <input
              type="checkbox"
              checked={rarities.includes(rarity.code)}
              onChange={() => handleRaritiesToggle(rarity.code)}
            />
            {rarity.name}
          </label>
        ))}
      </div>
      <div className="filterPrice">
        <label>
          Max Price (€):
          <input
            type="number"
            value={maxPrice === Infinity ? "" : maxPrice?.toFixed(2) || ""}
            onChange={handleMaxPriceChange}
            placeholder="No Max"
            min="0"
            step="0.01"
          />
        </label>
      </div>
    </section>
  );
}
