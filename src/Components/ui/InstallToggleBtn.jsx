'use client'
import  { AppsInstalledContext } from '@/app/context/InstallAppsContextProvider';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const InstallToggleBtn = ({ app }) => {
     const {installedApps, setInstalledApps} = useContext(AppsInstalledContext);
//     console.log(installedApps, setInstalledApps);

    const handleInstallNow = () => {
         setInstalledApps([...installedApps, app]);
         toast.success(`${app.title} installed successfully`)
     };
     
     const isInstalled = installedApps.find(installedApp => installedApp.id == app.id)
     
    console.log("isInstalled", isInstalled);
   
    return (
         <button disabled={isInstalled ? true : false} onClick={handleInstallNow} className="btn btn-success mt-4">
              Install Now ➡️
         </button>
    );
};

export default InstallToggleBtn;