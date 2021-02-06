import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap'

const EventItem = ({ event }) => {
  return (
  	<>
	    <CarouselItem
	        onExiting={() => setAnimating(true)}
	        onExited={() => setAnimating(false)}
	        key={event.Image}>
        <img src={event.Image} alt={event.NameTW} />
        <CarouselCaption captionText={event.ID} captionHeader={event.ID} />
      </CarouselItem>
	</>
  )
}

export default EventItem