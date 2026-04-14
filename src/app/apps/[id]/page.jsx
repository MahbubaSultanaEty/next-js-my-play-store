import React from 'react';

const AppDetalsPage = async ({ params }) => {
  
    const { id } =await params;
    console.log(params, id);
    return (
        <div>
            <h2 className="font-bold-text-center">Details Page</h2>
        </div>
    );
};

export default AppDetalsPage;