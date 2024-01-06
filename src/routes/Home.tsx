import Grid from '@mui/material/Grid';
import theme from '../components/theme';
import logo from '../img/logo.png';

function Home() {
  return (
    <Grid container spacing={2} style={{ backgroundColor: theme.palette.primary.dark, width: '100vw', height: 'auto' }}>
      <Grid item xs={4}>
        <img src={logo} alt="my cool logo"/>
      </Grid>
      <Grid item xs={8} style={{color: theme.palette.primary.light}}>
        <h1>Skills</h1>
        <p>3 YEARS: Python, C# .NET, PostgreSQL, JavaScript <br/>
          2 YEARS: MongoDB <br/>
          1 YEAR: React, Node, GraphQL, AWS, Pulumi, DataDog, Vue
        </p>
        <h1>Experience</h1>
        <h2>Full Stack Engineer at Joyous | Auckland, NZ | 2022 - 2023</h2>
        <h2>Operational Data Software Engineer at Rocket Lab | Auckland, NZ | 2018 - 2022</h2>
        <h2>Web Developer for Brown University | Rhode Island, USA | 2017 - 2019</h2>
        <h2>Software Intern at Teknique | Auckland, NZ | 2016 - 2017</h2>
      </Grid>
    </Grid>
  );
}

export default Home;
