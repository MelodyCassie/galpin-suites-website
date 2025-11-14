
import { useState } from 'react';

const CheckAvailability = () => {
    const [formData, setFormData] = useState({
        checkIn: '',
        checkOut: '',
        guests: 1,
        roomType: '',
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // WhatsApp Integration
        const message = `New Booking Inquiry:%0A%0A
🏨 *LUXURY HOTEL BOOKING* %0A
👤 *Name:* ${formData.name}%0A
📧 *Email:* ${formData.email}%0A
📞 *Phone:* ${formData.phone}%0A
📅 *Check-in:* ${formData.checkIn}%0A
📅 *Check-out:* ${formData.checkOut}%0A
👥 *Guests:* ${formData.guests}%0A
🛏️ *Room Type:* ${formData.roomType}%0A
💬 *Message:* ${formData.message || 'No additional message'}`;

        // Replace with your WhatsApp number
        window.open(`https://wa.me/1234567890?text=${message}`, '_blank');

        // Google Forms submission would go here
        console.log('Form data:', formData);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Check <span className="text-burnt-orange-600">Availability</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Check room availability and we'll get back to you instantly via WhatsApp
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Form */}
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Dates */}
                                <div className="md:col-span-2 grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Check-in Date *
                                        </label>
                                        <input
                                            type="date"
                                            name="checkIn"
                                            value={formData.checkIn}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Check-out Date *
                                        </label>
                                        <input
                                            type="date"
                                            name="checkOut"
                                            value={formData.checkOut}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                {/* Guests & Room Type */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Number of Guests *
                                    </label>
                                    <select
                                        name="guests"
                                        value={formData.guests}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange-500 focus:border-transparent"
                                    >
                                        {[1, 2, 3, 4, 5, 6].map(num => (
                                            <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Room Type *
                                    </label>
                                    <select
                                        name="roomType"
                                        value={formData.roomType}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange-500 focus:border-transparent"
                                    >
                                        <option value="">Select Room Type</option>
                                        <option value="deluxe">Deluxe Room</option>
                                        <option value="executive">Executive Suite</option>
                                        <option value="family">Family Room</option>
                                        <option value="presidential">Presidential Suite</option>
                                    </select>
                                </div>

                                {/* Personal Information */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange-500 focus:border-transparent"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange-500 focus:border-transparent"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange-500 focus:border-transparent"
                                        placeholder="+1 (555) 123-4567"
                                    />
                                </div>

                                {/* Additional Message */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Additional Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange-500 focus:border-transparent"
                                        placeholder="Any special requests or requirements..."
                                    />
                                </div>
                            </div>

                            {/* Submit Buttons */}
                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                <button
                                    type="submit"
                                    className="flex-1 bg-burnt-orange-600 text-white px-8 py-4 rounded-lg hover:bg-burnt-orange-700 transition-all duration-300 flex items-center justify-center font-semibold shadow-lg hover:shadow-xl"
                                >
                                    📱 Check Availability via WhatsApp
                                </button>

                                <a
                                    href="YOUR_GOOGLE_FORM_URL"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-gray-800 text-white px-8 py-4 rounded-lg hover:bg-gray-900 transition-all duration-300 text-center font-semibold shadow-lg hover:shadow-xl"
                                >
                                    📋 Alternative: Google Form
                                </a>
                            </div>
                        </form>
                    </div>

                    {/* Sidebar Info */}
                    <div className="space-y-6">
                        {/* Contact Info Card */}
                        <div className="bg-burnt-orange-600 text-white rounded-2xl p-6 shadow-lg">
                            <h3 className="text-xl font-bold mb-4">Direct Contact</h3>
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <span className="mr-3">📞</span>
                                    <span>+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="mr-3">✉️</span>
                                    <span>bookings@luxuryhotel.com</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="mr-3">💬</span>
                                    <span>Live Chat Available</span>
                                </div>
                            </div>
                        </div>

                        {/* Features Card */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Why Book With Us?</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-center">
                                    <span className="text-burnt-orange-500 mr-2">✓</span>
                                    Instant WhatsApp Confirmation
                                </li>
                                <li className="flex items-center">
                                    <span className="text-burnt-orange-500 mr-2">✓</span>
                                    Best Price Guarantee
                                </li>
                                <li className="flex items-center">
                                    <span className="text-burnt-orange-500 mr-2">✓</span>
                                    24/7 Customer Support
                                </li>
                                <li className="flex items-center">
                                    <span className="text-burnt-orange-500 mr-2">✓</span>
                                    Free Cancellation
                                </li>
                            </ul>
                        </div>

                        {/* Response Time Card */}
                        <div className="bg-gradient-to-br from-burnt-orange-500 to-orange-600 text-white rounded-2xl p-6 shadow-lg">
                            <h3 className="text-xl font-bold mb-2">Quick Response</h3>
                            <p className="opacity-90">
                                We typically respond to booking inquiries within 15 minutes during business hours.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckAvailability;