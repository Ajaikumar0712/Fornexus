function HowItWorks() {
    const steps = [
        {
            number: 1,
            title: 'Discovery & Strategy',
            description: 'We analyze your needs and co-create a roadmap for your AI agent.'
        },
        {
            number: 2,
            title: 'Development & Training',
            description: 'Our experts build and train the agent using cutting-edge models.'
        },
        {
            number: 3,
            title: 'Integration & Launch',
            description: 'We seamlessly integrate the agent into your existing systems and go live.'
        }
    ];

    return (
        <section id="how-it-works" className="py-20 bg-black bg-opacity-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 section-title reveal">
                    Our Process
                </h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                    {steps.map((step) => (
                        <div key={step.number} className="flex items-center flex-col text-center reveal">
                            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-600 text-white font-bold text-2xl mb-4 border-4 border-indigo-400">
                                {step.number}
                            </div>
                            <h3 className="font-bold mb-2">{step.title}</h3>
                            <p className="text-gray-400 text-sm max-w-xs">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
