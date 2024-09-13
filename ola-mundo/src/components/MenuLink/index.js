import styles from './MenuLink.module.css'
import { Link, useLocation } from 'react-router-dom';

const MenuLink = ({ children, to}) =>{ 
    const linkLocation = useLocation();
    return(
        <Link className={`${styles.link } ${linkLocation.pathname === to ? styles.linkDestacado : ""}`} to={to}> {children} </Link>
    )
}

export default MenuLink