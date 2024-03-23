
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import styles from './cart.module.scss';

// import eagle from '../../components/images/eagle.jpg';
// import lion from '../../components/images/lion.jpg';
// import fisher from '../../components/images/fisher.jpg';
// import warrior from '../../components/images/warrior.jpg';
// import monkey from '../../components/images/monkey.jpg';
// import tiger from '../../components/images/tiger.jpg';

// const imageMap = {
//     eagle: eagle,
//     lion: lion,
//     fisher: fisher,
//     warrior: warrior,
//     monkey: monkey,
//     tiger: tiger
// }

// function Cart() {
//     const [cartItems, setCartItems] = useState([]);
//     const [totalPrice, setTotalPrice] = useState(0);

//     const getImage = (item) => {
//         if (imageMap.hasOwnProperty(item.imageUrl)) {
//             return imageMap[item.imageUrl];
//         } else {
//             return null;
//         }
//     }

//     // Update quantity locally when fetching data
// useEffect(() => {
//     axios.get('https://65fe77d8b2a18489b3861712.mockapi.io/cart')
//         .then(res => {
//             // Update quantity to 1 for each item
//             const updatedCartItems = res.data.map(item => ({ ...item, quantity: 1 }));
//             setCartItems(updatedCartItems);
            
//             // Calculate total based on the updated items
//             const total = updatedCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
//             setTotalPrice(total);
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
// }, []);


//     const handleRemoveItem = (id) => {
//         axios.delete(`https://65fe77d8b2a18489b3861712.mockapi.io/cart/${id}`)
//             .then(res => {
//                 setCartItems(prevItems => {
//                     const updatedItems = prevItems.filter(item => item.id !== id);
//                     const total = updatedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
//                     setTotalPrice(total);
//                     return updatedItems;
//                 });
//             })
//             .catch(error => {
//                 console.error('Error deleting item:', error);
//             });
//     }
    
//     const handleQuantityChange = (id, newQuantity) => {
//         // Update quantity locally
//         setCartItems(prevItems =>
//             prevItems.map(item => (item.id === id ? { ...item, quantity: newQuantity } : item))
//         );

//         // Update quantity on server
//         axios.put(`https://65fe77d8b2a18489b3861712.mockapi.io/cart/${id}`, { quantity: newQuantity })
//             .then(res => {
//                 // Calculate total based on the updated items
//                 const total = res.data.reduce((acc, item) => acc + item.price * item.quantity, 0);
//                 setTotalPrice(total);
//             })
//             .catch(error => {
//                 console.error('Error updating quantity:', error);
//             });
//     }

//     return (
//         <div className={styles.cartThumb}>
//             <div className={styles.cartInnerThumb}>
//                 <div className={styles.titleThumb}>
//                     <h2>গোপনীয়তা নীতি</h2>
//                     <p>এআপনার কার্টে {cartItems.length} আইটেম।</p>
//                 </div>

//                 {cartItems.map(item => (
//                     <div key={item.id} className={styles.cartItem}>
//                         <div className={styles.cartInnerThumb}>
//                             <div className={styles.pictureThumb}>
//                                 <div className={styles.cartImageThumb}>
//                                     <p className={styles.imageTitle}>পণ্য</p>
//                                     <img className={styles.itemImage} src={getImage(item)} alt={item.title} />  
//                                 </div>
//                                 <p className={styles.itemTitle}>{item.title}</p>
//                                 <span className={styles.close} onClick={() => handleRemoveItem(item.id)}>&times;</span>
//                             </div>
//                             <div className={styles.pictureThumb}>
//                                 <p className={styles.priceTitle}>মূল্য:</p>
//                                 <p className={styles.itemPrice}>BDT {item.price}</p>
//                             </div>
//                             <div className={styles.quantityThumb}>
//                                 <p className={styles.quantityTitle}>পরিমাণ</p>
//                                 <div className={styles.calculator}>
//                                     <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} className={styles.minus}>-</button>
//                                     <div className={styles.sum}>{item.quantity}</div>
//                                     <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)} className={styles.plus}>+</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//                 <br />
//                 <hr />
//                 <div className={styles.totalThumb}>
//                     <p className={styles.totalText}>মোট</p>
//                     <p className={styles.totalAmount}>BDT {totalPrice}</p>
//                 </div>
//                 <div className={styles.buttonsThumb}>
//                     <Link to="/">
//                         <button className={styles.whiteButton}>কেনাকাটা চালিয়ে যান</button>
//                     </Link>
//                     <button className={styles.redButton}>পর্যালোচনা</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Cart;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './cart.module.scss';

import eagle from '../../components/images/eagle.jpg';
import lion from '../../components/images/lion.jpg';
import fisher from '../../components/images/fisher.jpg';
import warrior from '../../components/images/warrior.jpg';
import monkey from '../../components/images/monkey.jpg';
import tiger from '../../components/images/tiger.jpg';
import emptyCartImage from '../../components/images/empty-cart.webp'

const imageMap = {
    eagle: eagle,
    lion: lion,
    fisher: fisher,
    warrior: warrior,
    monkey: monkey,
    tiger: tiger
}

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const getImage = (item) => {
        if (imageMap.hasOwnProperty(item.imageUrl)) {
            return imageMap[item.imageUrl];
        } else {
            return null;
        }
    }

    // Update quantity locally when fetching data
    useEffect(() => {
        axios.get('https://65fe77d8b2a18489b3861712.mockapi.io/cart')
            .then(res => {
                // Update quantity to 1 for each item
                const updatedCartItems = res.data.map(item => ({ ...item, quantity: 1 }));
                setCartItems(updatedCartItems);
                
                // Calculate total based on the updated items
                const total = updatedCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
                setTotalPrice(total);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);


    const handleRemoveItem = (id) => {
        axios.delete(`https://65fe77d8b2a18489b3861712.mockapi.io/cart/${id}`)
            .then(res => {
                setCartItems(prevItems => {
                    const updatedItems = prevItems.filter(item => item.id !== id);
                    const total = updatedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
                    setTotalPrice(total);
                    return updatedItems;
                });
            })
            .catch(error => {
                console.error('Error deleting item:', error);
            });
    }

    
    
    const handleQuantityChange = (id, newQuantity) => {

        if (newQuantity < 0) {
            return;
        }
        // Update quantity locally
        setCartItems(prevItems =>
            prevItems.map(item => (item.id === id ? { ...item, quantity: newQuantity } : item))
        );

        // Calculate total based on the updated items
        const total = cartItems.reduce((acc, item) => {
            if (item.id === id) {
                return acc + item.price * newQuantity;
            } else {
                return acc + item.price * item.quantity;
            }
        }, 0);
        setTotalPrice(total);

        // Update quantity on server
        axios.put(`https://65fe77d8b2a18489b3861712.mockapi.io/cart/${id}`, { quantity: newQuantity })
            .then(res => {
                // Not necessary to update total here, as it's already updated locally
            })
            .catch(error => {
                console.error('Error updating quantity:', error);
            });
    }

    return (
        <div className={styles.cartThumb}>
            <div className={styles.cartInnerThumb}>
                <div className={styles.titleThumb}>
                    <h2>গোপনীয়তা নীতি</h2>
                    <p>এআপনার কার্টে {cartItems.length} আইটেম।</p>
                </div>

                {cartItems.length === 0 ? (
                    <div className={styles.emptyCart}>
                        <img src={emptyCartImage} alt="Empty Cart" className={styles.emptyCartImage} />
                        <p className={styles.emptyCartText}>তোমার থলে তো খালি</p>
                    </div>
                ) : 
                    cartItems.map(item => (
                        <div key={item.id} className={styles.cartItem}>
                            <div className={styles.cartInnerThumb}>
                                <div className={styles.pictureThumb}>
                                    <div className={styles.cartImageThumb}>
                                        <p className={styles.imageTitle}>পণ্য</p>
                                        <img className={styles.itemImage} src={getImage(item)} alt={item.title} />  
                                    </div>
                                    <p className={styles.itemTitle}>{item.title}</p>
                                    <span className={styles.close} onClick={() => handleRemoveItem(item.id)}>&times;</span>
                                </div>
                                <div className={styles.pictureThumb}>
                                    <p className={styles.priceTitle}>মূল্য:</p>
                                    <p className={styles.itemPrice}>BDT {item.price}</p>
                                </div>
                                <div className={styles.quantityThumb}>
                                    <p className={styles.quantityTitle}>পরিমাণ</p>
                                    <div className={styles.calculator}>
                                        <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} className={styles.minus}>-</button>
                                        <div className={styles.sum}>{item.quantity}</div>
                                        <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)} className={styles.plus}>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <br />
                    <hr />
                    <div className={styles.totalThumb}>
                        <p className={styles.totalText}>মোট</p>
                        <p className={styles.totalAmount}>BDT {totalPrice}</p>
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

