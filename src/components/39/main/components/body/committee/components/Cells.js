import React, { Component } from 'react';
import { CardDeck, Card, Container } from 'react-bootstrap';

import FinanceCell from '../images/39_Finance_Cell.JPG';
import MarketingCell from '../images/39_Marketing_Cell.JPG';
import PresidentialCell from '../images/39_Presidential_Cell.JPG';
import ProjectsCell from '../images/39_Projects_Cell.JPG';
import PublicityCell from '../images/39_Publicity_Cell.JPG';
import SecretariatCell from '../images/39_Secretariat_Cell.JPG';
import WelfareCell from '../images/39_Welfare_Cell.JPG';
import NUSSUExcoRep from '../images/39_NUSSU_Exco_Rep.jpg';

class Cells extends Component {
  render () {
    return (
      <div className='section text-center'>
        <Container>
          <CardDeck className='justify-content-center single-card'>
            <Card className='cell-card'>
              <div>
                <Card.Img variant='top' src={PresidentialCell} alt='Presidential Cell'/>
              </div>
              <Card.Body className='text-left'>
                <Card.Title>Presidential Cell</Card.Title>
                <Card.Text>
                  We oversee all the operations within Sports Club and act as the interface between Sports Club and the school. We also help to make strategic decisions, and influence school policies towards recreational sports in general.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
          <CardDeck className='justify-content-center'>
            <Card className='cell-card'>
              <div>
                <Card.Img variant='top' src={FinanceCell} alt='Finance Cell'/>
              </div>
              <Card.Body className='text-left'>
                <Card.Title>Finance Cell</Card.Title>
                <Card.Text>
                  We oversee all finances under Sports Club and ensure that all financial procedures are carried out correctly.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='cell-card'>
              <div>
                <Card.Img variant='top' src={SecretariatCell} alt='Secretariat Cell' />
              </div>
              <Card.Body className='text-left'>
                <Card.Title>Secretariat Cell</Card.Title>
                <Card.Text>
                  We help to settle necessary administrative, logistics and facilitate matters. We act as the interface with the sports office for the various sporting events and projects.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='cell-card'>
              <div>
                <Card.Img variant='top' src={MarketingCell} alt='Marketing Cell' />
              </div>
              <Card.Body className='text-left'>
                <Card.Title>Marketing Cell</Card.Title>
                <Card.Text>
                  We help to secure strategic supports and privilege partners for Sports Club. We also manage the disbursement of marketing products.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='cell-card'>
              <div>
                <Card.Img variant='top' src={PublicityCell} alt='Publicity Cell' />
              </div>
              <Card.Body className='text-left'>
                <Card.Title>Publicity Cell</Card.Title>
                <Card.Text>
                  We strategically brand Sports Club and its umbrella through the various outreach platforms available.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='cell-card'>
              <div>
                <Card.Img variant='top' src={WelfareCell} alt='Welfare Cell' />
              </div>
              <Card.Body className='text-left'>
                <Card.Title>Welfare Cell</Card.Title>
                <Card.Text>
                  We organize various initiatives to enhance the well-being as well as appreciate the members for their commitments and hard work.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='cell-card'>
              <div>
                <Card.Img variant='top' src={ProjectsCell} alt='Projects Cell' />
              </div>
              <Card.Body className='text-left'>
                <Card.Title>Projects Cell</Card.Title>
                <Card.Text>
                  We work together to strategically brand and organize the 6 Sports Club Projects, ensuring its quality and excellence.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
          <CardDeck className='justify-content-center single-card'>
            <Card className='cell-card'>
              <div>
                <Card.Img variant='top' src={NUSSUExcoRep} alt='NUSSU Exco Rep' />
              </div>
              <Card.Body className='text-left'>
                <Card.Title>NUSSU Exco Rep</Card.Title>
                <Card.Text>
                  We facilitate coordination and cooperation efforts between NUSSU Exco and Sports club and we represent the interest of the sporting community when engaging with the NUS administration.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </div>
    );
  }
};

export default Cells;
