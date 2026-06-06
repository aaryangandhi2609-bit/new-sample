'use client';

import { useEffect, useRef, useState } from 'react';

export function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const experience = [
    {
      role: 'High School - 12th Grade',
      company: 'India',
      period: '2026',
      description: 'Successfully completed 12th grade education in India. During this time, developed strong problem-solving skills and passion for technology.',
      highlights: ['Completed 12th Grade', 'Focused on STEM subjects', 'Engaged in coding projects'],
    },
    {
      role: 'University Application',
      company: 'Austria',
      period: '2026 - Present',
      description: 'Currently applying to FH Burgenland and other prestigious universities in Austria known for their high-level tech education programs.',
      highlights: ['Targeting FH Burgenland', 'Pursuing advanced tech education', 'Building portfolio for applications'],
    },
  ];

  return (
    <section id="experience" className="w-full bg-background py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`space-y-12 transition-smooth ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Section Title */}
          <div className="space-y-4 animate-slideUp">
            <h2 className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
              Experience <span className="text-accent">& Education</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-accent to-primary rounded-full" />
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {experience.map((item, index) => (
              <div
                key={item.company}
                className={`group relative transition-smooth ${isVisible ? 'translate-x-0 opacity-100' : index % 2 === 0 ? '-translate-x-10 opacity-0' : 'translate-x-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline Connector */}
                <div className="absolute -left-8 top-0 h-4 w-4 rounded-full border-4 border-background bg-accent hidden sm:block" />
                <div className="absolute -left-5 top-6 h-20 w-0.5 bg-gradient-to-b from-accent to-transparent hidden sm:block" />

                {/* Card */}
                <div className="rounded-xl border border-border/40 bg-card/50 p-6 sm:p-8 transition-smooth hover:border-accent hover:shadow-lg hover:bg-card">
                  {/* Header */}
                  <div className="mb-4 flex flex-col justify-between sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-smooth">
                        {item.role}
                      </h3>
                      <p className="text-accent font-medium">{item.company}</p>
                    </div>
                    <span className="mt-2 inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary sm:mt-0">
                      {item.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mb-4 text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
