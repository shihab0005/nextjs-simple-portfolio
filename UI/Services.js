import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import classes from '../styles/services.module.css'
import SectionSubtitle from './SectionSubtitle';
import Serviceitem from './Serviceitem';


const Services = () => {
    return (
        <section id="services">
            <Container>
                <Row>

                    <Col lg="6" md="6" className={`${classes.services_title}`}>
                        <SectionSubtitle subtitle="What I Do" />
                        <h3 className='mb-0 mt-4'>Better Design,</h3>
                        <h3 className='mb-4 '>Better Experience</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate voluptatibus accusantium odit ipsam fuga totam, doloribus veniam doloremque corporis sunt, est nam necessitatibus blanditiis inventore eum laborum sit asperiores. Doloremque.</p>
                    </Col>
                    <Col lg="6" md="6">
                        <div className={`${classes.services_container}`}>
                            <div>
                                <Serviceitem title="App Development" icon="ri-command-line" />

                                <Serviceitem title="Web Development" icon="ri-computer-line" />


                            </div>
                            <Serviceitem title="Full-Stack Development" icon="ri-code-s-slash-line" />
                        </div>

                    </Col>
                </Row>
            </Container>

        </section>
    );
};

export default Services;