import React, { useState, useEffect } from 'react'  // हे import करायला विसरलात
import './Home.css';

export default function Home() {

  


  // Images array - component च्या वरती (return च्या बाहेर)
  const images = [
    "https://wallpapers.com/images/hd/jewellery-background-1920-x-1080-pxqa1q7pb1owttao.jpg",
    "https://wallpapercave.com/wp/wp2375474.jpg",
    "https://png.pngtree.com/background/20230521/original/pngtree-golden-jewelry-display-in-a-dark-background-with-black-lamps-picture-image_2682247.jpg",
    "https://wallpapers.com/images/hd/jewellery-background-2445-x-2048-mr9lm638l3scj69h.jpg",
    "https://wallpaperaccess.com/full/3715059.jpg"
  ];

  // current image index साठी state
  const [currentIndex, setCurrentIndex] = useState(0);

  // automatic image change साठी useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 सेकंदांनी image बदलेल

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <>
      {/* नवीन Image Slider - एकच image जी बदलेल */}
      <div className="single-image-slider">
        <img 
          src={images[currentIndex]} 
          alt="Jewellery" 
          className="sliding-image"
        />
        {/* छोटे indicators - कुठली image चालू आहे हे दाखवण्यासाठी */}
        <div className="image-indicators">
          {images.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Discover <span>Beautiful</span> Jewellery</h1>
          <p>Handcrafted with love for every special moment</p>
          <div>
            <button className="btn">Shop Now</button>
            <button className="btn btn-outline">Explore</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Jewellery"/>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Rings"/>
            <h3>Rings</h3>
            <p>Starting ₹9,999</p>
          </div>
          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Necklaces"/>
            <h3>Necklaces</h3>
            <p>Starting ₹14,999</p>
          </div>
          <div className="category-card">
            <img src="https://kinclimg0.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BISP0356H19_YAA18DIG6SYRUXXXX_ABCD00-PICS-00004-1024-18356.png" alt="Earrings"/>
            <h3>Earrings</h3>
            <p>Starting ₹4,999</p>
          </div>
          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Bracelets"/>
            <h3>Bracelets</h3>
            <p>Starting ₹6,999</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="https://kinclimg1.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BISP0359R19_YAA14DIG6XXXXXXXX_ABCD00-PICS-00001-1024-65657.png" alt="Ring"/>
            <h3>Diamond Ring</h3>
            <div className="price">₹45,999</div>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Necklace"/>
            <h3>Gold Necklace</h3>
            <div className="price">₹89,999</div>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Earrings"/>
            <h3>Diamond Earrings</h3>
            <div className="price">₹34,999</div>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://kinclimg4.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIMG0635V23_YAA14DIG6XXXXXXXX_ABCD00-PICS-00000-1024-47155.png" alt="Bracelet"/>
            <h3>Bracelet</h3>
            <div className="price">₹77,999</div>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://kinclimg9.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BVCK0530C08_YAA22XXXXXXXXXXXX_ABCD00-PICS-00003-1024-35208.png" alt="Chain"/>
            <h3>Gold Chain</h3>
            <div className="price">₹55,999</div>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://kinclimg0.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BINI0425B11_YAA18DIG6XXXXXXXX_ABCD00-PICS-00002-1024-26232.png" alt="Bangle"/>
            <h3>Bangle</h3>
            <div className="price">₹87,999</div>
            <button>Add to Cart</button>
          </div>
        </div>
      </section>
    </>
  )
}