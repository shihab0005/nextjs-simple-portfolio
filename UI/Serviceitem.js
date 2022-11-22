import React from 'react';
import classes from '../styles/serviceitem.module.css';

const Serviceitem = ({ title, icon }) => {
    return (
        <div className={`${classes.service_item}`}>
            <span>
                <i className={icon}></i>
            </span>
            <h5>{title}</h5>
        </div>
    );
};

export default Serviceitem;