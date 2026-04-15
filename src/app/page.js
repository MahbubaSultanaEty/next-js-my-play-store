import Banner from "@/Components/homePage/Banner";
import Stat from "@/Components/homePage/Stat";
import TrendingApps from "@/Components/homePage/TrendingApps";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <Stat></Stat>
      <TrendingApps></TrendingApps>
    </>
  );
}
