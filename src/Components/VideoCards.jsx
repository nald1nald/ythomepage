import React from 'react';
import { Card } from 'react-bootstrap';

function VideoCards({ thumbnail, title, channelName, channelIcon, views }) {
  return (
    <Card style={{ minWidth: '20vw', maxWidth: '77vw', border: 'none'}}>
      <Card.Img style={{borderRadius:'15px'}} className='' variant="top" src={thumbnail} />
      <Card.Body className='p-0 pt-2'>
      
      <div className="d-flex mb-2">
          <div className="rounded-circle overflow-hidden me-2" style={{ width: '40px', height: '35px' }}>
            <img src={channelIcon} alt="Channel Icon" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className=''> 
            <Card.Title className='mb-0 fs-6'>{title}</Card.Title>
            <Card.Text className='mb-0'>{channelName}</Card.Text>
            <Card.Text>{views}</Card.Text>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default VideoCards;
