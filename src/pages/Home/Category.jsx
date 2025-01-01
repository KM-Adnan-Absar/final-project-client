import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitle from '../../Components/SectionTitle';
import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'

const Category = () => {
    return (
        <section>
              <SectionTitle 
              subHeading={"From 11.00am to 10.00pm"}
              heading={"Order Online"}>
              
        </SectionTitle>
            <Swiper
            slidesPerView={4}          // Show 4 slides at a time
            centeredSlides={true}      // Center the active slide
            spaceBetween={30}          // Space between slides (30px)
            grabCursor={true}          // Show a grab cursor when hovering
            pagination={{ clickable: true }} // Enable clickable pagination dots
            modules={[Pagination]}     // Include the Pagination module
            className="mySwiper mb-16"       // Custom class for styling
        >
    
      
    <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className='text-4xl uppercase text-white -mt-16 text-center'>salads</h3>
            </SwiperSlide>
            <SwiperSlide>
            <img src={slide2} alt="" />
            <h3 className='text-4xl uppercase text-white -mt-16 text-center'>salads</h3>
            </SwiperSlide>
            <SwiperSlide>
            <img src={slide3} alt="" />
            <h3 className='text-4xl uppercase text-white -mt-16 text-center'>Pizzas</h3>
            </SwiperSlide>
            <SwiperSlide>
            <img src={slide4} alt="" />
            <h3 className='text-4xl uppercase text-white -mt-16 text-center'>Soaps</h3>
            </SwiperSlide>
            <SwiperSlide>
            <img src={slide5} alt="" />
            <h3 className='text-4xl uppercase text-white -mt-16 text-center'>Desserts</h3>
            </SwiperSlide>
    
            
        </Swiper>
        </section>
    );
};

export default Category;
