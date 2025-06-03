import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; // Import slick CSS
import "slick-carousel/slick/slick-theme.css"; // Optional slick theme CSS
import "./index.css";

// Custom Previous Arrow component placed outside of the video container using a negative left offset.
const PrevArrow: React.FC<any> = ({ onClick }) => (
  <div
    className="absolute left-[-40px] top-1/2 z-10 transform -translate-y-1/2 cursor-pointer text-4xl text-indigo-600 hover:text-indigo-800"
    onClick={onClick}
  >
    &#10094;
  </div>
);

// Custom Next Arrow component placed outside of the video container using a negative right offset.
const NextArrow: React.FC<any> = ({ onClick }) => (
  <div
    className="absolute right-[-40px] top-1/2 z-10 transform -translate-y-1/2 cursor-pointer text-4xl text-indigo-600 hover:text-indigo-800"
    onClick={onClick}
  >
    &#10095;
  </div>
);

const HeroSection: React.FC = () => {
  const videoSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="bg-yellow-300 scroll-smooth">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-8">
        <div className="text-3xl font-bold text-indigo-600">🌊</div>
        <div className="space-x-8 text-base font-medium text-gray-700 hidden md:flex">
          <a href="#" className="hover:text-indigo-600">Product</a>
          <a href="#" className="hover:text-indigo-600">Features</a>
          <a href="#" className="hover:text-indigo-600">Marketplace</a>
          <a href="#" className="hover:text-indigo-600">Company</a>
        </div>
        <a href="#login" className="text-base font-semibold text-gray-900 hover:text-indigo-600">Log in →</a>
      </nav>

      {/* Hero Section */}
      <div id="product" className="relative overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Text Content */}
            <div>
              <h1 className="text-6xl font-bold text-gray-900 mb-8">
                We’re changing the way people connect
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
              </p>
              <div className="flex space-x-6">
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-indigo-700">
                  Get started
                </button>
                <a href="#demo" className="text-base font-medium text-gray-900 flex items-center hover:text-indigo-600">
                  Live demo →
                </a>
              </div>
            </div>

            {/* Image Grid */}
            <div className="relative grid grid-cols-2 gap-6">
              <img src="#" alt="img1" className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div id="services" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 mb-8 text-center">
            Dharmik Parivar is about uniting Hindus and fostering a sense of community, culture, and spirituality.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Cultural Events</h3>
              <p className="text-gray-700">
                Participate in events that celebrate Hindu culture and traditions.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Spiritual Guidance</h3>
              <p className="text-gray-700">
                Access resources and guidance to deepen your spiritual journey.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Community Support</h3>
              <p className="text-gray-700">
                Connect with like-minded individuals and build a strong community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Video Carousel Section */}
    <div id="videos" className="bg-gray-100 py-20">
      <div className="max-w-5xl mx-auto px-8 lg:px-12 relative">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Watch Our Videos
        </h2>
        <Slider {...videoSettings}>
        {["dQw4w9WgXcQ", "3JZ_D3ELwOQ", "tgbNymZ7vqY"].map((videoId, index) => (
          <div key={index} className="p-4">
            <div className="relative aspect-video rounded-md shadow-lg overflow-hidden max-w-md mx-auto">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ border: "none" }}
            ></iframe>
            </div>
          </div>
        ))}
        </Slider>
      </div>
    </div>
        </div>
  );
};

export default HeroSection;
