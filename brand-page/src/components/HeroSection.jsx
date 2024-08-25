import flipkart from '../images/flipkart.png';
import amazon from '../images/amazon.png';
// import './HeroSection.css'
import '../App.css';
const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>
          YOUR FEET <br /> DESERVE <br /> THE BEST
        </h1>

        <p>
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP TO HELP WITH
          OUR SHOES
        </p>

        <div className="hero-btn">
          <button>Shop Now</button>
          <button>Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>
        </div>
      
        <div className="hero-logo">
          <img src={flipkart} alt="amazon-logo" />
          <img src={amazon} alt="flipkart-logo" />
         
        </div>
      </div>

      <div className="hero-image" >

        <img src="/images/shoe_image.png" alt="shoe-image" />
      </div>
    </main>
  );
};

export default HeroSection;
