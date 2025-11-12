import { useState } from 'react';

const CheckAvailability = () => {
    const [formData, setFormData] = useState({
        checkIn: '',
        checkOut: '',
        guests: 1,
        roomType: '',
        name: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Prepare message for WhatsApp
        const message = `Check Availability Request:%0A
Name: ${formData.name}%0A
Email: ${formData.email}%0A
Phone: ${formData.phone}%0A
Check-in: ${formData.checkIn}%0A
Check-out: ${formData.checkOut}%0A
Guests: ${formData.guests}%0A
Room Type: ${formData.roomType}`;

        // Open WhatsApp with pre-filled message (replace 1234567890 with your actual number)
        window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-2xl">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
                    Check Availability
                </h1>

                <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Check-in Date */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Check-in Date
                            </label>
                            <input
                                type="date"
                                name="checkIn"
                                value={formData.checkIn}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Check-out Date */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Check-out Date
                            </label>
                            <input
                                type="date"
                                name="checkOut"
                                value={formData.checkOut}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Number of Guests */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Number of Guests
                            </label>
                            <select
                                name="guests"
                                value={formData.guests}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                {[1, 2, 3, 4, 5, 6].map(num => (
                                    <option key={num} value={num}>{num}</option>
                                ))}
                            </select>
                        </div>

                        {/* Room Type */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Room Type
                            </label>
                            <select
                                name="roomType"
                                value={formData.roomType}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select Room Type</option>
                                <option value="deluxe">Deluxe Room</option>
                                <option value="executive">Executive Suite</option>
                                <option value="family">Family Room</option>
                            </select>
                        </div>

                        {/* Personal Information */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center">
                        <button
                            type="submit"
                            className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors duration-300 flex items-center justify-center"
                        >
                            Check Availability via WhatsApp
                        </button>
                    </div>
                </form>

                <div className="mt-8 text-center text-gray-600">
                    <p>We'll get back to you within 24 hours to confirm your booking.</p>
                </div>
            </div>
        </div>
    );
};

export default CheckAvailability;