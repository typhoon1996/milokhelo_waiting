interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  color?: string;
}

export default function FeatureCard({ icon, title, description, color = 'blue' }: FeatureCardProps) {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 shadow-blue-500/20',
    green: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 shadow-emerald-500/20',
    yellow: 'bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 shadow-amber-500/20',
    purple: 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400 shadow-purple-500/20',
    red: 'bg-rose-50 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400 shadow-rose-500/20',
  };

  const gradientClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-emerald-500 to-emerald-600',
    yellow: 'from-amber-500 to-amber-600',
    purple: 'from-purple-500 to-purple-600',
    red: 'from-rose-500 to-rose-600',
  };

  return (
    <div className="group relative">
      {/* Gradient background effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradientClasses[color as keyof typeof gradientClasses]} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-sm`}></div>
      
      <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-500 card-hover border border-slate-200/50 dark:border-slate-700/50"> {/* Adjusted padding for mobile */}
        {/* Icon container with floating animation */}
        <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transition-all duration-300 group-hover:scale-110 animate-float ${colorClasses[color as keyof typeof colorClasses]}`}> {/* Adjusted size and margin for mobile */}
          <span className="text-2xl sm:text-3xl filter drop-shadow-sm">{icon}</span> {/* Adjusted icon size for mobile */}
        </div>
        
        {/* Content */}
        <div className="space-y-2 sm:space-y-3"> {/* Adjusted spacing for mobile */}
          <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors duration-300"> {/* Adjusted title font size for mobile */}
            {title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed"> {/* Text size is already good at 'sm', no change needed */}
            {description}
          </p>
        </div>
        
        {/* Hover indicator */}
        <div className="absolute top-3 right-3 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 sm:top-4 sm:right-4"></div> {/* Adjusted position for mobile */}
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
        </div>
      </div>
    </div>
  );
}