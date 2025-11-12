// src/components/Footer.jsx
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Hotel Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Luxury Hotel</h3>
                        <p className="text-gray-300">
                            Experience unparalleled luxury and comfort in the heart of the city.
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