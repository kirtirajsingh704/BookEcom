import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddSubCategory() {
  const navigate = useNavigate();

  const [file, setFile] = useState();
  const [catName, setCatName] = useState();
  const [subCatName, setSubCatName] = useState();
  const [output, setOutput] = useState();
  const [cDetails, setCategoryDetails] = useState([]);
  const [price, setPrice] = useState();
  const [discount, setDiscount] = useState();
  const [rating, setRating] = useState();

  useEffect(() => {
    axios.get("http://localhost:5001/category/fetch")
      .then((response) => {
        setCategoryDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);




  



  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    var formData = new FormData();
    formData.append('catnm', catName);
    formData.append('subcatnm', subCatName);
    formData.append('caticon', file);
    formData.append('price', price);
    formData.append('discount', discount);
    formData.append('rating', rating);
    const config = {
      'content-type': 'multipart/form-data'
    };


// scroll up 
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
// end scroll up


    axios.post("http://localhost:5001/subcategory/save", formData, config).then((response) => {
      setCatName("");
      setSubCatName("");
      setOutput("✅ Book Added Successfully");
      setDiscount("");
      setCategoryDetails([]);
      setPrice("");
      setRating("");
      setFile("")
      navigate("/addsubcategory");
    });


   



  };

  return (
    <>
      <div className="glass-container">
        <h1>Add New Book</h1>
        {output && <p className="output-message">{output}</p>}
        <form>
          <div className="form-group">
            <label>Category:</label>
            <select className="form-control" value={catName} onChange={e => setCatName(e.target.value)}>
              <option>Select Category</option>
              {
                cDetails.map((row, index) => (
                  <option key={index}>{row.catnm}</option>
                ))
              }
            </select>
          </div>

          <div className="form-group">
            <label>Book Name:</label>
            <input type="text" className="form-control" value={subCatName} onChange={e => setSubCatName(e.target.value)} />
          </div>

          <div className="form-group">
            <label>Book Icon:</label>
            <input type="file" className="form-control" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Price:</label>
            <input type="text" className="form-control" value={price} onChange={e => setPrice(e.target.value)} />
          </div>

          <div className="form-group">
            <label>Discount:</label>
            <input type="text" className="form-control" value={discount} onChange={e => setDiscount(e.target.value)} />
          </div>

          <div className="form-group">
            <label>Rating:</label>
            <input type="text" className="form-control" value={rating} onChange={e => setRating(e.target.value)} />
          </div>

          <button onClick={handleSubmit}  type="button" className="btn-submit">➕ Add Subcategory</button>
        </form>
      </div>

      {/* Embedded Glassmorphism CSS */}
      <style jsx>{`
        body {
          background: linear-gradient(to right, #8360c3, #2ebf91);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .glass-container {
          max-width: 600px;
          margin: 60px auto;
          padding: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          backdrop-filter: blur(15px);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          color: #fff;
        }

        h1 {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 30px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          font-weight: bold;
          display: block;
          margin-bottom: 8px;
        }

        .form-control {
          width: 100%;
          height:10px
          padding: 12px 15px;
          border: none;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.25);
          color: white;
          outline: none;
        }

        .form-control::placeholder {
          color: #ddd;
        }

        .btn-submit {
          width: 100%;
          padding: 12px;
          background: #00c6ff;
          background: linear-gradient(to right, #0072ff, #00c6ff);
          border: none;
          border-radius: 10px;
          color: white;
          font-weight: bold;
          cursor: pointer;
          margin-top: 20px;
          transition: background 0.3s ease-in-out;
        }

        .btn-submit:hover {
          background: linear-gradient(to right, #00c6ff, #0072ff);
        }

        .output-message {
          text-align: center;
          color: #7fff7f;
          font-weight: bold;
          margin-bottom: 20px;
        }
      `}</style>
    </>
  );
}

export default AddSubCategory;
