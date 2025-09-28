import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Mobile App Development",
    description:
      "I build cross-platform mobile applications with Flutter, delivering smooth performance and consistent design on both iOS and Android.",
  },
  {
    id: 2,
    title: "State Management & Architecture",
    description:
      "I implement clean architecture and efficient state management solutions (Riverpod, BLoC, Cubit) to create scalable and maintainable apps.",
  },
  {
    id: 3,
    title: "Firebase Integration",
    description:
      "I integrate Firebase services such as authentication, real-time databases, cloud storage, and push notifications to add powerful features to apps.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in building high-quality Flutter applications with clean code, 
            modern UI, and seamless user experiences across platforms.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My work focuses on combining performance, scalability, and engaging 
            designs to deliver apps that solve real-world problems.
          </p>
        </div>
        <a
          href="mailto:ethanhunt4d@gmail.com"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
