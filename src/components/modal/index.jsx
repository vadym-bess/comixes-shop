import React, { useState, useEffect } from 'react';
import styles from './modal.module.scss';

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  const handleCheck1 = () => {
    setIsChecked1(!isChecked1);
  };

  const handleCheck2 = () => {
    setIsChecked2(!isChecked2);
  };

  const handleCheck3 = () => {
    setIsChecked3(!isChecked3);
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen || isSecondModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, isSecondModalOpen]);

  const openSecondModal = () => {
    setIsSecondModalOpen(true);
    setIsOpen(false)
  };

  const closeSecondModal = () => {
    setIsSecondModalOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className={styles.modalBackground}>
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              {/* <span className={styles.close} onClick={() => setIsOpen(false)}>&times;</span> */}
              <p className={styles.modalText}>আমাদের পৃষ্ঠাটি আপনার অভিজ্ঞতা উন্নত করতে কুকিজ ব্যবহার করে। আপনি চাইলে তাদের নিষ্ক্রিয় করতে পারেন, কিন্তু এটি ওয়েবসাইটের কিছু কার্যক্ষমতা সীমিত করতে পারে। আমাদের কুকি নীতি দেখুন।</p>
              <div className={styles.buttonThumb}>
                <button onClick={() => setIsOpen(false)} className={styles.leftButton}>সব কুকিজকে গ্রহণ করুন</button>
                <button onClick={openSecondModal} className={styles.rightButton}>কুকিজের সেটিংস</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isSecondModalOpen && (
        <div className={styles.modalBackground}>
          <div className={styles.modal2}>
            <div className={styles.modalContent2}>
              {/* <span className={styles.close} onClick={closeSecondModal}>&times;</span> */}
              <h2 className={styles.modalTitle}>কুকিজের সেটিংস</h2>
              <p className={styles.modalText}>কুকিস হচ্ছে সাইট দ্বারা প্রেরিত এবং ওয়েব ব্রাউজারে আপনার কম্পিউটারে সংরক্ষিত ছোট ডেটা প্রতি সময় আপনি ওয়েবে অনুপ্রবেশ করছেন যাবতীয়। প্রতিটি বার্তা একটি ক্ষুদ্র ফাইলের মধ্যে সংরক্ষণ করা হয়, যা কুকি বলা হয়। যখন আপনি সার্ভার থেকে অন্য পৃষ্ঠা অনুরোধ করেন, আপনার ব্রাউজারটি কুকিটি আবার সার্ভারে ফিরিয়ে পাঠায়। কুকিস হলো এমন একটি বিশ্বস্ত পদ্ধতি যাতে সাইটগুলি ব্যবহারকারীর সংজ্ঞা মনে রাখতে বা ব্রাউজিং এর সময় ব্যবহারকারীর ক্রিয়াকলাপ নিবন্ধন করতে পারে।</p>
              <div className={styles.checkboxThumb}> 
             
      <label className={styles.checkboxInnerThumb}>
        <input className={styles.checkbox} type="checkbox" checked={isChecked1} onChange={handleCheck1} />
        <span className={styles.checkboxText}>কার্যক্ষমতা</span>
      </label>
      <br />
      <label className={styles.checkboxInnerThumb}>
        <input className={styles.checkbox} type="checkbox" checked={isChecked2} onChange={handleCheck2} />
        <span className={styles.checkboxText}>পরিসংখ্যান</span>
      </label>
      <br />
      <label className={styles.checkboxInnerThumb}>
        <input className={styles.checkbox} type="checkbox" checked={isChecked3} onChange={handleCheck3} />
        <span className={styles.checkboxText}>মার্কেটিং</span>
      </label>
    
              </div>
<div className={styles.secondButtonThumb}>
<button onClick={closeSecondModal} className={styles.leftButton}>পছন্দ নিশ্চিত করুন।</button>

</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
