import { useState, useEffect, useRef, useCallback } from 'react'
import styles from '../../styles/ScrollList.module.scss'

const ItemTest = ({ index, event}) => {

  return (
  	<>
  		<img className={styles.box} style={{zIndex: index * (-1)}} src={event.Image} width="470px" height="170px"/>
		</>
  )
}


export default ItemTest;