import React, { useState } from 'react';
import { Button, Container, FormControl } from 'react-bootstrap';
import { BsList, BsPersonCircle, BsThreeDotsVertical} from 'react-icons/bs';
import { BiSolidMicrophone } from 'react-icons/bi'
import { FaYoutube } from 'react-icons/fa';
import { PiMagnifyingGlassLight } from 'react-icons/pi';

function Header({ onToggleSideNav }) {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const handleToggleSideNav = () => {
    setSideNavOpen(!sideNavOpen);
    onToggleSideNav();
  };

  return (
    <Container fluid className="d-flex justify-content-between align-items-center m-1 sticky mt-2">
      <div className="d-flex align-items-center">
        <BsList
          className="me-2"
          style={{ fontSize: '1.65em', cursor: 'pointer' }}
          onClick={handleToggleSideNav}
        />

        <FaYoutube className="me-1" style={{ fontSize: '2em', color: 'red' }} />
        <span style={{ fontFamily: 'Oswald', fontSize: '1.3em', fontWeight: '800' }}>
          YouTube
        </span>
      </div>

      <div className="d-flex align-items-center position-relative">
        <FormControl
          className="rounded-pill pl-5 pr-3"
          placeholder="Search"
          style={{minWidth:'20vw', width: '40vw' }}
        />
        <BiSolidMicrophone className='fs-4 ms-3'/>
        <span className="position-absolute end-0 top-0 mt-1 me-5">
          <PiMagnifyingGlassLight style={{ fontSize: '2em', color: '#cccc', borderLeftStyle: '1px solid grey'}} />
        </span>
      </div>

      

      <div className="d-flex align-items-center">
        <BsThreeDotsVertical className="me-2" style={{ fontSize: '1.4em' }} />
        <Button className="rounded-pill bg-white border-primary text-primary" style={{ fontSize: '2vh' }}>
          <BsPersonCircle className="me-2" style={{ fontSize: '1.3em' }} />
          Sign in
        </Button>
      </div>
    </Container>
  );
}

export default Header;
