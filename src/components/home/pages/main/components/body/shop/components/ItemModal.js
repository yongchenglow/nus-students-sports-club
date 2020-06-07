import React, { Component } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';

import Carousel from 'nuka-carousel';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';

class ItemModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collectionLabel: '',
      showError: false
    };

    this.onChange = this.onChange.bind(this);
  }

  // When the restaurant label changes
  onChange(e) {
    this.setState({[e.currentTarget.name]: e.currentTarget.value });
    this.validateInput(e.currentTarget.name, e.currentTarget.value);
  }

  hideModal() {
    this.props.closeItemModal();
  }

  render() {
    var details = [];
    for(var detail in this.props.item.details){
      details.push(
        <h6>{this.props.item.details[detail]}</h6>
      );
    }

    var maxSlide = 3;
    var itemMaxSlide = this.props.item.pictures_url.length;
    console.log(itemMaxSlide);
    var slidesToShow;
    var withoutControls;

    if(itemMaxSlide > maxSlide){
      slidesToShow = maxSlide;
      withoutControls = false;
    } else {
      slidesToShow = itemMaxSlide;
      withoutControls = true;
    }

    var pictures = []
    for(var itemNo in this.props.item.pictures_url){
      pictures.push(
        <img className='rounded' style={{width:'80px'}} src={this.props.item.pictures_url[itemNo]} alt={this.props.item.name+'-'+itemNo} />
      );
    }
    console.log(this.props.item.pictures_url);

    return (
      <div>
          <Modal
            show = {this.props.show}
            onHide = {this.props.onHide}
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'
            centered
          >
            <Modal.Header className='bg-success' style={{padding:'9px 1rem'}} closeButton>
              <Modal.Title className='text-white' style={{fontSize:'1.25rem'}}>
                Sports Club Merchandise
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col>
                  <img className='img-fluid mb-2 rounded' src={this.props.item.pictures_url[0]} alt={this.props.item.name} />
                  <Carousel
                    cellSpacing={0}
                    slidesToShow={4}
                    autoplay={true}
                    withoutControls={withoutControls}
                    wrapAround={true}
                    dragging={false}
                    defaultControlsConfig={{
                      nextButtonStyle:{display:'none'},
                      prevButtonStyle:{display:'none'},
                      pagingDotsContainerClassName:'slider-controls',
                      pagingDotsClassName: 'paging-dot-button'
                    }}
                  >
                    {pictures}
                  </Carousel>
                </Col>
                <Col>
                  <h3>{this.props.item.name}</h3>
                  <h4>{this.props.item.description}</h4>
                  <h6 className='text-muted'>{this.props.item.price}</h6>
                  {details}
                  <img className='img-fluid mb-2 rounded' src={this.props.item.size_chart_url} alt={this.props.item.name} />
                  <div className='text-muted'>*While Stocks Last, Get them before it runs out!</div>
                  <div className='text-muted'>*Item is low in Stock</div>
                  <Button variant='success' className='btn btn-block'>Buy Now</Button>
                </Col>
              </Row>
            </Modal.Body>
          </Modal>
      </div>
    )
  }
}

export default ItemModal;