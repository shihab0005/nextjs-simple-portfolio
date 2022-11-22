import React, { useRef, useEffect } from 'react';
import { Container } from 'reactstrap';
import classes from './header.module.css';
import Link from "next/Link";


const Header = () => {
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
    const headerRef = useRef(null);
    const menuRef = useRef(null);

    const headerFunc = () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            headerRef.current.classList.add(`${classes.header_shrink}`)
        } else {
            headerRef.current.classList.remove(`${classes.header_shrink}`)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", headerFunc);
        return () => window.removeEventListener("scroll", headerFunc)
    }, []);
    const toggleMenu = () => menuRef.current.classList.toggle(`${classes.menu_active}`)
    return (
        <header className={`${classes.header}`} ref={headerRef}>
            <Container>
                <div className={`${classes.nav_wrapper}`}>
                    <div className={`${classes.logo}`}>
                        <h1><span>SH</span>ihab</h1>
                    </div>
                    <div className={`${classes.navigation}`} ref={menuRef} onClick={toggleMenu}>
                        <div className={`${classes.nav_menu}`}>
                            {
                                Nav_Link.map((item, index) => (
                                    <Link href={item.path} key={index}>{item.display}</Link>
                                ))
                            }
                            <div className={`${classes.nav_right}`}>
                                <p className='d-flex align-items-center gap-2 mb-0'><i className="ri-phone-line"></i>+00990334544</p>
                            </div>
                        </div>
                    </div>
                    <span className={`${classes.mobile_menu}`}>
                        <i className="ri-menu-line" onClick={toggleMenu}></i>
                    </span>

                </div>
            </Container>
        </header>
    );
};

export default Header;