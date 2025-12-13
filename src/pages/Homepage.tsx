import { Link } from "react-router-dom";
import "../styles/Homepage.css";

export default function Homepage() {
  return (
    <div className="bg-homepage">
      <div className="homepage-container">
        <section className="hero">
          <h1>Magic: The Gathering Shopping Cart</h1>
          <p className="tagline">
            Build your deck with cards from the Scryfall database
          </p>
        </section>

        <section className="features">
          <div className="feature-card">
            <h2>🛒 Browse & Shop</h2>
            <p>
              Browse Magic: The Gathering cards from different sets using the
              Scryfall API. Filter by color, type, rarity, and price to find
              exactly what you need.
            </p>
          </div>

          <div className="feature-card">
            <h2>📋 Build Your List</h2>
            <p>
              Add cards to your cart and manage quantities. See recent Cardmarket pricing from Scryfall and track your total spending as you build
              your deck.
            </p>
          </div>

          <div className="feature-card">
            <h2>📤 Export & Buy</h2>
            <p>
              Export your decklist in Cardmarket format and create your wantlist, and look for bargains!
            </p>
          </div>
        </section>

        <section className="how-it-works">
          <h2>How to Use</h2>
          <ol className="steps">
            <li>
              <strong>Go to Shop:</strong> Navigate to the shopping page to
              start browsing Magic cards.
            </li>
            <li>
              <strong>Select a Set:</strong> Choose a Magic set from the
              dropdown to view all cards in that set.
            </li>
            <li>
              <strong>Filter & Find:</strong> Use the color, type, rarity, and
              price filters to narrow down your search.
            </li>
            <li>
              <strong>Add to Cart:</strong> Select a quantity and click "Add to
              Cart" to add cards to your shopping list.
            </li>
            <li>
              <strong>Review & Export:</strong> Visit your cart to review items,
              adjust quantities, and export your decklist.
            </li>
            <li>
              <strong>Purchase:</strong> Coming soon!
            </li>
          </ol>
        </section>

        <section className="cta">
          <Link to="/shopping" className="cta-button">
            Start Shopping Now
          </Link>
        </section>
      </div>
    </div>
  );
}
