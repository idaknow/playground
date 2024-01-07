import DataThresholdIcon from "@mui/icons-material/DataThresholding";
import InsightsIcon from "@mui/icons-material/Insights";
import StorageIcon from "@mui/icons-material/Storage";
import TableChartIcon from "@mui/icons-material/TableChart";
import WebIcon from "@mui/icons-material/Web";

export const skillIcons = {
  WebIcon,
  TableChartIcon,
  DataThresholdIcon,
  InsightsIcon,
  StorageIcon,
};

export interface SkillInterface {
  text: string;
  icon: keyof typeof skillIcons;
  id: string;
}

export const skills: SkillInterface[] = [
  {
    text: "JavaScript, TypeScript, React, Vue, GraphQL, HTML, CSS",
    icon: "WebIcon",
    id: "web-languages",
  },
  {
    text: "Postgres, Mongo, SQLite",
    icon: "TableChartIcon",
    id: "databases",
  },
  {
    text: "Python, WPF C# .NET",
    icon: "DataThresholdIcon",
    id: "languages",
  },
  {
    text: "DataDog, Tableau",
    icon: "InsightsIcon",
    id: "analytics",
  },
  {
    text: "AWS, Pulumi",
    icon: "StorageIcon",
    id: "infrastructure",
  },
];
