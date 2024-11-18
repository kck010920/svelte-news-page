<script>
    import { onMount } from 'svelte';
    import { fetchImages, createSlideshow, startSlideshow } from '$lib/slideshow.js';
  
    let slideshowContainer;
    let dotsContainer;
    const apiEndpoint = 'https://toa.edu.my/api/dailyNews/imageURL'; // Replace with your API endpoint
  
    onMount(async () => {
      const images = await fetchImages(apiEndpoint);
      createSlideshow(images, slideshowContainer, dotsContainer);
      startSlideshow(images.length);
    });
</script>

<style>
    section.pd {
        padding: 3rem 0;
    }
    
    .alt-bg-color {
        background-color: var(--textWhite);
        color: var(--textDark);
    }
    
    section {
        position: relative;
    }
    
    * {
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
        font-family: var(--defaultFamily);
    }
    
    .container {
        width: var(--optimalWidth);
        margin: 0 auto;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: var(--defaultFontSize);
        /* overflow: hidden; */
    }
    
    .alt-bg-color .title-wrapper h5 {
        font-weight: 500;
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
    
    .alt-bg-color h5 {
        color: var(--textDark);
    }
    
    h5 {
        font-size: var(--fontSizeMedium);
        color: var(--textWhite);
        font-weight: normal;
        letter-spacing: 2px;
    }
    
    .title-wrapper h2{
        line-height: 0.8;
        margin-top: 0.5rem;
    }
    
    h2 {
        font-size: var(--fontSizeHuge);
        color: var(--bgLogo);
        font-weight: 600;
        letter-spacing: 2px;
    }
    
    .slides-container {
        position: relative;
    }
    
    .highlight .slides-container {
        overflow: hidden;
    }
      </style>
      
    
    <section class="highlight alt-bg-color pd">
        <div class="container">
            <div class="title-wrapper">
                <h5>Highlighted</h5>
                <h2>NEWS & EVENTS</h2>
            </div>
            <div bind:this={slideshowContainer} class="slides-container">
    
                <div bind:this={dotsContainer} class="dots"></div>
    
            </div>
    
        </div>
    </section>