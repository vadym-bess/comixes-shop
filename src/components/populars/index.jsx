import React from 'react';
import styles from './populars.module.scss';
import smile from '../images/smile.png';
import croud from '../images/croud.png';
import flag from '../images/flag.png';
import mobile from '../images/mobile.png';
import party from '../images/party.png';
import magic from '../images/magic.png';

function Populars() {
    return(
<div className={styles.mainThumb}>
       <h1 className={styles.title}>জনপ্রিয় বিভাগগুলি</h1>
      <div className={styles.itemsThumb}>
        <div className={styles.imageThumb}>
            <img className={styles.itemImage} src={smile} alt="vector" />
            <p className={styles.itemName}>শিশুদে জন্য</p>
        </div>
        <div className={styles.imageThumb}>
            <img className={styles.itemImage} src={croud} alt="vector" />
            <p className={styles.itemName}>পরিবার</p>
        </div>
        <div className={styles.imageThumb}>
            <img className={styles.itemImage} src={flag} alt="vector" />
            <p className={styles.itemName}>কৌশল</p>
        </div>
        <div className={styles.imageThumb}>
            <img className={styles.itemImage} src={mobile} alt="vector" />
            <p className={styles.itemName}>কার্ড</p>
        </div>
        <div className={styles.imageThumb}>
            <img className={styles.itemImage} src={party} alt="vector" />
            <p className={styles.itemName}>পার্টিতে</p>
        </div>
        <div className={styles.imageThumb}>
            <img className={styles.itemImage} src={magic} alt="vector" />
            <p className={styles.itemName}>কল্পবিজ্ঞান</p>
        </div>
      </div>
</div>
    )
}

export default Populars;