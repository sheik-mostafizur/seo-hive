import {Button} from "@nextui-org/react";
import Navbar from "@/components/Navbar";
import Container from "@/components/ui/Container";
import Image from "next/image";
import {FaGithub} from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center py-8 lg:py-16">
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
        <div>
          <Image
            src="/images/home-banner.png"
            alt="home banner"
            width={600}
            height={600}
          />
        </div>
      </Container>

      <section className="dark:bg-primary-100">
        <Container className="py-8 lg:py-16">
          <h2 className="text-center my-6">Chosen and trusted by companies</h2>
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <Image
              src={"/images/companies-brand/semrush-new.svg"}
              alt="semrush"
              width={200}
              height={200}
              className="w-36 sm:w-40 md:w-52"
            />
            <Image
              src={"/images/companies-brand/se-ranking.svg"}
              alt="se-ranking"
              width={200}
              height={200}
              className="w-36 sm:w-40 md:w-52"
            />
            <Image
              src={"/images/companies-brand/ahrefs-seo-tool.svg"}
              alt="ahrefs"
              width={200}
              height={200}
              className="w-36 sm:w-40 md:w-52"
            />
            <Image
              src={"/images/companies-brand/spyfu.svg"}
              alt="spyfu"
              width={200}
              height={200}
              className="w-36 sm:w-40 md:w-52"
            />
            <Image
              src={"/images/companies-brand/surfer.svg"}
              alt="surfer"
              width={200}
              height={200}
              className="w-36 sm:w-40 md:w-52"
            />
            <Image
              src={"/images/companies-brand/moz.svg"}
              alt="moz"
              width={200}
              height={200}
              className="w-36 sm:w-40 md:w-52"
            />
          </div>
        </Container>
      </section>
    </main>
  );
}
