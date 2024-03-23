import React from 'react';
import styles from './comixesSection.module.scss';
import { useState } from 'react';

import eagle from '../images/eagle.jpg';
import lion from '../images/lion.jpg';
import fisher from '../images/fisher.jpg';
import warrior from '../images/warrior.jpg';
import monkey from '../images/monkey.jpg';
import tiger from '../images/tiger.jpg';
import axios from 'axios';

const imageMap = {
    eagle: eagle,
    lion: lion,
    fisher: fisher,
    warrior: warrior,
    monkey: monkey,
    tiger: tiger
}

function ComixesSection({ items }) {
    const [cartItems, setCartItems] = useState([]);

    const getImage = (item) => {
        if (imageMap.hasOwnProperty(item.imageUrl)) {
            return imageMap[item.imageUrl];
        } else {
            return null;
        }
    }

    const handleClick = (item) => {
        onAddToCart(item);
    };

    const onAddToCart = (obj) => {
        axios.post('https://65fe77d8b2a18489b3861712.mockapi.io/cart', obj);
        if (!cartItems.some((item) => item.id === obj.id)) {
          setCartItems((prev) => [...prev, obj]);
        }
      };

    return (
        <div className={styles.comixesMainThumb}>
            <h2 className={styles.title}>সমস্ত পণ্য অন্বেষণ করুন</h2>
            <div className={styles.comixesInnerThumb}>
                {items.map((item) => (
                    <div className={styles.cardThumb} key={item.id}>
                        <img loading='lazy' className={styles.cardImage} src={getImage(item)} alt={item.title} />
                        <p className={styles.cardTitle}>{item.title}</p>
                        <div className={styles.idThumb}>
                            <p className={styles.cardText}>মূল্য:</p>
                            <p className={styles.cardId}>{item.price}</p>
                        </div>
                        <div className={styles.cardButtonThumb}>
                            <button className={styles.button} onClick={() => handleClick(item)}>
                                ক্রয় করুন
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ComixesSection;
