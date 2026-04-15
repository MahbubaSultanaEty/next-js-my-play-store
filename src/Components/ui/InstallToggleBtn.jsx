'use client'
import  { AppsInstalledContext } from '@/app/context/InstallAppsContextProvider';
import React, { useContext } from 'react';

const InstallToggleBtn = () => {
    const handleInstallNow = () => {
        console.log("handle install now");
    };

    const something = useContext(AppsInstalledContext);
    console.log(something, "something");
    return (
         <button onClick={handleInstallNow} className="btn btn-success mt-4">
              Install Now ➡️
         </button>
    );
};

export default InstallToggleBtn;