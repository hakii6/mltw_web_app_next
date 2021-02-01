// songs index 

import IdolList from '../../components/idols/IdolList'
import axios from 'axios'
// import env from '../env';

const idols = ({idols}) => {
	return (
		<div>
			<IdolList idols={idols}></IdolList>
		</div>
	)
}

export async function getStaticProps(context) {
	const res = await axios.get('http://localhost:8002/v1/idols')
	const idols = await res.data
	console.log(res.status)
  return {
    props: {
    	idols,
    }, // will be passed to the page component as props
  }
}

export default idols;