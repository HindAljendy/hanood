import './SliderSlick.css'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css' ;
import 'slick-carousel/slick/slick-theme.css';
const SliderSlick = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='react-slide'>
            <h2>Slider Task</h2>
            <Slider {...settings}>
                <div className='box'>
                    <div className='HJ-slider1'>
                        <h3>1</h3>
                    </div>
                </div>
                <div className='box'>
                    <div className='HJ-slider2'>
                        <h3>2</h3>
                    </div>
                </div>
                <div className='box'>
                    <div className='HJ-slider3'>
                        <h3>3</h3>
                    </div>  
                </div>
                <div className='box'>
                    <div className='HJ-slider4'>
                        <h3>4</h3>
                    </div>
                </div>
            
            </Slider>
        </div>
    );
}



export default SliderSlick