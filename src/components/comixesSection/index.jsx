import React from 'react';
import styles from './comixesSection.module.scss';
import eagle from '../images/eagle.jpg';
import lion from '../images/lion.jpg';
import fisher from '../images/fisher.jpg';
import warrior from '../images/warrior.jpg';
import monkey from '../images/monkey.jpg';
import tiger from '../images/tiger.jpg';

function ComixesSection() {
    return(
     <div className={styles.comixesMainThumb}>
        <h2 className={styles.title}>সমস্ত পণ্য অন্বেষণ করুন</h2>
        <div className={styles.comixesInnerThumb}>

            <div className={styles.cardThumb}>
               <img loading='lazy' className={styles.cardImage} src={eagle} alt="eagle" />
                <p className={styles.cardTitle}>দিগন্তীয় সামগ্রী</p>
                <div className={styles.idThumb}>
                    <p className={styles.cardText}>মূল্য:</p>
                    <p className={styles.cardId}>BDT 3439</p>
                </div>
                <div className={styles.cardButtonThumb}>
                    <button className={styles.button}>
                       ক্রয় করুন
                    </button>
                </div>
            </div>

            <div className={styles.cardThumb}>
               <img loading='lazy' className={styles.cardImage} src={lion} alt="lion" />
                <p className={styles.cardTitle}>দিগন্তীয় সামগ্রী</p>
                <div className={styles.idThumb}>
                    <p className={styles.cardText}>মূল্য:</p>
                    <p className={styles.cardId}>BDT 3439</p>
                </div>
                <div className={styles.cardButtonThumb}>
                    <button className={styles.button}>
                       ক্রয় করুন
                    </button>
                </div>
            </div>

            <div className={styles.cardThumb}>
               <img loading='lazy' className={styles.cardImage} src={fisher} alt="fisher" />
                <p className={styles.cardTitle}>দিগন্তীয় সামগ্রী</p>
                <div className={styles.idThumb}>
                    <p className={styles.cardText}>মূল্য:</p>
                    <p className={styles.cardId}>BDT 3439</p>
                </div>
                <div className={styles.cardButtonThumb}>
                    <button className={styles.button}>
                       ক্রয় করুন
                    </button>
                </div>
            </div>

            <div className={styles.cardThumb}>
               <img loading='lazy' className={styles.cardImage} src={warrior} alt="warrior" />
                <p className={styles.cardTitle}>মাপযুক্ত যুদ্ধের নায়কের ইতিহাস</p>
                <div className={styles.idThumb}>
                    <p className={styles.cardText}>মূল্য:</p>
                    <p className={styles.cardId}>BDT 4531</p>
                </div>
                <div className={styles.cardButtonThumb}>
                    <button className={styles.button}>
                       ক্রয় করুন
                    </button>
                </div>
            </div>

            <div className={styles.cardThumb}>
               <img loading='lazy' className={styles.cardImage} src={monkey} alt="monkey" />
                <p className={styles.cardTitle}>মাপযুক্ত যুদ্ধের নায়কের ইতিহাস</p>
                <div className={styles.idThumb}>
                    <p className={styles.cardText}>মূল্য:</p>
                    <p className={styles.cardId}>BDT 2499</p>
                </div>
                <div className={styles.cardButtonThumb}>
                    <button className={styles.button}>
                       ক্রয় করুন
                    </button>
                </div>
            </div>

            <div className={styles.cardThumb}>
               <img loading='lazy' className={styles.cardImage} src={tiger} alt="tiger" />
                <p className={styles.cardTitle}>মাপযুক্ত যুদ্ধের নায়কের ইতিহাস</p>
                <div className={styles.idThumb}>
                    <p className={styles.cardText}>মূল্য:</p>
                    <p className={styles.cardId}>BDT 7429</p>
                </div>
                <div className={styles.cardButtonThumb}>
                    <button className={styles.button}>
                       ক্রয় করুন
                    </button>
                </div>
            </div>
        </div>
     </div>
    )
}

export default ComixesSection;