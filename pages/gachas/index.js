// songs index 

import GachaList from '../../components/gachas/GachaList'
import axios from 'axios'
// import env from '../env';

const gachas = ({gachas}) => {
	return (
		<div>
			<GachaList gachas={gachas}></GachaList>
		</div>
	)
}

export async function getStaticProps(context) {
	const res = await axios.get('http://localhost:8002/v1/gachas')
	const gachas = await res.data
	console.log(res.status)
  return {
    props: {
    	gachas,
    }, // will be passed to the page component as props
  }
}

export default gachas;