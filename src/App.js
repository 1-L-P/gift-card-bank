import React, { Component } from 'react';
import './home.css';
import { Nav, Navbar, Button } from 'react-bootstrap';




import logoPNG from './gcb-logo.png';
import { ReactComponent as LogoSvg } from './gcb-logo.svg';
import hero from './hero-illustration.png';
import { ReactComponent as Icon1 } from './Icons-1.svg';
import { ReactComponent as Icon2 } from './Icons-2.svg';
import { ReactComponent as Icon3 } from './Icons-3.svg';
import { ReactComponent as Icon4 } from './Icons-4.svg';
import partners from './partners.png';
import eligibility from './eligibility.png';
import cards from './card-logos.png';



class Navheader extends Component {
    render () {
        return (
            <Navbar fixed="top" bg="light" expand="lg">
            <Navbar.Brand style={{color: '#172DC7', fontWeight: 'bold'}} href="#home"><img className="brand-logo" src={logoPNG}/>Gift Card Bank</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="#About">About</Nav.Link>
                <Nav.Link href="#Team">Team</Nav.Link>
                <Nav.Link href="#Contact">Contact</Nav.Link>
                <Button style={{marginTop: 10}} variant="outline-primary">Login</Button>{' '}
                <Button className="btn-right" style={{marginTop: 10}} variant="primary">Apply</Button>{' '}
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        );
    }
}


function Home() {
  return (
  <div>
      <Navheader />

    <div>
    <section className="hero">
    <div className="columns">
        <div className="col-md-6 col-sm-12">
    <img className="hero-img" style={{mixBlendMode: 'multiply'}} src={hero} alt="decorative" />
        </div>

        <div className="copy-block col-md-6 col-sm-12">
            <h2>
                Give a gift card to someone in need
            </h2>
        
            <h3>
                People across the country are being hit hard by COVID-19. We’re donating gift cards to those who are hurting the most. You can help. 
            </h3>
        

            <button type="button" className="btn btn-outline-primary btn-lg">Donate</button>
            <button type="button" className="btn btn-primary btn-lg">Request</button>
        </div>
    </div>
    </section>
    </div>
    

    <div>
    <section className="process">
        <div className="copy-block center-text col-md-6 col-sm-12">
            <h2>
                $3 Billion
            </h2>
            <h3>
                In unspent gift cards go to waste every year. We're on a mission to change that.
            </h3> 
        </div>

        <div className="copy-block center-text col-md-6 col-sm-12" style={{padding: 0}}>
            <h2>
                How it works
            </h2>
        </div>

        <div style={{paddingTop: '1rem'}}className="columns process">
        
            <div className="col-md-3 col-sm-12">
                <Icon1 className="process-img" />
                <h2 className="number">1</h2>
                <p className="caption">Generous donors donate cash to Gift Card Bank</p>
            </div>

            <div className="col-md-3 col-sm-12">
                <Icon2 className="process-img" />
                <h2 className="number">2</h2>
                <p className="caption">We convert cash donations to gift cards at a discount (meaning your $ is multiplied!)</p>
            </div>
            
            <div className="col-md-3 col-sm-12">
                <Icon3 className="process-img" />
                <h2 className="number">3</h2>
            <p className="caption">People and families in need of a little extra help can apply for support by filling out a simple questionnaire.</p>
            </div>

            <div className="col-md-3 col-sm-12">
                <Icon4 className="process-img" />
                <h2 className="number">4</h2>
            <p className="caption">We validate need and send cards to those who are left vulnerable by COVID-19</p>    
            </div>
         </div>   

    </section>
    </div>

{/* A JSX comment */}
    
    <div>
    <section className="eligibility">
        <div className="columns">
            <div className="col-md-6 col-sm-12">
        <img className="hero-img" src={eligibility} alt="decorative" />
            </div>
        
            <div className="copy-block col-md-6 col-sm-12">
                <h2>
                    How do I qualify for a gift card?
                </h2>
            
                <p>
                    Anyone can apply to receive support from Gift Card Bank. We know that the COVID-19 crisis has tremendous impact on people from all walks of life. In these unprecedented times, we are here to help.

                    We will review the circumstances of financial hardship on an individual basis. We do not have minimum qualifications around income level or employment status. At this time, Gift Card Bank is only able to support requests in the United States.
                </p>
            

                <button type="button" className="btn btn-primary btn-lg">Request</button>
            </div>
        </div>
    </section>
    </div>

    {/*-card-types*/}

    <div>
    <section className="card-types">
        <div className="columns row-reverse">
            <div className="col-md-6 col-sm-12">
        <img className="hero-img" src={cards} alt="decorative" />
            </div>
        
            <div className="copy-block col-md-6 col-sm-12">
                <h2>
                    What kind of gift cards do we distribute?
                </h2>
            
                <p>
                    You tell us! We strive to offer choice and flexibility to our users. As part of the application process, you can identify what types of gift cards you’d like to receive. 
                    The vast majority of our applicants request gift cards to grocers and general retailers.
                </p>
            

            </div>
        </div>
    </section>
    </div>

    {/*more-about-us */}

    <div>
    <section className="more-about-us">
        <div className="columns">
            <div className="col-md-6 col-sm-12">
            <LogoSvg className="copy-block" />
            </div>
        
            <div className="copy-block col-md-6 col-sm-12">
                <h2>
                    A little more about us
                </h2>
            
                <p>
                    COVID-19 has devastated the global community in unprecedented ways. Yet during the current pandemic, people around the globe has also stepped up and offered extraordinary acts of generosity and kindness to one another. 
    The Gift Card Bank is a non profit organization that provides a platform for individuals to give a gift and share a card for someone in need at times of crisis.  
                </p>
            

                <button type="button" className="btn btn-primary btn-lg">Learn more</button>
            </div>
        </div>
    </section>
    </div>


    <section className="our-partners">
        <div className="copy-block center-text col-md-6 col-sm-12">
            <h2>
                Our partners & advisory board
            </h2>
            <p>
                Gift Card Bank is built on people and partnerships. Our work is made possible thanks to our partners. They are critical to our efforts to helping people weather through the devastating impacts of COVID-19. 
            </p> 
        </div>


        <div>
            <img className="partners-img" src={partners} alt="partners logos" />
            </div>

    </section>
    </div>
  );
}

export default Home;
