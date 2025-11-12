import { facilities } from '../data/constant';

const Facilities = () => {
    return (
        <div className="min-h-screen bg-white py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Facilities</h1>
                <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Experience world-class amenities and facilities designed to enhance your stay
                    and cater to your every need.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {facilities.map((facility) => (
                        <div key={facility.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <img
                                src={facility.image}
                                alt={facility.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{facility.name}</h3>
                                <p className="text-gray-600">{facility.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Facilities;