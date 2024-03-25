import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './headerWeb.module.scss';
import logo from '../../components/images/Logo.png';
import cart from '../../components/images/cart-simple.png';

function HeaderWeb({ cartItems }) {
    const location = useLocation();
    const isCartPage = location.pathname === '/cart';

    return (
        <div className={styles.headerWeb}>
            <Link to="/">
                <img className={styles.logo} src={logo} alt="logo" />
            </Link>
            {/* Показываем навигацию только если мы НЕ находимся на странице корзины */}
            {!isCartPage && (
                <nav className={styles.navigationThumb}>
                    <a href="#aboutUs" className={styles.navLink} to="#">আমাদের সম্পর্কে</a>
                    <a href="#comixes" className={styles.navLink} to="#">দোকান</a>
                    <a href="#comunication" className={styles.navLink} to="#">পর্যালোচনা</a>
                    <a href="#comunication" className={styles.navLink} to="#">যোগাযোগ</a>
                </nav>
            )}
            <Link to="/cart">
                <div className={styles.cartThumb}>
                    <img className={styles.cart} src={cart} alt="logo" />
                </div>
            </Link>
        </div>
    );
}

export default HeaderWeb;
