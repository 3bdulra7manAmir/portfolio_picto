import Marquee from "react-fast-marquee";
// Import PNG images
import oneBillionLogo from "../../assets/images/one-billion-logo.png";
import notchLogo from "../../assets/images/notch-logo.png";
import pramegLogo from "../../assets/images/prameg-logo.png";

const commonImageClass = "h-5 sm:h-8 md:h-10";

const brandLogos = [
  <img 
    src={oneBillionLogo} 
    alt="One Billion" 
    className={commonImageClass}
    key="one-billion"
  />,
  <img 
    src={notchLogo} 
    alt="Notch" 
    className={commonImageClass}
    key="notch"
  />,
  <img 
    src={pramegLogo} 
    alt="Prameg" 
    className={commonImageClass}
    key="prameg"
  />,
];

const HappyClients = () => {
  return (
    <div className="content py-10 md:py-25 flex flex-col items-center px-2">
      <div className="max-w-144.25 text-center ">
        <p className="section-title mb-6">Happy Clients</p>
        <p className="text-[14px] sm:text-lg text-soft-dark font-normal">
          I've had the pleasure of working with a diverse range of companies, from startups to established brands.
        </p>
      </div>
      <Marquee pauseOnHover={true} speed={100} className="">
        <p className="flex items-center pt-4 md:pt-10">
          {brandLogos?.map((logo, index) => (
            <span className="ps-5 sm:ps-10 md:ps-20" key={index}>
              {logo}
            </span>
          ))}
        </p>
      </Marquee>
    </div>
  );
};

export default HappyClients;