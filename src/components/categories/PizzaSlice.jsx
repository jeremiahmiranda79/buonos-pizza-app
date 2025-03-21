import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import { PRODUCT_CATEGORIES } from '../../constants/regularMenuItems/categoriesRegular';
import { PIZZA_SLICE } from '../../constants/regularMenuItems/pizzaSlice';

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
          Pizza Slice Toppings
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        <p>          
          Additional pizza slice toppings are sold by the each <br />
          Anchovy - $0.75 <br />
          Bacon - $0.75 <br />
          Banana Peppers - $0.75 <br />
          Basil Puree - $0.75 <br />
          Green Bell Peppers - $0.75 <br />
          Broccoli - $0.75 <br />
          Garlic - $0.75 <br />
          Ham - $0.75 <br />
          Jalapenos - $0.75 <br />
          Meatballs - $0.75 <br />
          Mushrooms - $0.75 <br />
          Olives - $0.75 <br />
          Onions - $0.75 <br />
          Pepperoni - $0.75 <br />
          Pepperoncini - $0.75 <br />
          Pineapple - $0.75 <br />
          Roasted Red Pepper - $0.75 <br />
          Sausage - $0.75 <br />
          Spinach - $0.75 <br />
          Salami - $0.75 <br />
          Tomato - $0.75 <br />
          Capicola - $1.50 <br />
          Chicken Cutlet - $1.50 <br />
          Eggplant - $1.50 <br />
          Soppressata - $1.50 <br />
        </p>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>

    </Modal>
  );
};

const PizzaSlice = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Container id={PRODUCT_CATEGORIES[3].id}>
      <h1 className='Title'>{PRODUCT_CATEGORIES[3].name}</h1>
      <Image 
        src="/images/categories/pizza-slice.webp" 
        fluid 
        alt={PRODUCT_CATEGORIES[3].name}
      />

      <br /> <br />

      <Row xs={1} md={2} lg={3} className="g-4 d-flex justify-content-center">
        {PIZZA_SLICE.map((item) => (
          <Col key={item.id}>
            <Card className='h-100'>
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

                <div className='mt-auto'>
                  <Button  variant="primary" onClick={() => setModalShow(true)}>
                    See topping choices
                  </Button>
                </div>

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

export default PizzaSlice;