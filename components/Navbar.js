import Link from 'next/link'
import navbarStyles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
		<nav className='navbar navbar-default menu'>
			<div className="navbar-header">
        	<Link href="/">製作人企劃書 by 蛤蛤</Link>
			</div>
      <ul className='nav navbar-nav'>
				<li><Link href="/events">活動</Link></li>
				<li><Link href="/gachas">轉蛋</Link></li>
				<li><Link href="/idols">偶像</Link></li>
				<li><Link href="/songs">歌曲</Link></li>
				<li><Link href="/cards">卡片</Link></li>
				<li><Link href="/cal">各式計算機</Link></li>
			</ul>
		</nav>
  )
}

export default Navbar