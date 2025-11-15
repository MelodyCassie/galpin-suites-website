
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
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="/" className="hover:text-white">Home</a></li>
                            <li><a href="/about" className="hover:text-white">About Us</a></li>
                            <li><a href="/rooms" className="hover:text-white">Rooms</a></li>
                            <li><a href="/contact" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>123 Hotel Street, City</li>
                            <li>+1 (555) 123-4567</li>
                            <li>info@luxuryhotel.com</li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className="font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-white">
                                <span className="sr-only">Facebook</span>
                                {/* Add social media icons here */}
                            </a>
                            {/* Add other social media links */}
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
                    <p>&copy; 2024 Luxury Hotel. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;