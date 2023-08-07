import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import SideNav from './Components/SideNav';
import SideNav2 from './Components/SideNav2';
import Videos from './Components/Videos';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const handleToggleSideNav = () => {
    setSideNavOpen(!sideNavOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSideNavOpen(true);
      } else {
        setSideNavOpen(false);
      }
    };

    
    window.addEventListener('resize', handleResize);

    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <Header onToggleSideNav={handleToggleSideNav}/>
      
      <div className='d-flex'>
        {sideNavOpen ? null : <SideNav2 />}
        <SideNav isOpen={sideNavOpen} />
        <Videos />
      </div>
      
    </>
  );
}

export default App;
