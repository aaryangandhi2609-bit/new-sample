'use client';

import { useEffect, useRef, useState } from 'react';

export function About() {
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

  const skills = [
    'Web Design',
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'App Creation',
    'UI/UX',
    'AI Integration',
  ];

  return (
    <section id="about" className="w-full bg-background py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`space-y-12 transition-smooth ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Section Title */}
          <div className="space-y-4 animate-slideUp">
            <h2 className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
              About <span className="text-accent">Me</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-accent to-primary rounded-full" />
          </div>

          {/* Content Grid */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column - Bio */}
            <div className={`space-y-6 transition-smooth ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I&apos;m Aaryan Gandhi, a 17-year-old web developer and creator passionate about building beautiful, functional applications. My journey started with Minecraft modding, where I discovered my love for creating and bringing ideas to life through code.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I specialize in web design and app creation, with a focus on using AI to turn any imagination into reality. Whether it&apos;s building interactive web experiences or creating innovative apps, I love exploring the intersection of creativity and technology.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                  <span>Age: 17</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                  <span>Started coding with Minecraft mods</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                  <span>Passionate about web design and AI integration</span>
                </li>
              </ul>
            </div>

            {/* Right Column - Skills */}
            <div className={`transition-smooth ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">My Skills</h3>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {skills.map((skill) => (
                    <div
                      key={skill}
                      className="group rounded-lg border border-border/40 bg-card/50 px-4 py-3 text-center transition-smooth hover:border-accent hover:shadow-lg hover:scale-105"
                    >
                      <p className="font-medium text-foreground group-hover:text-accent transition-smooth">
                        {skill}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
