import React from 'react';
import './Header.css'; // Import CSS file for styling

const Header = () => {
  // Get current time in London
  const londonTime = new Date().toLocaleTimeString('en-GB', {timeZone: 'Europe/London'});

  return (
    <div className="header-container">
      <div className="bg-black text-white py-4 px-6 flex justify-between items-center relative">
        <div className="flex items-center">
          <span className="font-bold ml-32 text-2xl">STUDIO-BA®</span>
          <span className="ml-60 text-xl">Sao Paulo AM {londonTime}</span>
          <span className="ml-60 text-xl">London PM {londonTime}</span>
        </div>
        <div>
          <span className="text-2xl font-normal mr-14">Summary</span>
        </div>
        <div className='line'></div>
      </div>
      {/* <div className="line"></div> Animated line */}
    </div>
  );
}

export default Header;
