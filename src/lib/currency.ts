export type Currency = 'GBP' | 'EUR' | 'USD';

export const CURRENCY_SYMBOLS: Record<Currency, string> = {
  GBP: '£',
  EUR: '€',
  USD: '$',
};

export const BASE_PRICE_USD = 300;

export const EXCHANGE_RATES: Record<Currency, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.80,
};

export function convertPrice(usdPrice: number, currency: Currency): number {
  return Math.round(usdPrice * EXCHANGE_RATES[currency]);
}

export function formatPrice(usdPrice: number, currency: Currency): string {
  const converted = convertPrice(usdPrice, currency);
  return `${CURRENCY_SYMBOLS[currency]}${converted}`;
}
