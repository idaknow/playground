import theme from '../components/theme';
import logo from '../img/logo.png';

function Home() {
  return (
    <div style={{ backgroundColor: theme.palette.primary.dark, width: '100vw', height: 'auto' }}>
      <img src={logo} alt="my cool logo"/>
    </div>
  );
}

export default Home;
