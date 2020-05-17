import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name:'',
      subject:'',
      email:'',
      message:'',
    };
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }
  
  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onSubjectChange(event) {
    this.setState({subject: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }
  
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    axios({
      method: 'POST', 
      url: './mail/contact_me.php', 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

  render () {
    return (
      <div className='section'>
        <Container>
          <Row className='justify-content-center'>
            <Col className='col-lg-8 col-md-10 col-sm-12'>
              <Card>
                <Card.Body className="card-body-no-border">
                  <Card.Title className='text-center mb-3' style={{"fontSize" :"1.75rem"}}>Send us a Message</Card.Title>
                  <form id='contact-form' onSubmit={this.handleSubmit.bind(this)} method='POST'>
                    <div className='flex-container flex-container-wrapper'>
                      <div className='flex-grow-item contact-form-top'>
                        <div className='form-group'>
                            <label htmlFor='name'>Name</label>
                            <input type='text' className='form-control' value={this.state.name} onChange={this.onNameChange.bind(this)} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>Email address</label>
                            <input type='email' className='form-control' aria-describedby='emailHelp' value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='subject'>Subject</label>
                            <input type='text' className='form-control' aria-describedby='subjectHelp' value={this.state.subject} onChange={this.onSubjectChange.bind(this)} />
                        </div>
                      </div>
                      <div className="contact-form-image">
                        <img className='img-fluid contact-image' src={process.env.PUBLIC_URL+'/images/Contact_Us.jpg'} alt='Contact Us' />
                      </div>
                    </div>
                    <div className='form-group'>
                      <label htmlFor='message'>Message</label>
                      <textarea className='form-control' rows='5' value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                    </div>
                    <div className='text-center'>
                      <button type='submit' className='btn btn-primary'>Submit</button>
                    </div>
                  </form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default ContactForm;
