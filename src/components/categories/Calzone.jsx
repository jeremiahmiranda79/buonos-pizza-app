import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import { PRODUCT_CATEGORIES } from '../../constants/regularMenuItems/categoriesRegular';
import { CALZONE } from '../../constants/regularMenuItems/calzone';
import { CALZONE_FILLINGS } from '../../constants/calzoneFillings';

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
          Calzone Fillings
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        <h4>
          Calzone fillings are sold by the each <br />
        </h4>

        <ul>
          {CALZONE_FILLINGS.map((filling) => (
              <li>
                {filling.name} - Small: ${filling.priceSmall.toFixed(2)} Large: ${filling.priceLarge.toFixed(2)}
              </li>
            ))
          }
        </ul>

      </Modal.Body>
    </Modal>
  );
};

const Calzone = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Container id={PRODUCT_CATEGORIES[6].id}>
      <h1 className='Title'>{PRODUCT_CATEGORIES[6].name}</h1>
      <Image 
        src="/images/categories/calzone.webp" 
        fluid 
        alt={PRODUCT_CATEGORIES[6].name} 
      />

      <br /> <br />

      <Row xs={1} md={2} lg={3} className="g-4 d-flex justify-content-center">
        {CALZONE.map((item) => (
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
                  See filling choices
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

export default Calzone;