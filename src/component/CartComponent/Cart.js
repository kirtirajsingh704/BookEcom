import React, { useState } from "react";
import { useCart } from "../../Context/CartContext.js";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { useEffect, } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios"

const CartPage = () => {

  const navigate = useNavigate();
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  const [userDetails , setUserDetails] = useState(null)

  // Calculate Grand Total
  const grandTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  useEffect(()=>{
    if(cartItems.length===0)
    {
    toast("Your cart is empty 🛒",
    {
        style:{
            borderRadius:"10px"
        
        }
    }
)
    }
  },[cartItems]);


  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      axios
        .get(`http://localhost:5001/user/fetch?email=${email}`)
        .then((res) => {
          if (res.data && res.data.length > 0) {
            setUserDetails(res.data[0]);
          }
        })
        .catch((err) => {
          console.error("Error fetching user:", err);
        });
    }
  }, []);


  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };


  // 🧾 Razorpay payment function
  const handlePayment = async () => {
    const res = await loadRazorpayScript();
    if (!res) {
      alert("Failed to load Razorpay SDK.");
      return;
    }

    try {
      const orderResponse = await axios.post("http://localhost:5001/payment/order", {
        amount: grandTotal * 100,
        currency :'INR' // Razorpay expects amount in paise
      });

      const options = {
        key: "rzp_test_wisqwLjMFkT00Q", //  Replace with your Razorpay test key/ og key 
        amount: orderResponse.data.amount,
        currency: "INR",
        name: "Book Store 📚",
        description: "Buy Books at a great price",
        order_id: orderResponse.data.id,
        handler: async (response) => {
          try {
            const verifyRes = await axios.post("http://localhost:5001/payment/verify", {
              ...response,
            });

            if (verifyRes.data.success) {
              alert("✅ Payment Successful!");
              // navigate("/Thankyou"); // Or wherever you want
            } else {
              alert("❌ Payment verification failed.");
            }
          } catch (err) {
            alert("❌ Error verifying payment.");
            // console.error(err);
            // navigate("/unsuccessfull")
          }
        },
        prefill: {
          name: userDetails?.name,
          email: localStorage.getItem("email"),
          contact: userDetails?.mobile,
        },
        theme: {
          color: "pink",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (err) {
      console.error(err);
      
      toast.error("Payment failed. Please try again.", { duration: 4000, icon: "❌" });
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Shopping Cart</h2>

      {userDetails && userDetails.address && (
        <div className="mb-4 p-3 border rounded shadow-sm bg-light">
          <h5>📍 Delivery Address</h5>
          <p>
            {userDetails.name},<br />
            {userDetails.address},<br />
            {userDetails.city}<br /><br />
            ({userDetails.mobile})
          </p>
          <button
            className="btn btn-outline-secondary mt-2"
            onClick={() => navigate("/epuser")}
          >
            Change Address
          </button>
        </div>
      )}

      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div key={item._id} className="cart-item d-flex align-items-center justify-content-between p-3 shadow-sm mb-3">
              
              {/* Product Image */}
              <img 
                src={`/assets/subcaticons/${item.subcaticonnm}`} 
                alt={item.subcatnm} 
                className="cart-image" 
                style={{ width: "80px", height: "80px", borderRadius: "8px" }} 
              />

              {/* Product Info */}
              <div className="cart-details flex-grow-1 ms-3">
                <h5 className="mb-1">{item.subcatnm}</h5>
                <p className="text-muted mb-1">₹{item.price} x {item.quantity}</p>
                <strong>Total: ₹{item.price * item.quantity}</strong>
              </div>

              {/* Quantity Controls */}
              <div className="d-flex align-items-center">
                <button className="btn btn-sm btn-outline-primary me-2" onClick={() => decreaseQuantity(item._id)}>
                  <FaMinus />
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button className="btn btn-sm btn-outline-primary me-3" onClick={() => increaseQuantity(item._id)}>
                  <FaPlus />
                </button>
              </div>

              {/* Remove Button */}
              <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(item._id)}>
                <FaTrash />
              </button>
            </div>
          ))}

          {/* Grand Total */}
          <div className="mt-4 p-3 bg-light rounded shadow-sm">
            <h4 className="text-end">Grand Total: ₹{grandTotal}</h4>
            <center>
            <button className="btn btn-xl" style={{background:"blue",color:"white"}} onClick={handlePayment}>Buy Now</button>
            </center>
          </div>
        </div>
        
      ) : (
        <p className="text-muted">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
