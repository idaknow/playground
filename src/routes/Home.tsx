import DataThresholdIcon from '@mui/icons-material/DataThresholding';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InsightsIcon from '@mui/icons-material/Insights';
import LooksIcon from '@mui/icons-material/Looks';
import PreviewIcon from '@mui/icons-material/Preview';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import StorageIcon from '@mui/icons-material/Storage';
import TableChartIcon from '@mui/icons-material/TableChart';
import WebIcon from '@mui/icons-material/Web';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Grid from '@mui/material/Grid';
import { ReactNode } from 'react';
import theme from '../components/theme';
import logo from '../img/logo.png';

// TODO: move inline icon to own component

type InlineIconProp = {
  children: ReactNode,
  text: string
}

const inlineIconStyle = {
  display: 'flex',
  alignItems: 'center',
};

const InlineIconText = ({ text, children }: InlineIconProp) => {
  return (
      <span style={inlineIconStyle}>{children} {text}</span>
  )
}

const accordionStyle = {
  marginRight: '10px'
};

const Home = () => {
  return (
    <Grid container spacing={2} style={{ backgroundColor: theme.palette.primary.dark, width: '100vw', height: 'auto' }}>
      <Grid item xs={6}>
        <img src={logo} alt="my cool logo"/>
      </Grid>
      <Grid item xs={6} style={{color: theme.palette.primary.light}}>
        <h1>Skills</h1>
        <InlineIconText text="JavaScript, TypeScript, React, Vue, GraphQL, HTML, CSS"><WebIcon/></InlineIconText>
        <InlineIconText text="Postgres, Mongo, SQLite"><TableChartIcon/></InlineIconText>
        <InlineIconText text="Python, WPF C# .NET"><DataThresholdIcon/></InlineIconText>
        <InlineIconText text="DataDog, Tableau"><InsightsIcon/></InlineIconText>
        <InlineIconText text="AWS, Pulumi"><StorageIcon/></InlineIconText>

        <h1>Experience</h1>
        <Accordion style={accordionStyle}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="joyous-full-stack-job-content"
            id="joyous-header">
            <InlineIconText text="Full Stack Engineer @ Joyous | 2022 - 2023"><LooksIcon/></InlineIconText>
          </AccordionSummary>
          <AccordionDetails>
          <p style={{fontStyle: 'italic'}}>Frontend and backend web development to make workplaces better</p>
          Technical analysis, scoping and delivery of a many projects, such as dynamically selecting comments to feature <br/>
          Cross-functional collaboration to deliver high-quality, scalable code <br/>
          Comfortable working in a changing environment working in different crews, as well as independently <br/>
          Experience interfacing with third party applications, such as a Microsoft Teams integration with proactive installation <br/>
          Onboard and mentor new team members
          </AccordionDetails>
        </Accordion>
        <Accordion style={accordionStyle}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="rocket-lab-data-job-content"
            id="rocket-lab-header">
            <InlineIconText text="Operational Data Engineer @ Rocket Lab | 2018 - 2022"><RocketLaunchIcon/></InlineIconText>
          </AccordionSummary>
          <AccordionDetails>
          <p style={{fontStyle: 'italic'}}>Enabled engineers to transform their data into meaning</p>
          Developed a core company-wide Python ETL library <br/>
          Supported high-priority projects (e.g. NASA's Mission to the Moon) <br/>
          Owned Propulsion and Avionic’s data management pipelines <br/>
          Angular prototype development and data architecture design <br/>
          Agile development and previously scrum master
          </AccordionDetails>
        </Accordion>
        <Accordion style={accordionStyle}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="brown-uni-dev-job-content"
            id="brown-uni-header">
            <InlineIconText text="Web Developer @ Brown University | 2017 - 2019"><PreviewIcon/></InlineIconText>
          </AccordionSummary>
          <AccordionDetails>
          <p style={{fontStyle: 'italic'}}>WebGazer, scalable webcam eye-tracking from user interactions </p>
          Enhanced the user feedback and maintained the open-source project
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
}

export default Home;
