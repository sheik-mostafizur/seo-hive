import Navbar from "@/components/Navbar";
import Banner from "./(home)/Banner";
import TrustedCompaniesBrand from "./(home)/TrustedCompaniesBrand";
import WhyUs from "./(home)/WhyUs";
import Testimonial from "./(home)/Testimonial";
import WriteSomethingForYou from "./(home)/WriteSomethingForYou";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <TrustedCompaniesBrand />
      <WhyUs />
      <Testimonial />
      <WriteSomethingForYou />
    </main>
  );
}
