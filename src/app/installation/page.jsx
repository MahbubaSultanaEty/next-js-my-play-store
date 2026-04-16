'use client'
import React, { useContext } from 'react';
import { AppsInstalledContext } from '../context/InstallAppsContextProvider';
import Image from 'next/image';



const InstallationPage = () => {

    const { installedApps, setInstalledApps } = useContext(AppsInstalledContext);

    console.log(installedApps, "contextData");

    const handleUninstall = (app) => {
        
    }
    return (
       <div className="p-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">
          Installed Apps
        </h2>
        <span className="text-sm text-gray-500">
          {installedApps.length} apps
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {installedApps.map((app) => (
          <div
            key={app.id}
            className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-purple-500/40 via-pink-500/30 to-blue-500/40 hover:scale-[1.03] transition duration-300"
          >
            {/* Card */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-4 flex flex-col items-center text-center shadow-lg">
              
              {/* Floating uninstall button */}
              <button
                onClick={() => handleUninstall(app)}
                className="absolute -top-2 -right-4 opacity-0 group-hover:opacity-100 transition bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow-md hover:bg-red-600"
              >
                Uninstall
              </button>

              {/* App Icon */}
              <div className="w-16 h-16 relative mb-3">
                <Image
                  src={app.image}
                  alt={app.name}
                  fill
                  className="object-cover rounded-2xl shadow-md group-hover:scale-110 transition"
                />
              </div>

              {/* Name */}
              <h3 className="text-sm font-semibold line-clamp-1">
                {app.name}
              </h3>

              {/* Dev */}
              <p className="text-xs text-gray-500 line-clamp-1">
                {app.developer || "Unknown"}
              </p>

              {/* Install badge */}
              <span className="mt-2 text-[10px] px-2 py-[2px] bg-green-100 text-green-600 rounded-full">
                Installed
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {installedApps.length === 0 && (
        <div className="text-center mt-20 text-gray-400">
          <p className="text-xl">No apps installed 😢</p>
        </div>
      )}
    </div>
    );
};

export default InstallationPage;