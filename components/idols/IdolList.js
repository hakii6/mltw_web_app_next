import IdolItem from './IdolItem'

const IdolList = ({ idols }) => {
  return (
  	<div>
  		{idols.map((idol, key) => <IdolItem idol={idol}></IdolItem>)}
		</div>
  )
}

export default IdolList