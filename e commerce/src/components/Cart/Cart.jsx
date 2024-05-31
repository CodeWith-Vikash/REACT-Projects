import React, { useContext, useEffect, useRef, useState } from 'react';
import { FaTrashCan } from "react-icons/fa6";
import { CartContext } from '../../context/CartContext';
import { NavLink,useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import { User, useAuth0 } from '@auth0/auth0-react';

const Cart = () => {
  const {isAuthenticated,user,loginWithRedirect} = useAuth0()
  const navigate=useNavigate()
  const { cart, removeFromCart, updateQuantity,setCart } = useContext(CartContext);
  const [counts, setCounts] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const formRef = useRef(null);
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    setCounts(cart.map(item => item.count));
  }, [cart]);

  const incrementCount = (index) => {
    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);
    updateQuantity(cart[index].title, newCounts[index]);
  };

  const decrementCount = (index) => {
    const newCounts = [...counts];
    if (newCounts[index] > 1) {
      newCounts[index] -= 1;
      setCounts(newCounts);
      updateQuantity(cart[index].title, newCounts[index]);
    }
  };

  const calculatePrice = (item, count) => {
    const price = String(item.price).startsWith('$') ? String(item.price).substring(1) : item.price;
    return Number(price) * count;
  };

  useEffect(() => {
    const total = cart.reduce((total, item, index) => total + calculatePrice(item, counts[index]), 0);
    setGrandTotal(total);
  }, [cart, counts]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setIsFormVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Payment integration
  const [name, setName] = useState(isAuthenticated?user.name:"");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const buyNow = async (e) => {
    e.preventDefault();
    // Validation
    if (name === "" || address === "" || pincode === "" || phoneNumber === "") {
      toast.error("All fields are required");
      return;
    }

    const addressInfo = {
      name,
      address,
      pincode,
      phoneNumber,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      })
    };

    var options = {
      key: "rzp_test_ftuusjrBzYej92",
      key_secret: "Y5iUyeOLTx5jP6WTgEEAUduQ",
      amount: parseInt(grandTotal * 100),
      currency: "INR",
      order_receipt: 'order_rcptid_' + name,
      name: "INDICART",
      description: "for testing purpose",
      handler: function (response) {
        console.log(response);
        toast.success('Payment Successful');

        const paymentId = response.razorpay_payment_id;

        const orderInfo = {
          cartItems: cart,
          addressInfo,
          date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }),
          paymentId
        };

        (()=>{
          setIsFormVisible(false)
          setCart([])
          setName('')
          setAddress('')
          setPincode('')
          setPhoneNumber('')
          navigate('/')
        })()
      },
      theme: {
        color: "#3399cc"
      }
    };

    var pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <div className='min-h-screen py-10 flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-center'>
      <section className='flex flex-col items-center gap-3 max-h-[80vh] overflow-auto'>
        {cart.map((item, index) => (
          <div key={item.title} className='w-[300px] flex items-center border-2 justify-between px-2'>
            <img src={item.image} alt="" className='h-[50px]' />
            <div className="counter font-semibold text-sm">
              <span className='px-2 py-[3px] border-black border-2' onClick={() => incrementCount(index)}>+</span>
              <span className='px-2 py-[3px] border-black border-2'>{counts[index]}</span>
              <span className='px-2 py-[3px] border-black border-2' onClick={() => decrementCount(index)}>-</span>
            </div>
            <b>${calculatePrice(item, counts[index]).toFixed(2)}</b>
            <FaTrashCan color='red' size="1rem" onClick={() => removeFromCart(item.title)} />
          </div>
        ))}
      </section>
      {cart.length > 0 ? (
        <section className='w-[300px] border-2 flex flex-col p-4 gap-2'>
          <p>Subtotal Price: <b>${grandTotal.toFixed(2)}</b></p>
          <p>Shipping Fees: <b>$100</b></p>
          <hr />
          <p>Total Price: <b>${(grandTotal + 100).toFixed(2)}</b></p>
          <button className='text-white bg-gray-900 px-2 py-1 rounded font-semibold' onClick={() =>{
             isAuthenticated?
             setIsFormVisible(true):
             loginWithRedirect()
          }}>Checkout</button>
        </section>
      ) : (
        <div className='text-center'>
          <h3 className='font-bold text-xl'>Cart is empty</h3>
          <NavLink to="/">
            <button className='border-2 border-gray-900 text-gray-900 px-2 py-1 rounded w-fit hover:bg-gray-900 hover:text-white font-semibold mt-5'>Go to homepage</button>
          </NavLink>
        </div>
      )}

      {isFormVisible && (
        <section className='absolute h-screen top-14 w-full bg-black bg-opacity-[0.5] flex justify-center pt-10'>
          <form ref={formRef} className='w-[300px] h-fit bg-white p-4 flex flex-col gap-3 rounded-lg'>
            <div className='flex flex-col gap-1'>
              <label htmlFor="name" className='font-semibold text-md pl-1'>Enter Full Name</label>
              <input type="text" id='name' className='bg-gray-300 p-2 outline-none rounded-lg'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="address" className='font-semibold text-md pl-1'>Enter Address</label>
              <input type="text" id='address' className='bg-gray-300 p-2 outline-none rounded-lg'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="pincode" className='font-semibold text-md pl-1'>Enter Pincode</label>
              <input type="text" id='pincode' className='bg-gray-300 p-2 outline-none rounded-lg'
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="phone" className='font-semibold text-md pl-1'>Enter Phone Number</label>
              <input type="text" id='phone' className='bg-gray-300 p-2 outline-none rounded-lg'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <button className='bg-gray-900 text-white font-semibold py-2 rounded m-2' onClick={buyNow}>Order now</button>
          </form>
        </section>
      )}
    </div>
  );
};

export default Cart;
