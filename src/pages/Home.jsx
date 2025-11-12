// src/pages/Home.jsx
import Carousel from '../components/ui/Carousel';
import { carouselImages } from '../data/constant';

const Home = () => {
    return (
        <div>
            <Carousel images={carouselImages} />

            {/* Quick Introduction Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">
                        Welcome to Luxury Hotel
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover a world of luxury and comfort where every detail is crafted
                        to perfection. Experience unparalleled service and create memories
                        that last a lifetime.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;