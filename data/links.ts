// External profile links shown on the review cards.
// Paste the guide's real profile URLs here. A card links out only when its URL is filled in.
export type PlatformKey = 'tripadvisor' | 'viator' | 'airbnb';

export interface ProfileLinkMeta {
  key: PlatformKey;
  name: string;
  href: string;
}

export const PROFILE_LINKS: Record<PlatformKey, string> = {
  tripadvisor: 'https://www.tripadvisor.co.nz/Attraction_Review-g293974-d17559706-Reviews-or10-SKIPTHELINES_COM_TR-Istanbul.html',
  viator: 'https://experiences.priceline.com/en-ZA/tours/Istanbul/HAGIA-SOPHIA-Guided-Tour-with-Skip-the-Line-Tickets/d585-110785P6',
  airbnb: 'https://www.airbnb.com/experiences/1352565',
};

const PLATFORM_NAMES: Record<PlatformKey, string> = {
  tripadvisor: 'TripAdvisor',
  viator: 'Viator',
  airbnb: 'Airbnb',
};

export function profileLinkFor(text: string): string {
  const t = text.toLowerCase();
  if (t.includes('tripadvisor')) return PROFILE_LINKS.tripadvisor;
  if (t.includes('viator')) return PROFILE_LINKS.viator;
  if (t.includes('airbnb')) return PROFILE_LINKS.airbnb;
  return '';
}

export function profileMetaFor(text: string): ProfileLinkMeta | null {
  const t = text.toLowerCase();
  let key: PlatformKey | null = null;
  if (t.includes('tripadvisor')) key = 'tripadvisor';
  else if (t.includes('viator')) key = 'viator';
  else if (t.includes('airbnb')) key = 'airbnb';
  if (!key || !PROFILE_LINKS[key]) return null;
  return { key, name: PLATFORM_NAMES[key], href: PROFILE_LINKS[key] };
}
