'use client';

import { useState, useEffect } from "react";
import { Play, X, Filter, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PortfolioPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [filter, setFilter] = useState('all');
  const [viewMode, setViewMode] = useState('masonry');

  // Video data with categories and metadata
  const videos = [
    {
      id: '068e8df6-9bed-4843-bcbb-b187285a6389',
      src: '/portfolio/videos/068e8df6-9bed-4843-bcbb-b187285a6389.mp4',
      category: 'carpet',
      title: 'Deep Carpet Cleaning',
      description: 'Professional deep cleaning of high-traffic carpet areas',
      height: 'h-64'
    },
    {
      id: '14dc07bb-e683-4df2-a490-a612265af18e',
      src: '/portfolio/videos/14dc07bb-e683-4df2-a490-a612265af18e.mp4',
      category: 'upholstery',
      title: 'Sofa Restoration',
      description: 'Complete upholstery cleaning and restoration service',
      height: 'h-80'
    },
    {
      id: '2055eed5-c6ca-4ae7-aeaf-42620f2f7ad3',
      src: '/portfolio/videos/2055eed5-c6ca-4ae7-aeaf-42620f2f7ad3.mp4',
      category: 'commercial',
      title: 'Office Space Cleaning',
      description: 'Commercial carpet and furniture cleaning',
      height: 'h-72'
    },
    {
      id: '20c292a5-b597-4d1f-94a4-ac3de9d94454',
      src: '/portfolio/videos/20c292a5-b597-4d1f-94a4-ac3de9d94454.mp4',
      category: 'carpet',
      title: 'Stain Removal',
      description: 'Difficult stain removal from carpet fibers',
      height: 'h-60'
    },
    {
      id: '63f11878-9e63-4b28-a47d-1fe76b7a4621',
      src: '/portfolio/videos/63f11878-9e63-4b28-a47d-1fe76b7a4621.mp4',
      category: 'vehicle',
      title: 'Car Interior Cleaning',
      description: 'Complete vehicle interior cleaning service',
      height: 'h-76'
    },
    {
      id: '83c718aa-fbf9-4d12-895b-6a56ee02a118',
      src: '/portfolio/videos/83c718aa-fbf9-4d12-895b-6a56ee02a118.mp4',
      category: 'upholstery',
      title: 'Chair Restoration',
      description: 'Professional chair upholstery cleaning',
      height: 'h-68'
    },
    {
      id: '8fd12fe3-6e27-4ee3-b427-7a42539fbab7',
      src: '/portfolio/videos/8fd12fe3-6e27-4ee3-b427-7a42539fbab7.mp4',
      category: 'carpet',
      title: 'Area Rug Cleaning',
      description: 'Delicate area rug cleaning and care',
      height: 'h-64'
    },
    {
      id: '94439830-0ea9-4dc0-8e8a-91551164c87d',
      src: '/portfolio/videos/94439830-0ea9-4dc0-8e8a-91551164c87d.mp4',
      category: 'commercial',
      title: 'Restaurant Cleaning',
      description: 'Commercial restaurant carpet cleaning',
      height: 'h-72'
    },
    {
      id: 'bec17d23-cafe-497c-8852-35fea9178bcc',
      src: '/portfolio/videos/bec17d23-cafe-497c-8852-35fea9178bcc.mp4',
      category: 'vehicle',
      title: 'Van Cleaning Service',
      description: 'Professional van interior deep cleaning',
      height: 'h-80'
    },
    {
      id: 'd8808c36-6e98-4c68-b992-ee3c286bdb07',
      src: '/portfolio/videos/d8808c36-6e98-4c68-b992-ee3c286bdb07.mp4',
      category: 'upholstery',
      title: 'Mattress Cleaning',
      description: 'Deep mattress cleaning and sanitization',
      height: 'h-60'
    },
    {
      id: 'dd3e0e9d-9ba0-457c-93a9-1fc1af7696de',
      src: '/portfolio/videos/dd3e0e9d-9ba0-457c-93a9-1fc1af7696de.mp4',
      category: 'carpet',
      title: 'Pet Stain Treatment',
      description: 'Specialized pet stain and odor removal',
      height: 'h-76'
    },
    {
      id: 'fa8e4365-f930-4d45-89bf-e1cebfe4d952',
      src: '/portfolio/videos/fa8e4365-f930-4d45-89bf-e1cebfe4d952.mp4',
      category: 'commercial',
      title: 'Hotel Room Cleaning',
      description: 'Hotel carpet and furniture cleaning',
      height: 'h-68'
    },
    {
      id: 'ff022f23-367f-4f14-9f8a-ceb22f659b83',
      src: '/portfolio/videos/ff022f23-367f-4f14-9f8a-ceb22f659b83.mp4',
      category: 'vehicle',
      title: 'Truck Interior Cleaning',
      description: 'Heavy-duty vehicle interior cleaning',
      height: 'h-72'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'carpet', label: 'Carpet Cleaning' },
    { value: 'upholstery', label: 'Upholstery' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'vehicle', label: 'Vehicle Cleaning' }
  ];

  const filteredVideos = filter === 'all'
    ? videos
    : videos.filter(video => video.category === filter);

  const openVideo = (video) => {
    setSelectedVideo(video);
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeVideo();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Portfolio
          </h1>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See the difference our professional cleaning services make. Real results from real projects.
          </p>
        </div>
      </section>

      {/* Filter and View Controls */}
      <section className="py-12 px-4 bg-white border-b border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setFilter(category.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === category.value
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">View:</span>
              <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('masonry')}
                  className={`px-3 py-2 text-sm ${
                    viewMode === 'masonry'
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-2 text-sm ${
                    viewMode === 'grid'
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredVideos.length} project{filteredVideos.length !== 1 ? 's' : ''}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {viewMode === 'masonry' ? (
            <>
              {/* First Row - Aligned Tops */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
                {filteredVideos.slice(0, 4).map((video) => (
                  <div
                    key={video.id}
                    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-64"
                    onClick={() => openVideo(video)}
                  >
                    <video
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      muted
                      loop
                      playsInline
                      onMouseEnter={(e) => e.target.play()}
                      onMouseLeave={(e) => e.target.pause()}
                    >
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white font-semibold text-lg mb-2">{video.title}</h3>
                        <p className="text-white/90 text-sm">{video.description}</p>
                        <div className="mt-2">
                          <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white">
                            {categories.find(cat => cat.value === video.category)?.label}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Remaining Videos - Masonry Layout */}
              {filteredVideos.length > 4 && (
                <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                  {filteredVideos.slice(4).map((video) => (
                    <div
                      key={video.id}
                      className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer break-inside-avoid ${video.height}`}
                      onClick={() => openVideo(video)}
                    >
                      <video
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        muted
                        loop
                        playsInline
                        onMouseEnter={(e) => e.target.play()}
                        onMouseLeave={(e) => e.target.pause()}
                      >
                        <source src={video.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <Play className="w-8 h-8 text-white ml-1" />
                          </div>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-white font-semibold text-lg mb-2">{video.title}</h3>
                          <p className="text-white/90 text-sm">{video.description}</p>
                          <div className="mt-2">
                            <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white">
                              {categories.find(cat => cat.value === video.category)?.label}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredVideos.map((video) => (
                <div
                  key={video.id}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer aspect-square"
                  onClick={() => openVideo(video)}
                >
                  <video
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => e.target.pause()}
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white font-semibold text-lg mb-2">{video.title}</h3>
                      <p className="text-white/90 text-sm">{video.description}</p>
                      <div className="mt-2">
                        <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white">
                          {categories.find(cat => cat.value === video.category)?.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredVideos.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
              <Button
                onClick={() => setFilter('all')}
                className="mt-4 bg-green-600 hover:bg-green-700 text-white"
              >
                Show All Projects
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl max-h-[90vh]">
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            <video
              className="w-full h-auto max-h-[80vh] rounded-lg"
              controls
              autoPlay
              playsInline
            >
              <source src={selectedVideo.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="mt-4 text-center">
              <h3 className="text-white text-2xl font-bold mb-2">{selectedVideo.title}</h3>
              <p className="text-gray-300">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready for Similar Results?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let us transform your space with our professional cleaning services. Get your free quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Get Free Quote
            </Button>
            <Button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg font-semibold">
              Call Now: +1 720 462 8866
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
