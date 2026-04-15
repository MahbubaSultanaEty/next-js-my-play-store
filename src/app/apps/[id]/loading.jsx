import React from 'react';

const AppDetailsLoading = () => {
    return (
        <div className='flex justify-center items-center my-12'>
             <div className='w-10/12 '>
            <div className="flex w-full  flex-col gap-4">
                <div className="skeleton h-32 w-full">
                    <div className='skeleton bg-amber-500 w-[60%] mx-auto'></div>
  </div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-[30vh] w-full"></div>
</div>
        </div>
           </div>
     
    );
};

export default AppDetailsLoading;