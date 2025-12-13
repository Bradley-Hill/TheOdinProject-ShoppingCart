export interface CartItem {
  scryfall_id: string;
  quantity: number;
  price_eur: number;
}

interface CardType {
  image_url: string;
  name: string;
  price_eur: number;
}

 export interface CartItemProps {
  cartItem: CartItem;
  card: CardType;
  onRemove: (scryfall_id: string) => void;
  onQuantityChange: (scryfall_id: string, quantity: number) => void;
}

export interface CartSidebarProps {
  cart: CartItem[];
  onClearCart: () => void;
}