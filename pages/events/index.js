// events index 

import EventList from '../../components/events/EventList'
import axios from 'axios'
// import env from '../env';

const events = ({events}) => {
	return (
		<div>
			<EventList events={events}></EventList>
		</div>
	)
}

export async function getStaticProps(context) {
	const res = await axios.get(process.env.api_host + 'v2/events')
	const events = await res.data
	console.log(res.status)
  return {
    props: {
    	events,
    }, // will be passed to the page component as props
  }
}

export default events;