import InstallAppsContextProvider from '@/app/context/InstallAppsContextProvider';
import React from 'react';

const Providers = ({children}) => {
    return (
        <InstallAppsContextProvider>
            {children}
        </InstallAppsContextProvider>
    );
};

export default Providers;