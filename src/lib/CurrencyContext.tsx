'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Currency } from './currency';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
}

const CurrencyContext = createContext<CurrencyContextType>({
  currency: 'USD',
  setCurrency: () => {},
});

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<Currency>('USD');

  useEffect(() => {
    const validCurrencies: Currency[] = ['GBP', 'EUR', 'USD'];
    const raw = localStorage.getItem('preferredCurrency');
    const stored = validCurrencies.includes(raw as Currency) ? (raw as Currency) : null;
    if (stored) {
      setCurrency(stored);
      return;
    }
    const locale = navigator.language || '';
    if (locale.startsWith('en-GB')) setCurrency('GBP');
    else if (locale.startsWith('en-US')) setCurrency('USD');
    else setCurrency('EUR');
  }, []);

  const handleSetCurrency = (c: Currency) => {
    setCurrency(c);
    localStorage.setItem('preferredCurrency', c);
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency: handleSetCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export const useCurrency = () => useContext(CurrencyContext);
