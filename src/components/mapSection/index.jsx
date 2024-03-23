import React from 'react';
import styles from './mapSection.module.scss';

function MapSection() {
    return (
        <div className={styles.mainThumb}>
            <div className={styles.innerThumb}>
                <div>
                    <h3 className={styles.title}>যোগাযোগ</h3>
                    <p className={styles.text}>যদি আপনার কোন প্রশ্ন, প্রস্তাব বা মন্তব্য থাকে, অনুগ্রহ করে আমাদের সাথে যোগাযোগ করুন। আমরা আপনার প্রশ্নের উত্তর দেওয়ার সাথে সাথে প্রয়োজনীয় সাহায্য করার জন্য খুশি।</p>
                </div>
                <div className={styles.mapThumb}>
                <iframe
  className={styles.mapIframe}
  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2644485.176948077!2d85.93870108742995!3d24.09532647401836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sHouse%2045%2C%20Road%208%2C%20Dhanmondi%2C%20Dhaka%201205%2C%20Bengal!5e0!3m2!1sen!2sua!4v1711052482127!5m2!1sen!2sua"
  title="Карта местоположения"
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>
                    <div className={styles.mapTextThumb}>
                        <p className={styles.mapText}>বাড়ি ৪৫, রাস্তা ৮, ধানমন্ডি, ঢাকা ১২০৫, বাংল</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MapSection;
