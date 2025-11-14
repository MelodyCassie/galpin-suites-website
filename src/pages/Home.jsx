// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const carouselSlides = [
        {
            image: "/images/carousel-1.jpg",
            title: "Luxury Redefined",
            subtitle: "Experience the perfect blend of comfort and elegance",
            cta: "Book Your Stay"
        },
        {
            image: "/images/carousel-2.jpg",
            title: "Urban Oasis",
            subtitle: "Discover tranquility in the heart of the city",
            cta: "View Rooms"
        },
        {
            image: "/images/carousel-3.jpg",
            title: "Exceptional Service",
            subtitle: "Where every detail matters",
            cta: "Explore Amenities"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const features = [
        {
            icon: "🛏️",
            title: "Luxury Rooms",
            description: "Elegantly designed rooms with premium amenities"
        },
        {
            icon: "🏊",
            title: "Infinity Pool",
            description: "Stunning rooftop pool with city views"
        },
        {
            icon: "🍽️",
            title: "Fine Dining",
            description: "Award-winning restaurant with international cuisine"
        },
        {
            icon: "💼",
            title: "Business Center",
            description: "Fully equipped for corporate travelers"
        }
    ];

    return (
        <div className="relative">
            {/* Hero Carousel */}
            <div className="relative h-screen overflow-hidden">
                {carouselSlides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                            index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-burnt-orange-900/70 via-burnt-orange-700/50 to-transparent" />

                        {/* Content */}
                        <div className="relative h-full flex items-center">
                            <div className="container mx-auto px-6 lg:px-12">
                                <div className="max-w-2xl">
                                    <div className="mb-6">
                    <span className="text-burnt-orange-300 text-lg font-semibold tracking-wider">
                      WELCOME TO GALPIN SUITES
                    </span>
                                    </div>

                                    <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                        {slide.title.split(' ').map((word, i) => (
                                            <span key={i} className="block">
                        {word}
                      </span>
                                        ))}
                                    </h1>

                                    <p className="text-xl lg:text-2xl text-orange-100 mb-8 leading-relaxed">
                                        {slide.subtitle}
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Link
                                            to="/check-availability"
                                            className="bg-burnt-orange-500 hover:bg-burnt-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                                        >
                                            {slide.cta}
                                        </Link>
                                        <Link
                                            to="/rooms"
                                            className="border-2 border-white text-white hover:bg-white hover:text-burnt-orange-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 text-center"
                                        >
                                            Explore Suites
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Carousel Indicators */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
                    {carouselSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentSlide
                                    ? 'bg-burnt-orange-400 w-8'
                                    : 'bg-white/50 hover:bg-white'
                            }`}
                        />
                    ))}
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white rounded-full mt-2" />
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <section className="py-20 bg-gradient-to-b from-white to-orange-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-burnt-orange-500 font-semibold tracking-wider">WHY CHOOSE US</span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mt-4 mb-6">
                            The <span className="text-burnt-orange-600">Galpin</span> Experience
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Where luxury meets comfort, and every moment becomes a cherished memory
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-orange-100"
                            >
                                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-burnt-orange-600 transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-20 bg-gradient-to-r from-burnt-orange-600 to-orange-700">
                <div className="absolute inset-0 bg-black/10" />
                <div className="container mx-auto px-6 text-center relative">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        Ready for an <span className="text-orange-200">Unforgettable Stay?</span>
                    </h2>
                    <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                        Book your suite today and experience the perfect blend of luxury and comfort
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/check-availability"
                            className="bg-white text-burnt-orange-600 hover:bg-orange-50 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Book Now
                        </Link>
                        <Link
                            to="/gallery"
                            className="border-2 border-white text-white hover:bg-white hover:text-burnt-orange-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105"
                        >
                            View Gallery
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick Booking Widget */}
            <div className="fixed bottom-6 right-6 z-50">
                <div className="bg-burnt-orange-500 text-white p-4 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer group">
                    <div className="flex items-center space-x-3">
                        <span className="text-2xl">🏨</span>
                        <div>
                            <div className="font-bold text-sm">Quick Book</div>
                            <div className="text-xs opacity-90">Instant Confirmation</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;