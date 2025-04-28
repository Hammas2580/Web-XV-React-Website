import React from 'react';
import SliderImages1 from "../../assets/Images/sliderImages1.png";
import SliderImages2 from "../../assets/Images/sliderImages2.png";
import SliderImages3 from "../../assets/Images/sliderImages3.png";
import SliderImages4 from "../../assets/Images/sliderImages4.png";
import SliderImages5 from "../../assets/Images/sliderImages5.png";
import SliderImages6 from "../../assets/Images/sliderImages6.png";
import SliderImages7 from "../../assets/Images/sliderImages7.png";

const Slider = () => {
    return (
        <div className="bg-[#0B0E12] w-full h-auto py-10">

            {/* Heading */}
            <div className="flex justify-center pt-8 sm:pt-[80px]">
                <p className="text-[#335DD2] text-[20px] sm:text-[22px] uppercase tracking-wide">
                    Our Partners
                </p>
            </div>

            {/* Images */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-5 pt-8 px-4">
                <img className="w-[100px] sm:w-[152px] h-[40px] object-contain" src={SliderImages1} alt="Partner 1" />
                <img className="w-[100px] sm:w-[152px] h-[40px] object-contain" src={SliderImages2} alt="Partner 2" />
                <img className="w-[100px] sm:w-[152px] h-[40px] object-contain" src={SliderImages3} alt="Partner 3" />
                <img className="w-[100px] sm:w-[152px] h-[40px] object-contain" src={SliderImages4} alt="Partner 4" />
                <img className="w-[100px] sm:w-[152px] h-[40px] object-contain" src={SliderImages5} alt="Partner 5" />
                <img className="w-[100px] sm:w-[152px] h-[40px] object-contain" src={SliderImages6} alt="Partner 6" />
                <img className="w-[100px] sm:w-[152px] h-[40px] object-contain" src={SliderImages7} alt="Partner 7" />
            </div>

        </div>
    );
};

export default Slider;
