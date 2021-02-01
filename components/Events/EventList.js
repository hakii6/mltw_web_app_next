import EventItem from './EventItem'

const EventList = ({ events }) => {
  return (
  	<div>
  		{events.map((event, key) => <EventItem event={event}></EventItem>)}
		</div>
  )
}

export default EventList