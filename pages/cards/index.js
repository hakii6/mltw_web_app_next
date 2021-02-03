// songs index 

import CardList from '../../components/cards/CardList'
import axios from 'axios'
// import env from '../env';

const cards = ({cards}) => {
	return (
		<div>
			<CardList cards={cards}></CardList>
		</div>
	)
}

export async function getStaticProps(context) {
	const res = await axios.get(process.env.api_host + 'v2/cards')
	const cards = await res.data
	console.log(res.status)
  return {
    props: {
    	cards,
    }, // will be passed to the page component as props
  }
}

export default cards;