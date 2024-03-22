import React from 'react';
import styles from './blueSection.module.scss';
import books from '../images/books.jpg';

function BlueSection() {
    return(
    <div className={styles.mainThumb}>
        <h2 className={styles.title}>আমাদের সম্পর্কে</h2>

        <div>
            <div className={styles.innerThumb}>
           
             <div className={styles.textThumb}>
                
                <h3 className={styles.subtitle}>কমিক্স ইন্টারনেট দোকান - তোমার জীবনকে উজ্জ্বল করো!</h3>
                <p className={styles.text}>আমাদের অনলাইন কমিক্স দোকানটি বিভিন্ন ধরনের ক্লাসিক এবং আধুনিক কমিক্স রয়েছে, যা প্রতিটি কমিক্স প্রেমিকের চাহিদা পূরণ করতে উপলব্ধ। আমরা দরজার দিকে আপনার জন্য সহজ এবং সুগঠিত অনলাইন কেনাকাটা সরবরাহ করি এবং সমর্থন প্রদান করি।  আমাদের পণ্য সমৃদ্ধিতে আপনি পছন্দের সিরিজ বা দুর্লভ প্রকাশনার সাথে মিশে থাকা কমিক্স পাবেন, যা আপনার আকর্ষণীয়তা এবং আগ্রহ মেলে। আমাদের অনলাইন কমিক্স দোকানে আসুন এবং কমিক্সের জাদুময় বিশ্বে নৌকা চালান!</p>
             </div>
             <img loading="lazy" className={styles.books} src={books} alt="books" />

        </div>
     </div>
     </div>
    )
}

export default BlueSection;