import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

import card7 from "../../assets/images/portfolio-images/card-7.png";
// import card8 from "../../assets/images/portfolio-images/card-8.png";
import card9 from "../../assets/images/portfolio-images/card-9.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "Mobile App",
    title: "Fluency",
    description:
      "A Saudi platform that helps users practice English with professional teachers worldwide. Supports skill-building for education, work, and travel.",
    link: "https://apps.apple.com/eg/app/fluency-live/id6745734835",
  },
  {
    id: 2,
    image: card2,
    category: "Mobile App",
    title: "Al Haddaf",
    description:
      "A platform for athletes and coaches to showcase profiles, promote talent, and connect with clubs and agents. Includes video and photo sharing.",
    link: "https://apps.apple.com/us/app/%D8%A7%D9%84%D9%87%D8%AF%D8%A7%D9%81-al-haddaf/id6741814021",
  },
  {
    id: 3,
    image: card3,
    category: "Mobile App",
    title: "Sehtna",
    description:
      "A comprehensive healthcare management solution for hospitals, doctors, and patients. Features appointments, medical records, and patient tracking.",
    link: "https://apps.apple.com/us/app/sehtna-%D8%B5%D8%AD%D8%AA%D9%86%D8%A7/id6746358917",
  },
  {
    id: 4,
    image: card4,
    category: "Mobile App",
    title: "Added Power",
    description:
      "A trusted marketplace for genuine car spare parts from verified suppliers. Provides fast and secure access for car owners and repair specialists.",
    link: "https://apps.apple.com/sa/app/added-power/id6739585590?uo=2",
  },
  {
    id: 5,
    image: card5,
    category: "Mobile App",
    title: "Rukn Al Aqar",
    description:
      "A smart real estate app for buying, selling, and renting apartments. Delivers a simple, fast, and reliable experience for property needs.",
    link: "https://apps.apple.com/us/app/%D8%B1%D9%83%D9%86-%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1/id6749784605",
  },
  {
    id: 6,
    image: card6,
    category: "Mobile App",
    title: "Manzoma",
    description:
      "A workflow management tool that helps teams and individuals organize tasks, communicate effectively, and boost productivity.",
    link: "https://apps.apple.com/us/app/manzoma/id6746369002",
  },
  {
    id: 7,
    image: card7,
    category: "Mobile App",
    title: "Test Drive (Customer)",
    description:
      "Test Drive is your ultimate platform to experience cars before making a purchase decision. With just a few taps, you can book any available car, and the car owner will bring it directly to your location so you can take it for a real-world test drive. Our goal is to help users make smarter car-buying choices and ensure a smooth and safe driving experience before committing to a purchase.",
    link: "https://play.google.com/store/apps/details?id=com.testdrive.onebillion",
  },
  // {
  //   id: 8,
  //   image: card8,
  //   category: "Mobile App",
  //   title: "Manzoma",
  //   description:
  //     "A workflow management tool that helps teams and individuals organize tasks, communicate effectively, and boost productivity.",
  //   link: "https://apps.apple.com/us/app/manzoma/id6746369002",
  // },
  {
    id: 9,
    image: card9,
    category: "Mobile App",
    title: "Ghosn Coffee",
    description:
      "Ghosn Coffee is your trusted destination for premium coffee products. We are committed to providing our customers with the finest coffee experience, combining quality, authenticity, and excellent service. Through our website, you can explore a wide range of coffee products, learn about our latest offers, and shop easily with a smooth and secure checkout. All prices include VAT, with shipping costs calculated at checkout. Our Terms & Conditions and Privacy Policy ensure transparency, so you can shop with confidence. If you ever face any issues, our support team is here to help, and warranty coverage applies according to each product’s terms. At Ghosn Coffee, coffee is more than just a product — it’s a passion. Enjoy authentic flavors that connect tradition with modern quality. This application is owned by One Billion Agency. All rights reserved to One Billion Agency.",
    link: "https://apps.apple.com/eg/app/ghosn-coffee/id6752111611",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here’s a selection of my recent Flutter projects, highlighting my
            experience in building cross-platform mobile apps with clean
            architecture and responsive design.
          </p>
        </div>
      </div>

      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>

      {/* <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Projects
        </a>
      </div> */}
    </div>
  );
};

export default Portfolio;