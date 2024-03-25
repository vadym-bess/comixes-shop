import React, { useState } from 'react';
import logo from '../../components/images/Logo.png';
import burgerMenu from '../../components/images/burger-menu.png';
import closeMenu from '../../components/images/close-header.png'; // Добавляем изображение для закрытого меню
import styles from './headerMob.module.scss';
import cart from '../../components/images/cart-simple.png';
import { Link } from 'react-router-dom';

function HeaderMob() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(prevState => !prevState);
    };

    return (
        <div className={styles.headerMob}>
            <button className={styles.headerButton} type='button' onClick={toggleModal}>
                {/* Используем условный оператор для выбора изображения */}
                <img className={styles.burgerMenuImage} src={isModalOpen ? closeMenu : burgerMenu} alt="logo" />
            </button>
            <Link to="/">
                <img className={styles.logo} src={logo} alt="logo" />
            </Link>
            <Link to="/cart">
                <div className={styles.cartThumb}>
                    <img className={styles.cart} src={cart} alt="logo" />
                </div>
            </Link>
            {isModalOpen && (
                <div className={styles.modal}>
                    {/* Содержимое модального окна */}
                    <a href="#aboutUs" className={styles.navLink} to="#">আমাদের সম্পর্কে</a>
                    <a href="#comixes" className={styles.navLink} to="#">দোকান</a>
                    <a href="#comunication" className={styles.navLink} to="#">পর্যালোচনা</a>
                    <a href="#comunication" className={styles.navLink} to="#">যোগাযোগ</a>


                </div>
            )}
        </div>
    );
}

export default HeaderMob;
