import GachaItem from './GachaItem'

const GachaList = ({ gachas }) => {
  return (
  	<div>
  		{gachas.map((gacha, key) => <GachaItem gacha={gacha}></GachaItem>)}
		</div>
  )
}

export default GachaList