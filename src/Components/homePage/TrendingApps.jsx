'use client'

import AppCard from "@/Components/ui/AppsCard";
import { HashLoader } from "react-spinners";
import Link from "next/link";
import useApps from "@/hooks/useApps";
import AppsCard from "@/Components/ui/AppsCard";

// import { useLoaderData } from "react-router";

// const appsPromise = fetch("/data.json").then((res) => res.json());

const TrendingApps = () => {
  //   const apps = use(appsPromise);
  //   console.log(apps, "apps");

  //   const data = useLoaderData();
  //   console.log(data, "data from homepage");

  const { apps, loading } = useApps();

  return (
    <div className="container mx-auto my-[60px]">
      {/* Section header */}
      <div className="mb-8 text-center">
        <h2 className="font-bold text-4xl my-4">Trending apps</h2>
        <p className="text-gray-600">
        Discover apps for everything—from learning and productivity to entertainment
        </p>
      </div>
      {/* {loading ? (
        <div className="flex h-[50vh] justify-center items-center">
          <h2 className="font-bold text-3xl text-pink-700">Loading....</h2>
        </div>
      ) : ( */}
        <div className="grid md:grid-cols-3 gap-5 grid-cols-1 container mx-auto">
          {apps.slice(0, 9).map((app, ind) => {
            return <AppsCard app={app} key={ind} />;
          })}
        </div>
      {/* )} */}

      <div className="text-center mt-4">
        <Link href={"/apps"}>
          <button className="btn bg-pink-500 text-white">View All</button>
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;