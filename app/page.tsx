import Navbar from "@/components/Navbar";
import Banner from "./(home)/Banner";
import TrustedCompaniesBrand from "./(home)/TrustedCompaniesBrand";
import WhyUs from "./(home)/WhyUs";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <TrustedCompaniesBrand />
      <WhyUs />
    </main>
  );
}
