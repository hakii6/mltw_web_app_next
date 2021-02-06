import { useState } from 'react'

const ItemTest = ({ event }) => {

	function run(e) {
		// setX(Math.random() * 100 % 100 + "px")
		// console.log(x)
		// console.log(e.pageX)
	}
  return (
  	<div>
  		<img src={event.Image} width="45" />{event.NameTW}
		</div>
  )
}

export default ItemTest;