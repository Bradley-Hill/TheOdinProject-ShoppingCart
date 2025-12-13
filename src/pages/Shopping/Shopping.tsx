import { useEffect, useState } from "react";
import { fetchRandomCards } from "../../services/scryfallRandomRequest";
import { useShoppingContext } from "../../context/ShoppingProvider";
import Card from "../../components/Card";
import { SetSelector } from "./SetSelector";
import { CardFilter } from "./CardFilter";
import { Spinner } from "../../components/Spinner";
import { ErrorDisplay } from "../../components/ErrorDisplay";
import type { MagicCard } from "../../types/MagicCard";
import "../../styles/Shopping.css";

export default function Shopping() {
  const [cards, setCards] = useState<MagicCard[]>([]);
  const [filteredCards, setFilteredCards] = useState<MagicCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const {
    sets,
    currentSet,
    loading: contextLoading,
    error: contextError,
  } = useShoppingContext();

  useEffect(() => {
    const loadCards = async () => {
      try {
        const randomCards = await fetchRandomCards();
        setCards(randomCards);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load cards");
      } finally {
        setLoading(false);
      }
    };
    loadCards();
  }, []);

  useEffect(() => {
    setFilteredCards([]);
  }, [currentSet]);

  useEffect(() => {
    if (contextError) {
      setError(contextError);
    }
  }, [contextError]);

  const handleFilterChange = (filters: {
    colors: string[];
    types: string[];
    rarities: string[];
    maxPrice: number | null;
  }) => {
    const sourceCards =
      currentSet && sets[currentSet] ? sets[currentSet] : cards;
    const filtered = sourceCards.filter((card) => {
      const passesColorFilter =
        filters.colors.length === 0 ||
        (card.color_identity &&
          filters.colors.some((color) => card.color_identity.includes(color)));

      const passesTypeFilter =
        filters.types.length === 0 ||
        (card.type_line &&
          filters.types.some((type) => card.type_line.includes(type)));

      const passesRarityFilter =
        filters.rarities.length === 0 || filters.rarities.includes(card.rarity);

      const passesPriceFilter =
        filters.maxPrice === null || card.price_eur <= filters.maxPrice;

      return (
        passesColorFilter &&
        passesTypeFilter &&
        passesRarityFilter &&
        passesPriceFilter
      );
    });
    setFilteredCards(filtered);
  };

  const getCardsToDisplay = () => {
    if (currentSet && filteredCards.length > 0) return filteredCards;
    if (currentSet && sets[currentSet]) return sets[currentSet];
    return cards;
  };
  const cardsToDisplay = getCardsToDisplay();

  if (loading) return <Spinner />;
  if (error) return <ErrorDisplay message={error} />;
  return (
    <div className="bg-shopping-page">
      <SetSelector />
      <CardFilter onFilterChange={handleFilterChange} />
      {contextLoading ? (
        <Spinner />
      ) : (
        <div className="cards-grid">
          {cardsToDisplay.map((card) => (
            <Card key={card.scryfall_id} card={card} />
          ))}
        </div>
      )}
    </div>
  );
}
