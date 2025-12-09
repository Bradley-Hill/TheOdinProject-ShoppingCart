export interface MagicCard {
    // UI/UX
    name: string;
    image_url: string;
    image_url_large: string;
    price_eur: number;
    // Filtering
    is_commander_legal: boolean;
    rarity: string;
    color_identity: string[];
    type_line: string;
    mana_cost: string;
    set_name: string;
    // Identification
    scryfall_id: string;
}