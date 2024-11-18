<script>
    export let data;
	// import Slideshow from '$lib/components/slideshow.svelte';
	import { Splide, SplideSlide } from "@splidejs/svelte-splide";
	import "@splidejs/splide/dist/css/themes/splide-default.min.css";

    // let allNews = data.allNews;
    // let highlightedNews = data.highlightedNews;

    let {allNews, highlightedNews} = data;
	let desktop = matchMedia("(max-width: 810px)");

	// Define the current slide index and an array for slides
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


<section class="highlight alt-bg-color pd">
    <div class="container">
        <div class="title-wrapper">
            <h5>Highlighted</h5>
            <h2>NEWS & EVENTS</h2>
        </div>

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



    </div>
</section>

<section class="alt-bg-color">
    <div class="container">
		<div class="flex-row news-tabs">
			<div id="All" class="filter-all-news grid show">
				<!-- news -->
				{#each allNews as news}
					<div class="news flex-col">
						<a href="">
							<img src="{news.imageURL}/main.webp" alt="" />
						</a>
						<h3 class="type" style="text-align: right;">{news.event == 1 ? 'news' : 'event'}</h3>
		
						<p class="date">{news.start}</p>
						<h6>{news.title}</h6>
		
						<p class="desc">
							{news.desc}
						</p>
						<a class="small-link" href="#">
							Learn More</a>
					</div>
				{/each}
			</div>
		</div>
        
    </div> 
</section>

<style>
.container {
	width: clamp(815px, 80vw, 1600px);
	margin: 0 auto;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	font-size: 1rem;
	overflow: hidden;
}

/* * {
	margin: 0;
	padding: 0;
	text-decoration: none;
	list-style: none;
	color: unset;
	border: unset;
	box-sizing: border-box;
	max-width: 100vw;
	letter-spacing: 0.5px;
	word-spacing: 2px;
	-webkit-user-drag: none;
	font-family: "Assistant", sans-serif;
} */

.splide {
	padding-bottom: 2rem;
}

.title-wrapper::before {
	content: "";
	width: 45px;
	height: 3px;
	background-color: #ff7024;
	position: absolute;
	top: -20px;
}

.title-wrapper {
	margin: 3rem 0;
	position: relative;
	margin-bottom: 2rem;
}

section{
    position: relative;
}

section.pd {
	padding: 3rem 0;
}

.alt-bg-color {
	background-color: #ffffff;
	color: #4d4d4d;
}

.alt-bg-color .title-wrapper h5 {
	font-weight: 500;
}

.alt-bg-color h5 {
	color: var(--textDark);
}

h5 {
	font-size: 1.5rem;
	color: #ffffff;
	font-weight: normal;
	letter-spacing: 2px;
}

.title-wrapper h2{
	line-height: 0.8;
	margin-top: 0.5rem;
}

h2 {
	font-size: 3rem;
	color: #ff7024;
	font-weight: 600;
	letter-spacing: 2px;
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

.slide img {
  max-width: 100%;
}

.slides-container {
	position: relative;
}

.highlight .slides-container {
	overflow: hidden;
} 

section.pd {
	padding: 3rem 0;
}

.alt-bg-color {
	background-color: #ffffff;
	color: #4d4d4d;
}

section {
	position: relative;
}

.news.flex-col {
	padding-bottom: 2rem;
	justify-content: flex-start;
	transition: 300ms;
}

.news.flex-col:hover {
	filter: brightness(0.7);
}

.news.flex-col *:not(:first-child) {
	margin-top: 1rem;
}

.flex-col {
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.news img {
	width: 100%;
	display: block;
}

.flex-row.news-tabs {
	min-height: 40vh;
	overflow: hidden;
	position: relative;
	padding: 3px;
	margin-top: 1rem;
	margin-bottom: 3rem;
	transition: 800ms;
}


.news-tabs .grid {
	position: absolute;
	transition: 800ms;
	grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
	grid-template-columns: repeat(3, 1fr);
	width: 99%;
	justify-content: flex-start;
	column-gap: 4rem;
	row-gap: 2rem;
}

.grid {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 1rem;
}

</style>
