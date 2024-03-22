import React from 'react';
import logo from '../../components/images/Logo.png';
import burgerMenu from '../../components/images/burger-menu.png';
import styles from './headerMob.module.scss';
import cart from '../../components/images/cart-simple.png';
import { Link } from 'react-router-dom';

function HeaderMob() {
    return (
<div className={styles.headerMob}>
    <button className={styles.headerButton} type='button'>
    <img className={styles.burgerMenuImage} src={burgerMenu} alt="logo" />
    </button>
    <Link to="/">
         <img className={styles.logo} src={logo} alt="logo" />
    </Link>
    <img className={styles.cart} src={cart} alt="logo" />

</div>
    )
}

export default HeaderMob;