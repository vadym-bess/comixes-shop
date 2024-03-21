import React from 'react';
import styles from './userSection.module.scss';
import user from '../images/user.png';


function UserSection() {
    return(
<div className={styles.mainThumb}>
    <div className={styles.innerThumb}>
        <div>
            <h3 className={styles.title}>মানুষের কথা আমাদের সম্পর্কে।</h3>
            <p className={styles.text}>আমাদের ক্লায়েন্টরা আমাদের সেবাগুলির সাথে অনেক স্মাইলি প্রেরণ করেন এবং আমরা তাদেরকে ভালোবাসি।</p>
        </div>
        <div className={styles.whiteThumb}>
            <p className={styles.whiteThumbText}>“আমি এই ইন্টারনেট কমিক্স ম্যাগাজিন সম্পর্কে অত্যন্ত সন্তুষ্ট। তাদের বিশাল বিচার আমার জন্য আমার আপন্য পরিষেবাগুলি সহজেই অনুগ্রহ করে ও আমি তাদের প্রিয় করি।”</p>
            <p className={styles.whiteThumbTextUndertext}>অমিত</p>
            <img className={styles.user} src={user} alt="user" />
        </div>
    </div>

</div>
    )
}

export default UserSection;