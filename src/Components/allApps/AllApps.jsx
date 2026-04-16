'use client'
import React from 'react';
import Link from 'next/link';

import useApps from '@/hooks/useApps';
import AppsCard from '@/Components/ui/AppsCard';
import { HashLoader } from 'react-spinners';

const AllApps = () => {

 const { apps, loading } = useApps()
    return (
         <div className="container mx-auto my-15">
      {/* Section header */}
      <div className="mb-8 text-center">
        <h2 className="font-bold text-4xl my-4">All apps</h2>
        <p className="text-gray-600">
          Discover apps for everything—from learning and productivity to entertainment
        </p>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-[40vh]">
          <HashLoader color="#ad46ff" />
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-5 grid-cols-1 container mx-auto">
          {apps.map((app, ind) => {
            return <AppsCard app={app} key={ind} />;
          })}
        </div>
      )}

      <div className="text-center mt-4">
        <Link href={"/apps"}>
          <button className="btn bg-pink-500 text-white">View All</button>
        </Link>
      </div>
    </div>
    );
};

export default AllApps;