import React from 'react'
import { GoHistory, GoHome } from 'react-icons/go'
import Shorts from '../assets/shorts.svg'
import { MdOutlineSubscriptions, MdOutlineVideoLibrary } from 'react-icons/md'

function SideNav2() {
  return (
    <aside className=' d-flex flex-column bg-white' style={{ height: '100vh'}}>
        <div className='mt-3'>
            <GoHome className='me-2 ms-3' style={{fontSize: '1.47em'}}/> 
            <p className='ms-2' style={{fontSize: '0.8em'}}>Home</p>
        </div>

        <div className='mt-3'>
            <img src={Shorts} alt="ytShorticon" className='me-2 ms-3' style={{width: '1.47em'}}/> 
            <p className='ms-2' style={{fontSize: '0.8em'}}>Shorts</p>
        </div>

        <div className='mt-3'>
            <MdOutlineSubscriptions className='me-2 ms-3' style={{fontSize: '1.47em'}}/> 
            <p className='' style={{fontSize: '0.8em'}}>Subscription</p>
        </div>

        <div className='mt-3'>
            <MdOutlineVideoLibrary className='me-2 ms-3' style={{fontSize: '1.47em'}}/> 
            <p className='ms-2' style={{fontSize: '0.8em'}}>Library</p>
        </div>

        <div className='mt-3'>
            <GoHistory className='me-2 ms-3' style={{fontSize: '1.47em'}}/> 
            <p className='ms-2' style={{fontSize: '0.8em'}}>History</p>
        </div>
</aside>
  )
}

export default SideNav2
