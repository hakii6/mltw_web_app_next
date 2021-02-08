import ItemTest from './ItemTest'
// import EventItem from './EventItem'
import { useState, useRef } from 'react'
import styles from '../../styles/ScrollList.module.scss'


const EventList = ({events}) => {
  const contentRef = useRef(null) 
  const scrollCircleRef = useRef(null) 
  const controlScrollboxRef = useRef(null) 

  // const onScroll = (e) => {
  //   console.log(contentRef.current.top)
  //   contentRef.current.top = "-" + controlScrollboxRef.current.scrollTop + "px";
  //   scrollCircleRef.current.paddingTop = (controlScrollboxRef.current.scrollTop * 2) + "px";
  // }

  const onWheel = (e) => {
    console.log({
      "contentRef.top": contentRef.current.top ,
      "controlScrollboxRef.scrollTop": controlScrollboxRef.current.scrollTop
    })
    contentRef.current.style.top = "-" + controlScrollboxRef.current.scrollTop + "px";
    scrollCircleRef.current.style.paddingTop = (controlScrollboxRef.current.scrollTop * 2) + "px";

    console.log({
      "contentRef.top": contentRef.current.top ,
      "scrollCircleRef.paddingTop": scrollCircleRef.current.paddingTop
    })

  }

  return (
    <div onWheel={onWheel}>
      <div id={styles.bgCircle} />
      <div id={styles.visibleScrollbox}>
          <div id={styles.visibleScrollboxCircle} />
          <div ref={contentRef} id={styles.content}>
              <div ref={scrollCircleRef} id={styles.scrollCircle} />
              <div>
                { events.map((event, key) => <ItemTest key={event.ID} event={event}/> ) }
              </div>

          </div>
      </div>
      <div ref={controlScrollboxRef} id={styles.controlScrollbox}>
          <div id={styles.scrollLength} />
      </div>
      <div id={styles.topCircle} />


      </div>
    )
}

export default EventList

/*
        <svg height="900" width="100">
          <path d="M100,0 Q0,450 100,900" stroke="black" fill="transparent" />
        </svg>
          
        <div className={styles.slideContainer} onScroll={onScroll}>
          { events.map((event, key) => <ItemTest key={event.ID} event={event} scroll={scroll}/> ) }
        </div>
*/
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