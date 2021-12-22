import Layout from '../comps/Layout'
import '../styles/globals.css'
import '../styles/CheckDiets.css'
import '../styles/footer.css'
import "../styles/SignUp.css";
import '../styles/navbar.css'
import "../styles/HomePage.css";
import '../styles/SignUpButton.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/FoodDetails.css'
import "../styles/SearchPage.css";
import "../styles/SignUp.css";

import {StateProvider} from "easy-peasy";

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider store='/store'>
    <Layout>
      <Component {...pageProps}/>
    </Layout>
    </StateProvider>
  )
}

export default MyApp;
