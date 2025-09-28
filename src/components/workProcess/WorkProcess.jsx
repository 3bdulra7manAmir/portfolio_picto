import "./workProcess.css";

// Work process data
const workStepData = [
  {
    id: 1,
    title: "Research",
    description:
      "Exploring app ideas and project goals, aligning Flutter solutions with practical needs.",
    svgPath:
      "M15.863 2.064A9 9 0 0133.48 5.45l6.67 11.532a9 9 0 01-3.386 12.617L25.23 36.27a9 9 0 01-12.617-3.387l-6.67-11.531a9 9 0 013.387-12.617l6.532-3.771z",
  },
  {
    id: 2,
    title: "Analyze",
    description:
      "Breaking down requirements into clear features where performance and usability meet.",
    svgPath:
      "M15.863 2.064A9 9 0 0133.48 5.45l6.67 11.532a9 9 0 01-3.386 12.617L25.23 36.27a9 9 0 01-12.617-3.387l-6.67-11.531a9 9 0 013.387-12.617l6.532-3.771z",
  },
  {
    id: 3,
    title: "Design",
    description:
      "I craft responsive Flutter interfaces with smooth navigation and user-friendly layouts.",
    svgPath:
      "M15.863 2.064A9 9 0 0133.48 5.45l6.67 11.532a9 9 0 01-3.386 12.617L25.23 36.27a9 9 0 01-12.617-3.387l-6.67-11.531a9 9 0 013.387-12.617l6.532-3.771z",
  },
  {
    id: 4,
    title: "Launch",
    description:
      "Delivering cross-platform apps with clean code, optimized UI, and seamless deployment.",
    svgPath:
      "M15.863 2.064A9 9 0 0133.48 5.45l6.67 11.532a9 9 0 01-3.386 12.617L25.23 36.27a9 9 0 01-12.617-3.387l-6.67-11.531a9 9 0 013.387-12.617l6.532-3.771z",
  },
];

const WorkProcess = () => {
  return (
    <div
      className="relative sm:px-2 py-20 md:py-30 lg:py-40"
      id="work-process"
    >
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-4xl font-bold">
          My App Development Process
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          I follow a simple but effective process for building Flutter apps.
          From research and analysis to design and final launch, I make sure
          every step delivers value and ensures a smooth user experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {workStepData.map((step) => (
          <div
            key={step.id}
            className="work-step bg-white rounded-xl shadow-lg p-6 transition hover:shadow-xl"
          >
            <svg
              className="w-12 h-12 text-picto-primary mb-4"
              fill="currentColor"
              viewBox="0 0 48 48"
            >
              <path d={step.svgPath}></path>
            </svg>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;
