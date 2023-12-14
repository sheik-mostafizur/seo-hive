import Slide from "@/components/framer-motion/Slide";
import Container from "@/components/ui/Container";
import SectionHead from "@/components/ui/SectionHead";
import Image from "next/image";

const TrustedCompaniesBrand = () => {
  return (
    <section className="dark:bg-primary-100">
      <Container>
        <SectionHead title={"Chosen and trusted by companies"} />
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <Slide left>
            <Image
              src={"/images/home/companies-brand/semrush-new.svg"}
              alt="semrush"
              width={200}
              height={200}
              className="w-36 sm:w-40 md:w-52"
            />
          </Slide>
          <Slide left top>
            <Image
              src={"/images/home/companies-brand/se-ranking.svg"}
              alt="se-ranking"
              width={200}
              height={200}
              className="w-36 sm:w-40 md:w-52"
            />
          </Slide>
          <Slide top>
            <Image
              src={"/images/home/companies-brand/ahrefs-seo-tool.svg"}
              alt="ahrefs"
              width={200}
              height={200}
              className="w-36 sm:w-40 md:w-52"
            />
          </Slide>
          <Slide top>
            <Image
              src={"/images/home/companies-brand/spyfu.svg"}
              alt="spyfu"
              width={200}
              height={200}
              className="w-36 sm:w-40 md:w-52"
            />
          </Slide>
          <Slide right top>
            <Image
              src={"/images/home/companies-brand/surfer.svg"}
              alt="surfer"
              width={200}
              height={200}
              className="w-36 sm:w-40 md:w-52"
            />
          </Slide>
          <Slide right>
            <Image
              src={"/images/home/companies-brand/moz.svg"}
              alt="moz"
              width={200}
              height={200}
              className="w-36 sm:w-40 md:w-52"
            />
          </Slide>
        </div>
      </Container>
    </section>
  );
};

export default TrustedCompaniesBrand;
