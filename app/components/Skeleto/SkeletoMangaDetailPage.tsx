import React from "react";

const SkeletoMangaDetailPage = () => {
  return (
    <div className="max-w-7xl bg-white rounded-t-sm mx-auto text-[#1f2937] mt-20">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-t-sm mx-auto text-[#1f2937] bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg p-6 mb-6 relative overflow-hidden animate-pulse">
              <div className="flex items-start space-x-4">
                <div className="w-[120px] h-[160px] bg-gray-300 rounded shadow-lg" />
                <div className="flex-1">
                  <div className="h-4 w-24 bg-gray-300 rounded mb-2" />
                  <div className="h-6 w-40 bg-gray-300 rounded mb-2" />
                  <div className="flex items-center mb-4 gap-2">
                    <div className="w-4 h-4 bg-gray-300 rounded-full" />
                    <div className="h-4 w-20 bg-gray-300 rounded" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {Array.from({ length: 4 }).map((_, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-300 h-6 w-16 rounded-sm"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex space-x-4 mb-6 animate-pulse">
              <div className="bg-gray-300 h-10 w-40 rounded-sm" />
              <div className="bg-gray-300 h-10 w-40 rounded-sm" />
            </div>
            <div className="bg-gray-200 mb-6 rounded-sm animate-pulse">
              <div className="p-4 flex items-start space-x-3">
                <div className="flex-1">
                  <div className="h-5 w-32 bg-gray-300 rounded mb-2" />
                  <div className="h-4 w-full bg-gray-300 rounded" />
                </div>
              </div>
            </div>
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 bg-[#f9fafb] rounded-sm animate-pulse"
                >
                  <div>
                    <div className="bg-gray-300 h-5 w-32 mb-2 rounded" />
                    <div className="bg-gray-200 h-4 w-40 rounded" />
                  </div>
                  <div className="bg-gray-200 h-4 w-24 rounded" />
                  <div className="bg-gray-300 h-6 w-6 rounded-full" />
                </div>
              ))}
            </div>
          </div>{" "}
          <div className="space-y-6">
            <div className="bg-white border-gray-700 animate-pulse">
              <div className="p-4">
                <div className="h-5 w-32 bg-gray-300 rounded mb-4" />
                <div className="space-y-3">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-[30px] h-[30px] bg-gray-300 rounded" />
                      <div className="flex-1">
                        <div className="h-4 w-24 bg-gray-300 rounded mb-1" />
                        <div className="h-3 w-32 bg-gray-200 rounded" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-white border-gray-700 animate-pulse">
              <div className="p-4">
                <div className="h-5 w-32 bg-gray-300 rounded mb-4" />
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-gray-200 rounded-full" />
                  <div className="h-4 w-24 bg-gray-200 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletoMangaDetailPage;
