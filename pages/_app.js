import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
// import '../styles/globals.css'

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
  return (
  	<Layout>
  		<Component {...pageProps} />
  	</Layout>
	)
}

export default MyApp;