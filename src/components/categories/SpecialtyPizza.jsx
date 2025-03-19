import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import { PRODUCT_CATEGORIES } from '../../constants/regularMenuItems/categoriesRegular';
import { SPECIALTY_PIZZA } from '../../constants/regularMenuItems/specialtyPizza';

const SpecialtyPizza = () => {
  return (
    <Container id={PRODUCT_CATEGORIES[1].id}>
      <h1 
        className='Title'>{PRODUCT_CATEGORIES[1].name}
      </h1>
      <Image 
        src="/images/categories/pizza-special.webp" 
        fluid 
        alt={PRODUCT_CATEGORIES[1].name} 
      />

      <br /> <br />

      <Row xs={1} md={2} lg={3} className="g-4 d-flex justify-content-center">
        {SPECIALTY_PIZZA.map((item) => (
          <Col key={item.id}>
            <Card  className='h-100'>
              <Card.Img 
                variant="top" 
                src={item.images} 
                alt={item.name}
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  {item.description}
                </Card.Text>

                {item.size1 ? <Card.Text>
                  {item.size1} ${item.price1.toFixed(2)}
                </Card.Text> : null}

                {item.size2 ? <Card.Text>
                  {item.size2} ${item.price2.toFixed(2)}
                </Card.Text> : null}

                {item.size3 ? <Card.Text>               
                  {item.size3} ${item.price3.toFixed(2)}
                </Card.Text> : null}
                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SpecialtyPizza;