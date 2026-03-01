function Pricing() {
    return (
        <section id="pricing" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 section-title reveal">
                    Pricing Plans
                </h2>
                <p className="text-center text-gray-400 mb-12 reveal">
                    All plans include strategy, setup, deployment, and ongoing optimization.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Basic Plan */}
                    <div className="card p-8 rounded-2xl reveal h-full flex flex-col">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-2xl">💰</span>
                            <h3 className="text-2xl font-bold">Basic</h3>
                        </div>
                        <p className="text-gray-400 mb-4">For Startups & Small Businesses</p>
                        <p className="text-4xl font-black mb-2">
                            ₹9,999<span className="text-lg font-medium text-gray-400">/mo</span>
                        </p>
                        <p className="text-xl text-gray-300 mb-2">$120<span className="text-sm text-gray-400">/mo</span></p>
                        <p className="text-sm text-indigo-400 mb-2">One-time setup: ₹7,999</p>
                        <p className="text-xs text-gray-400 mb-4">One-time setup: $95</p>
                        <ul className="space-y-3 text-gray-300 mb-6 flex-grow">
                            <li className="flex items-start">
                                <span className="text-indigo-400 mr-3">✓</span>1 AI Agent (Support or Automation)
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-400 mr-3">✓</span>Basic Integration (Website / Email)
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-400 mr-3">✓</span>Standard AI Training (FAQs, docs)
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-400 mr-3">✓</span>Email Support
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-400 mr-3">✓</span>Monthly Performance Report
                            </li>
                        </ul>
                        <div className="bg-gray-800 rounded-lg p-3 mb-6">
                            <p className="text-xs text-gray-400"><span className="text-indigo-400 font-semibold">Best for:</span> Early-stage startups, solo founders, local businesses</p>
                        </div>
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
                                ⭐ Most Popular
                            </span>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-2xl">⭐</span>
                            <h3 className="text-2xl font-bold">Business</h3>
                        </div>
                        <p className="text-gray-400 mb-4">For Growing Businesses & Agencies</p>
                        <p className="text-4xl font-black mb-2">
                            ₹20,999<span className="text-lg font-medium text-gray-400">/mo</span>
                        </p>
                        <p className="text-xl text-gray-300 mb-2">$250<span className="text-sm text-gray-400">/mo</span></p>
                        <p className="text-sm text-indigo-400 mb-2">One-time setup: ₹9,999</p>
                        <p className="text-xs text-gray-400 mb-4">One-time setup: $120</p>
                        <ul className="space-y-3 text-gray-300 mb-6 flex-grow">
                            <li className="flex items-start">
                                <span className="text-indigo-400 mr-3">✓</span>Up to 3 AI Agents
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-400 mr-3">✓</span>Advanced Integrations (CRM, Forms, APIs)
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-400 mr-3">✓</span>Lead Generation Agent + RAG
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-400 mr-3">✓</span>Performance Optimization
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-400 mr-3">✓</span>Dedicated Account Manager
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-400 mr-3">✓</span>Priority Email + Chat Support
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-400 mr-3">✓</span>Bi-weekly Reports
                            </li>
                        </ul>
                        <div className="bg-gray-800 rounded-lg p-3 mb-6">
                            <p className="text-xs text-gray-400"><span className="text-indigo-400 font-semibold">Best for:</span> Growing businesses, agencies, SaaS founders</p>
                        </div>
                        <a
                            href="#contact"
                            className="w-full text-center mt-auto btn-primary text-white font-bold py-3 px-6 rounded-lg"
                        >
                            Choose Plan
                        </a>
                    </div>

                    {/* Custom / Enterprise Plan */}
                    <div className="card p-8 rounded-2xl reveal h-full flex flex-col">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-2xl">🏢</span>
                            <h3 className="text-2xl font-bold">Enterprise</h3>
                        </div>
                        <p className="text-gray-400 mb-4">For Large Teams & Complex Workflows</p>
                        <p className="text-4xl font-black mb-2">Custom</p>
                        <p className="text-sm text-indigo-400 mb-2">Starting from ₹50,000/mo</p>
                        <p className="text-xs text-gray-400 mb-4">Starting from $600/mo</p>
                        <ul className="space-y-3 text-gray-300 mb-6 flex-grow">
                            <li className="flex items-start">
                                <span className="text-indigo-400 mr-3">✓</span>Unlimited Custom AI Agents
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-400 mr-3">✓</span>Bespoke Workflow Development
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-400 mr-3">✓</span>Deep System Integration
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-400 mr-3">✓</span>Advanced Security & SLA
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-400 mr-3">✓</span>Priority 24/7 Support
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-400 mr-3">✓</span>Custom Dashboards & Analytics
                            </li>
                        </ul>
                        <div className="bg-gray-800 rounded-lg p-3 mb-6">
                            <p className="text-xs text-gray-400"><span className="text-indigo-400 font-semibold">Best for:</span> Enterprises, large teams, complex workflows</p>
                        </div>
                        <a
                            href="#contact"
                            className="w-full text-center mt-auto btn-primary text-white font-bold py-3 px-6 rounded-lg"
                        >
                            Contact Sales
                        </a>
                    </div>
                </div>

                {/* Add-ons Section */}
                <div className="reveal">
                    <h3 className="text-2xl font-bold text-center mb-8">Add-ons & Upgrades</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        <div className="card p-4 rounded-xl text-center">
                            <p className="font-semibold mb-1">Extra AI Agent</p>
                            <p className="text-indigo-400 font-bold">₹4,499/mo</p>
                            <p className="text-xs text-gray-400">$54/mo</p>
                        </div>
                        <div className="card p-4 rounded-xl text-center">
                            <p className="font-semibold mb-1">WhatsApp Integration</p>
                            <p className="text-indigo-400 font-bold">₹5,999/mo</p>
                            <p className="text-xs text-gray-400">$72/mo</p>
                        </div>
                        <div className="card p-4 rounded-xl text-center">
                            <p className="font-semibold mb-1">Lead Database Setup</p>
                            <p className="text-indigo-400 font-bold">₹5,000 <span className="text-xs text-gray-400">one-time</span></p>
                            <p className="text-xs text-gray-400">$60 one-time</p>
                        </div>
                        <div className="card p-4 rounded-xl text-center">
                            <p className="font-semibold mb-1">Website </p>
                            <p className="text-indigo-400 font-bold">₹ Based on website requirements </p>
                        </div>
                    </div>
                </div>

                {/* What's Included Note */}
                <div className="mt-12 text-center reveal">
                    <div className="inline-flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-2"><span className="text-indigo-400">✓</span> Strategy + Setup Included</span>
                        <span className="flex items-center gap-2"><span className="text-indigo-400">✓</span> Human + AI Hybrid</span>
                        <span className="flex items-center gap-2"><span className="text-indigo-400">✓</span> Custom Training Per Client</span>
                        <span className="flex items-center gap-2"><span className="text-indigo-400">✓</span> Ongoing Optimization</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

                    

export default Pricing;
