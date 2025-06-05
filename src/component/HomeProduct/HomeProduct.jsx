import React, { useEffect, useState } from "react";
import { FaHeart, FaStar,  } from "react-icons/fa";
import { useCart } from "../../Context/CartContext.js";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // const ScrollToTop =()=>{
    
  // }

  const handleBuyNow = () => {
    addToCart(product);
    navigate("/login");



    // window.scrollTo({top:0,behavior:'smooth'});


    
      const duration = 2800; // in ms
      const start = window.scrollY;
      const startTime = performance.now();
    
      const easeOutCubic = (t) => (--t) * t * t + 1;
    
      const animateScroll = (currentTime) => {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeOutCubic(progress);
        window.scrollTo(0, start * (1 - ease));
    
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };
    
      requestAnimationFrame(animateScroll);
    
    


  };

  return (
    <div className="col-md-4">
      <div className="product-card shadow-sm">
        <div className="position-relative">
          <img
            src={`/assets/subcaticons/${product.subcaticonnm}`}
            className="product-image w-100 img-fixed"
            alt={product.subcatnm}
            style={{ width: "150px", height: "200px" }}
          />
          <span className="discount-badge">{product.discount || "-10%"}</span>
          <button className="wishlist-btn">
            <FaHeart />
          </button>
        </div>
        <div className="p-3">
          <span className="category-badge mb-2 d-inline-block">{product.catnm}</span>
          <h6 className="mb-1">{product.subcatnm}</h6>
          <div className="rating-stars mb-2">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                color={index < (product.rating || 4) ? "gold" : "gray"}
              />
            ))}
          </div>
          <div className="d-flex justify-content-between align-items-center">
                      <span className="price">₹ {product.price || "N/A"}</span>
                      
                    </div>
        </div>
        <button className="btn btn-sm btn-primary w-100" onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

const HomeProduct = () => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
 
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  useEffect(() => {
    fetch("http://localhost:5001/category/fetch")
      .then((response) => response.json())
      .then((data) => setCategories(data.data || data || []))
      .catch((error) => console.error("Error fetching categories:", error));

    fetch("http://localhost:5001/subcategory/fetch")
      .then((response) => response.json())
      .then((data) => setSubCategories(data.data || data || []))
      .catch((error) => console.error("Error fetching subcategories:", error));
  }, []);

  const filteredSubCategories = subCategories.filter((product) => {
    const matchesCategory = selectedCategory
      ? product.catnm === selectedCategory
      : true;
    const matchesSearch = product.subcatnm
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesSearch && matchesPrice;
  });

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="mb-0">Book Collection</h4>
        <div className="d-flex gap-3 align-items-center">
          <input
            type="text"
            placeholder="Search products..."
            className="form-control"
            style={{ width: "200px" }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
          />
          <span>₹0 - ₹{priceRange[1]}</span>
        </div>
      </div>

      <div className="row g-4">
        {/* Category Filter Sidebar */}
        <div className="col-lg-3">
          <h5>Categories</h5>
          <ul style={{ cursor: "pointer" }} className="list-unstyled">
            <li
              onClick={() => setSelectedCategory("")}
              style={{ color: !selectedCategory ? "green" : "black" }}
            >
              All Products
            </li>
            {Array.isArray(categories) &&
              categories.map((category) => (
                <li
                  key={category._id}
                  onClick={() => setSelectedCategory(category.catnm)}
                  style={{
                    color:
                      selectedCategory === category.catnm ? "green" : "black",
                  }}
                >
                  {category.catnm}
                </li>
              ))}
          </ul>
        </div>

        {/* Product Grid */}
        <div className="col-lg-9" style={{ cursor: "pointer" }}>
          <div className="row g-4">
            {filteredSubCategories.length > 0 ? (
              filteredSubCategories.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
