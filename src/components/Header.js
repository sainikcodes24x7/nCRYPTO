import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import logo from './logo.jpeg';
import styled from 'styled-components'
import './news.css'
import 'D:\\GitHub4\\nCRYPTO\\src\\App.css'
import WalletCard from "./WalletConnect";
const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

function Header() {
  const classes = useStyles();
  const { currency, setCurrency } = CryptoState();

  const history = useHistory();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Logo>
              <img src={logo} className='image' />
            </Logo>
            <Typography
              onClick={() => history.push(`/`)}
              variant="h6"
              className={classes.title}
            >
              nCrypto
            </Typography>
            <Typography
              onClick={() => { window.location.href = "https://colab.research.google.com/drive/13xBL24X5hYhOiWsAVV9QTZfWkvKJBCCk?usp=sharing" }}
              variant="h5"
              className={classes.title}
            >
              <button class="favorite styled"
                type="button">
                Predict Future Prices
              </button>





            </Typography>
            {/* <Button color="inherit">Login</Button> */}
            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 100, height: 40, marginLeft: 15 }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"LineChart"} onClick={() => { window.location.href = "" }}>LineChart</MenuItem>

              <MenuItem value={"CandleStick"} onClick={() => { window.location.href = "https://candle-stick.netlify.app/" }}>CandleStick</MenuItem>
            </Select>

            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 100, height: 40, marginLeft: 15 }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>

            {/* <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 100, height: 40, marginLeft: 15 }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select> */}

          </Toolbar>

        </Container>

      </AppBar>

      <button class="favorite styled"
        type="button">
        Sign-Up
      </button>

      <button className="favorite styled edit2">
        <WalletCard />
      </button>

    </ThemeProvider>

  );

}

export default Header;
const Logo = styled.div`
    font-size: 1rem;
    font-weight: 700;
    /* color: white; */
`