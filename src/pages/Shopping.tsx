import { useEffect, useState } from "react";
import { fetchRandomCards } from "../services/scryfallRandomRequest";
import "../styles/Shopping.css";
import Card from "../components/Card";
import type { MagicCard } from "../types/MagicCard";

export default function Shopping() {
  const [cards, setCards] = useState<MagicCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  if (loading) return <div>Loading Cards...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="bg-shopping-page">
      <div className="cards-grid">
        {cards.map((card) => (
          <Card key={card.scryfall_id} card={card} />
        ))}
      </div>
    </div>
  );
}
