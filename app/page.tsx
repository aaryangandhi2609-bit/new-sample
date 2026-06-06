import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Projects } from '@/components/projects';
import { Experience } from '@/components/experience';
import { Contact } from '@/components/contact';

export default function Page() {
  return (
    <main className="w-full">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      
      {/* Footer */}
      <footer className="border-t border-border/40 bg-background py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2024 Your Name. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-smooth">
                GitHub
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-smooth">
                LinkedIn
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-smooth">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
