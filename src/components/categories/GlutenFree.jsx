import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import { PRODUCT_CATEGORIES } from '../../constants/regularMenuItems/categoriesRegular';
import { GLUTEN_FREE } from '../../constants/regularMenuItems/glutenFree';

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
          Gluten Free Toppings
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        <p>     
          Additional gluten free pizza toppings are sold by the each <br />
          Anchovy - $1.75 <br />
          Bacon - $1.75 <br />
          Banana Peppers - $1.75 <br />
          Basil Puree - $1.75 <br />
          Green Bell Peppers - $1.75 <br />
          Broccoli - $1.75 <br />
          Garlic - $1.75 <br />
          Ham - $1.75 <br />
          Jalapenos - $1.75 <br />
          Meatballs - $1.75 <br />
          Mushrooms - $1.75 <br />
          Olives - $1.75 <br />
          Onions - $1.75 <br />
          Pepperoni - $1.75 <br />
          Pepperoncini - $1.75 <br />
          Pineapple - $1.75 <br />
          Roasted Red Pepper - $1.75 <br />
          Sausage - $1.75 <br />
          Spinach - $1.75 <br />
          Salami - $1.75 <br />
          Tomato - $1.75 <br />
          Capicola - $3.50 <br />
          Chicken Cutlet - $3.50 <br />
          Eggplant - $3.50 <br />
          Soppressata - $3.50 <br />
        </p>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>

    </Modal>
  );
};

const GlutenFree = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Container id={PRODUCT_CATEGORIES[2].id}>
      <h1 className='Title'>{PRODUCT_CATEGORIES[2].name}</h1>
      <Image 
        src="/images/categories/pizza-gluten-free.webp" 
        fluid 
        alt={PRODUCT_CATEGORIES[2].name}
      />

      <br /> <br />

      <Row xs={1} md={2} lg={3} className="g-4 d-flex justify-content-center">
        {GLUTEN_FREE.map((item) => (
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

export default GlutenFree;