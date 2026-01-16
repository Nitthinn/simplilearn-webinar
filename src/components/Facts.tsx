import React from 'react';

const Facts = () => {
  const facts = [
    {
      title: "Artificial Intelligence (AI)",
      items: [
        "AI has the potential to revolutionize the way we work and live.",
        "AI-powered tools can help us automate repetitive tasks, analyze large datasets, and make better decisions."
      ]
    },
    {
      title: "Blockchain",
      items: [
        "Blockchain technology can be used to create secure and transparent systems.",
        "It can be used to track the provenance of goods and services."
      ]
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Did You Know?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facts.map((fact, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-4">{fact.title}</h3>
              <ul className="space-y-3">
                {fact.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facts;