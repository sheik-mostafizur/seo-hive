"use client";
import Slide from "@/components/framer-motion/Slide";
import Container from "@/components/ui/Container";
import SectionHead from "@/components/ui/SectionHead";
import {Button} from "@nextui-org/react";
import {useTheme} from "next-themes";

const WriteSomethingForYou = () => {
  const {theme} = useTheme();
  const data = [
    {
      _id: "1",
      title: "Personalize Your Brand's Conversations",
      description:
        "Leverage the power of personalized emails to connect and convert leads into loyal customers. Drive engagement and conversions with targeted email campaigns.",
      button: "Email Marketing Campaigns",
    },
    {
      _id: "2",
      title: "Craft and Disseminate Impactful Content",
      description:
        "From creation to distribution, let us curate compelling content that resonates with your audience, driving engagement and nurturing brand loyalty.",
      button: "Content Creation & Distribution",
    },
    {
      _id: "3",
      title: "Inspire Through Pinterest",
      description:
        "Tap into the creativity of Pinterest. Drive traffic and conversions by showcasing your brand's story through inspiring and actionable pins.",
      button: "Pinterest Promotions",
    },
    {
      _id: "4",
      title: "Engage Audiences Through Video",
      description:
        "Utilize the power of video storytelling on YouTube. Enhance brand visibility and engagement with compelling video ads tailored to captivate your audience.",
      button: "YouTube Video Ads",
    },
    {
      _id: "5",
      title: "Visualize Success on Instagram",
      description:
        "Capture attention and foster brand loyalty on Instagram with creative and visually appealing marketing strategies, leveraging the platform's dynamic features.",
      button: "Instagram Marketing",
    },
    {
      _id: "6",
      title: "Amplify Your Presence on Twitter",
      description:
        "Drive conversations and increase engagement on Twitter with strategically crafted ad campaigns designed to elevate your brand's voice in real-time conversations.",
      button: "Twitter Campaigns",
    },
    {
      _id: "7",
      title: "Engage Audiences on Quora",
      description:
        "Establish authority and connect with a wider audience on Quora through insightful and value-driven answers, positioning your brand as an industry expert.",
      button: "Quora Answers",
    },
    {
      _id: "8",
      title: "Optimize with Google Ads",
      description:
        "Boost your online visibility and drive quality traffic to your website using Google Ads. Let us help you optimize your campaigns for maximum results.",
      button: "Google Ads",
    },
  ];

  return (
    <section
      className={`h-full p-4 ${
        theme != "dark" &&
        "bg-[url('/images/home/write-something-bg.png')] bg-fixed bg-no-repeat bg-cover"
      } `}>
      <Container>
        <div className="backdrop-blur">
          <SectionHead
            titleClass={"text-white"}
            textClass={"text-white"}
            title={"Can I write something for you?"}
            text={`Explore our digital hub for innovative solutions crafted to elevate your online presence. Discover tools and strategies designed for your brand's success in the dynamic digital landscape.`}
          />
        </div>
        <div className="flex flex-wrap gap-4 lg:gap-6 justify-between h-full items-stretch">
          {data.map((item) => (
            <Slide top key={item._id}>
              <div className="backdrop-blur-2xl border-white dark:border-slate-800 border rounded w-80 h-fit p-4 hover:bg-white/20 dark:bg-gray-800 dark:hover:bg-gray-700 hover:scale-105 transition hover:skew-x-1">
                <h6 className="text-white">{item.title}</h6>
                <p className="text-gray-200 text-sm my-2">{item.description}</p>
                <Button size="sm" variant="bordered" className="text-gray-200">
                  {item.button}
                </Button>
              </div>
            </Slide>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WriteSomethingForYou;
