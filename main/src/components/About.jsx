function About() {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 section-title reveal">
                    About FORNEXUS
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="reveal">
                        <h3 className="text-2xl font-bold mb-4 text-indigo-400">Our Mission</h3>
                        <p className="text-gray-400 mb-6">
                            At FORNEXUS, we're on a mission to democratize AI technology and make intelligent automation accessible to businesses of all sizes. We believe that every company deserves the power of AI-driven solutions to compete in the modern digital landscape.
                        </p>
                        <h3 className="text-2xl font-bold mb-4 text-indigo-400">Why Choose Us</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-start">
                                <span className="text-indigo-400 mr-3">✓</span>
                                Expert team with deep AI & ML expertise
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-400 mr-3">✓</span>
                                Custom solutions tailored to your business needs
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-400 mr-3">✓</span>
                                Ongoing support and continuous optimization
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-400 mr-3">✓</span>
                                Transparent pricing with no hidden fees
                            </li>
                        </ul>
                    </div>
                    <div className="reveal">
                        <div className="card p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold mb-6 text-center">Our Values</h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-indigo-400 mb-2">Innovation</h4>
                                    <p className="text-gray-400 text-sm">We stay at the forefront of AI technology, constantly exploring new ways to solve complex problems.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-indigo-400 mb-2">Integrity</h4>
                                    <p className="text-gray-400 text-sm">We build trust through transparency, honest communication, and delivering on our promises.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-indigo-400 mb-2">Impact</h4>
                                    <p className="text-gray-400 text-sm">We measure our success by the tangible results and ROI we deliver to our clients.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
