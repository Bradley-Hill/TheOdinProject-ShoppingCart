import type { MagicCard } from "../types/MagicCard";
import type { ScryfallResponse } from "../types/ScryfallResponse";
import scryfallMapping from "./scryfallMapping";

interface Options {
  count?: number;
  maxRetries?: number;
}

const scryfallRandomSingle = async (): Promise<ScryfallResponse> => {
  const response = await fetch("https://api.scryfall.com/cards/random");
  if (!response.ok) {
    throw new Error(`Error fetching random card: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
};

const fetchWithRetry = async (
  cardNumber: number,
  maxRetries: number
): Promise<ScryfallResponse> => {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const card = await scryfallRandomSingle();
      return card;
    } catch (error) {
      if (attempt === maxRetries) {
        throw new Error(`Failed to fetch card number ${cardNumber} after maximum retries`);
      }
    }
  }
  throw new Error("Unexpected state in fetchWithRetry");
};

export const fetchRandomCards = async (
  options: Options = {}
): Promise<MagicCard[]> => {
  const { count = 12, maxRetries = 3 } = options;
  const cardPromises: Promise<ScryfallResponse>[] = [];
  for (let i = 0; i < count; i++) {
    cardPromises.push(fetchWithRetry(i, maxRetries));
  }
  const scryfallResponses = await Promise.allSettled(cardPromises);
  const successfulResponses = scryfallResponses.filter(
    (result) => result.status === "fulfilled"
  );
  if(successfulResponses.length === 0) {
    throw new Error("Failed to fetch any cards from Scryfall");
  }
  const magicCards: MagicCard[] = successfulResponses.map((result) => {
    if (result.status === "fulfilled") {
      return scryfallMapping(result.value);
    }
    throw new Error("Should not reach here after filtering");
  });
  return magicCards;
};
