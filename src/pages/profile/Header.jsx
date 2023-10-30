import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../home/Home'

function Header() {
  return (
    <div className="sticky   flex  border-b border-[color:var(--background-third)] top-0 z-10 bg-[color:var(--background-primary-alpha)] backdrop-blur-md items-center ">
	<Link to={"/"}>
	<svg viewBox="0 0 24 24" className="h-5 px-5">
					<path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z" fill="var(--color-base)"/>
					</svg>
	</Link>
				
				
				<div>
		<h3 className="px-4  flex items-center text-xl font-bold">
				Afiq Hasanov (Aydın)
			</h3>
			<p className="ms-4 text-[0.813rem] text-[color:var(--color-base-secondary)] mb-2">5 post </p>
				</div>
		</div>
  )
}

export default Header