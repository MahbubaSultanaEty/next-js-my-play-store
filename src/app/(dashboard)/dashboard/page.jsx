'use client'
import React, { useContext } from 'react';
import { AppsInstalledContext } from '../../context/InstallAppsContextProvider';
import useApps from '@/hooks/useApps';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import ChartLegend from '@/Components/ui/ChartLegend';



const Dashboard = () => {
    const { installedApps } = useContext(AppsInstalledContext);
    const { apps } = useApps();
    console.log(apps, "apps");
    const unInstalledAppsLength = apps.length - installedApps.length;

    const chartData = [
        { name: "Installed", value: installedApps.length, fill: "green" },
        {name: "Uninstalled", value: unInstalledAppsLength, fill: "red"}
    ]

    return (
        <div className="w-full max-w-3xl mx-auto mt-10">
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-6 border border-gray-100">
        
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">
            Install vs Uninstall Ratio
          </h2>
          <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-500">
            Analytics
          </span>
        </div>

        {/* Chart Area */}
        <div className="flex items-center justify-center ">
                    <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={chartData}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
              >
             <Legend></Legend>  
      </Pie>
      <Tooltip></Tooltip>
            </PieChart>
                                
        </div>
      </div>
    </div>
    );
};

export default Dashboard;