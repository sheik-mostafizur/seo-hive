"use client";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {Pagination, Autoplay, Navigation} from "swiper/modules";

import {FaRegStar, FaStar, FaStarHalfAlt} from "react-icons/fa";

import Container from "@/components/ui/Container";
import Image from "next/image";
import {Button} from "@nextui-org/react";

const Testimonial = () => {
  const data = [
    {
      _id: "1",
      icon: (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </>
      ),
      feedback:
        "Working with SEOHive was a game-changer for our business. Their SEO strategies increased our organic traffic by 75% within just three months. The team's expertise and personalized approach made... ",
      userProfile:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      userName: "Emily Johnson",
      profession: "Marketing Manager",
    },
    {
      _id: "2",
      icon: (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </>
      ),
      feedback:
        "SEOHive's services have been instrumental in boosting our online presence. Their meticulous SEO techniques led to a remarkable 60% surge in our website traffic in a short span of time. I highly recommend...",
      userProfile:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      userName: "David Smith",
      profession: "Business Owner",
    },
    {
      _id: "3",
      icon: (
        <>
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
          <FaRegStar />
        </>
      ),
      feedback:
        "I can't thank SEOHive enough for their outstanding SEO services. Our website's visibility skyrocketed, resulting in a 100% increase in organic traffic. The team's dedication and strategic approach are...",
      userProfile:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      userName: "Sophia Williams",
      profession: "Digital Marketer",
    },
  ];
  return (
    <section className="dark:bg-primary-100">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-16 items-center">
        <div className="space-y-8">
          <h2>Hear from Our Satisfied Clients</h2>
          <p>
            Discover inspiring success stories from clients who&apos;ve
            experienced remarkable growth and success through our services. Read
            about their journey and the transformative impact SEOHive has had on
            their businesses.
          </p>
          <Button size="lg" color="primary">
            Read the success stories
          </Button>
        </div>
        <Swiper
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
          direction={"vertical"}
          className="mySwiper h-96 sm:h-64 md:h-96 lg:h-80 space-y-6">
          {data.map((item) => (
            <SwiperSlide
              key={item._id}
              className="p-2 sm:p-4 lg:p-6"
              style={{display: "flex", alignItems: "center"}}>
              <div className="p-4 space-y-3 shadow bg-gradient-to-r from-primary-50 to-primary-100 backdrop-blur">
                <div className="text-xl flex items-center gap-2 text-yellow-500">
                  {item.icon}
                </div>
                <div>
                  <q>{item.feedback}</q>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div>
                      <Image
                        src={item.userProfile}
                        alt={item.userName}
                        width={50}
                        height={50}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h5>{item.userName}</h5>
                      <p className="text-sm">{item.profession}</p>
                    </div>
                  </div>
                  <Button size="sm" color="primary" variant="bordered">
                    Read more
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Testimonial;
