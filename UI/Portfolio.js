import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import portfolioData from '../Components/data/portfolio';
import classes from "../styles/portfolio.module.css"
import PortfolioItem from './PortfolioItem';
import SectionSubtitle from './SectionSubtitle';

const Portfolio = () => {
    const [filters, setFilters] = useState("Mobile App")
    const [data, setData] = useState();

    useEffect(() => {
        if (filters === "Mobile App") {
            const filteredData = portfolioData.filter((item) => item.category == filters);

            setData(filteredData);
        }

        if (filters === "Web Design") {
            const filteredData = portfolioData.filter((item) => item.category === filters);
            setData(filteredData);
        }
    }, [filters]);
    //console.log(data, filters == "Moblie App")
    const active = `${classes.tab_btn_active}`
        ;
    return (
        <section id="portfolio">
            <Container>
                <Row>
                    <Col lg="6" md="6" className="mb-5">
                        <SectionSubtitle subtitle="My Portfolio" />
                        <h4 className='mt-4'>Some Of My Distinguished Works</h4>
                    </Col>
                    <Col lg="6" md="6">
                        <div className="text-end">
                            <button className={`${filters === "Mobile App" ? active : ""} secondery_btn text-white`}
                                onClick={() => setFilters("Mobile App")}
                            >App Decelopment</button>
                            <button className={`${filters === "Web Design" ? active : ""} secondery_btn text-white`}
                                onClick={() => setFilters("Web Design")}
                            >Web Development</button>
                        </div>
                    </Col>
                    {
                        data?.map(item => (
                            <Col lg="4" md="4" key={item.id}>
                                <PortfolioItem item={item} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Portfolio;