import React from 'react';
import classes from '../styles/about.module.css'
import Link from "next/link";
import Image from 'next/image';
import SectionSubtitle from './SectionSubtitle';
import { Container, Row, Col } from "reactstrap";
import img1 from '../public/images/img-01.jpg'
import img2 from '../public/images/img-02.jpg'
import img3 from '../public/images/img-03.jpg'
import img4 from '../public/images/hero.jpg'
const About = () => {
    return (
        <section id="about">
            <Container>
                <Row>
                    <Col lg="6" >
                        <SectionSubtitle subtitle="About" />
                        <h3 className="mt-4">I'm Here</h3>
                        <h3 className="mb-4">To Help Your Next Project</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum praesentium sunt eum maxime voluptate velit ipsa amet odit ipsam architecto facere, sapiente asperiores optio expedita ex labore vel nostrum veritatis?</p>

                        <div className="d-flex align-items-center gap-4">
                            <div className="mt-3">
                                <h6 className='d-flex align-items-center gap-2 fw-normal mb-1'>
                                    <span className={`${classes.about_icon}`}><i className="ri-checkbox-circle-line"></i>

                                    </span>
                                    Problem Solving
                                </h6>
                                <h6 className='d-flex align-items-center gap-2 fw-normal mb-1'>
                                    <span className={`${classes.about_icon}`}><i className="ri-checkbox-circle-line"></i>

                                    </span>
                                    Search A Lot
                                </h6>
                            </div>
                            <div className="mt-3">
                                <h6 className='d-flex align-items-center gap-2 fw-normal mb-1'>
                                    <span className={`${classes.about_icon}`}><i className="ri-checkbox-circle-line"></i>

                                    </span>
                                    Creative Idea
                                </h6>
                                <h6 className='d-flex align-items-center gap-2 fw-normal mb-1'>
                                    <span className={`${classes.about_icon}`}><i className="ri-checkbox-circle-line"></i>

                                    </span>
                                    High Quality
                                </h6>
                            </div>
                        </div>
                        <div className="mt-5">
                            <button className="primary_btn"><Link href="#portfolio">My Portfolio </Link></button>
                            <button className="secondery_btn"><Link href="#">Downloade CV </Link></button>
                        </div>
                    </Col>
                    <Col lg="6" >
                        <div className={`${classes.about_img_gallery} d-flex gap-4 justify-content-end`}>
                            <div className=" d-flex flex-column mb-3">
                                <div className={`${classes.about_image}  ${classes.about_image_box}`}>
                                    <Image alt='About_Image' src={img1} />
                                </div>
                                <div className={`${classes.about_image} ${classes.about_image_box}`}>
                                    <Image alt='About_Image' src={img2} />
                                </div>
                            </div>
                            <div className=" d-flex flex-column mb-3">
                                <div className={`${classes.about_image} ${classes.about_image_box}`}>
                                    <Image alt='About_Image' src={img3} />
                                </div>
                                <div className={`${classes.about_image} ${classes.about_image_box}`}>
                                    <Image alt='About_Image' src={img4} />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;