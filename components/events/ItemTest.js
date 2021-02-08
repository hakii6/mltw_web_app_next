import { useState, useEffect, useRef, useCallback } from 'react'
import styles from '../../styles/ScrollList.module.css'

const ItemTest = ({ event }) => {



  return (
  	<div>
  		<img src={event.Image} width="470px" height="170px"/>
  		{event.NameTW}
		</div>
  )
}

// function checkUpdate(current) {
// 	if (current === null) {
// 		return null
// 	} else {
// 			console.log(current)

// 		return current.getBoundingClientRect()
// 	}
// }

export default ItemTest;