import ZoomIn from "@/components/framer-motion/ZoomIn";
import Container from "@/components/ui/Container";
import Image from "next/image";

const TrustedCompaniesBrand = () => {
  return (
    <section className="dark:bg-primary-100">
      <Container className="py-8 lg:py-16">
        <h2 className="text-center my-6">Chosen and trusted by companies</h2>
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <ZoomIn>
            <Image
              src={"/images/companies-brand/semrush-new.svg"}
              alt="semrush"
              width={200}
              height={200}
              className="w-36 sm:w-40 md:w-52"
            />
          </ZoomIn>
          <ZoomIn>
            <Image
              src={"/images/companies-brand/se-ranking.svg"}
              alt="se-ranking"
              width={200}
              height={200}
              className="w-36 sm:w-40 md:w-52"
            />
          </ZoomIn>
          <ZoomIn>
            <Image
              src={"/images/companies-brand/ahrefs-seo-tool.svg"}
              alt="ahrefs"
              width={200}
              height={200}
              className="w-36 sm:w-40 md:w-52"
            />
          </ZoomIn>
          <ZoomIn>
            <Image
              src={"/images/companies-brand/spyfu.svg"}
              alt="spyfu"
              width={200}
              height={200}
              className="w-36 sm:w-40 md:w-52"
            />
          </ZoomIn>
          <ZoomIn>
            <Image
              src={"/images/companies-brand/surfer.svg"}
              alt="surfer"
              width={200}
              height={200}
              className="w-36 sm:w-40 md:w-52"
            />
          </ZoomIn>
          <ZoomIn>
            <Image
              src={"/images/companies-brand/moz.svg"}
              alt="moz"
              width={200}
              height={200}
              className="w-36 sm:w-40 md:w-52"
            />
          </ZoomIn>
        </div>
      </Container>
    </section>
  );
};

export default TrustedCompaniesBrand;
