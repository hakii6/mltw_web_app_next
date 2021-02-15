// import ItemTest from './ItemTest'
import { useState, useEffect, useRef } from 'react'
import styles from '../../styles/ScrollList.module.scss'


const EventList = ({events}) => {
  const listRef = useRef(null)
  const [scroll, setScroll] = useState(0)

  let fields = events.map((event, index) => 
    <div className={styles.square}>
      <img className={styles.square} style={{animationDelay: index + "s"}} src={event.Image} width="470px" height="170px"/>
    </div>
    )
  useEffect(() => {
    if (scroll < events.length && scroll >= 0) {
      [].forEach.call(listRef.current.children, (child, index) => {
        child.children[0].style.animationDelay = (index - scroll) + "s";
        child.style.animationDelay = (index - scroll) + "s";
      })
      

    }
  }, [scroll]);

  const onScroll = (e) => {
    let temp = e.target.scrollTop / 100

    if (temp < 0) {
      setScroll(0)
    } else if (temp >= events.length) {
      setScroll(events.length - 1)
    } else {
      setScroll(temp)
    }
  }


  return (
    <div>
      <div ref={listRef} className={styles.content}>
        { fields }
      </div>
      <div onScroll={onScroll} id = {styles.controlScrollbox}>
        <div id = {styles.scrollLength}></div>
      </div>

    </div>
    )
}

export default EventList

/* for debug

    <div>
      <div className={styles.circle} />
      <div ref={listRef} className={styles.content}>
        { fields }
      </div>
      <div className={styles.squarePos}>aaaaaaaa</div>
      <div onScroll={onScroll} id = {styles.controlScrollbox}>
        <div id = {styles.scrollLength}></div>
      </div>

    </div>

*/



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