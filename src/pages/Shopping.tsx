import { useEffect, useState } from "react";
import { fetchRandomCards } from "../services/scryfallRandomRequest";
import { useShoppingContext } from "../context/ShoppingProvider";
import Card from "../components/Card";
import type { MagicCard } from "../types/MagicCard";
import "../styles/Shopping.css";

export default function Shopping() {
  const [cards, setCards] = useState<MagicCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { sets, currentSet,loading: contextLoading, error: contextError, selectSet } = useShoppingContext();;

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

  
  const displayCards = currentSet && sets[currentSet] ? sets[currentSet] : cards;

  if (loading) return <div>Loading Cards...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="bg-shopping-page">
      <select 
        onChange={(e) => {
          if(e.target.value) {
            selectSet(e.target.value);
          } else {
            // Reset to random cards if no set is selected
            setCards([]);
          }
        }} 
        disabled={contextLoading}
      >
        <option value="">-- Select a Set --</option>
        <option value="TOR">Torment</option>
        <option value="JUD">Judgment</option>
        <option value="ONS">Onslaught</option>
        <option value="LGN">Legions</option>
        <option value="LRW">Lorwyn</option>
        <option value="SHM">Shadowmoor</option>
        <option value="ZEN">Zendikar</option>
      </select>
      <div className="cards-grid">
        {displayCards.map((card) => (
          <Card key={card.scryfall_id} card={card} />
        ))}
      </div>
    </div>
  );
}
