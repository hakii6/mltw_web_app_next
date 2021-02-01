import SongItem from './SongItem'

const SongList = ({ songs }) => {
  return (
  	<div>
  		{songs.map((song, key) => <SongItem song={song}></SongItem>)}
		</div>
  )
}

export default SongList