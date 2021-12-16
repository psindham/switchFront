import Layout from '../comps/Layout'
import '../styles/globals.css'
import '../styles/footer.css'
import '../styles/navbar.css'
import '../styles/HomePage.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  )
}

export default MyApp;
