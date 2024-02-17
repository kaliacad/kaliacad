import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


// const arrowStyle = {
//   position: 'absolute',
//   top: '50%',
//   transform: 'translateY(-50%)',
//   zIndex: 1,
//   cursor: 'pointer',
//   fontSize: '20px',
//   color: 'white',
//   backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   border: 'none',
//   borderRadius: '50%',
//   width: '40px',
//   height: '40px',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   transition: 'background-color 0.3s ease',
// };

function useCarousel() {

  const data=({datajx})=>{
    return  <div style={{ height: '400px'}}>
                <Slider  
                    // prevArrow={<button  style={arrowStyle}>Previous</button>}
                    // nextArrow={<button  style={arrowStyle}>Next</button>}
                    slidesToShow={3}
                    dots={false}
                    infinite={true}
                    speed= {500}
                      slidesToScroll= {1}
                      // vertical={true} // Positionne le carrousel de manière verticale
                      // verticalSwiping={true}
      
                >
     {datajx}
  </Slider>
  </div>
  }

  const dataverticale=({datajx})=>{
    return  <div >
                <Slider  
                    // prevArrow={<button  style={arrowStyle}>Previous</button>}
                    // nextArrow={<button  style={arrowStyle}>Next</button>}
                    slidesToShow={3}
                    dots={false}
                    infinite={true}
                    speed= {500}
                      slidesToScroll= {1}
                      vertical={true} // Positionne le carrousel de manière verticale
                      verticalSwiping={true}
      
                >
     {datajx}
  </Slider>
  </div>
  }
   
  return {
    data,
    dataverticale
  }
}

export default useCarousel
