const About = () => {
    return (
        <div className="min-h-screen bg-white py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h1>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                        <p className="text-gray-600 mb-6">
                            Welcome to Luxury Hotel, where elegance meets comfort. Established in 2010,
                            we have been providing exceptional hospitality experiences to travelers from
                            around the world. Our commitment to excellence and attention to detail has
                            made us a preferred choice for both business and leisure travelers.
                        </p>

                        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                        <p className="text-gray-600 mb-6">
                            To create unforgettable experiences for our guests by providing exceptional
                            service, luxurious accommodations, and personalized attention that exceeds
                            expectations. We strive to be the benchmark for luxury hospitality in the region.
                        </p>

                        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                        <p className="text-gray-600">
                            To be recognized as the premier luxury hotel destination, known for our
                            innovative approach to hospitality, sustainable practices, and commitment
                            to creating lasting memories for every guest.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center p-6 bg-blue-50 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                            <p className="text-gray-600">Committed to delivering the highest standards of service</p>
                        </div>
                        <div className="text-center p-6 bg-green-50 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                            <p className="text-gray-600">Continuously improving and adapting to guest needs</p>
                        </div>
                        <div className="text-center p-6 bg-purple-50 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                            <p className="text-gray-600">Dedicated to environmentally responsible practices</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;