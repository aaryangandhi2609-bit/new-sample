'use client';

export function Hero() {
  const handleCTA = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-primary/5 to-background pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <div className="space-y-6 animate-slideUp">
          {/* Greeting */}
          <div className="inline-block rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            Welcome to my portfolio
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl md:text-8xl">
            <span className="block">Hi, I&apos;m</span>
            <span className="block bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Aaryan Gandhi
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            A 17-year-old web developer and creator passionate about building beautiful, interactive experiences. From Minecraft mods to AI-powered apps.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row items-center justify-center pt-4">
            <button
              onClick={handleCTA}
              className="group relative inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-base font-semibold text-primary-foreground transition-smooth hover:shadow-lg hover:scale-105"
            >
              Get in Touch
              <span className="transition-smooth group-hover:translate-x-1">→</span>
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-primary/30 px-8 py-3 text-base font-semibold text-foreground transition-smooth hover:border-primary hover:bg-primary/5"
            >
              View My Work
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm font-medium">Scroll to explore</span>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
