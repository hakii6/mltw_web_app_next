// songs index 

import SongList from '../../components/songs/SongList'
import axios from 'axios'
// import env from '../env';

const songs = ({songs}) => {
	return (
		<div>
			<SongList songs={songs}></SongList>
		</div>
	)
}

export async function getStaticProps(context) {
	const res = await axios.get('http://localhost:8002/v1/songs')
	const songs = await res.data
	console.log(res.status)
  return {
    props: {
    	songs,
    }, // will be passed to the page component as props
  }
}

export default songs;