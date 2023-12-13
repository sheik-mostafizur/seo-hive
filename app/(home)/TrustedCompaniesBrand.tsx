import SlideUp from "@/components/framer-motion/SlideUp";
import Container from "@/components/ui/Container";
import SectionHead from "@/components/ui/SectionHead";
import Image from "next/image";

const TrustedCompaniesBrand = () => {
  return (
    <section className="dark:bg-primary-100">
      <Container className="py-8 lg:py-16">
        <SectionHead title={"Chosen and trusted by companies"} />
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <SlideUp>
            <Image
              src={"/images/home/companies-brand/semrush-new.svg"}
              alt="semrush"
              width={200}
              height={200}
              className="w-36 sm:w-40 md:w-52"
            />
          </SlideUp>
          <SlideUp>
            <Image
              src={"/images/home/companies-brand/se-ranking.svg"}
              alt="se-ranking"
              width={200}
              height={200}
              className="w-36 sm:w-40 md:w-52"
            />
          </SlideUp>
          <SlideUp>
            <Image
              src={"/images/home/companies-brand/ahrefs-seo-tool.svg"}
              alt="ahrefs"
              width={200}
              height={200}
              className="w-36 sm:w-40 md:w-52"
            />
          </SlideUp>
          <SlideUp>
            <Image
              src={"/images/home/companies-brand/spyfu.svg"}
              alt="spyfu"
              width={200}
              height={200}
              className="w-36 sm:w-40 md:w-52"
            />
          </SlideUp>
          <SlideUp>
            <Image
              src={"/images/home/companies-brand/surfer.svg"}
              alt="surfer"
              width={200}
              height={200}
              className="w-36 sm:w-40 md:w-52"
            />
          </SlideUp>
          <SlideUp>
            <Image
              src={"/images/home/companies-brand/moz.svg"}
              alt="moz"
              width={200}
              height={200}
              className="w-36 sm:w-40 md:w-52"
            />
          </SlideUp>
        </div>
      </Container>
    </section>
  );
};

export default TrustedCompaniesBrand;
