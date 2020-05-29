import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

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
    var showModal = false;

    return (
      <div>
          <Modal
            show = {showModal}
            onHide = {this.hideModal}
            size='md'
            aria-labelledby='contained-modal-title-vcenter'
            centered
          >
            <Modal.Header className='bg-success' closeButton>
              <Modal.Title id="contained-modal-title-vcenter" className='text-white'>
                <FontAwesomeIcon icon={faPlus} className='iconMargin'/> New Collection
              </Modal.Title>
            </Modal.Header>
            <Form onSubmit={this.onSubmit}>
              <Modal.Body>
                <Form.Group controlId='formCollectionLabel'>
                  <Form.Label>Collection Label</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Collection Label'
                    name='collectionLabel'
                    value={this.state.collectionLabel}
                    onChange={this.onChange}
                    isInvalid={this.state.collectionLabelError !== '' && this.state.collectionLabel !== ''? true: false}
                    isValid={this.state.collectionLabelError === '' && this.state.collectionLabel !== ''? true: false}
                    autoFocus
                    required/>
                  <Form.Text className='text-danger'>{this.state.collectionLabelError}</Form.Text>
                </Form.Group>
                <Form.Group controlId='formCollectionColour'>
                  <Form.Label>Collection Colour</Form.Label>
                  <ButtonToolbar>
                    <ToggleButtonGroup type='radio' name='collections'>
                      {collection}
                    </ToggleButtonGroup>
                  </ButtonToolbar>
                  <Form.Text className='text-danger'>{this.state.collectionColourError}</Form.Text>
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                {this.props.collections.isLoading? addCollectionSpinner : null}
                  {this.state.showError && this.props.collections.isError ? <p className='text-danger'>{this.state.addCollectionError}</p> : null}
                <Button onClick={this.hideModal} variant="secondary">Close</Button>
                <Button variant='success' type='submit' name='add'>
                  <FontAwesomeIcon icon={faPlus} className='iconMargin'/> Collection
                </Button>
              </Modal.Footer>
            </Form>
          </Modal>
      </div>
    )
  }
}

AddCollectionModal.propTypes = {
  closeAddCollectionModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  collections: {
    collectionList: state.collections.collectionList,
    isModalOpen: state.collections.isModalOpen,
    actionType: state.collections.actionType,
    isLoading: state.collections.isLoading,
  },
  user: {
    userID: state.user.userID,
    name: state.user.name,
    email: state.user.email,
  }
});

export default ItemModal;