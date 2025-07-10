import FoodCard from '../../../components/FoodCard/FoodCard';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";


const OrderTab = ({ items }) => {
   
    return (
        <div >

            <Swiper
               
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='grid md:grid-cols-3 gap-10'>
                        {
                            items.map(item => <FoodCard
                                key={item._id}
                                item={item}
                            ></FoodCard>)
                        }
                    </div>

                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default OrderTab;