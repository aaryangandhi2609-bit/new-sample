'use client';

import { useEffect, useRef, useState } from 'react';

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contacts = [
    {
      icon: '📧',
      label: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/yourname',
      link: 'https://linkedin.com',
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/yourname',
      link: 'https://github.com',
    },
    {
      icon: '🐦',
      label: 'Twitter',
      value: '@yourhandle',
      link: 'https://twitter.com',
    },
  ];

  return (
    <section id="contact" className="w-full bg-gradient-to-b from-background to-primary/5 py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`space-y-12 transition-smooth ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Section Title */}
          <div className="space-y-4 animate-slideUp text-center">
            <h2 className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
              Let&apos;s <span className="text-accent">Connect</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Feel free to reach out! Whether you have a project in mind or just want to chat, I&apos;d love to hear from you.
            </p>
            <div className="mx-auto h-1 w-20 bg-gradient-to-r from-accent to-primary rounded-full" />
          </div>

          {/* Content Grid */}
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div className={`space-y-8 transition-smooth ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
              <h3 className="text-2xl font-semibold text-foreground">Get in Touch</h3>
              <div className="space-y-4">
                {contacts.map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.link}
                    className="group flex items-start gap-4 rounded-lg border border-border/40 bg-card/50 p-4 transition-smooth hover:border-accent hover:shadow-lg hover:bg-card hover:-translate-y-1"
                  >
                    <span className="text-3xl">{contact.icon}</span>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground group-hover:text-accent transition-smooth">
                        {contact.label}
                      </p>
                      <p className="text-sm text-muted-foreground">{contact.value}</p>
                    </div>
                    <span className="mt-1 text-accent opacity-0 transition-smooth group-hover:opacity-100">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className={`transition-smooth ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-lg border border-border/40 bg-card/50 px-4 py-3 text-foreground placeholder:text-muted-foreground transition-smooth focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full rounded-lg border border-border/40 bg-card/50 px-4 py-3 text-foreground placeholder:text-muted-foreground transition-smooth focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    placeholder="Your message here..."
                    rows={5}
                    className="w-full rounded-lg border border-border/40 bg-card/50 px-4 py-3 text-foreground placeholder:text-muted-foreground transition-smooth focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-smooth hover:shadow-lg hover:scale-105 disabled:opacity-50"
                >
                  {isSubmitted ? '✓ Message Sent!' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
