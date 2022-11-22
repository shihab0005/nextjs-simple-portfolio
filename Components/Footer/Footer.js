import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import classes from './footer.module.css'
import Link from "next/Link";

const Nav_Link = [
    {
        path: "/",
        display: "Home"
    },
    {
        path: "#about",
        display: "About"
    },
    {
        path: "#services",
        display: "Servicea"
    },
    {
        path: "#portfolio",
        display: "Portfolio"
    },
    {
        path: "#contact",
        display: "Contact"
    },
]
const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()
    return (
        <footer>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className={`${classes.nav_menu}`}>
                            {
                                Nav_Link.map((item, index) => (
                                    <Link href={item.path} key={index}>{item.display}</Link>
                                ))
                            }

                        </div>
                    </Col>
                    <Col lg="6">
                        <h6 className={`${classes.footer_creator}`}>Created By SHihab Khan</h6>
                    </Col>

                    <Col lg="12">
                        <div className={`${classes.footer_copyright}`}>
                        <p><i className="ri-copyright-line"></i>Copyright {year}-Developed By Shihab khan</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;