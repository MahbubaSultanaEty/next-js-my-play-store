import React from 'react';
import Image from 'next/image';

const AppCard = ({ app }) => {
  return (
    <div className="w-64 bg-white rounded-2xl shadow-md hover:shadow-xl transition border-t-purple-700 border-t duration-300 overflow-hidden cursor-pointer mx-auto">
      
      {/* Image */}
          <div className="h-40 flex items-center justify-center  overflow-hidden">
              <div>
                   <Image
          src={app.image}
                  alt={app.title}
                  width={100}
                  height={100}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
              </div>
       
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {app.title}
        </h2>

        {/* Info Row */}
        <div className="flex justify-between items-center text-sm text-gray-500">
          
          {/* Downloads */}
          <span>⬇ {app.downloads}</span>

          {/* Rating */}
          <span className="flex items-center gap-1">
            ⭐ {app.ratingAvg}
          </span>
        </div>

      </div>
    </div>
  );
};

export default AppCard;