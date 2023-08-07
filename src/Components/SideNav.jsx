import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { GoHome, GoHistory } from 'react-icons/go';
import { MdOutlineSubscriptions, MdOutlineVideoLibrary, MdOutlineMovie, MdOutlineFeedback } from 'react-icons/md';
import { PiMusicNote, PiNewspaperClippingLight, PiGearSixLight } from 'react-icons/pi';
import { SiYoutubegaming } from 'react-icons/si';
import { AiOutlineTrophy, AiOutlineFire, AiOutlinePlusCircle } from 'react-icons/ai';
import { GiClothesline } from 'react-icons/gi';
import { CiFlag1 } from 'react-icons/ci'
import { BiHelpCircle } from 'react-icons/bi';
import Shorts from '../assets/shorts.svg';
import { Button, Nav } from 'react-bootstrap';
import Icon from '../assets/icons8-youtube.svg'
import '../index.css';

function SideNav({ isOpen }) {
  if (!isOpen) {
    return null;
  }

  return (
    <aside
      className="scroll-bar m-3 d-flex flex-column bg-white lg"
      style={{ width: '20%', overflow: 'scroll', height: '90vh' }}
    >
    <Nav className="flex-column ms-0">
      <Nav.Link className="mb-4 p-0 text-black hover-bg" active>
        <GoHome className="me-2 fs-4" /> Home
      </Nav.Link >

      <Nav.Link className="mb-4 p-0 text-black hover-bg">
        <img src={Shorts} alt="ytShorticon" className="me-2" style={{ width: '1.47em' }} /> Shorts
      </Nav.Link>

      <Nav.Link className="p-0 text-black hover-bg">
        <MdOutlineSubscriptions className="fs-4" /> Subscription
      </Nav.Link>

      <hr />

      <Nav.Link className="mb-4 p-0 text-black hover-bg">
        <MdOutlineVideoLibrary className="me-2 fs-4" /> Library
      </Nav.Link>

      <Nav.Link className="p-0 text-black hover-bg">
        <GoHistory className="me-2 fs-4" /> History
      </Nav.Link>

      <hr />

      <div className="d-flex flex-column align-items-start p-0 text-black hover-bg">
        <p className="fs-6">Sign in to like videos, comment, and subscribe.</p>
        <Button className="rounded-pill bg-white border-light text-primary fs-6">
          <BsPersonCircle className="me-2 fs-5" />Sign in
        </Button>
      </div>

      <hr />

      <p className="fs-5">Explore</p>

      <Nav.Link className="mb-4 p-0 text-black hover-bg">
        <AiOutlineFire className="me-2 fs-4" /> Trending
      </Nav.Link>

      <Nav.Link className="mb-4 p-0 text-black hover-bg">
        <PiMusicNote className="me-2 fs-4" /> Music
      </Nav.Link>

      <Nav.Link className="mb-4 p-0 text-black hover-bg" >
        <MdOutlineMovie className="me-2 fs-4" /> Movies
      </Nav.Link>

      <Nav.Link className="mb-4 p-0 text-black hover-bg">
        <SiYoutubegaming className="me-2 fs-4" /> Gaming
      </Nav.Link>

      <Nav.Link className="mb-4 p-0 text-black hover-bg">
        <PiNewspaperClippingLight className="me-2 fs-4" /> News
      </Nav.Link>

      <Nav.Link className="mb-4 p-0 text-black hover-bg">
        <AiOutlineTrophy className="me-2 fs-4" /> Sports
      </Nav.Link>

      <Nav.Link className="p-0 text-black hover-bg">
        <GiClothesline className="me-2 fs-4" /> Fashion & Beauty
      </Nav.Link>

      <hr />

      <Nav.Link className=" p-0 text-black hover-bg">
        <AiOutlinePlusCircle className="me-2 fs-4" /> Browse channels
      </Nav.Link>

      <hr />

      <p className="fs-5">More from YouTube</p>

      <Nav.Link className="mb-3 p-0 text-black hover-bg">
        <img src={Icon} alt="ytShorticon" className="me-2" style={{ width: '1.47em' }} /> YouTube Premium
      </Nav.Link>

      <Nav.Link className="mb-3 p-0 text-black hover-bg">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Youtube_Music_icon.svg" alt="ytShorticon" className="me-2" style={{ width: '1.47em' }} /> YouTube Music
      </Nav.Link>

      <Nav.Link className=" p-0 text-black hover-bg">
        <img src="https://e7.pngegg.com/pngimages/834/95/png-clipart-youtube-kids-child-mobile-app-youtube-emblem-child.png" alt="ytShorticon" className="me-2" style={{ width: '1.47em' }} /> YouTube Kids
      </Nav.Link>

      <hr />

      <Nav.Link className="mb-4 p-0 text-black hover-bg">
        <PiGearSixLight className="me-2 fs-4" /> Settings
      </Nav.Link>

      <Nav.Link className="mb-4 p-0 text-black hover-bg">
        <CiFlag1 className="me-2 fs-4" /> Report History
      </Nav.Link>

      <Nav.Link className="mb-4 p-0 text-black hover-bg">
        <BiHelpCircle className="me-2 fs-4" /> Help
      </Nav.Link>

      <Nav.Link className=" p-0 text-black hover-bg">
        <MdOutlineFeedback className="me-2 fs-4" /> Send Feedback
      </Nav.Link>

      <hr />

        <div className='d-flex flex-row flex-wrap me-2 decor-none'>
            <a href="" className='me-2'>About</a>
            <a href="" className='me-2'>Press</a>
            <a href="" className='me-2'>Copyright</a>
            <a href="" className='me-2'>Contact us</a>
            <a href="" className='me-2'>Creators</a>
            <a href="" className='me-2'>Advertise</a>
            <a href="" className='me-2'>Developers</a>
        </div>

        <p className='mt-4' style={{fontSize: '13px'}}>&copy; 2023 Google LLC</p>

      </Nav>
      
    </aside>
  );
}

export default SideNav;
