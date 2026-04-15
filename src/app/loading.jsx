import React from 'react';

const loading = () => {
    return (
        <div className="flex w-screen flex-col px-12 mx-auto gap-4">
  <div className="skeleton h-[10vh] w-full"></div>
  <div className="skeleton h-[30vh] w-full"></div>
  <div className="skeleton h-[40vh] w-full"></div>
  <div className="skeleton h-[10vh] w-full"></div>
</div>

    );
};

export default loading;