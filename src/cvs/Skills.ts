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
}

export const skills: SkillInterface[] = [
  {
    text: "JavaScript, TypeScript, React, Vue, GraphQL, HTML, CSS",
    icon: "WebIcon",
  },
  {
    text: "Postgres, Mongo, SQLite",
    icon: "TableChartIcon",
  },
  {
    text: "Python, WPF C# .NET",
    icon: "DataThresholdIcon",
  },
  {
    text: "DataDog, Tableau",
    icon: "InsightsIcon",
  },
  {
    text: "AWS, Pulumi",
    icon: "StorageIcon",
  },
];
