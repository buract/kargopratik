import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'


function ModalCalc(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    { 
      (props.classText === 'button') ?  
      <Button variant="primary" onClick={handleShow}>
        Gönderi Hesapla
      </Button> :  <span onClick={handleShow}>
        Gönderi Hesapla
      </span> 
      }
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>

            <div className="d-lg-flex align-items-center">
              <img src={require('../../images/calculator-img.svg').default} alt="" className="img-fluid 	d-none d-lg-block mr-4" />

              <div>
                <h2 class="  " >Gönderi ücretinizi hemen öğrenin</h2>
                <h5 class=" " >10,90’dan başlayan fiyatlarla </h5>
              </div>

            </div>


          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          

          <form method="post" name="myform" className="row">
            <div className="form-group col-4">
              <label>En(cm)</label>
              <input type="text" className="form-control" placeholder="0cm" name="en" />
            </div>
            <div className="form-group col-4">
              <label>Boy(cm)</label>
              <input type="email" className="form-control" placeholder="0cm"
                name="email" />
            </div>
            <div className="form-group col-4">
              <label>Yükseklik(cm)</label>
              <input type="password" className="form-control" placeholder="0cm"
                name="password" />
            </div>
            <div className="text-left col-12 mt-4">
              <button type="submit" className="btn btn-primary btn-block">Hesapla</button>
              <p>
              *Fiyatlarımız bütün Türkiye için geçerlidir
              </p>
            </div>
            
          </form>

        </Modal.Body>
        <Modal.Footer>
          <div className="d-lg-flex justify-content-between">
            <h3>
              Kargo Ücreti
            </h3>

            <h2>
              120 TL
            </h2>

          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}



export default ModalCalc;