import type { CartItem } from "./CartItem";
import type { MagicCard } from "./MagicCard";

export interface ShoppingContextValue{
    cart: CartItem[]
    sets: { [setCode:string]: MagicCard[] }
    currentSet: string | null
    loading: boolean
    error: string | null
    addToCart: (scryfall_id:string, quantity:number, price_eur:number) => void
    removeFromCart: (scryfall_id:string) => void
    clearCart: () => void
    selectSet: (setCode: string) => Promise<void>
    updateCartItemQuantity: (scryfall_id:string, quantity:number) => void
}