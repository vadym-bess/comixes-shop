import React from 'react';
import styles from './headerWeb.module.scss';
import {Link} from 'react-router-dom';
import logo from '../../components/images/Logo.png';
import cart from '../../components/images/cart-simple.png';




function HeaderWeb() {

   

    return(
<div className={styles.headerWeb}>
    <Link to="/">
         <img className={styles.logo} src={logo} alt="logo" />
    </Link>
    <nav className={styles.navigationThumb}>
      <a href="#aboutUs" className={styles.navLink} to="#">আমাদের সম্পর্কে</a>
      <a href="#comixes" className={styles.navLink} to="#">দোকান</a>
      <a href="#comunication" className={styles.navLink} to="#">পর্যালোচনা</a>
      <a href="#comunication" className={styles.navLink} to="#">যোগাযোগ</a>
    </nav>
    <Link to="/cart">
          <img className={styles.cart} src={cart} alt="cart" />
    </Link>
</div>
    )
}

export default HeaderWeb;