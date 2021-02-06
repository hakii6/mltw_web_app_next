import ItemTest from './ItemTest'
// import EventItem from './EventItem'
import { useState } from 'react'
import styles from '../../styles/ScrollList.module.css'


const EventList = ({events}) => {
  const [startX, setStartX] = useState(0)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [active, setActive] = useState(false)

  function onDragStart(e) {
    setActive(true)
    setStartX(e.pageX)
  }

  function onDragEnd(e) {
    setActive(false)
    console.log(x)
    // setStartX(e.pageX)
  }

  function onDrag(e) {
    if (active === true) {
      setX(startX - e.pageX)
      // console.log(startX - e.pageX)
      // console.log(e.pageX)
      // setX(x - startX)
    }
  }

  return (
    <div className={styles.slideContainer}>
          { events.map((event, key) => <ItemTest key={event.ID} event={event} /> ) }
    </div>
    )
}

export default EventList

// style={{top: x, left:x}} onDragEnd={onDragEnd} onDragStart={onDragStart} onDrag={onDrag} >

// item = new Item(event), items.push(item), console.log(item)
//   return (
//   	<div className = "container">
//   		<div className="carousel slide" data-ride="carousel">
//   			<div className="carousel-inner">
//   				<div className="carousel-item">
//   					{ events.map((event, key) => <EventItem key={event.ID}event={event}></EventItem> ) }
// 					</div>
// 				</div>
// 			</div>
// 		</div>
//   )
// }

// export default EventList
//						events.map((event, key) => <EventItem event={event}></EventItem>)
    // <Carousel
    //   activeIndex={activeIndex}
    //   next={next}
    //   previous={previous}
    // >
    //   <CarouselIndicators items={events} activeIndex={activeIndex} onClickHandler={goToIndex} />
    //   {events.map((event, key) => <EventItem key={key} event={event} />)}
    //   <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
    //   <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    // </Carousel>
    //   