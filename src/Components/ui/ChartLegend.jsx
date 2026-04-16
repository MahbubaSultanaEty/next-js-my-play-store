import React from 'react';

const ChartLegend = () => {
  return (
    <div className="flex items-center justify-center gap-6 mt-4">
      
      {/* Installed */}
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 border rounded-full bg-white-500"></span>
        <p className="text-sm text-gray-600">Installed</p>
      </div>

      {/* Uninstalled */}
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <p className="text-sm text-gray-600">Uninstalled</p>
      </div>

    </div>
  );
};

export default ChartLegend;