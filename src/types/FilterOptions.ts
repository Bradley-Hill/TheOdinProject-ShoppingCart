interface FilterOptions {
    colors: string[];
    types: string[];
    rarities: string[];
    maxPrice: number | null;
}

export interface CardFilterProps {
    onFilterChange: (filters: FilterOptions) => void;
}