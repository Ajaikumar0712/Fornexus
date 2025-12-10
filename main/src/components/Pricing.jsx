function Pricing() {
    return (
        <section id="pricing" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 section-title reveal">
                    Pricing Plans
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Basic Plan */}
                    <div className="card p-8 rounded-2xl reveal h-full flex flex-col">
                        <h3 className="text-2xl font-bold mb-2">Basic</h3>
                        <p className="text-gray-400 mb-6">Perfect for startups and small businesses.</p>
                        <p className="text-4xl font-black mb-6">
                            $100<span className="text-lg font-medium text-gray-400">/mo</span>
                        </p>
                        <ul className="space-y-4 text-gray-300 mb-8 flex-grow">
                            <li className="flex items-center">
                                <span className="text-indigo-400 mr-3">✓</span>1 AI Agent
                            </li>
                            <li className="flex items-center">
                                <span className="text-indigo-400 mr-3">✓</span>Basic Integration
                            </li>
                            <li className="flex items-center">
                                <span className="text-indigo-400 mr-3">✓</span>Email Support
                            </li>
                            <li className="flex items-center">
                                <span className="text-indigo-400 mr-3">✓</span>Monthly Reports
                            </li>
                            <li className="flex items-center">
                                <span className="text-indigo-400 mr-3">✓</span>Standard Training
                            </li>
                        </ul>
                        <a
                            href="#contact"
                            className="w-full text-center mt-auto btn-primary text-white font-bold py-3 px-6 rounded-lg"
                        >
                            Choose Plan
                        </a>
                    </div>

                    {/* Business Plan (Most Popular) */}
                    <div className="card p-8 rounded-2xl reveal h-full flex flex-col relative highlight-card">
                        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                            <span className="bg-indigo-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase">
                                Most Popular
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Business</h3>
                        <p className="text-gray-400 mb-6">For growing businesses scaling their operations with AI.</p>
                        <p className="text-4xl font-black mb-6">
                            $500<span className="text-lg font-medium text-gray-400">/mo</span>
                        </p>
                        <ul className="space-y-4 text-gray-300 mb-8 flex-grow">
                            <li className="flex items-center">
                                <span className="text-indigo-400 mr-3">✓</span>Up to 3 AI Agents
                            </li>
                            <li className="flex items-center">
                                <span className="text-indigo-400 mr-3">✓</span>Advanced Integrations (CRM)
                            </li>
                            <li className="flex items-center">
                                <span className="text-indigo-400 mr-3">✓</span>Lead Generation & RAG
                            </li>
                            <li className="flex items-center">
                                <span className="text-indigo-400 mr-3">✓</span>Performance Optimization
                            </li>
                            <li className="flex items-center">
                                <span className="text-indigo-400 mr-3">✓</span>Dedicated Account Manager
                            </li>
                        </ul>
                        <a
                            href="#contact"
                            className="w-full text-center mt-auto btn-primary text-white font-bold py-3 px-6 rounded-lg"
                        >
                            Choose Plan
                        </a>
                    </div>

                    {/* Custom Plan */}
                    <div className="card p-8 rounded-2xl reveal h-full flex flex-col">
                        <h3 className="text-2xl font-bold mb-2">Custom</h3>
                        <p className="text-gray-400 mb-6">For large organizations with custom, complex needs.</p>
                        <p className="text-4xl font-black mb-6">Custom</p>
                        <ul className="space-y-4 text-gray-300 mb-8 flex-grow">
                            <li className="flex items-center">
                                <span className="text-indigo-400 mr-3">✓</span>Unlimited Custom Agents
                            </li>
                            <li className="flex items-center">
                                <span className="text-indigo-400 mr-3">✓</span>Bespoke Workflow Development
                            </li>
                            <li className="flex items-center">
                                <span className="text-indigo-400 mr-3">✓</span>Deep System Integration
                            </li>
                            <li className="flex items-center">
                                <span className="text-indigo-400 mr-3">✓</span>Advanced Security & SLA
                            </li>
                            <li className="flex items-center">
                                <span className="text-indigo-400 mr-3">✓</span>Priority 24/7 Support
                            </li>
                        </ul>
                        <a
                            href="#contact"
                            className="w-full text-center mt-auto btn-primary text-white font-bold py-3 px-6 rounded-lg"
                        >
                            Contact Sales
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Pricing;
