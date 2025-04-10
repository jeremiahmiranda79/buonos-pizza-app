import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { CATEGORIES_CATERING } from '../../constants/cateringMenuItems/categoriesCatering';
import { PASTA } from '../../constants/cateringMenuItems/pasta';

const Pasta = () => {
  return (
    <Container id={CATEGORIES_CATERING[2].id}>
      <h1 className='Title'>{CATEGORIES_CATERING[2].name}</h1>
      <h2>{CATEGORIES_CATERING[2].included}</h2>
      <h2>{CATEGORIES_CATERING[2].choice}</h2>
      <h2>{CATEGORIES_CATERING[2].portion}</h2>
      <Row xs={1} md={2} lg={3} className="g-4 d-flex justify-content-center">
        {PASTA.map((item) => (
          <Col key={item.id}>
            <Card className='h-100'>
              <Card.Img 
                variant="top" 
                src={item.images}
                alt={item.name} 
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                {item.size1 ? <Card.Text>{item.size1} ${item.price1}</Card.Text> : null}
                {item.addBrocoli ? <Card.Text>{item.addBrocoli} ${item.addBrocoliPrice}</Card.Text> : null}
                {item.addChicken ? <Card.Text>{item.addChicken} ${item.addChickenPrice}</Card.Text> : null}
              </Card.Body>
            </Card>
          </Col>
        ))};
      </Row>
    </Container>
  );
};

export default Pasta;