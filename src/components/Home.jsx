import React, { Fragment } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Phone } from '@mui/icons-material';
import { Card } from 'react-bootstrap';
import Courses from '../data/Courses.json';
import { Link } from 'react-router-dom';
import '../css/Home.css';

function Home() {

  return (
    <Fragment>
          <section id='home' className='pd-y mg-t'>
        <div className='container'> 
        <div className="row">
            <div className="col-md-6 col-12 home-text">
                <h1>beta academy</h1>
                <p>training center that aims to develop student's skills in technical and non-technical in all engineering fields.</p>
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
            </div> {/* ./home-text */}
            <div className='col-lg-5 col-md-6 col-12 home-img'></div> {/* ./img */}
        </div> {/* ./row */}
        </div> {/*./container */}
    </section>
    {/* ./home */}
    <div className="divider"><div className='layer'></div></div> {/* ./divider*/}
    <section className="courses pd-y mt-5">
      <h2>courses & workshops </h2>
      <div className="container mg-t">
        <div className='row'>
        {
                Courses.map(course =>{
                  return(
                    <div className="col-lg-4 col-md-6 col-12">
                    <div>
                    <Card className="course-card">
                    <Card.Img variant="top" src={course.image}></Card.Img>
                    <Card.Body>
                      <Card.Title>{course.title}</Card.Title>
                        <Link to={'/workshop'} className="btn btn-primary card-btn"> show details </Link>
                    </Card.Body>
              </Card>
                    </div>
                  </div>
                  )
                })
              }
        </div> {/* ./row*/ }
      </div>
    </section>
    {/* ./courses */}
    </Fragment>
  )
}

export default Home