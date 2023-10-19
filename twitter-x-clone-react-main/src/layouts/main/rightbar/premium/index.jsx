

export default function Premium() {
	return (
		<section
			className="bg-[color:var(--background-secondary)] mb-4 rounded-2xl border border-[color:var(--background-secondary)] py-3 px-4 flex flex-col gap-2.5"
		>
			<h6 className="text-xl leading-6 font-extrabold">Subscribe to Premium</h6>
			<p className="leading-5 font-bold">
			Subscribe to unlock new features and if eligible, receive a share of ads revenue.
			</p>
			<div className="self-start">
				<button className="px-4 font-semibold h-9 bg-[color:var(--color-primary)] hover:opacity-90 text-white rounded-full">Subscribe</button>
			</div>
		</section>
	)
}
