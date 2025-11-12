import { rooms } from '../data/constant';

const Rooms = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Rooms</h1>
                <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Discover our carefully curated selection of rooms and suites,
                    each designed to provide the perfect blend of comfort and luxury.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rooms.map((room) => (
                        <div key={room.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <img
                                src={room.image}
                                alt={room.name}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{room.name}</h3>
                                <p className="text-gray-600 mb-4">{room.description}</p>
                                <div className="mb-4">
                                    <h4 className="font-semibold text-gray-700 mb-2">Features:</h4>
                                    <ul className="grid grid-cols-2 gap-1">
                                        {room.features.map((feature, index) => (
                                            <li key={index} className="text-sm text-gray-600 flex items-center">
                                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-2xl font-bold text-blue-600">{room.price}</span>
                                    <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Rooms;