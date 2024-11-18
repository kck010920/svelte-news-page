<script>
	import { Splide, SplideSlide } from "@splidejs/svelte-splide";
	import "@splidejs/splide/dist/css/themes/splide-default.min.css";
	export let data;

	let highlightedNews = data;
	let currentIndex = 0;

	const options = {
		type: "loop",
		perPage: 1,
		autoplay: true,
		interval: 5000,
		pagination: true,
		arrows: false,
		gap: "3rem",
		padding: { left: "0", right: "0", bottom: "3rem" },
	};

</script>

<Splide options={{options}} aria-label="Image Slideshow">
	{#each highlightedNews as highlight}
		<SplideSlide>
			<div class="slides-container">
				<img src="{highlight.imageURL}/main-wide.webp" alt="" />
			</div>
		</SplideSlide>
	{/each}
	<!-- <div class="dots">
		{#each highlightedNews as _, i}
			<button class="dots__dot {i === currentIndex ? 'active' : ''}"></button>
		{/each}
	</div> -->
</Splide>



<style>
.slides-container {
	position: relative;
}



button {
	color: #ff7024;
	border-radius: 25px;
	border: 1px solid #ff7024;
	font-weight: 600;
	padding: 0.5rem 1rem;
	background-color: transparent;
	font-size: 1rem;
	line-height: 1;
}

.dots {
	position: absolute;
	display: flex;
	bottom: 0;
	left: 0;
	right: 0;
	margin: 0 auto;
	width: fit-content;
}

.dots__dot {
	border: none;
	background-color: #666e88d6;
	opacity: 1;
	height: 1rem;
	width: 1rem;
	border-radius: 50%;
	margin-right: 1.75rem;
	cursor: pointer;
	transition: all 0.5s;
	padding: unset;

	/* Only necessary when overlying images */
	/* box-shadow: 0 0.6rem 1.5rem rgba(0, 0, 0, 0.7); */
}

img {
	user-select: none;

	/* drag */
	-webkit-user-drag: none;
	-khtml-user-drag: none;
	-moz-user-drag: none;
	-o-user-drag: none;
	/* user-drag: none; */
}
</style>