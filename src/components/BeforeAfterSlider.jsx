'use client';

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export default function BeforeAfterSlider() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            See the Difference
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Drag the slider to see our amazing cleaning results
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <ReactCompareSlider
              itemOne={
                <div className="relative">
                  <ReactCompareSliderImage
                    src="/images/furgon.jpg"
                    alt="Before cleaning"
                    className="aspect-[16/10] object-cover w-full h-full"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    BEFORE
                  </div>
                </div>
              }
              itemTwo={
                <div className="relative">
                  <ReactCompareSliderImage
                    src="/images/XXL.webp"
                    alt="After cleaning"
                    className="aspect-[16/10] object-cover w-full h-full"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    AFTER
                  </div>
                </div>
              }
              position={50}
              className="aspect-[16/10] w-full"
              boundsPadding={0}
              handle={
                <div className="w-1 bg-white shadow-lg relative h-full">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl border-2 border-gray-200 flex items-center justify-center hover:scale-110 transition-transform duration-200">
                    <div className="flex space-x-0.5">
                      <div className="w-0.5 h-4 bg-gray-400"></div>
                      <div className="w-0.5 h-4 bg-gray-400"></div>
                    </div>
                  </div>
                </div>
              }
            />

            {/* Instructions */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm border border-gray-200 shadow-lg">
              ← Drag to compare →
            </div>
          </div>

          {/* Additional Examples Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="relative group overflow-hidden rounded-xl bg-gradient-to-br from-red-100 to-orange-200">
              <div className="aspect-square bg-gray-600 bg-cover bg-center flex items-center justify-center" style={{backgroundImage: "url('/images/XXL.webp')"}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-semibold mb-1">Carpet Cleaning</div>
                    <div className="text-xs text-gray-300">Drag slider above to see results</div>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-gray-800 mb-1">Carpet Example</div>
                  <div className="text-sm text-gray-600">Deep cleaning results</div>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl bg-gradient-to-br from-blue-100 to-teal-200">
              <div className="aspect-square bg-gray-600 bg-cover bg-center flex items-center justify-center" style={{backgroundImage: "url('/images/furgon.jpg')"}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-semibold mb-1">Vehicle Cleaning</div>
                    <div className="text-xs text-gray-300">Professional van cleaning</div>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-gray-800 mb-1">Vehicle Cleaning</div>
                  <div className="text-sm text-gray-600">Interior & exterior</div>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl bg-gradient-to-br from-green-100 to-emerald-200">
              <div className="aspect-square bg-gray-600 bg-cover bg-center flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-semibold mb-1">Office Cleaning</div>
                    <div className="text-xs text-gray-300">Commercial spaces</div>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-gray-800 mb-1">Office Spaces</div>
                  <div className="text-sm text-gray-600">Professional cleaning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
