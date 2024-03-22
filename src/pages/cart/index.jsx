import React from 'react';
import styles from './cart.module.scss';
import image from '../../components/images/eagle.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Cart() {
    const [count, setCount] = useState(0)


    const plus = () => {
        setCount(prev => prev + 1)
    }

    const minus = () => {
        if (count > 0) {
            setCount(prev => prev - 1);
        }
    }
    return(
        <div className={styles.cartThumb}>
            
            <div className={styles.cartInnerThumb}>
                <div className={styles.titleThumb}>
                   <h2>গোপনীয়তা নীতি</h2>
                   <p>এআপনার কার্টে 2 আইটেম।</p>
                </div>

                <div className={styles.cartImageThumb}>
                    <div className={styles.cartImageSmallThumb}>
                        <p className={styles.imageTitle}>পণ্য Product</p>
                        <div className={styles.imageThumb}>
                             <img src={image} alt="comix" />
                        </div>
                        
                    </div>
                    <p className={styles.comixName}>দিগন্তীয় সামগ্রী Horizontal content</p>
                    <span className={styles.close}>&times;</span>
                    
                </div>

                    <div className={styles.idThumb}>
                        <p className={styles.imageTitle}>মূল্য price</p>
                        <p className={styles.comixName}>BDT 3439</p>
                    </div>

                    <div className={styles.idThumb}>
                        <p className={styles.imageTitle}>পরিমাণ Amount</p>
                        <div className={styles.calculator}>
                            <div onClick={minus} className={styles.minus}>-</div>
                            <div className={styles.sum}>{count}</div>
                            <div onClick={plus} className={styles.plus}>+</div>
                        </div>
                    </div>

                    <div className={styles.idThumb}>
                        <p className={styles.imageTitle}>মোট total</p>
                        <p className={styles.comixName}>BDT 3439</p>
                    </div>

                    <div className={styles.buttonsThumb}>
                        <Link to="/">
                        <button className={styles.whiteButton}>কেনাকাটা চালিয়ে যান</button>

                        </Link>
                        <button className={styles.redButton}>পর্যালোচনা</button>
                    </div>
               
            </div>
        </div>
    );
}

export default Cart;



        