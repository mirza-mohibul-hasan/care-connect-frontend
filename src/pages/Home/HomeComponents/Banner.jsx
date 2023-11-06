import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BsArrowRight } from 'react-icons/bs';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Banner = () => {
  return (
    <div className="w-10/12 mx-auto p-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="hero" >
            <div className="hero-content flex justify-evenly">
              <img src="https://i.ibb.co/yqR48qM/The-Connection-Between-Poverty-and-Health.jpg" className="max-w-lg h-[400px] ml-10 rounded-lg mb-10 " />
              <div className='w-1/2 ml-10 '>
                <h1 className="text-4xl font-bold text-black ">The Largest  <span className='text-blue-800'> Health Care</span>  <br /> Website</h1>
                <p className="py-6 font-semibold text-gray-950 mr-10">Here we provide our best services. We help the helpless people and give the best solution about their health.</p>
                <button className="btn bg-blue-800 text-white font-bold border-0">Explore More <span className='ml-3'><BsArrowRight></BsArrowRight></span></button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero" >
            <div className="hero-content flex justify-evenly">
              <img src="https://i.ibb.co/J2BrkNf/img.webp" className="max-w-lg h-[400px] ml-10 rounded-lg" />
              <div className='w-1/2 ml-10 '>
                <h1 className="text-4xl font-bold text-black ">The Largest  <span className='text-blue-800'> Health Care</span>  <br /> Website</h1>
                <p className="py-6 font-semibold text-gray-950 mr-10">Here we provide our best services. We help the helpless people and give the best solution about their health.</p>
                <button className="btn bg-blue-800 text-white font-bold border-0">About Us <span className='ml-3'><BsArrowRight></BsArrowRight></span></button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero" >
            <div className="hero-content flex justify-evenly">
              <img src="https://i.ibb.co/hWrz2rY/zeyn-afuang-9xp0-AWvl-GC4-unsplash.jpg" className="max-w-lg h-[400px] ml-10 rounded-lg" />
              <div className='w-1/2 ml-10 '>
                <h1 className="text-4xl font-bold text-black ">The Largest  <span className='text-blue-800'> Health Care</span>  <br /> Website</h1>
                <p className="py-6 font-semibold text-gray-950 mr-10">Here we provide our best services. We help the helpless people and give the best solution about their health.</p>
                <button className="btn bg-blue-800 text-white font-bold border-0">Explore More <span className='ml-3'><BsArrowRight></BsArrowRight></span></button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero" >
            <div className="hero-content flex justify-evenly">
              <img src="https://i.ibb.co/6yLfkjH/istockphoto-1129628379-612x612.jpg" className="max-w-lg h-[400px] ml-10 rounded-lg" />
              <div className='w-1/2 ml-10 '>
                <h1 className="text-4xl font-bold text-black ">The Largest  <span className='text-blue-800'> Health Care</span>  <br /> Website</h1>
                <p className="py-6 font-semibold text-gray-950 mr-10">Here we provide our best services. We help the helpless people and give the best solution about their health.</p>
                <button className="btn bg-blue-800 text-white font-bold border-0">Explore More <span className='ml-3'><BsArrowRight></BsArrowRight></span></button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero" >
            <div className="hero-content flex justify-evenly">
              <img src="https://i.ibb.co/XsQF9W8/Cancer-patient-with-mask-resized.jpg" className="max-w-lg h-[400px] ml-10 rounded-lg" />
              <div className='w-1/2 ml-10 '>
                <h1 className="text-4xl font-bold text-black ">The Largest  <span className='text-blue-800'> Health Care</span>  <br /> Website</h1>
                <p className="py-6 font-semibold text-gray-950 mr-10">Here we provide our best services. We help the helpless people and give the best solution about their health.</p>
                <button className="btn bg-blue-800 text-white font-bold border-0">Explore More <span className='ml-3'><BsArrowRight></BsArrowRight></span></button>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Banner;
