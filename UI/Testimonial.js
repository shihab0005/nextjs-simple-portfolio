import React from 'react';
import Image from "next/image";
import { Container, Row, Col } from 'reactstrap';
import classes from '../styles/testimonial.module.css';
import network from '../public/images/Connected world.png'
import SectionSubtitle from './SectionSubtitle';
import Slider from "react-slick";
import hero1 from '../public/images/img-01.jpg'
import hero2 from '../public/images/img-02.jpg'
import hero3 from '../public/images/img-03.jpg'
const Testimonial = () => {
    const settings = {
        dots: false,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        infinitie: true,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1




    }
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <Image src={network} alt="Network_Img" width="400" height="400" />
                    </Col>
                    <Col lg="6" md="6">
                        <SectionSubtitle subtitle="Testimonial" />
                        <h4 className='mt-4 mb-5'>What My Client Says</h4>
                        <Slider {...settings}>
                            <div className={`${classes.testimonial_item}`}>
                                <div className={`${classes.testimonial_client}`}>
                                    <Image src={hero1} width="50" height="50" className='rounded-5' alt='Client_Image' />
                                    <div className="">
                                        <h5>John Doe</h5>
                                        <h6>Software Engineer</h6>
                                    </div>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore ipsum repudiandae, debitis dicta doloremque minus maiores consequuntur, vero iusto modi voluptate nesciunt similique! Cupiditate temporibus labore veritatis reiciendis quod odio, nesciunt quos recusandae neque natus quia tempora, saepe numquam fugiat!</p>
                                </div>

                            </div>

                            <div className={`${classes.testimonial_item}`}>
                                <div className={`${classes.testimonial_client}`}>
                                    <Image src={hero2} width="50" height="50" className='rounded-5' alt='Client_Image' />
                                    <div className="">
                                        <h5>Steve Smith</h5>
                                        <h6>Web Developer</h6>
                                    </div>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore ipsum repudiandae, debitis dicta doloremque minus maiores consequuntur, vero iusto modi voluptate nesciunt similique! Cupiditate temporibus labore veritatis reiciendis quod odio, nesciunt quos recusandae neque natus quia tempora, saepe numquam fugiat!</p>
                                </div>
                            </div>
                            <div className={`${classes.testimonial_item}`}>
                                <div className={`${classes.testimonial_client}`}>
                                    <Image src={hero3} width="50" height="50" className='rounded-5' alt='Client_Image' />
                                    <div className="">
                                        <h5>Chrise Border</h5>
                                        <h6>Finantial Accountance</h6>
                                    </div>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore ipsum repudiandae, debitis dicta doloremque minus maiores consequuntur, vero iusto modi voluptate nesciunt similique! Cupiditate temporibus labore veritatis reiciendis quod odio, nesciunt quos recusandae neque natus quia tempora, saepe numquam fugiat!</p>
                                </div>
                            </div>


                        </Slider>
                    </Col>
                </Row>
            </Container>

        </section>
    );
};

export default Testimonial;