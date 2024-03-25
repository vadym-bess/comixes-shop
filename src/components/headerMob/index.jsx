import React, { useState } from 'react';
import logo from '../../components/images/Logo.png';
import burgerMenu from '../../components/images/burger-menu.png';
import closeMenu from '../../components/images/close-header.png'; // Добавляем изображение для закрытого меню
import styles from './headerMob.module.scss';
import cart from '../../components/images/cart-simple.png';
import { Link, useLocation } from 'react-router-dom';

function HeaderMob() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const location = useLocation();

    const toggleModal = () => {
        setIsModalOpen(prevState => !prevState);
    };

    // Функция для закрытия модального окна и прокрутки к якорю
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    // Проверяем, находимся ли мы на странице корзины
    const isCartPage = location.pathname === '/cart';

    return (
        <div className={styles.headerMob}>
            {/* Показываем кнопку бургера только если мы НЕ находимся на странице корзины */}
            {!isCartPage && (
                <button className={styles.headerButton} type='button' onClick={toggleModal}>
                    {/* Используем условный оператор для выбора изображения */}
                    <img className={styles.burgerMenuImage} src={isModalOpen ? closeMenu : burgerMenu} alt="logo" />
                </button>
            )}
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
                    <a href="#aboutUs" className={styles.navLink} onClick={handleCloseModal}>আমাদের সম্পর্কে</a>
                    <a href="#comixes" className={styles.navLink} onClick={handleCloseModal}>দোকান</a>
                    <a href="#comunication" className={styles.navLink} onClick={handleCloseModal}>পর্যালোচনা</a>
                    <a href="#comunication" className={styles.navLink} onClick={handleCloseModal}>যোগাযোগ</a>
                </div>
            )}
        </div>
    );
}

export default HeaderMob;
