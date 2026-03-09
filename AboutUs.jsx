import React from 'react'
import './AboutUs.css';
function AboutUs() {
  return (
    <div class="container">
       
        <div class="about-header">
            <h1>About <span>BLUESTONE</span></h1>
            <p>Crafting timeless elegance since 2010, we bring your dreams to life with exquisite jewellery designs.</p>
        </div>

       
        <div class="about-grid">
            <div class="about-content">
                <h2>Our Story</h2>
                <p>Welcome to BLUESTONE, where every piece tells a story. Founded in 2010 by master jeweller Rajesh Mehta, we started as a small family workshop in the heart of Mumbai. Our passion for creating beautiful, high-quality jewellery quickly gained recognition, and today we're proud to be one of India's most trusted jewellery brands.</p>
                <p>Each BLUESTONE creation is a perfect blend of traditional craftsmanship and contemporary design. We believe that jewellery is more than just an accessory – it's an expression of your unique style and a keeper of precious memories.</p>
                <p>From engagement rings that mark new beginnings to heirloom pieces passed down through generations, every piece we create is crafted with love, attention to detail, and an unwavering commitment to quality.</p>
            </div>
            <div class="about-image">
                <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Jewellery Craftsmanship"/>
            </div>
        </div>

       
        <div class="values-section">
            <h2>Our Core Values</h2>
            <div class="values-grid">
                <div class="value-card">
                    <i class="fas fa-gem"></i>
                    <h3>Quality First</h3>
                    <p>We use only the finest materials and each piece is certified and hallmarked.</p>
                </div>
                <div class="value-card">
                    <i class="fas fa-hand-holding-heart"></i>
                    <h3>Trust & Transparency</h3>
                    <p>Clear pricing, certified diamonds, and lifetime exchange policy.</p>
                </div>
                <div class="value-card">
                    <i class="fas fa-paint-brush"></i>
                    <h3>Unique Designs</h3>
                    <p>Exclusive collections you won't find anywhere else.</p>
                </div>
                <div class="value-card">
                    <i class="fas fa-leaf"></i>
                    <h3>Ethical Sourcing</h3>
                    <p>Committed to sustainable and responsible practices.</p>
                </div>
            </div>
        </div>

        
        <div class="team-section">
            <h2>Meet Our Experts</h2>
            <div class="team-grid">
                <div class="team-member">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Rajesh Mehta"/>
                    <h3>Rajesh Mehta</h3>
                    <p>Founder & Master Jeweller</p>
                </div>
                <div class="team-member">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Priya Sharma"/>
                    <h3>Priya Sharma</h3>
                    <p>Head Designer</p>
                </div>
                <div class="team-member">
                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Anita Desai"/>
                    <h3>Anita Desai</h3>
                    <p>Master Craftsman</p>
                </div>
            </div>
        </div>

      
        <div class="stats-section">
            <div class="stat-item">
                <h3>15+</h3>
                <p>Years of Excellence</p>
            </div>
            <div class="stat-item">
                <h3>50k+</h3>
                <p>Happy Customers</p>
            </div>
            <div class="stat-item">
                <h3>100%</h3>
                <p>Certified Jewellery</p>
            </div>
            <div class="stat-item">
                <h3>25+</h3>
                <p>Stores Across India</p>
            </div>
        </div>

       
        <div class="features-section">
            <h2>Why Choose Us</h2>
            <div class="features-grid">
                <div class="feature-item">
                    <i class="fas fa-certificate"></i>
                    <span>BIS Hallmarked Gold & Silver</span>
                </div>
                <div class="feature-item">
                    <i class="fas fa-exchange-alt"></i>
                    <span>Lifetime Exchange Policy</span>
                </div>
                <div class="feature-item">
                    <i class="fas fa-truck"></i>
                    <span>Free Shipping & Insurance</span>
                </div>
                <div class="feature-item">
                    <i class="fas fa-shield-alt"></i>
                    <span>100% Certified Diamonds</span>
                </div>
                <div class="feature-item">
                    <i class="fas fa-clock"></i>
                    <span>Lifetime Maintenance</span>
                </div>
                <div class="feature-item">
                    <i class="fas fa-credit-card"></i>
                    <span>Easy EMI Options</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs