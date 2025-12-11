import scryfallMapping from "./scryfallMapping";
import type { ScryfallResponse } from "../types/ScryfallResponse";

export const fetchSetCards = async (setCode: string) => {
    const response = await fetch(`https://api.scryfall.com/cards/search?order=set&q=e%3A${setCode}&unique=prints`);
    if (!response.ok) {
        throw new Error(`Error fetching cards for set ${setCode}: ${response.statusText}`);
    }
    const data = await response.json();
    let allCards = data.data;
    let nextPage = data.has_more ? data.next_page : null;

    while (nextPage){
        const nextResponse = await fetch(nextPage);
        if (!nextResponse.ok) {
            throw new Error(`Error fetching next page for set ${setCode}: ${nextResponse.statusText}`);
        }
        const nextData = await nextResponse.json();
        allCards = [...allCards, ...nextData.data];
        nextPage = nextData.has_more ? nextData.next_page : null;
    }
    const mappedCards = allCards.map((card: ScryfallResponse) => scryfallMapping(card));
    return mappedCards;
};