import { useState, useEffect } from 'react';

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black bg-opacity-80 backdrop-blur-sm' : ''
                }`}
            id="header"
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    <img src="/assests/x2.png" alt="FORNEXUS Logo" className="h-20 w-auto mr-3" />
                </div>

                <nav className="hidden md:flex space-x-8 text-sm font-medium">
                    <a href="#" className="hover:text-indigo-400 transition-colors">Home</a>
                    <a href="#services" className="hover:text-indigo-400 transition-colors">Services</a>
                    <a href="#pricing" className="hover:text-indigo-400 transition-colors">Pricing</a>
                    <a href="#how-it-works" className="hover:text-indigo-400 transition-colors">How It Works</a>
                    <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
                    <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
                </nav>

                <a
                    href="#contact"
                    className="hidden md:block btn-primary text-white font-bold py-2 px-6 rounded-lg text-sm"
                >
                    Get Started
                </a>

                <button
                    id="mobile-menu-button"
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                id="mobile-menu"
                className={`${mobileMenuOpen ? '' : 'hidden'} md:hidden bg-black bg-opacity-90`}
            >
                <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-800">Home</a>
                <a href="#services" className="block py-2 px-4 text-sm hover:bg-gray-800">Services</a>
                <a href="#pricing" className="block py-2 px-4 text-sm hover:bg-gray-800">Pricing</a>
                <a href="#how-it-works" className="block py-2 px-4 text-sm hover:bg-gray-800">How It Works</a>
                <a href="#about" className="block py-2 px-4 text-sm hover:bg-gray-800">About</a>
                <a href="#contact" className="block py-2 px-4 text-sm hover:bg-gray-800">Contact</a>
            </div>
        </header>
    );
}

export default Header;
