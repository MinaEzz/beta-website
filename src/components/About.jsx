import React from 'react';
import { Row, Container, Col, Button, Carousel, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../css/About.css";

function About() {
    return (
        <div className='about mg-t pd-y'>
            <Container className='firstAbout' >
                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                <Row>
                    <Col>
                        <h2>The New Way to <span className='bold'>progress.</span></h2>
                    </Col>
                </Row>
                {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                <Row>
                    <Col sm={7} md={8}>
                        Our highly skilled and qualified team provide students with a personal, entirely unique experience for anyone looking to learn in an English-speaking country.
                    </Col>
                    <Col sm={5} md={4} className='alignbutton'>
                        <Link to={'/contact'} className="nav-link nav-link-hov"><Button variant="primary">Contact Us Now</Button>{' '}</Link>
                    </Col>
                </Row>
                <hr />
            </Container>
            <Container className='secondAbout'>
                <Row>
                    <Col>
                        <h2><span className='bold'>WHO</span> WE ARE</h2>
                    </Col>
                </Row>
            </Container>
            <Container className='thirdAbout' >

                {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                <Row>
                    <Col lg={6} >
                        <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut natus perspiciatis incidunt, vitae saepe amet cupiditate ducimus labore a deserunt, ea voluptas animi quibusdam eaque ratione? Assumenda veritatis tempore eum.
                        Corporis doloremque in quia, odit, sint obcaecati sequi magni accusantium aperiam rem, nihil natus unde eveniet ad qui recusandae aliquam mollitia! Eligendi eveniet sit distinctio praesentium voluptatem delectus, aspernatur at!
                        Nostrum fugit alias illum! Ipsum tenetur saepe cupiditate eligendi! Inventore sequi natus laudantium molestiae, cum recusandae obcaecati illo ipsum quas aut dolorem autem? Ratione vel velit, iusto nemo unde distinctio.
                        Deleniti fugiat, minima iure eius inventore labore exercitationem doloribus quidem vel, consequatur facilis possimus. Numquam laudantium esse est necessitatibus fugiat, tenetur incidunt vitae labore, et atque optio! Fugiat, aperiam repellendus?
                        Minima earum aliquid placeat recusandae praesentium maxime consequuntur, vero vitae minus sed optio atque iste est molestiae dolor corrupti odio ipsum dolore laboriosam quibusdam excepturi fugiat enim. Blanditiis, amet perspiciatis.
                        </p>
                    </Col>
                    <Col lg={6} >
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="Assets/images/slider/first.png"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="Assets/images/slider/second.png"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="Assets/images/slider/third.png"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
            <Container className='fourthAbout'>
                <Row>
                    <Col>
                        <h2><span className='bold'>OUR</span> MISSION</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis totam, alias debitis culpa quasi labore accusantium mollitia dolores? Culpa, nam dolores. Iste expedita cupiditate labore aut consequuntur repudiandae eveniet? Optio.</p></Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <h2><span className='bold'>OUR</span> VISSON</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis totam, alias debitis culpa quasi labore accusantium mollitia dolores? Culpa, nam dolores. Iste expedita cupiditate labore aut consequuntur repudiandae eveniet? Optio.</p></Col>
                </Row>
                <hr />
            </Container>
            <Container className='fifthAbout'>
                <Row>
                    <Col>
                        <h2 className='staffHeader'><span className='bold'>OUR</span> STAFF</h2>
                    </Col>
                </Row>
                <Row className='justify-content-around'>
                    <Col lg={4}>
                        <Card className='staff'>
                            <Card.Img variant="top" src="Assets/images/kareem.png" />
                            <Card.Body>
                                <Card.Title>Kareem Raafat - Founder</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem inventore consectetur beatae quaerat sed, cumque corporis maiores blanditiis, odio, nemo nostrum soluta aut dolor adipisci. Alias ex amet expedita perspiciatis?
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className='staff'>
                            <Card.Img variant="top" src="Assets/images/kareem.png" />
                            <Card.Body>
                                <Card.Title>Abdelrahman Mahmoud - Founder</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem inventore consectetur beatae quaerat sed, cumque corporis maiores blanditiis, odio, nemo nostrum soluta aut dolor adipisci. Alias ex amet expedita perspiciatis?
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About