function AutoFix() {
    const features = [
        {
            icon: '🔍',
            title: 'Auto Security Scan',
            description: 'Semgrep + Bandit continuously scan every push for SQL injection, XSS, hardcoded secrets, and 100+ vulnerability patterns.',
        },
        {
            icon: '🤖',
            title: 'AI-Generated Patches',
            description: 'Qwen AI analyzes each vulnerability and writes a precise code fix — not just a warning, an actual pull request.',
        },
        {
            icon: '🧪',
            title: 'Tested Before Merge',
            description: 'Every patch runs your existing test suite in an isolated Docker sandbox before the PR is opened. No broken builds.',
        },
        {
            icon: '🛡️',
            title: 'Safety First',
            description: 'Confidence scoring, AST validation, and human-review draft PRs ensure nothing ships without your approval.',
        },
    ];

    const plans = [
        {
            name: 'Starter',
            price: '$49',
            inr: '₹4,099',
            per: '/mo',
            desc: 'For solo developers & small projects',
            features: ['5 repos', '50 auto-fixes/mo', 'Draft PRs', 'Email support'],
            cta: 'Get Started',
            href: 'https://api.fornexus.tech/checkout/starter',
            highlight: false,
        },
        {
            name: 'Pro',
            price: '$99',
            inr: '₹8,299',
            per: '/mo',
            desc: 'For growing teams & startups',
            features: ['25 repos', '250 auto-fixes/mo', 'Priority scans', 'Slack alerts', 'Dedicated support'],
            cta: 'Start Pro',
            href: 'https://api.fornexus.tech/checkout/pro',
            highlight: true,
        },
        {
            name: 'Agency',
            price: '$499',
            inr: '₹41,999',
            per: '/mo',
            desc: 'For agencies managing client repos',
            features: ['Unlimited repos', 'Unlimited fixes', 'White-label PRs', 'API access', '24/7 support'],
            cta: 'Contact Sales',
            href: '#contact',
            highlight: false,
        },
    ];

    const steps = [
        { number: 1, title: 'Install GitHub App', description: 'One-click install on your repos. No code changes needed.' },
        { number: 2, title: 'Push Code', description: 'Every git push triggers an automatic security scan.' },
        { number: 3, title: 'Review Draft PR', description: 'Get a pull request with the fix, explanation, and test results — ready to merge.' },
    ];

    return (
        <section id="autofix" className="py-20 bg-black bg-opacity-30">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16 reveal max-w-3xl mx-auto ">
                    <div className=" items-center  gap-2 bg-indigo-900 bg-opacity-50 border border-indigo-500 border-opacity-40 rounded-full w-48 px-4 py-1 mb-4 mx-auto ">
                        <span className="text-indigo-400 text-xs font-semibold uppercase tracking-widest">New Product</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black mb-4 section-title">
                        ForNexus <span className="text-indigo-400">AutoFix</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Your AI security engineer that never sleeps. Automatically finds vulnerabilities in your code and opens a tested, ready-to-merge pull request — while you focus on building.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://github.com/apps/fornexus-autofix"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary text-white font-bold py-3 px-8 rounded-lg"
                        >
                            Install GitHub App — Free Trial
                        </a>
                        <a
                            href="https://fornexusautofix-production.up.railway.app/docs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-indigo-500 text-indigo-400 font-bold py-3 px-8 rounded-lg hover:bg-indigo-900 hover:bg-opacity-30 transition-colors"
                        >
                            View API Docs
                        </a>
                    </div>
                </div>

                {/* How it works */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-center mb-10 reveal">How It Works</h3>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
                        {steps.map((step, i) => (
                            <div key={step.number} className="flex flex-col items-center text-center reveal">
                                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-600 text-white font-bold text-xl mb-4 border-4 border-indigo-400">
                                    {step.number}
                                </div>
                                <h4 className="font-bold mb-1">{step.title}</h4>
                                <p className="text-gray-400 text-sm max-w-xs">{step.description}</p>
                                {i < steps.length - 1 && (
                                    <div className="hidden md:block absolute translate-x-36 text-indigo-600 text-2xl">→</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {features.map((f) => (
                        <div key={f.title} className="card p-6 rounded-2xl reveal">
                            <div className="text-4xl mb-4">{f.icon}</div>
                            <h4 className="font-bold text-lg mb-2">{f.title}</h4>
                            <p className="text-gray-400 text-sm">{f.description}</p>
                        </div>
                    ))}
                </div>

                {/* Pricing */}
                <div>
                    <h3 className="text-2xl font-bold text-center mb-10 reveal">AutoFix Pricing</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {plans.map((plan) => (
                            <div
                                key={plan.name}
                                className={`card p-8 rounded-2xl reveal flex flex-col ${plan.highlight ? 'highlight-card relative' : ''}`}
                            >
                                {plan.highlight && (
                                    <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                                        <span className="bg-indigo-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase">
                                             Most Popular
                                        </span>
                                    </div>
                                )}
                                <h4 className="text-2xl font-bold mb-1">{plan.name}</h4>
                                <p className="text-gray-400 text-sm mb-4">{plan.desc}</p>
                                <p className="text-4xl font-black mb-1">{plan.inr}<span className="text-lg font-medium text-gray-400">{plan.per}</span></p>
                                <p className="text-sm text-gray-500 mb-6">{plan.price}{plan.per}</p>
                                <ul className="space-y-2 text-gray-300 text-sm mb-8 flex-grow">
                                    {plan.features.map((feat) => (
                                        <li key={feat} className="flex items-center gap-2">
                                            <span className="text-indigo-400">✓</span>{feat}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={plan.href}
                                    className={`w-full text-center font-bold py-3 px-6 rounded-lg transition-colors ${plan.highlight ? 'btn-primary text-white' : 'border border-indigo-500 text-indigo-400 hover:bg-indigo-900 hover:bg-opacity-30'}`}
                                >
                                    {plan.cta}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom note */}
                <div className="mt-12 text-center reveal">
                    <div className="inline-flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                        <span className="flex items-center gap-2"><span className="text-indigo-400">✓</span> No credit card for trial</span>
                        <span className="flex items-center gap-2"><span className="text-indigo-400">✓</span> Draft PRs — you always approve</span>
                        <span className="flex items-center gap-2"><span className="text-indigo-400">✓</span> Works with any language</span>
                        <span className="flex items-center gap-2"><span className="text-indigo-400">✓</span> Cancel anytime</span>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default AutoFix;
