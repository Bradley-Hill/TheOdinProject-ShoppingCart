import React from 'react'
import '../styles/Shopping.css'
import Card from '../components/Card'
import scryfallMapping from "../services/scryfallMapping";



const scryfallResponse = {
  object: "card",
  id: "41eed468-cd79-4c88-97d5-72b7818c78cb",
  oracle_id: "69fd4ddf-9ed8-4c56-bef3-9944daf05e4f",
  multiverse_ids: [394356],
  tcgplayer_id: 96162,
  cardmarket_id: 273012,
  name: "Coiling Oracle",
  lang: "en",
  released_at: "2015-02-27",
  uri: "https://api.scryfall.com/cards/41eed468-cd79-4c88-97d5-72b7818c78cb",
  scryfall_uri:
    "https://scryfall.com/card/ddo/51/coiling-oracle?utm_source=api",
  layout: "normal",
  highres_image: true,
  image_status: "highres_scan",
  image_uris: {
    small:
      "https://cards.scryfall.io/small/front/4/1/41eed468-cd79-4c88-97d5-72b7818c78cb.jpg?1562840217",
    normal:
      "https://cards.scryfall.io/normal/front/4/1/41eed468-cd79-4c88-97d5-72b7818c78cb.jpg?1562840217",
    large:
      "https://cards.scryfall.io/large/front/4/1/41eed468-cd79-4c88-97d5-72b7818c78cb.jpg?1562840217",
    png: "https://cards.scryfall.io/png/front/4/1/41eed468-cd79-4c88-97d5-72b7818c78cb.png?1562840217",
    art_crop:
      "https://cards.scryfall.io/art_crop/front/4/1/41eed468-cd79-4c88-97d5-72b7818c78cb.jpg?1562840217",
    border_crop:
      "https://cards.scryfall.io/border_crop/front/4/1/41eed468-cd79-4c88-97d5-72b7818c78cb.jpg?1562840217",
  },
  mana_cost: "{G}{U}",
  cmc: 2.0,
  type_line: "Creature — Snake Elf Druid",
  oracle_text:
    "When this creature enters, reveal the top card of your library. If it's a land card, put it onto the battlefield. Otherwise, put that card into your hand.",
  power: "1",
  toughness: "1",
  colors: ["G", "U"],
  color_identity: ["G", "U"],
  keywords: [],
  legalities: {
    standard: "not_legal",
    future: "not_legal",
    historic: "not_legal",
    timeless: "not_legal",
    gladiator: "not_legal",
    pioneer: "not_legal",
    modern: "legal",
    legacy: "legal",
    pauper: "legal",
    vintage: "legal",
    penny: "legal",
    commander: "legal",
    oathbreaker: "legal",
    standardbrawl: "not_legal",
    brawl: "not_legal",
    alchemy: "not_legal",
    paupercommander: "legal",
    duel: "legal",
    oldschool: "not_legal",
    premodern: "not_legal",
    predh: "legal",
  } as const,
  games: ["paper"],
  reserved: false,
  game_changer: false,
  foil: false,
  nonfoil: true,
  finishes: ["nonfoil"],
  oversized: false,
  promo: false,
  reprint: true,
  variation: false,
  set_id: "6b350326-34f3-43c6-8df5-2b1d9a61ceff",
  set: "ddo",
  set_name: "Duel Decks: Elspeth vs. Kiora",
  set_type: "duel_deck",
  set_uri: "https://api.scryfall.com/sets/6b350326-34f3-43c6-8df5-2b1d9a61ceff",
  set_search_uri:
    "https://api.scryfall.com/cards/search?order=set&q=e%3Addo&unique=prints",
  scryfall_set_uri: "https://scryfall.com/sets/ddo?utm_source=api",
  rulings_uri:
    "https://api.scryfall.com/cards/41eed468-cd79-4c88-97d5-72b7818c78cb/rulings",
  prints_search_uri:
    "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A69fd4ddf-9ed8-4c56-bef3-9944daf05e4f&unique=prints",
  collector_number: "51",
  digital: false,
  rarity: "common",
  flavor_text:
    '"Nature was slowly heading in the right direction, but we know how to achieve faster results."\n—Vorel of the Hull Clade',
  card_back_id: "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
  artist: "Mark Zug",
  artist_ids: ["48e2b98c-5467-4671-bd42-4c3746115117"],
  illustration_id: "751069e5-49d1-4a01-97d1-22e240990e4e",
  border_color: "black",
  frame: "2015",
  full_art: false,
  textless: false,
  booster: false,
  story_spotlight: false,
  edhrec_rank: 1153,
  penny_rank: 972,
  prices: {
    usd: "0.12",
    usd_foil: null,
    usd_etched: null,
    eur: "0.11",
    eur_foil: null,
    tix: null,
  },
  related_uris: {
    gatherer:
      "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=394356&printed=false",
    tcgplayer_infinite_articles:
      "https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&trafcat=tcgplayer.com%2Fsearch%2Farticles&u=https%3A%2F%2Fwww.tcgplayer.com%2Fsearch%2Farticles%3FproductLineName%3Dmagic%26q%3DCoiling%2BOracle",
    tcgplayer_infinite_decks:
      "https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&trafcat=tcgplayer.com%2Fsearch%2Fdecks&u=https%3A%2F%2Fwww.tcgplayer.com%2Fsearch%2Fdecks%3FproductLineName%3Dmagic%26q%3DCoiling%2BOracle",
    edhrec: "https://edhrec.com/route/?cc=Coiling+Oracle",
  },
  purchase_uris: {
    tcgplayer:
      "https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&u=https%3A%2F%2Fwww.tcgplayer.com%2Fproduct%2F96162%3Fpage%3D1",
    cardmarket:
      "https://www.cardmarket.com/en/Magic/Products?idProduct=273012&referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
    cardhoarder:
      "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Coiling+Oracle&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall",
  },
};

let cardData = scryfallMapping(scryfallResponse);

export default function Shopping() {
  return (
    <div className='bg-shopping-page'>
      <div className="cards-grid">
        <Card card={cardData}/>
        <Card card={cardData}/>
        <Card card={cardData}/>
        <Card card={cardData}/>
        <Card card={cardData}/>
        <Card card={cardData}/>
      </div>
    </div>
  )
}
