import Navbar from "@/components/Navbar";
import Banner from "./(home)/Banner";
import TrustedCompaniesBrand from "./(home)/TrustedCompaniesBrand";
import WhyUs from "./(home)/WhyUs";
import Testimonial from "./(home)/Testimonial";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <TrustedCompaniesBrand />
      <WhyUs />
      <Testimonial />
    </main>
  );
}
