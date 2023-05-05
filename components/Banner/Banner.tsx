import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Slide } from "./Slide";

const slides = [
  {
    title: "Bike’s season started now!",
    description: "Check our new items for your bike adventures",
    info: "",
    imgSrc:
      "https://cdn.shopify.com/s/files/1/0082/4128/3143/files/storm-transparent-silverback-bikes_1.png?v=1669803222",
    link: "/",
  },
  {
    title: "Champions League Final is comming!",
    description: "Get your tickets for the best game in this season",
    info: "Sales is open until 20.05.2023",
    imgSrc:
      "https://w7.pngwing.com/pngs/380/500/png-transparent-soccer-field-arena-lawn-arena-lawn-grassland.png",
    link: "/",
  },
  {
    title: "New Real Madrid colletion!",
    description:
      "For truly Real Madrid fans, the new collection is available now",
    info: "",
    imgSrc:
      "https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fjpeg&blobkey=id&blobtable=MungoBlobs&blobwhere=1203423916498&ssbinary=true",
    link: "/",
  },
];

export const Banner = () => {
  return (
    <div className="w-full bg-gray-300 rounded-md">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Pagination]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Slide
              title={slide.title}
              description={slide.description}
              info={slide.info}
              imgSrc={slide.imgSrc}
              link={slide.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
