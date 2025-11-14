
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Suites', path: '/rooms' },
        { name: 'Facilities', path: '/facilities' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
        { name: 'Check Availability', path: '/check-availability' }
    ];

    return (
        <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-orange-200">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="w-12 h-12 bg-gradient-to-br from-burnt-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                            <span className="text-white font-bold text-lg">GS</span>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-burnt-orange-600 group-hover:text-burnt-orange-700 transition-colors duration-300">
                                Galpin Suites
                            </div>
                            <div className="text-xs text-gray-500 tracking-wider">LUXURY EXPERIENCE</div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="px-4 py-2 text-gray-700 hover:text-burnt-orange-600 font-medium transition-all duration-300 rounded-lg hover:bg-orange-50 relative group"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-burnt-orange-500 group-hover:w-3/4 transition-all duration-300" />
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-gray-700 hover:text-burnt-orange-600 p-2 rounded-lg hover:bg-orange-50 transition-colors duration-300"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="lg:hidden pb-4 border-t border-orange-100 mt-2 bg-white/95 backdrop-blur-md rounded-lg shadow-lg">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="block py-3 px-4 text-gray-700 hover:text-burnt-orange-600 font-medium border-b border-orange-50 hover:bg-orange-50 transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;