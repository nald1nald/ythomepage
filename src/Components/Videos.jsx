import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import VideoCards from './VideoCards';
import VideoData from '../Videos.json';

function Videos() {
  return (
    <Container className="mt-5" style={{ overflow: 'scroll', maxHeight: '80vh' }}>
      <Row xxs={1} xs={1} md={2} lg={2} xl={3} xxl={3}>
        {VideoData.map((video) => (
          <Col key={video.id} className="mb-3">
            <VideoCards
              thumbnail={video.thumbnail}
              title={video.title}
              channelName={video.channelName}
              channelIcon={video.channelIcon}
              views={video.views}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Videos;
