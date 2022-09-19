import React, { Fragment } from 'react';
import { Form, Button } from 'react-bootstrap'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Phone } from '@mui/icons-material';
import '../css/Contact.css'

function Contact() {
  return (
    <Fragment>
        <section id='contact' className='pd-y mg-t'>
            <h2>contact us</h2>
            <div className="container mg-t">
              <div className="row">
                <div className='col-lg-5 col-12'>
                  <div className='contact-form'>
                    <Form>
                      <Form.Group controlId="formBasicText" className='mb-4'>
                        <Form.Label className='label'>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" className='input' required />
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail" className='mb-4'>
                        <Form.Label className='label'>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" className='input' required />
                        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                      </Form.Group>
                      <Form.Group controlId="exampleForm.ControlTextarea1" className='mb-4'>
                          <Form.Label className='label'>leave your message</Form.Label>
                          <Form.Control as="textarea" rows={3} placeholder="Your Message ..." className='input' />
                      </Form.Group>
                    <Button type="submit" className='submit-btn mb-5'>Submit</Button>
                  </Form>
                  </div>
                </div>
                <div className='col-lg-6 col-12'>
                <div class="mapouter">
                  <div class="gmap_canvas">
                    <iframe width="100%" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=dokki,cairo,egypt&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                      </iframe><a href="https://123movies-to.org">123movies</a>
                      <a href="https://www.embedgooglemap.net"></a></div></div>
                      <div className='social-icons'>
                  <a href='mailto:betaacademy18@gmail.com' target="_blank">
                    <GoogleIcon className='icon'></GoogleIcon>+ </a>
                  <a href='https://www.facebook.com/betaacademy.b' target="_blank">
                    <FacebookIcon className='icon'></FacebookIcon> </a>
                  <a href='https://www.instagram.com/beta_academy18' target="_blank"> 
                  <InstagramIcon className='icon'></InstagramIcon> </a>
                  <a href='https://www.linkedin.com/company/beta-training-academy' target="_blank">
                    <LinkedInIcon className='icon'></LinkedInIcon> </a>
                    <a href='tel:+201120127810' target="_blank">
                    <Phone className='icon'></Phone> </a>
                </div>
                </div>
              </div>
            </div>
        </section> {/* ./contact */}
    </Fragment>
    
  )
}

export default Contact