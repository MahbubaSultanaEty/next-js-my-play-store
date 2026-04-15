'use client'
import React, { useState } from 'react';
import { createContext } from 'react';

export const AppsInstalledContext= createContext()

const InstallAppsContextProvider = ({ children }) => {
    const [installedApps, setInstalledApps] = useState([])
    const data = {
        installedApps,
        setInstalledApps
    }
    return (
        <AppsInstalledContext.Provider value={data}>
            {children}
        </AppsInstalledContext.Provider>

    );
};

export default InstallAppsContextProvider;
