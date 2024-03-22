import React from 'react';
import youtube from '../images/Footer Components/icon/jam-icons/outline & logos/youtube.png';
import facebook from '../images/Footer Components/icon/jam-icons/outline & logos/facebook.png';
import twitter from '../images/Footer Components/icon/jam-icons/outline & logos/twitter.png';
import styles from './footerSection.module.scss';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className={styles.footer}>

      <div className={styles.socialsThumb}>
           <a href='#'  aria-label="YouTube"><img className={styles.socials} src={youtube} alt="YouTube" /></a>
           <a href='#'  aria-label="Facebook"><img className={styles.socials} src={facebook} alt="Facebook" /></a>
           <a href='#'  aria-label="Twitter"><img className={styles.socials} src={twitter} alt="Twitter" /></a>
      </div>

      <div className={styles.mainLinksThumb}>

        <div className={styles.linksThumb}>
          <p className={styles.mainLink}>যোগাযোগ</p>
          <p className={styles.secondaryLink} >বাড়ি ৪৫, রাস্তা ৮, ধানমন্ডি, ঢাকা ১২০৫, বাংল</p>
        </div>

        <div className={styles.linksThumb}>
          <p className={styles.mainLink}>আমাদের সম্পর্কে</p>
          <p className={styles.secondaryLink} >আমাদের সম্পর্কে</p>
          <p className={styles.secondaryLink} >দোকান</p>
          <p className={styles.secondaryLink} >পর্যালোচনা</p>
          <p className={styles.secondaryLink} >যোগাযোগ</p>
        </div>
        <div className={styles.linksThumb}>
           <p className={styles.mainLink}> আইনগত </p>

          <Link to="/confidential">
            <p className={styles.secondaryLink}>গোপনীয়তা নীতি</p>
          </Link>

          <Link to="/cookiepolicy">
              <p className={styles.secondaryLink}>কুকি নীতি</p>
          </Link>
          
          <Link to="/rooles">
                <p className={styles.secondaryLink}>শর্তাবলী ও শর্তাদি</p>
          </Link>
        </div>
      </div>
      <hr />
      <p className={styles.year}>© 2024 কপিরাইট, সমস্ত অধিকার সংরক্ষিত</p>
    </div>
  );
}

export default Footer;
