import CardItem from './CardItem'

const CardList = ({ cards }) => {
  return (
  	<div>
  		{cards.map((card, key) => <CardItem card={card}></CardItem>)}
		</div>
  )
}

export default CardList