import Navbar from '@/Components/Navbar';
import React, { Children } from 'react';

const PublicLayout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar> 
            {children}
        </div>
    );
};

export default PublicLayout;