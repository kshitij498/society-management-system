import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";
import image1 from '../images/header1.avif'
import image2 from '../images/header2.avif'
import image3 from '../images/header3.avif'
import image4 from '../images/header4.jpg'
import image5 from '../images/header5.jpg'
import image6 from '../images/header6.avif'
import image7 from '../images/header7.jpg'
import image8 from '../images/header8.jpeg'
import image9 from '../images/header9.avif'
import './TopSlider.css';

function TopSlider(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear"
      };

    return (
        <>
            <Slider {...settings}>
              <div className="wdt">  
              <img  className="img" alt="pic1" src= {image1}/>  
              </div>   
              <div className="wdt">  
              <img  className="img" alt="pic1" src= {image2}/>  
              </div>  
              <div className="wdt">  
              <img  className="img" alt="pic1" src= {image3}/>  
              </div >  
              <div className="wdt">  
              <img  className="img" alt="pic1" src= {image4}/>  
              </div>  
              <div className="wdt">  
              <img  className="img" alt="pic1" src= {image5}/>  
              </div> 
              <div className="wdt">  
              <img  className="img" alt="pic1" src= {image6}/>  
              </div> 
              <div className="wdt">  
              <img  className="img" alt="pic1" src= {image7}/>  
              </div> 
              <div className="wdt">  
              <img  className="img" alt="pic1" src= {image8}/>  
              </div> 
              <div className="wdt">  
              <img  className="img" alt="pic1" src= {image9}/>  
              </div> 
            </Slider>
        </>        
    );
}

export default TopSlider;