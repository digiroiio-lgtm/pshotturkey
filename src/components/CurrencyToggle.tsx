'use client';
import { useCurrency } from '@/lib/CurrencyContext';
import { Currency } from '@/lib/currency';

const options: { label: string; value: Currency }[] = [
  { label: '£ GBP', value: 'GBP' },
  { label: '€ EUR', value: 'EUR' },
  { label: '$ USD', value: 'USD' },
];

export default function CurrencyToggle() {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="flex items-center rounded-lg border border-gray-200 overflow-hidden text-sm">
      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => setCurrency(opt.value)}
          className={`px-3 py-1.5 font-medium transition-colors ${
            currency === opt.value
              ? 'bg-blue-800 text-white'
              : 'text-slate-600 hover:bg-gray-100'
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
