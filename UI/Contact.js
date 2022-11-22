import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from "next/link";
import SectionSubtitle from './SectionSubtitle';
import classes from '../styles/contact.module.css';

import ContactFrom from './ContactFrom';

const Contact = () => {
    return (
        <section id="contact" className={`${classes.contact}`}>
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <SectionSubtitle subtitle="Contact Me" />
                        <h3 className="mt-4 mb-4">Contact With Me</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quos harum! Maxime cum quidem, illum ut commodi consequuntur saepe asperiores alias omnis deserunt, quasi accusantium doloribus id quisquam iusto impedit!</p>
                        <ul className={`${classes.contact_info_list}`}>
                            <li className={`${classes.contact_info_item}`}>
                                <span><i className="ri-map-pin-line"></i></span>
                                <p>Dinajpur --Bangladesh</p>
                            </li>

                            <li className={`${classes.contact_info_item}`}>
                                <span><i className="ri-mail-line"></i></span>
                                <p>shihab157394@gmail.com</p>
                            </li>
                            <li className={`${classes.contact_info_item}`}>
                                <span><i className="ri-phone-line"></i></span>
                                <p>+8801888056755</p>
                            </li>
                        </ul>

                        <div className={`${classes.social_links}`}>
                            <Link href="#">
                                <i classname="ri-youtube-line"></i>
                            </Link>
                            <Link href="#">
                                <i classname="ri-github-line"></i>
                            </Link>
                            <Link href="#">
                                <i classname="ri-facebook-line"></i>
                            </Link>
                            <Link href="#">
                                <i classname="ri-linkedin-line"></i>
                            </Link>
                            <Link href="#">
                                <i classname="ri-instagram-line"></i>
                            </Link>

                        </div>
                    </Col>
                    <Col lg="6" md="6">
                        <ContactFrom/>
                    </Col>
                </Row>
            </Container>

        </section>
    );
};

export default Contact;