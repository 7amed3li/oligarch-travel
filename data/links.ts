// External profile links shown on the review cards.
// Paste the guide's real profile URLs here. A card links out only when its URL is filled in.
export const PROFILE_LINKS: Record<'tripadvisor' | 'viator' | 'airbnb', string> = {
  tripadvisor: '',
  viator: '',
  airbnb: '',
};

export function profileLinkFor(text: string): string {
  const t = text.toLowerCase();
  if (t.includes('tripadvisor')) return PROFILE_LINKS.tripadvisor;
  if (t.includes('viator')) return PROFILE_LINKS.viator;
  if (t.includes('airbnb')) return PROFILE_LINKS.airbnb;
  return '';
}
