
/**
* Show elements when page scroll height exceeds specified value (optimized version)
* @param {string} className - Class name of the element to control
* @param {number} scrollThreshold - Scroll height threshold to trigger display
* @param {object} [options] - Optional configuration
* @param {string} [options.displayType='block'] - Display value to use when showing
* @param {number} [options.debounceDelay=50] - Debounce delay (ms)
*/
function showOnScrollEnhanced(className, scrollThreshold, audioClass, options = {}) {
  const {
    displayType = 'block',
    debounceDelay = 0
  } = options;

  const elements = document.querySelectorAll(`.${className}`);

  if (elements.length === 0) {
    console.warn(`Element with class name "${className}" not found`);
    return;
  }

  // Initially hide all elements
  elements.forEach(el => {
    el.style.display = 'none';
  });

  let timeout;
  const checkScroll = () => {
    const currentScroll = document.documentElement.scrollTop;
    const shouldShow = currentScroll >= scrollThreshold;
    
    elements.forEach(el => {
      el.style.display = shouldShow ? displayType : 'none';
    });
    
    // Handle audio playback. Reference:Link:should be commented out like this: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
    if (audioClass && shouldShow) {
      const audioElement = document.querySelector(`.${audioClass}`);
      if (audioElement) {
        // Pause other audio
        const allAudios = document.querySelectorAll('.music');
        allAudios.forEach(audio => {
          if (audio !== audioElement) {
            audio.pause();
          }
        });
        // Play current audio
        audioElement.currentTime = 0;
        audioElement.play().catch(e => console.log('Audio playback failed:', e));
      }
    }
  };

  // Add debounced scroll event listener
  window.addEventListener('scroll', () => {
    clearTimeout(timeout);
    timeout = setTimeout(checkScroll, debounceDelay);
  });

  // Initial check
  checkScroll();
}

// Usage examples
showOnScrollEnhanced('one-content', 20);
showOnScrollEnhanced('group-1', 300, 'audio-1');
showOnScrollEnhanced('group-2', 500, 'audio-2');
showOnScrollEnhanced('narration-text', 600);

showOnScrollEnhanced('first-img', 1236);
showOnScrollEnhanced('two-img', 1400);
showOnScrollEnhanced('three-img', 1400);
showOnScrollEnhanced('four-img', 1400);

showOnScrollEnhanced('five-img', 2100, 'audio-3');


showOnScrollEnhanced('six-img', 2100);
showOnScrollEnhanced('seven-img', 2500, 'audio-4');
showOnScrollEnhanced('eight-img', 2800);
showOnScrollEnhanced('narration-text-2', 2900);

showOnScrollEnhanced('image-9', 3200);
showOnScrollEnhanced('right-image', 3250);
showOnScrollEnhanced('number-4-1', 3250);
showOnScrollEnhanced('image-10', 3400);
showOnScrollEnhanced('left-image', 3450);
showOnScrollEnhanced('number-0', 3450);
showOnScrollEnhanced('image-11', 3600);
showOnScrollEnhanced('right-image-2', 3650);
showOnScrollEnhanced('number-4-2', 3650);
showOnScrollEnhanced('image-12', 3800);
showOnScrollEnhanced('image-13', 4000);

// Video-related function
function playAudio() {
    const audio = document.getElementById('Audio');
    if (audio) {
        audio.play();
    }
}

function playAudio2() {
    const audio2 = document.getElementById('Audio2');
    if (audio2) {
        audio2.play();
    }
}

function playVid() {
    const video = document.getElementById('myVideo');
    if (video) {
        video.play().catch(error => {
            console.log('Video playback failed:', error);
            // If video playback fails, open video in new window
            window.open('./assets/video/breaking.mp4', '_blank');
        });
    }
}
showOnScrollEnhanced('image-14', 4200);
showOnScrollEnhanced('image-15-container', 5200, 'turning-pages-audio');
// showOnScrollEnhanced('image-16-container', 5520, 'ding-audio'); // Replaced with precise Intersection Observer
// showOnScrollEnhanced('image-17-container', 5400, 'ding-audio'); // Commented out to avoid ding sound conflict with image-16-container
showOnScrollEnhanced('image-18', 5400);
showOnScrollEnhanced('image-19', 5600);
showOnScrollEnhanced('image-l1', 5800);
showOnScrollEnhanced('image-r1', 5800);
showOnScrollEnhanced('image-20', 6000);
showOnScrollEnhanced('image-21', 6320);
showOnScrollEnhanced('image-22', 6320);
showOnScrollEnhanced('image-23', 6480);
showOnScrollEnhanced('image-24', 6720);
showOnScrollEnhanced('image-25', 6920);
showOnScrollEnhanced('image-26', 7480);
showOnScrollEnhanced('image-27', 8280);
showOnScrollEnhanced('image-28', 9080);
showOnScrollEnhanced('image-29', 9440);
showOnScrollEnhanced('image-30', 9800);
showOnScrollEnhanced('image-31', 10160);
showOnScrollEnhanced('image-32', 10520);

// Modal functionality.Reference： should be commented out like this: Link: https://www.w3schools.com/howto/howto_css_modal_images.asp
function initModal() {
  const modal = document.getElementById('modal');
  const image16 = document.querySelector('.image-16');
  const closeBtn = document.querySelector('.close');

  // Click image to show modal
  if (image16) {
    image16.addEventListener('click', function(e) {
      e.preventDefault();
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
  }

  // Click close button to close modal
  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto'; // Restore scrolling
    });
  }

  // Click modal background to close modal
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto'; // Restore scrolling
    }
  });

  // Press ESC key to close modal
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto'; // Restore scrolling
    }
  });
  
  // Add click event for unread messages
  const unreadMessage = modal.querySelector('.unread-message');
  if (unreadMessage) {
    unreadMessage.style.cursor = 'pointer';
    unreadMessage.addEventListener('click', function() {
      // Replace modal content with original content
      const modalBody = modal.querySelector('.modal-body');
      modalBody.innerHTML = `
        <p class="question-text">Do you want to know more of the truth?</p>
        <p class="location-text">Come to this location.</p>
        <div class="tech-decoration">
          <div class="pulse-dot"></div>
          <div class="scan-line"></div>
        </div>
      `;
    });
  }
}

// Initialize modal functionality after page load. They should be commented out like this: Link: https://www.w3schools.com/howto/howto_css_modal_images.asp
document.addEventListener('DOMContentLoaded', initModal);

// If page has already loaded, initialize immediately
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initModal);
} else {
  initModal();
}

// Image area interaction functionality.They should be commented out like this: Reference:Link: 1.https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement 2. https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
function initImageAreaInteraction() {
  const image = document.querySelector('.image-15');
  if (!image) {
    console.log('image-15 element not found');
    return;
  }
  
  console.log('Initializing image area interaction functionality');
  
  // Save original styles
  const originalSrc = image.src;
  const originalWidth = image.offsetWidth;
  const originalHeight = image.offsetHeight;
  
  // Create right-side floating image container
  let floatingContainer = document.querySelector('.floating-docs-container');
  if (!floatingContainer) {
    floatingContainer = document.createElement('div');
    floatingContainer.className = 'floating-docs-container';
    floatingContainer.style.cssText = `
      position: absolute;
      top: 112%;
      right: -8%;
      
      width: 1000px;
      height: 750px;
      z-index: 1000;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
      pointer-events: none;
    `;
    document.body.appendChild(floatingContainer);
  }
  
  // Preload images
  const preloadImages = [
    './assets/images/chapter2/d1.PNG',
    './assets/images/chapter2/d2.PNG',
    './assets/images/chapter2/d3.PNG'
  ];
  
  preloadImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
  
  // Add mouse move event listener
  image.addEventListener('mousemove', function(e) {
    const rect = image.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const width = rect.width;
    const height = rect.height;
    
    // Calculate relative position
    const relativeX = x / width;
    const relativeY = y / height;
    
    // Set fixed size and style
    image.style.width = '1200px';
    image.style.objectFit = 'fill';
    
    // Determine mouse position and switch images (based on half of actual display area)
    const actualWidth = image.offsetWidth;
    const actualHeight = image.offsetHeight;
    const actualX = x * (actualWidth / width);
    const actualY = y * (actualHeight / height);
    const actualRelativeX = actualX / actualWidth;
    const actualRelativeY = actualY / actualHeight;
    
    if (actualRelativeX < 0.5 && actualRelativeY < 0.5) {
      // Top-left area
      console.log('Switching to d1 image');
      image.src = './assets/images/chapter2/d1.PNG';
      showFloatingDoc(1);
    } else if (actualRelativeX < 0.5 && actualRelativeY >= 0.5) {
      // Bottom-left area
      console.log('Switching to d2 image');
      image.src = './assets/images/chapter2/d2.PNG';
      showFloatingDoc(2);
    } else {
      // Right half area
      console.log('Switching to d3 image');
      image.src = './assets/images/chapter2/d3.PNG';
      showFloatingDoc(3);
    }
    
    // Function to show right-side floating document images
    function showFloatingDoc(docNumber) {
      const floatingContainer = document.querySelector('.floating-docs-container');
      if (!floatingContainer) return;
      
      // Create corresponding document images based on user-provided images
       const docImages = {
         1: './assets/images/chapter2/1.png',
         2: './assets/images/chapter2/2.png',
         3: './assets/images/chapter2/3.png'
       };
      
      floatingContainer.innerHTML = `<img src="${docImages[docNumber]}" style="width: 100%; height: 100%; object-fit: contain; border-radius: 10px; box-shadow: 0 4px 20px rgba(255,255,255,0.3);">`;
      floatingContainer.style.opacity = '1';
    }
  });
  
  // Add mouse leave event listener
  image.addEventListener('mouseleave', function() {
    image.src = originalSrc;
    image.style.border = '';
    image.style.width = '';
    image.style.height = '';
    image.style.objectFit = '';
    image.style.objectPosition = '';
    
    // Hide right-side floating document
    const floatingContainer = document.querySelector('.floating-docs-container');
    if (floatingContainer) {
      floatingContainer.style.opacity = '0';
    }
  });
}



// Initialize all functions
// Chapter3 document modal functionality
function initChapter3DocModal() {
  const chapter3Page2 = document.getElementById('chapter3-page2');
  const modal = document.getElementById('chapter3-doc-modal');
  const closeBtn = document.getElementById('chapter3-doc-close');

  if (chapter3Page2 && modal && closeBtn) {
    // Click right area of image to show modal
    chapter3Page2.addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const imageWidth = rect.width;
      
      // If click is in right 50% area of image
      if (clickX > imageWidth * 0.5) {
        // Play door opening/closing sound effect
        const doorAudio = new Audio('./assets/video/main-door-opening-closing-38280.mp3');
        doorAudio.play().catch(e => console.log('Audio play failed:', e));
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
      }
    });

    // Click close button
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    });

    // Click modal background to close
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });

    // ESC key to close modal
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  }
}

// Floating navigation functionality - adjustable parameter version
function initFloatingNavigation() {
  console.log('Initializing floating navigation functionality');
  const navButtons = document.querySelectorAll('.nav-button');
  console.log('Found navigation buttons count:', navButtons.length);
  
  // Adjustable chapter position parameters (you can modify these values as needed)
  const CHAPTER_TOP_OFFSETS = {
    chapter1: 0,      // Chapter 1 scroll position
    chapter2: 5200,   // Chapter 2 scroll position 
    chapter3: 8280,   // Chapter 3 scroll position
    chapter4: 9800    // Chapter 4 scroll position
  };
  
  console.log('Current chapter position settings:', CHAPTER_TOP_OFFSETS);
  
  // Get actual positions of each chapter element
  function getChapterPositions() {
    // Use adjustable parameters directly, not dependent on DOM element search
    return CHAPTER_TOP_OFFSETS;
  }
  
  // Add click event for each navigation button. It should be commented out like this:Link: https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
  navButtons.forEach(button => {
    button.addEventListener('click', function() {
      const target = this.getAttribute('data-target');
      const chapterPositions = getChapterPositions();
      const targetPosition = chapterPositions[target];
      
      if (targetPosition !== undefined) {
        // Smooth scroll to target position
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Update button state
        updateActiveButton(target);
      }
    });
  });
  
  // Listen to scroll events, update currently active button
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const chapterPositions = getChapterPositions();
    let activeChapter = 'chapter1';
    
    // Determine current chapter based on scroll position
    if (scrollTop >= chapterPositions.chapter4 - 200) {
      activeChapter = 'chapter4';
    } else if (scrollTop >= chapterPositions.chapter3 - 200) {
      activeChapter = 'chapter3';
    } else if (scrollTop >= chapterPositions.chapter2 - 200) {
      activeChapter = 'chapter2';
    } else {
      activeChapter = 'chapter1';
    }
    
    updateActiveButton(activeChapter);
  });
  
  // Function to update active button
  function updateActiveButton(activeChapter) {
    navButtons.forEach(button => {
      const target = button.getAttribute('data-target');
      if (target === activeChapter) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }
  
  // Set first button as active state during initialization
  updateActiveButton('chapter1');
}

function init() {
  initImageAreaInteraction();
  initChapter3DocModal();
  initFloatingNavigation();
  // initPageNavigation(); // Temporarily commented out undefined function
}

// Video autoplay functionality
function initVideoAutoplay() {
  const video = document.getElementById('main-video');
  if (!video) {
    console.log('Video element not found');
    return;
  }

  // Create Intersection Observer.It should be commented out like this: Reference: Link: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Video enters viewport, autoplay
        video.play().catch(error => {
          console.log('Video autoplay failed:', error);
        });
      } else {
        // Video leaves viewport, pause playback
        video.pause();
      }
    });
  }, {
    threshold: 0.5 // Trigger when video is 50% visible
  });

  // Start observing video element
  observer.observe(video);
}

// Door sound effect autoplay functionality
function initDoorAudioAutoplay() {
  const fiveImgContainer = document.querySelector('.five-img');
  const doorAudio = document.querySelector('.audio-3');
  
  if (!fiveImgContainer || !doorAudio) {
    console.log('five-img container or door audio element not found');
    return;
  }

  let hasPlayed = false; // Prevent repeated playback

  // Create Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasPlayed) {
        // Container enters center of viewport, play door sound effect
        doorAudio.play().catch(error => {
          console.log('Door sound effect playback failed:', error);
        });
        hasPlayed = true;
      }
    });
  }, {
    threshold: 0.5 // Trigger when container is 50% visible
  });

  // Start observing container element
  observer.observe(fiveImgContainer);
}

// Ding sound effect precise playback functionality
function initDingAudioAutoplay() {
  console.log('Initializing ding sound effect autoplay functionality');
  const image16Container = document.querySelector('.image-16-container');
  const dingAudio = document.querySelector('.ding-audio');
  
  console.log('image16Container:', image16Container);
  console.log('dingAudio:', dingAudio);
  
  if (!image16Container || !dingAudio) {
    console.log('image-16-container container or ding audio element not found');
    return;
  }

  let hasPlayed = false; // Prevent repeated playback
  
  // Add scroll listener as backup solution
  window.addEventListener('scroll', () => {
    const rect = image16Container.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isVisible && !hasPlayed) {
      console.log('Detected image-16-container visible through scroll listener, playing ding sound effect');
      dingAudio.play().then(() => {
        console.log('Ding sound effect playback successful');
        hasPlayed = true;
      }).catch(error => {
        console.log('Ding sound effect playback failed:', error);
      });
    }
  });

  // Create Intersection Observer. It should be commented out like this: Reference: Link: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      console.log('Intersection Observer triggered:', entry.isIntersecting, 'hasPlayed:', hasPlayed);
      console.log('Element position info:', entry.boundingClientRect);
      if (entry.isIntersecting && !hasPlayed) {
        console.log('Preparing to play ding sound effect');
        // Play ding sound effect when container enters viewport
        dingAudio.play().then(() => {
          console.log('Ding sound effect playback successful');
          hasPlayed = true;
        }).catch(error => {
          console.log('Ding sound effect playback failed:', error);
        });
      }
    });
  }, {
    threshold: 0.1, // Further reduce threshold, trigger when container is 10% visible
    rootMargin: '50px' // Add margin, trigger earlier
  });

  // Start observing container element
  observer.observe(image16Container);
  console.log('Start observing image-16-container, threshold: 0.1, margin: 50px');
}

function init() {
  initImageAreaInteraction();
  initChapter3DocModal();
  initVideoAutoplay();
  initDoorAudioAutoplay();
  initDingAudioAutoplay();
  initFloatingNavigation(); // Add floating navigation functionality initialization
  // initPageNavigation(); // Temporarily commented out undefined function
}

// Initialize all functions after page load
document.addEventListener('DOMContentLoaded', init);

// If page has already loaded, initialize immediately
if (document.readyState !== 'loading') {
  init();
}




