import {
  ShieldCheck,
  Clock,
  Award,
  TrendingDown,
  Zap,
  Activity,
  Heart,
  Star,
  CheckCircle,
} from 'lucide-react';

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  benefits: Benefit[];
  heading?: string;
}

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Clock,
  Award,
  TrendingDown,
  Zap,
  Activity,
  Heart,
  Star,
  CheckCircle,
};

export default function BenefitsSection({ benefits, heading = 'Why Choose P-Shot in Turkey?' }: BenefitsSectionProps) {
  return (
    <section className="bg-slate-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">{heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map(benefit => {
            const Icon = iconMap[benefit.icon] ?? CheckCircle;
            return (
              <div key={benefit.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-blue-800" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
