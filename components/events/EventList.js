// import ItemTest from './ItemTest'
import { useState, useEffect, useRef } from 'react'
import styles from '../../styles/ScrollList.module.scss'


const EventList = ({events}) => {
  const listRef = useRef(null)
  const [scroll, setScroll] = useState(0)

  let fields = events.map((event, index) => <img className={styles.box} src={event.Image} width="470px" height="170px"/> )
  useEffect(() => {
    if (scroll < events.length && scroll >= 0) {
      for (var i = 0; scroll + i + 5 < events.length; i++) {
        listRef.current.children[scroll + i].style.top = (i * 200).toString() + "px"
        // console.log(listRef.current.children[scroll + i].style.transform)
      }
      

    }
  }, [scroll]);

  const onWheel = (e) => {

    if (scroll < events.length && scroll >= 0) {
      for (var i = scroll; i + 5 < events.length; i++) {
        listRef.current.children[i].style.top = "-200px"
      }
      // console.log(listRef.current.children[scroll].style.top)
      setScroll(e.deltaY / 100 + scroll)
    }

    if (scroll < 0) {
      setScroll(0)
    }
  }

  return (
    <div onWheel={onWheel}>
      <div ref={listRef} className={styles.content}>
        { fields }
      </div>

    </div>
    )
}

export default EventList



/*

      <ul id="circleList">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
      </ul>

      <div id={styles.visibleScrollbox}>
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