import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import ItemModal from './ItemModal';
import $ from 'jquery';

class Items extends Component {
  constructor(props){
    super(props);
    this.state = {
      shopData: null,
      has_error: false,
      showModal: false,
      item: null
    };

    this.getShopData = this.getShopData.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClickItem = this.handleClickItem.bind(this);
    this.getShopData();
  }

  getShopData(){
    $.ajax({
      url: process.env.REACT_APP_SHOP_FILE_PATH+'shop.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({shopData: this.parseShopData(data)});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        this.setState({ has_error: true });
      }.bind(this)
    });
  }

  // Parse the Shop Data by adding the file paths defined in the environment
  parseShopData(data){
    var shopData = data;
    var addFileString = process.env.REACT_APP_SHOP_FILE_PATH + '/images/';

    // Adjust Carousel Image File Path
    shopData.items.forEach(function(item,index){
      item.pictures_url.forEach(function(picture,index){
        item.pictures_url[index] = addFileString + picture;
      });
      item.size_chart_url = addFileString + item.size_chart_url;
    });

    return shopData;
  }

  addCardClass(e) {
    e.currentTarget.className = 'shop-item text-center card transform';
  }

  removeCardClass(e) {
    e.currentTarget.className = 'shop-item text-center';
  }

  handleClose(){
    this.setState({showModal: false});
  }

  handleShow(){
    this.setState({showModal: true});
  }

  handleClickItem(e){
    var itemID = e.currentTarget.dataset.id;
    this.setState({ item: this.state.shopData.items[itemID] });
    this.handleShow();
  }

  render () {
    // Redirect to page not found if the member club does not exist
    if(this.state.has_error === true){
      return (
        <Redirect to='/notfound' />
      );
    }

    var shops = [];
    if(this.state.shopData !== null){
      for(var i = 0; i < this.state.shopData["items"].length; i++){
        var item = this.state.shopData.items[i];
        shops.push(
          <div className='shop-item text-center' key={'item-'+i} data-id={i} onMouseEnter={this.addCardClass} onMouseLeave={this.removeCardClass} onClick={this.handleClickItem}>
            <img className='img-fluid mb-2 rounded' src={item.pictures_url[0]} alt={item.name} />
            <h6 style={{marginTop:'0.5rem',fontSize:'1.2rem'}}>{item.name}</h6>
          </div>
        );
      }
    }

    return (
      <div className='section'>
        <Container>
          <div className='text-center'>
            {shops}
          </div>
          {this.state.showModal? (
            <ItemModal
            show={this.state.showModal}
            onHide={this.handleClose}
            item={this.state.item}/>
          ): null}
        </Container>
      </div>
    );
  }
};

export default Items;
