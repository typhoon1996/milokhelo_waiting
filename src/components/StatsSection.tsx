interface StatItem {
  number: string;
  label: string;
  subtext: string;
}

const stats: StatItem[] = [
  {
    number: "10K+",
    label: "Active Players",
    subtext: "Join our growing community"
  },
  {
    number: "500+",
    label: "Games Created",
    subtext: "Weekly across all sports"
  },
  {
    number: "50+",
    label: "Sports Supported",
    subtext: "From cricket to football"
  },
  {
    number: "25+",
    label: "Cities",
    subtext: "And expanding rapidly"
  }
];

export default function StatsSection() {
  return (
    <section className="max-w-6xl mx-auto mt-20 mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Join the Growing Community
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Thousands of players are already finding their perfect match
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md card-hover glass"
          >
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2 animate-bounce-soft">
              {stat.number}
            </div>
            <div className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">
              {stat.label}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {stat.subtext}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
