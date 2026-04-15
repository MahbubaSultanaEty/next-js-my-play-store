import React, { isValidElement } from 'react';
import Image from 'next/image';
import InstallToggleBtn from '@/Components/ui/InstallToggleBtn';

const appsPromise = async () => {
    const res = await fetch("http://localhost:3000/data.json");
    const data = res.json();
   
    return data;
}

const AppDetailsPage = async ({ params }) => {


    const { id } = await params;
    console.log( id);

    
    const apps =await appsPromise();
    console.log("apps", apps);
    const app = apps.find((app) => app.id === Number(id));
    
    return (
         <div className="min-h-screen bg-base-200 p-6">
      
      {/* Main Card */}
      <div className="max-w-5xl mx-auto bg-base-100 rounded-3xl shadow-xl p-6 space-y-6">
        
        {/* 🔥 Top Section */}
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          
          {/* Image */}
          <Image
            src={app.image}
                        alt={app.title}
                        width={100}
                        height={100}
            className="w-40 h-40 object-cover rounded-2xl shadow-md"
          />

          {/* Info */}
          <div className="flex-1 text-center md:text-left space-y-2">
            <h1 className="text-3xl font-bold">{app.title}</h1>
            <p className="text-sm text-gray-500">{app.companyName}</p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-3 text-sm">
              <span className="badge badge-outline">⬇ {app.downloads}</span>
              <span className="badge badge-outline">⭐ {app.ratingAvg}</span>
              <span className="badge badge-outline">{app.size} MB</span>
            </div>

            {/* Button */}
           <InstallToggleBtn></InstallToggleBtn>
          </div>
        </div>

        {/* ✨ Divider */}
        <div className="divider"></div>

        {/* 📝 Description */}
        <div>
          <h2 className="text-xl font-semibold mb-2">About this app</h2>
          <p className="text-gray-600 leading-relaxed">
            {app.description}
          </p>
        </div>

        {/* ⭐ Ratings Breakdown */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Ratings & Reviews</h2>

          <div className="space-y-2">
            {app.ratings.map((r, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-16 text-sm">{r.name}</span>

                <progress
                  className="progress progress-primary w-full"
                  value={r.count}
                  max="9000000"
                ></progress>

                <span className="text-xs text-gray-500">
                  {(r.count / 1000000).toFixed(1)}M
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
    );
};

export default AppDetailsPage
;