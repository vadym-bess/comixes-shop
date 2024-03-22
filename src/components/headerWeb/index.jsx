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
      <p className={styles.navLink} to="#">আমাদের সম্পর্কে</p>
      <p className={styles.navLink} to="#">দোকান</p>
      <p className={styles.navLink} to="#">পর্যালোচনা</p>
      <p className={styles.navLink} to="#">যোগাযোগ</p>
    </nav>
    <img className={styles.cart} src={cart} alt="cart" />
</div>
    )
}

export default HeaderWeb;