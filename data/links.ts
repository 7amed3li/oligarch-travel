// External profile links shown on the review cards.
// Paste the guide's real profile URLs here. A card links out only when its URL is filled in.
export const PROFILE_LINKS: Record<'tripadvisor' | 'viator' | 'airbnb', string> = {
  tripadvisor: 'https://www.tripadvisor.co.nz/Attraction_Review-g293974-d17559706-Reviews-or10-SKIPTHELINES_COM_TR-Istanbul.html',
  viator: 'https://experiences.priceline.com/en-ZA/tours/Istanbul/HAGIA-SOPHIA-Guided-Tour-with-Skip-the-Line-Tickets/d585-110785P6',
  airbnb: 'https://www.airbnb.com/experiences/1352565',
};

export function profileLinkFor(text: string): string {
  const t = text.toLowerCase();
  if (t.includes('tripadvisor')) return PROFILE_LINKS.tripadvisor;
  if (t.includes('viator')) return PROFILE_LINKS.viator;
  if (t.includes('airbnb')) return PROFILE_LINKS.airbnb;
  return '';
}
