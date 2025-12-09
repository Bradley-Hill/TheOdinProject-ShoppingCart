import type { ScryfallResponse } from "../types/ScryfallResponse";



const scryfallMapping = (scryfallResponse: ScryfallResponse) => {
  const name = scryfallResponse.name;
  const image_url =
    scryfallResponse.image_uris === undefined
      ? ""
      : scryfallResponse.image_uris.normal;

  const image_url_large =
    scryfallResponse.image_uris === undefined
      ? ""
      : scryfallResponse.image_uris.large;
  const price_eur =
    scryfallResponse.prices.eur === null
      ? 0
      : parseFloat(scryfallResponse.prices.eur);
  const scryfall_id = scryfallResponse.id;
  const is_commander_legal =
    scryfallResponse.legalities.commander === "legal";
  const color_identity = scryfallResponse.color_identity;
  const type_line = scryfallResponse.type_line;
  const mana_cost =
    scryfallResponse.mana_cost === undefined ? "" : scryfallResponse.mana_cost;
  const set_name = scryfallResponse.set_name;
  const rarity = scryfallResponse.rarity;

  return {
    name,
    image_url,
    image_url_large,
    price_eur,
    scryfall_id,
    is_commander_legal,
    color_identity,
    type_line,
    mana_cost,
    set_name,
    rarity,
  };
};

export default scryfallMapping;