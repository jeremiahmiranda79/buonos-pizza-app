import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

import { CATEGORIES_CATERING } from '../../constants/cateringMenuItems/categoriesCatering';
// import { SIDE } from '../../constants/cateringMenuItems/side';
import { SIDE } from '../../constants/cateringMenuItems/side';

const Side = () => {
  return (
    <Container id={CATEGORIES_CATERING[4].id}>
      <h1 className='Title'>{CATEGORIES_CATERING[4].name}</h1>
      <Image src={CATEGORIES_CATERING[4].images} fluid className='' />

      <br /> <br />

      {/* <h2>
        {CATEGORIES_CATERING[4].choice}
      </h2> */}

      <h2>
        {CATEGORIES_CATERING[4].portion}
      </h2>

      <br />

      <Row xs={1} md={2} lg={3} className="g-4 d-flex justify-content-center">
        {SIDE.map((item) => (
          <Col key={item.id}>
            <Card className='h-100'>
              <Card.Img variant="top" src={item.images} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text className=''>
                  {item.description}
                </Card.Text>

                {item.size1 ? <Card.Text className=''>
                  {item.size1} ${item.price1}
                </Card.Text> : null}

                {item.size2 ? <Card.Text className=''>
                  {item.size2} ${item.price2}
                </Card.Text> : null}

                {item.size3 ? <Card.Text className=''>               
                  {item.size3} ${item.price3}
                </Card.Text> : null}
                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Side;