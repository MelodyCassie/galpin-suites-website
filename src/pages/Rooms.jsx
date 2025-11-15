import { useState } from 'react';
import { Link } from 'react-router-dom';

const Rooms = () => {
    const [selectedRoom, setSelectedRoom] = useState(null);

    const rooms = [
        {
            id: 1,
            name: "Executive Suite",
            description: "Spacious suite with separate living area, premium amenities, and stunning city views. Perfect for business travelers and extended stays.",
            price: "$299/night",
            images: ["/images/executive-1.jpg", "/images/executive-2.jpg", "/images/executive-3.jpg"],
            features: ["King Size Bed", "Living Area", "Work Desk", "City View", "Mini Bar", "Free WiFi"],
            size: "45 m²"
        },
        {
            id: 2,
            name: "Deluxe Room",
            description: "Elegantly appointed room with luxurious bedding, modern amenities, and comfortable workspace for the discerning traveler.",
            price: "$199/night",
            images: ["/images/deluxe-1.jpg", "/images/deluxe-2.jpg", "/images/deluxe-3.jpg"],
            features: ["Queen Size Bed", "City View", "Smart TV", "Coffee Maker", "Free WiFi"],
            size: "35 m²"
        },
        {
            id: 3,
            name: "Presidential Suite",
            description: "The ultimate in luxury living with separate bedroom, dining area, and premium services. Experience unparalleled comfort and style.",
            price: "$499/night",
            images: ["/images/presidential-1.jpg", "/images/presidential-2.jpg", "/images/presidential-3.jpg"],
            features: ["King Size Bed", "Separate Living", "Dining Area", "Panoramic View", "Butler Service", "Jacuzzi"],
            size: "85 m²"
        },
        {
            id: 4,
            name: "Family Suite",
            description: "Spacious accommodation designed for families, featuring connecting rooms and child-friendly amenities.",
            price: "$349/night",
            images: ["/images/family-1.jpg", "/images/family-2.jpg", "/images/family-3.jpg"],
            features: ["Two Queen Beds", "Connecting Rooms", "Play Area", "Kitchenette", "Family Amenities"],
            size: "60 m²"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-r from-burnt-orange-800 to-burnt-orange-600">
                <div className="absolute inset-0 bg-black/20" />
                <div className="container mx-auto px-6 text-center relative">
                    <h1 className="text-5xl lg:text-7xl font-display font-bold text-white mb-6">
                        Our <span className="text-orange-200">Suites</span>
                    </h1>
                    <p className="text-xl lg:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
                        Discover our carefully curated collection of luxurious accommodations,
                        each designed to provide an unforgettable experience
                    </p>
                </div>
            </section>

            {/* Rooms Grid */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {rooms.map((room, index) => (
                            <div
                                key={room.id}
                                className="group bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-orange-100"
                            >
                                {/* Image Slider */}
                                <div className="relative h-80 overflow-hidden">
                                    <img
                                        src={room.images[0]}
                                        alt={room.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 right-4">
                    <span className="bg-burnt-orange-500 text-white px-4 py-2 rounded-full font-semibold text-lg shadow-lg">
                      {room.price}
                    </span>
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                    <span className="bg-white/90 text-burnt-orange-600 px-3 py-1 rounded-lg font-semibold text-sm">
                      {room.size}
                    </span>
                                    </div>
                                </div>

                                {/* Room Content */}
                                <div className="p-8">
                                    <h3 className="text-3xl font-display font-bold text-gray-800 mb-4 group-hover:text-burnt-orange-600 transition-colors duration-300">
                                        {room.name}
                                    </h3>

                                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                        {room.description}
                                    </p>

                                    {/* Features */}
                                    <div className="grid grid-cols-2 gap-2 mb-6">
                                        {room.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center text-gray-700">
                                                <span className="text-burnt-orange-500 mr-2 text-lg">✓</span>
                                                <span className="text-base">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex space-x-4">
                                        <Link
                                            to="/check-availability"
                                            className="flex-1 bg-burnt-orange-500 hover:bg-burnt-orange-600 text-white text-lg font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 text-center shadow-lg hover:shadow-xl"
                                        >
                                            Book Now
                                        </Link>
                                        <button
                                            onClick={() => setSelectedRoom(selectedRoom?.id === room.id ? null : room)}
                                            className="px-6 py-4 border-2 border-burnt-orange-500 text-burnt-orange-500 hover:bg-burnt-orange-500 hover:text-white rounded-xl transition-all duration-300 font-semibold text-lg"
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-burnt-orange-600 to-orange-700">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                        Ready to Experience <span className="text-orange-200">Galpin Luxury?</span>
                    </h2>
                    <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                        Your perfect stay is just a click away. Book now and immerse yourself in unparalleled comfort.
                    </p>
                    <Link
                        to="/check-availability"
                        className="inline-block bg-white text-burnt-orange-600 hover:bg-orange-50 px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
                    >
                        Reserve Your Suite
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Rooms;