
const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="md:col-span-1">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-burnt-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold">GS</span>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-burnt-orange-400">Galpin Suites</div>
                                <div className="text-xs text-gray-400 tracking-wider">LUXURY REDEFINED</div>
                            </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-sm">
                            Experience unparalleled luxury where every detail is crafted to perfection.
                            Your urban oasis awaits at Galpin Suites.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-burnt-orange-300 mb-4 text-lg">Explore</h4>
                        <ul className="space-y-3 text-gray-300">
                            {['Home', 'About Us', 'Suites', 'Facilities', 'Gallery', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`/${item.toLowerCase().replace(' ', '-')}`}
                                        className="hover:text-burnt-orange-300 transition-colors duration-300 text-sm"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold text-burnt-orange-300 mb-4 text-lg">Contact</h4>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            <li className="flex items-start">
                                <span className="mr-3 text-burnt-orange-400">📍</span>
                                <span>123 Luxury Avenue<br />City, State 12345</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-3 text-burnt-orange-400">📞</span>
                                +1 (555) 123-4567
                            </li>
                            <li className="flex items-center">
                                <span className="mr-3 text-burnt-orange-400">✉️</span>
                                welcome@galpinsuites.com
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-semibold text-burnt-orange-300 mb-4 text-lg">Stay Updated</h4>
                        <p className="text-gray-300 text-sm mb-4">Get exclusive offers and updates</p>
                        <div className="flex flex-col space-y-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-burnt-orange-500 text-sm placeholder-gray-400"
                            />
                            <button className="bg-burnt-orange-600 hover:bg-burnt-orange-700 px-6 py-3 rounded-lg transition-colors duration-300 font-semibold text-sm">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm text-center md:text-left">
                        © 2024 Galpin Suites. All rights reserved. | Crafted with ❤️ and burnt orange elegance
                    </p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                            <a
                                key={social}
                                href="#"
                                className="text-gray-400 hover:text-burnt-orange-400 transition-colors duration-300 text-sm"
                            >
                                {social}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;