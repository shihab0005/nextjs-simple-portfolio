import React from 'react';
import classes from '../styles/hero.module.css';
import Image from 'next/image';
import Link from "next/link";
import heroImage from '../public/images/hero.jpg';
import { Container, Row, Col } from 'reactstrap';
import SectionSubtitle from './SectionSubtitle';

const Hero = () => {
    return (
        <section className={`${classes.hero}`}>
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className={`${classes.hero_content}`}>
                            <SectionSubtitle subtitle="Hello" />
                            <h2 className='mt-3 mb-3'>I'm SHihab Khan</h2>
                            <h5 className="mb-4">Frontend Developer</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quo facilis, veritatis nostrum deserunt cupiditate, </p>
                            <div className="mt-4">
                                <button className="primary_btn"><Link href="#">Hire Me</Link></button>
                                <button className="secondery_btn"><Link href="#">Download CV</Link></button>
                            </div>

                        </div>
                    </Col>
                    <Col lg="6" md="6">
                        <div className={`${classes.hero_img} text-end`}>
                            <Image src={heroImage} alt="hero_image" width="400" height="400" />
                            <div className={`${classes.hero_skills}`}>
                                <h6>Skills</h6>
                                <span>
                                    <i className="ri-bar-chart-line"></i>
                                </span>
                                <span>
                                    <i className="ri-bar-chart-line"></i>
                                </span>
                                <span>
                                    <i className="ri-bar-chart-line"></i>
                                </span>
                                <span>
                                    <i className="ri-bar-chart-line"></i>
                                </span>
                                <span>
                                    <i className="ri-bar-chart-line"></i>
                                </span>
                            </div>

                            
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;