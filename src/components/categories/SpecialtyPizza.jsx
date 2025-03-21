import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import { PRODUCT_CATEGORIES } from '../../constants/regularMenuItems/categoriesRegular';
import { SPECIALTY_PIZZA } from '../../constants/regularMenuItems/specialtyPizza';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Specialty Pizza Toppings
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        <p>     
          Additional specialty pizza toppings are sold by the each <br />
          Anchovy - (Full: $2.75) (Half: $1.50) <br />
          Bacon - (Full: $2.75) (Half: $1.50) <br />
          Banana Peppers - (Full: $2.75) (Half: $1.50) <br />
          Basil Puree - (Full: $2.75) (Half: $1.50) <br />
          Green Bell Peppers - (Full: $2.75) (Half: $1.50) <br />
          Broccoli - (Full: $2.75) (Half: $1.50) <br />
          Garlic - (Full: $2.75) (Half: $1.50) <br />
          Ham - (Full: $2.75) (Half: $1.50) <br />
          Jalapenos - (Full: $2.75) (Half: $1.50) <br />
          Meatballs - (Full: $2.75) (Half: $1.50) <br />
          Mushrooms - (Full: $2.75) (Half: $1.50) <br />
          Olives - (Full: $2.75) (Half: $1.50) <br />
          Onions - (Full: $2.75) (Half: $1.50) <br />
          Pepperoni - (Full: $2.75) (Half: $1.50) <br />
          Pepperoncini - (Full: $2.75) (Half: $1.50) <br />
          Pineapple - (Full: $2.75) (Half: $1.50) <br />
          Roasted Red Pepper - (Full: $2.75) (Half: $1.50) <br />
          Sausage - (Full: $2.75) (Half: $1.50) <br />
          Spinach - (Full: $2.75) (Half: $1.50) <br />
          Salami - (Full: $2.75) (Half: $1.50) <br />
          Tomato - (Full: $2.75) (Half: $1.50) <br />
          Capicola - (Full: $5.25) (Half: $2.75) <br />
          Chicken Cutlet - (Full: $5.25) (Half: $2.75) <br />
          Eggplant - (Full: $5.25) (Half: $2.75) <br />
          Soppressata - (Full: $5.25) (Half: $2.75) <br />
        </p>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>

    </Modal>
  );
};

const SpecialtyPizza = () => {
  const [modalShow, setModalShow] = React.useState(false);

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

                <Button variant="primary" onClick={() => setModalShow(true)}>
                  See topping choices
                </Button>

                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SpecialtyPizza;