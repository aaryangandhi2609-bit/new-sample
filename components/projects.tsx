'use client';

import { useEffect, useRef, useState } from 'react';

export function Projects() {
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

  const projects = [
    {
      title: 'Python Tic Tac Toe Game',
      description: 'Interactive Python game with AI opponent using minimax algorithm. Play against the computer or a friend.',
      tags: ['Python', 'Game Dev', 'AI'],
      link: '#',
    },
    {
      title: 'Python Snake Game',
      description: 'Classic snake game built in Python with smooth animations and increasing difficulty levels.',
      tags: ['Python', 'Game Dev', 'Pygame'],
      link: '#',
    },
    {
      title: 'Minecraft Survival Mod',
      description: 'Custom survival mod for Minecraft adding new biomes, creatures, and crafting mechanics to enhance gameplay.',
      tags: ['Minecraft', 'Java', 'Mod Dev'],
      link: '#',
    },
    {
      title: 'Minecraft Magic Mod',
      description: 'Magical mod introducing spellcasting system with enchantments, rituals, and mystical artifacts.',
      tags: ['Minecraft', 'Java', 'Mod Dev'],
      link: '#',
    },
    {
      title: 'Aaryan\'s Portfolio',
      description: 'This website! A smooth, interactive portfolio built with Next.js, featuring animations and responsive design.',
      tags: ['Next.js', 'React', 'Tailwind CSS'],
      link: '#',
    },
    {
      title: 'App Creation AI',
      description: 'AI-powered app builder that helps create custom applications through natural language prompts and AI guidance.',
      tags: ['AI', 'React', 'OpenAI'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="w-full bg-gradient-to-b from-background to-primary/5 py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`space-y-12 transition-smooth ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Section Title */}
          <div className="space-y-4 animate-slideUp">
            <h2 className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
              Featured <span className="text-accent">Projects</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-accent to-primary rounded-full" />
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group rounded-xl border border-border/40 bg-card/50 p-6 transition-smooth hover:border-accent hover:shadow-xl hover:-translate-y-2 hover:bg-card ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                  <svg className="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-semibold text-foreground group-hover:text-accent transition-smooth">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-smooth group-hover:translate-x-2"
                >
                  View Project
                  <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
