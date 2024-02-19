import React from "react";
import Slider from "react-slick";
const SliderComp = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center h-full  bg-gray-200 pl-6">
          <div>
            <div className="text-5xl font-bold h-4/5">
              Teknolojinin Son Harikası Ürünler
            </div>
            <div className="text-lg- my-2 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
              illum, mollitia quae ut natus odio debitis unde error harum
              voluptate quaerat officia maiores rerum, dolorem aliquam sint cum
              iste? Alias!
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-300 shadow-slate-400">
              İncele
            </div>
          </div>
          <div className="-p-2">
            <img
              src="https://images.samsung.com/my/smartphones/galaxy-z-flip4/buy/Flip4_Carousel_ProductKV_Graphite_MO.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="!flex items-center  bg-gray-200 pl-6 !h-full">
          <div>
            <div className="text-5xl font-bold">
              Teknolojinin Son Harikası Ürünler
            </div>
            <div className="text-lg- my-4 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
              illum, mollitia quae ut natus odio debitis unde error harum
              voluptate quaerat officia maiores rerum, dolorem aliquam sint cum
              iste? Alias!
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-300 shadow-slate-400">
              İncele
            </div>
          </div>
          <img
            className="!h-full"
            src="https://iasbh.tmgrup.com.tr/cc61b9/0/0/0/0/700/394?u=https://isbh.tmgrup.com.tr/sbh/2022/09/07/iphone-14-ne-zaman-cikiyor-apple-iphone-14-fiyati-ne-olacak-ozelleri-ve-renkleri-neler-1662532189137.jpg&mw=800"
            alt=""
          />
        </div>
        <div className="!flex items-center  bg-gray-200 pl-6 !h-full">
          <div>
            <div className="text-5xl font-bold">
              Teknolojinin Son Harikası Ürünler
            </div>
            <div className="text-lg- my-4 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
              illum, mollitia quae ut natus odio debitis unde error harum
              voluptate quaerat officia maiores rerum, dolorem aliquam sint cum
              iste? Alias!
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-300 shadow-slate-400">
              İncele
            </div>
          </div>

          <img
            className="!h-full"
            src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/iphone14promax_1.jpg?VersionId=TF0EiCCvxCMCnvSN4R5Z2FfnkoH.u51l&size=690:388"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
