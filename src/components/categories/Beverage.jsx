import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import { PRODUCT_CATEGORIES } from '../../constants/regularMenuItems/categoriesRegular';
import { BEVERAGE } from '../../constants/regularMenuItems/beverage';

const Beverage = () => {
  return (
    <Container id={PRODUCT_CATEGORIES[14].id}>
      <h1 className='Title'>{PRODUCT_CATEGORIES[14].name}</h1>
      <Image src="/images/categories/beverage-soda-fountain.webp" fluid className='' />

      <br /> <br />

      <Row xs={1} md={2} lg={3} className="g-4 d-flex justify-content-center">
        {BEVERAGE.map((item) => (
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
  );
};

export default Beverage;