"use client";
import {Button} from "@nextui-org/react";
import {FaGithub} from "react-icons/fa";
import {motion} from "framer-motion";
import Container from "@/components/ui/Container";
import Image from "next/image";
import {useTheme} from "next-themes";

const Banner = () => {
  const {theme} = useTheme();
  return (
    <section
      className={`${
        theme != "dark" &&
        "bg-[url('/images/home/banner-bg.png')] bg-no-repeat bg-cover relative"
      }`}>
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
        <div>
          <h1>Unlock Exceptional Content Marketing Solutions</h1>
          <p className="my-4 md:my-8">
            Transform your business potential with our exceptional content
            marketing and SEO services. Take the first step towards growth by
            reaching out to us today and unlocking your full potential.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md">
            <Button color="primary" size="lg" fullWidth>
              Get Started
            </Button>
            <a href="https://github.com/sheik-mostafizur" target="_blank">
              <Button
                size="lg"
                variant="faded"
                startContent={<FaGithub className="text-2xl" />}
                fullWidth>
                GitHub
              </Button>
            </a>
          </div>
        </div>
        <motion.div
          initial={{
            scale: 0.75,
            opacity: 0,
          }}
          animate={{scale: 1, opacity: 1}}>
          <motion.div
            animate={{
              translateY: [25, 0, 0, 25],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 0.5,
            }}>
            <Image
              src="/images/home/home-banner.png"
              alt="home banner"
              width={600}
              height={600}
              className="w-auto h-auto"
              priority={true}
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Banner;
