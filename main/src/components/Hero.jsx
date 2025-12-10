function Hero() {
    return (
        <main className="relative pt-32 pb-20 md:pt-48 md:pb-32 text-center">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4 hero-glow">
                    Forge the Future with AI Agents
                </h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                    We build intelligent, autonomous agents that streamline your workflows, automate complex tasks, and
                    unlock unprecedented levels of efficiency.
                </p>
                <a href="#services" className="btn-primary text-white font-bold py-4 px-10 rounded-lg text-lg">
                    Explore Our Agents
                </a>
            </div>
        </main>
    );
}

export default Hero;
