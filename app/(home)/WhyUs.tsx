import Container from "@/components/ui/Container";
import SectionHead from "@/components/ui/SectionHead";
import {FaUserEdit} from "react-icons/fa";
import {AiFillSound} from "react-icons/ai";
import {FaRegSmile} from "react-icons/fa";
import SlideUp from "@/components/framer-motion/SlideUp";

const WhyUs = () => {
  const data = [
    {
      _id: "1",
      icon: <FaUserEdit />,
      title: "Content Marketing Mastery",
      description:
        "Unleash the power of content with our expert strategies. Elevate your brand’s online presence with compelling, high-quality content tailored to captivate your audience.",
    },
    {
      _id: "2",
      icon: <AiFillSound />,
      title: "SEO Wizardry Unveiled",
      description:
        "Unlock the secrets of SEO success. Our proven techniques will boost your website's visibility and rankings, driving organic traffic to new heights.",
    },
    {
      _id: "3",
      icon: <FaRegSmile />,
      title: "Influencer Marketing Unleashed",
      description:
        "Harness the influence. Discover how our tailored influencer strategies can amplify your brand's reach and engagement across social media platforms.",
    },
  ];

  return (
    <section className="bg-primary-50">
      <Container className="py-8 lg:py-16">
        <SectionHead
          title={"Why Us Unleash Your Online Power"}
          text={
            "Supercharge your online presence with our unbeatable SEO services."
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 justify-stretch">
          {data.map((item) => (
            <SlideUp key={item._id}>
              <div
                className="h-full space-y-6 p-6 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-gradient-to-r hover:bg-gradient-to-b transition-background from-white dark:from-gray-800 to-slate-100 dark:to-gray-900 bg-opacity-70 border border-white dark:border-gray-600
            ">
                <div className="text-primary-500 text-7xl">{item.icon}</div>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </SlideUp>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyUs;
