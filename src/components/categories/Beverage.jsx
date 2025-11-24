import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import {PRODUCT_CATEGORIES} from '../../constants/regularMenuItems/categoriesRegular';
import {BEVERAGE} from '../../constants/regularMenuItems/beverage';
import {FOUNTAIN_DRINKS} from '../../constants/fountainDrinks';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CardFooter } from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">BEVERAGES</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Beverage choices</h4>
        <ul>{FOUNTAIN_DRINKS.map((drink) => (<li key={drink.id}>{drink.name}</li>))}</ul>
      </Modal.Body>
    </Modal>
  );
};

const Beverage = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Container id={PRODUCT_CATEGORIES[14].id} style={{scrollMarginTop: '150px'}}>
      <h1 className='Title' style={{marginTop: '10px', marginBottom: '10px'}}>{PRODUCT_CATEGORIES[14].name}</h1>
      <Image style={{marginBottom: '10px'}} src="/images/categories/beverage-soda-fountain.webp" fluid alt={PRODUCT_CATEGORIES[14].name}/>
      <Row xs={1} md={2} lg={3} className="g-4 d-flex justify-content-center">
        {BEVERAGE.map((item) => (
          <Col key={item.id}>
            <Card className='h-100'>
              <Card.Img variant="top" src={item.images} alt={item.name}/>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text style={{marginBottom: '5px'}}>{item.description}</Card.Text>
                {item.size1 ? <Card.Text style={{marginBottom: '0px'}}>{item.size1} ${item.price1.toFixed(2)}</Card.Text> : null}
                {item.size2 ? <Card.Text style={{marginBottom: '0px'}}>{item.size2} ${item.price2.toFixed(2)}</Card.Text> : null}
                {item.size3 ? <Card.Text style={{marginBottom: '0px'}}>{item.size3} ${item.price3.toFixed(2)}</Card.Text> : null}     
              </Card.Body>
              <CardFooter className='text-muted'>
                {item.isFountain && <div className='mt-auto'>
                  <Button style={{marginBottom: '7.5px', width: '100%'}} variant="primary" onClick={() => setModalShow(true)}>See drink choices</Button><br />
                </div>}
                {/* <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>      
                <a href='https://online.skytab.com/ba1259fa275c3fa135327dc3dba6bc5f/order-settings'><Button variant="primary" style={{width: '100%'}}>Start An Online Pickup Order <i class="fa-solid fa-cart-shopping"></i></Button></a> */}
              </CardFooter>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Beverage;