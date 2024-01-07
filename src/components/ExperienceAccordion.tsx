import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { ExperienceInterface, experienceIcons } from "../cvs/Experiences";
import InlineIconText from "./InlineIconText";

type ExperienceProp = {
  experience: ExperienceInterface;
};

const accordionStyle = {
  marginRight: "10px",
};

const ExperienceAccordion = ({ experience }: ExperienceProp) => {
  const {
    company,
    title,
    start,
    end,
    companyDescription,
    roleDescription,
    icon,
  } = experience;
  const id = `${company.replace(" ", "-")}-job`;
  const jobDate = end ? `${start} - ${end}` : start;
  const jobText = `${title} @ ${company} | ${jobDate}`;
  const Icon = experienceIcons[icon];

  return (
    <Accordion style={accordionStyle}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={id}
        id={id}
      >
        <InlineIconText text={jobText}>
          <Icon />
        </InlineIconText>
      </AccordionSummary>
      <AccordionDetails>
        <p style={{ fontStyle: "italic" }}>{companyDescription}</p>
        <List sx={{ listStyleType: "disc", marginLeft: "15px" }}>
          {roleDescription.map((info, index) => {
            const key = `${company.replace(" ", "")}-role-description-${index}`;
            return (
              <ListItem key={key} sx={{ display: "list-item" }}>
                {info}
              </ListItem>
            );
          })}
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

export default ExperienceAccordion;
