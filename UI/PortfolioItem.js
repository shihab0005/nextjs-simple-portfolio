import React from 'react';
import classes from '../styles/portfolioItem.module.css';
import Image from "next/image";
import Link from "next/link";

const PortfolioItem = (props) => {
    const { title, img, liveUrl, keyword } = props.item;
    return (
        <div className={`${classes.portfolio_item}`}>
            <div className="bg-transparent">
                <h6>{title}</h6>
                {
                    keyword.map((item, index) => (
                        <span className={`${classes.portfolio_keyword}`} key={index}>{item}</span>
                    ))
                }
            </div>
            <div className={`${classes.portfolio_img}`}>
                <Image src={img} alt="Portfolio_Image" width="380" height="250" />
            </div>
            <div className={`${classes.portfolio_live} bg-transparent`}>
                <button className='primary_btn'><Link href={liveUrl}>Launch</Link></button>
            </div>
        </div>
    );
};

export default PortfolioItem;