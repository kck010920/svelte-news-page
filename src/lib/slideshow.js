// src/lib/slideshow.js
export async function fetchImages(apiEndpoint) {
    try {
      const response = await fetch(apiEndpoint);
      const data = await response.json();
      return data; // Assuming the API returns an array of image URLs
    } catch (error) {
      console.error('Error fetching images:', error);
      return [];
    }
  }
  
  export function createSlideshow(images, slideshowContainer, dotsContainer) {
    images.forEach((image, index) => {
      // Create slide
      const slideDiv = document.createElement('div');
      slideDiv.className = 'mySlides';
      const img = document.createElement('img');
      img.src = image; // Assuming the image URL is a string
      slideDiv.appendChild(img);
      slideshowContainer.appendChild(slideDiv);
  
      // Create dot
      const dotSpan = document.createElement('span');
      dotSpan.className = 'dot';
      dotSpan.addEventListener('click', () => showSlide(index, images.length));
      dotsContainer.appendChild(dotSpan);
    });
  
    showSlide(0, images.length); // Show the first slide
  }
  
  let slideIndex = 0;
  export function showSlide(index, totalSlides) {
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');
    slideIndex = index;
  
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
      dots[i].classList.remove('active');
    }
  
    slides[slideIndex].style.display = 'block';
    dots[slideIndex].classList.add('active');
  }
  
  export function startSlideshow(totalSlides) {
    setInterval(() => {
      slideIndex = (slideIndex + 1) % totalSlides;
      showSlide(slideIndex, totalSlides);
    }, 2000); // Change image every 2 seconds
  }
  