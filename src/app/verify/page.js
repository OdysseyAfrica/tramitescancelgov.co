import React from 'react'

const page = () => {
  return (
    <div className='p-2'>
        {/* Top */}
        <div className='text-center font-black text-m pt-3 pb-6 font-Lato'>
            SITAC
        </div>

        {/* Line */}
        <div className='h-0.5 bg-gray w-11/12'/>

        <div className='flex flex-col justify-center align-middle items-center'>
            {/* Title */}
            <div className='text-sm font-Lato pb-5 pt-5'>
                Visa verificada
            </div>
        </div>

        {/* Line */}
        <div className='h-0.5 bg-gray w-11/12'/>

        {/* Bottom */}
        <div className='fixed bottom-0 font-Lato text-ms text-center text-dark'>
            This application works best in Internet Explorer 8 (or higher), Mozilla Firefox or Google Chrome <br />
            @Versión 6.2.5
        </div>
    </div>
  )
}

export default page