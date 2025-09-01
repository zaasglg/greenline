'use client';

import { useState, useEffect } from "react";
import { Play, X, Filter, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PortfolioPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [filter, setFilter] = useState('all');
  const [viewMode, setViewMode] = useState('masonry');

  // All video files from public/portfolio/videos
  const videoFiles = [
    "-9114238184067257603.mp4",
    "068e8df6-9bed-4843-bcbb-b187285a6389.mp4",
    "14dc07bb-e683-4df2-a490-a612265af18e.mp4",
    "2055eed5-c6ca-4ae7-aeaf-42620f2f7ad3.mp4",
    "20c292a5-b597-4d1f-94a4-ac3de9d94454.mp4",
    "63f11878-9e63-4b28-a47d-1fe76b7a4621.mp4",
    "83c718aa-fbf9-4d12-895b-6a56ee02a118.mp4",
    "8fd12fe3-6e27-4ee3-b427-7a42539fbab7.mp4",
    "94439830-0ea9-4dc0-8e8a-91551164c87d.mp4",
    "An8XeS_oJN5oQF2tb1ANpQ0N4FmvCphxWpD_L1K7ujH3tCfBrl_kg_o6XfS_FDT.mp4",
    "An9Mo4XNmB3tCtOYL8DC5TXfzrWL8Ual5wkAe5bpp6N29YdTY5oLGViiekp0iqw.mp4",
    "An_G8NJcj4iXxloicH29jA8VhwkSiOJMUGJhgUagqHN67hxrJ5oMlE_km3dVN7K.mp4",
    "An_K1n6eOuTZllMEJ5xmD9UgIJge0rxt6N55GI2VKFjNtJAIwAh5L5F2DQkoRK7Nd.mp4",
    "IMG_0564.mov",
    "IMPORTANT.MOV",
    "bec17d23-cafe-497c-8852-35fea9178bcc.mp4",
    "cc293880-5d81-47f9-b54c-8b323f16ef75.mp4",
    "copy_168B3B25-88E7-4205-965C-5407334A7A33.mov",
    "copy_185E5797-56A8-4746-85FC-6078D4CDC02F.mov",
    "copy_1F2229A0-CA60-4E6D-8B4B-3D8169B9AE84.mov",
    "copy_2EED2F1F-C0C0-4064-BA09-96CE25FF213C.mov",
    "copy_33FD9EAA-0D84-408E-A5B6-191916CC135D.mov",
    "copy_4B4F2452-267E-40DE-94C5-0A66FED42CF8.mov",
    "copy_5BD48E08-AF3E-4CCC-AC56-21EBD07FDFF4.mov",
    "copy_7366F121-B79C-4EF8-B4C4-98853BD0E517.mov",
    "copy_7CA46403-FFCA-4B5E-824D-8B100481BE06.mov",
    "copy_814663CA-EE93-4F6F-9200-985107EAD449.mov",
    "copy_8B31067D-CE31-4D6C-8E9C-E7830A090A05.mov",
    "copy_96680BFC-AE4D-4351-988D-1AADF9C188E4.mov",
    "copy_B35C366E-ED11-4011-A0A4-E1BB71807ABB.mov",
    "copy_B40124A9-B593-4BB8-A5FB-A5D5F9DDA4B8.mov",
    "copy_E378B881-9C0D-4BA1-9E3F-C6ABB95ADDB3.mov",
    "copy_F5FE5329-2D53-43F9-967F-B14CB6DB3AB1.mov",
    "d8808c36-6e98-4c68-b992-ee3c286bdb07.mp4",
    "dd3e0e9d-9ba0-457c-93a9-1fc1af7696de.mp4",
    "fa8e4365-f930-4d45-89bf-e1cebfe4d952.mp4",
    "ff022f23-367f-4f14-9f8a-ceb22f659b83.mp4"
  ];

  // Generate video objects for rendering
  const videos = videoFiles.map((file) => ({
    id: file,
    src: `/portfolio/videos/${file}`,
    title: file,
    description: '',
    height: 'h-64',
    category: 'all',
  }));

  // Only show 'All Projects' category
  const categories = [
    { value: 'all', label: 'All Projects' }
  ];

  // No filtering by category since all videos are 'all'
  const filteredVideos = videos;

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
  <div className="min-h-screen bg-white 2xl:px-16">
      {/* Hero Section */}
  <section className="py-20 px-4 2xl:py-32 2xl:px-0 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl 2xl:text-7xl font-bold text-gray-900 mb-6 2xl:mb-10">
            Our Portfolio
          </h1>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-xl 2xl:text-3xl text-gray-600 max-w-3xl 2xl:max-w-4xl mx-auto leading-relaxed 2xl:mb-4">
            See the difference our professional cleaning services make. Real results from real projects.
          </p>
        </div>
      </section>

      {/* Filter and View Controls */}
  <section className="py-12 px-4 2xl:py-20 2xl:px-0 bg-white border-b border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 2xl:gap-8">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setFilter(category.value)}
                  className={`px-4 py-2 2xl:px-6 2xl:py-3 rounded-full text-sm 2xl:text-xl font-medium transition-all ${
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
              <span className="text-sm 2xl:text-xl text-gray-600">View:</span>
              <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('masonry')}
                  className={`px-3 py-2 2xl:px-5 2xl:py-3 text-sm 2xl:text-xl ${
                    viewMode === 'masonry'
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Grid className="w-4 h-4 2xl:w-6 2xl:h-6" />
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-2 2xl:px-5 2xl:py-3 text-sm 2xl:text-xl ${
                    viewMode === 'grid'
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <List className="w-4 h-4 2xl:w-6 2xl:h-6" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            <span className="text-sm 2xl:text-xl">Showing {filteredVideos.length} project{filteredVideos.length !== 1 ? 's' : ''}</span>
          </div>
        </div>
        
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4 2xl:py-32 2xl:px-0">
        <div className="container mx-auto max-w-7xl 2xl:max-w-screen-2xl">
          {viewMode === 'masonry' ? (
            <>
              {/* First Row - Aligned Tops */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
                {filteredVideos.slice(0, 4).map((video) => (
                  <div
                    key={video.id}
                    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-64 2xl:h-96"
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
                        <h3 className="text-white font-semibold text-lg 2xl:text-2xl mb-2">{video.title}</h3>
                        <p className="text-white/90 text-sm 2xl:text-xl">{video.description}</p>
                        <div className="mt-2">
                          <span className="inline-block px-2 py-1 2xl:px-4 2xl:py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs 2xl:text-lg text-white">
                            {video.title}
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
                      className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer break-inside-avoid ${video.height} 2xl:h-96`}
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
                          <h3 className="text-white font-semibold text-lg 2xl:text-2xl mb-2">{video.title}</h3>
                          <p className="text-white/90 text-sm 2xl:text-xl">{video.description}</p>
                          <div className="mt-2">
                            <span className="inline-block px-2 py-1 2xl:px-4 2xl:py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs 2xl:text-lg text-white">
                              {video.title}
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
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer aspect-square 2xl:h-96"
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
                      <h3 className="text-white font-semibold text-lg 2xl:text-2xl mb-2">{video.title}</h3>
                      <p className="text-white/90 text-sm 2xl:text-xl">{video.description}</p>
                      <div className="mt-2">
                        <span className="inline-block px-2 py-1 2xl:px-4 2xl:py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs 2xl:text-lg text-white">
                          {video.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredVideos.length === 0 && (
            <div className="text-center py-20 2xl:py-32">
              <p className="text-gray-500 text-lg 2xl:text-3xl">No projects found in this category.</p>
              <Button
                onClick={() => setFilter('all')}
                className="mt-4 bg-green-600 hover:bg-green-700 text-white 2xl:text-xl 2xl:px-8 2xl:py-4"
              >
                Show All Projects
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 2xl:p-16">
          <div className="relative w-full max-w-4xl 2xl:max-w-6xl max-h-[90vh]">
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="w-8 h-8 2xl:w-12 2xl:h-12" />
            </button>

            <video
              className="w-full h-auto max-h-[80vh] rounded-lg 2xl:max-h-[70vh]"
              controls
              autoPlay
              playsInline
            >
              <source src={selectedVideo.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="mt-4 text-center">
              <h3 className="text-white text-2xl 2xl:text-4xl font-bold mb-2">{selectedVideo.title}</h3>
              <p className="text-gray-300 2xl:text-2xl">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
