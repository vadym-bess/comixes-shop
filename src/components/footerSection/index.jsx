import React from 'react';
import youtube from '../images/Footer Components/icon/jam-icons/outline & logos/youtube.png';
import facebook from '../images/Footer Components/icon/jam-icons/outline & logos/facebook.png';
import twitter from '../images/Footer Components/icon/jam-icons/outline & logos/twitter.png';
import styles from './footerSection.module.scss';

function Footer() {
  return (
    <div className={styles.footer}>
         <div className={styles.cocialsThumb}>
          <a href=""><img className={styles.socials} src={youtube} alt="YouTube" /></a>
          <a href=""><img className={styles.socials} src={facebook} alt="Facebook" /></a>
          <a href=""><img className={styles.socials} src={twitter} alt="Twitter" /></a>
        </div>
      <div className={styles.mainLinksThumb}>
        <div className={styles.linksThumb}>
          <a className={styles.mainLink} href="#">যোগাযোগ</a>
          <a className={styles.secondaryLink} href="#">বাড়ি ৪৫, রাস্তা ৮, ধানমন্ডি, ঢাকা ১২০৫, বাংল</a>
        </div>
        <div className={styles.linksThumb}>
          <a className={styles.mainLink} href="#">আইনগত</a>
          <a className={styles.secondaryLink}  href="#">গোপনীয়তা নীতি</a>
          <a className={styles.secondaryLink}  href="#">কুকি নীতি</a>
          <a className={styles.secondaryLink} href="#">শর্তাবলী ও শর্তাদি</a>
        </div>
        <div className={styles.linksThumb}>
          <a className={styles.mainLink} href="#">আমাদের সম্পর্কে</a>
          <a className={styles.secondaryLink}  href="#">আমাদের সম্পর্কে</a>
          <a className={styles.secondaryLink}  href="#">দোকান</a>
          <a className={styles.secondaryLink}  href="#">পর্যালোচনা</a>
          <a className={styles.secondaryLink}  href="#">যোগাযোগ</a>
        </div>
      </div>
      <hr />
      <p className={styles.year}>© 2024 কপিরাইট, সমস্ত অধিকার সংরক্ষিত</p>
    </div>
  );
}

export default Footer;
