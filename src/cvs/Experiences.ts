import LooksIcon from "@mui/icons-material/Looks";
import PreviewIcon from "@mui/icons-material/Preview";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

export const experienceIcons = {
  LooksIcon,
  PreviewIcon,
  RocketLaunchIcon,
};

export interface ExperienceInterface {
  company: string;
  title: string;
  start: string;
  end?: string;
  companyDescription: string;
  roleDescription: string[];
  icon: keyof typeof experienceIcons;
}

export const experiences: ExperienceInterface[] = [
  {
    company: "Joyous",
    title: "Full Stack Software Engineer",
    start: "2022",
    end: "2023",
    companyDescription:
      "Frontend and backend web development to make workplaces better",
    roleDescription: [
      "Technical analysis, scoping and delivery of a many projects, such as dynamically selecting comments to feature",
      "Cross-functional collaboration to deliver high-quality, scalable code",
      "Comfortable working in a changing environment working in different crews, as well as independently",
      "Experience interfacing with third party applications, such as a Microsoft Teams integration with proactive installation",
      "Onboard and mentor new team members",
    ],
    icon: "LooksIcon",
  },
  {
    company: "Rocket Lab",
    title: "Operational Data Software Engineer",
    start: "2018",
    end: "2022",
    companyDescription:
      "Enabled engineers to transform their data into meaning rapidly and accurately",
    roleDescription: [
      "Developed a core company-wide Python ETL library",
      "Supported high-priority projects (e.g. NASAs Mission to the Moon)",
      "Owned Propulsion and Avionics data management pipelines",
      "Angular prototype development and data architecture design",
      "Agile development and previously scrum master",
    ],
    icon: "RocketLaunchIcon",
  },
  {
    company: "Brown University",
    title: "Web Developer",
    start: "2017",
    end: "2019",
    companyDescription:
      "WebGazer, scalable webcam eye-tracking from user interactions",
    roleDescription: [
      "Enhanced the user feedback and maintained the open-source project",
    ],
    icon: "PreviewIcon",
  },
];
