import Slide from "@/components/framer-motion/Slide";
import Container from "@/components/ui/Container";
import SectionHead from "@/components/ui/SectionHead";
import Image from "next/image";

const OurServices = () => {
  const data = [
    {
      _id: "1",
      title: "Content Marketing Strategy",
      description:
        "Craft compelling content strategies tailored to your brand's goals, ensuring impactful storytelling and audience engagement across various platforms.",
      icon: "/images/home/our-services/content-marketing-strategy.png",
    },
    {
      _id: "2",
      title: "Search Engine Optimization (SEO)",
      description:
        "Boost your online visibility and organic traffic through targeted SEO strategies, optimizing your website for higher search engine rankings and enhanced user experiences.",
      icon: "/images/home/our-services/search-engine-optimization.png",
    },
    {
      _id: "3",
      title: "Social Media Management",
      description:
        "Manage and amplify your social media presence with customized strategies, engaging content, and community-building efforts to drive brand awareness and customer engagement.",
      icon: "/images/home/our-services/social-media-management.png",
    },
    {
      _id: "4",
      title: "Pay-Per-Click (PPC) Advertising",
      description:
        "Maximize your ROI through targeted PPC campaigns on various platforms, ensuring optimized ad placements and effective budget utilization for increased conversions.",
      icon: "/images/home/our-services/pay-per-click-ppc-advertising.png",
    },
    {
      _id: "5",
      title: "Website Development & Design",
      description:
        "Create impactful and user-centric websites that reflect your brand identity, integrating seamless design with functionality to enhance user experiences and conversions.",
      icon: "/images/home/our-services/website-development-design.png",
    },
    {
      _id: "6",
      title: "Email Marketing Automation",
      description:
        "Implement tailored email campaigns and automation strategies to nurture leads, drive conversions, and build long-term relationships with your audience through personalized communications.",
      icon: "/images/home/our-services/email-marketing-automation.png",
    },
  ];

  return (
    <Container>
      <SectionHead
        title={`Empower Your Business with Our Services`}
        text={`Elevate your business with top-notch content marketing and SEO services tailored to your needs. Connect with us today to unlock your brand's full potential.`}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 2xl:max-w-7xl mx-auto">
        {data.map((item) => (
          <Slide key={item._id} top>
            <div className="text-center space-y-4 border dark:border-slate-800 p-4 rounded h-full shadow-lg shadow-primary-50 dark:shadow-slate-800 hover:shadow-xl hover:shadow-primary-50 bg-primary-50/50 hover:bg-primary-50 transition dark:hover:bg-primary-100">
              <Image
                src={item.icon}
                alt={item.title}
                width={60}
                height={60}
                className="mx-auto h-auto w-auto"
              />
              <h6>{item.title}</h6>
              <p className="text-sm">{item.description}</p>
            </div>
          </Slide>
        ))}
      </div>
    </Container>
  );
};

export default OurServices;
