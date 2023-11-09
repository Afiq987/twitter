import PropTypes from "prop-types";

export default function TabsCollect({ title, children }) {
	return (
		<div
			className=" w-[600px] mt-[1000px] bg-red-500  border-b border-[color:var(--background-third)]   bg-[color:var(--background-primary-alpha)] backdrop-blur-md"
		>
			<h3 className="px-4 h-[2] flex items-center text-xl font-bold">
				{title}
			</h3>
			{children}
		</div>
	)
}


TabsCollect.propTypes = {
	title: PropTypes.string.isRequired
}

