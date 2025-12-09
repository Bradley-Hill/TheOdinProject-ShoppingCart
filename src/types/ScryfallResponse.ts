export interface ScryfallResponse {
  id: string;
  name: string;
  
  image_uris?: {
    normal: string;
    large: string;
  };

  mana_cost?: string;
  type_line: string;
  color_identity: string[];
  
  legalities: {
    [format: string]: "legal" | "not_legal" | "restricted" | "banned";
  };

  set_name: string;
  rarity: string;

  prices: {
    eur: string | null;
  };
}