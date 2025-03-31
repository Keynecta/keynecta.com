console.log('%c Crafted by Insight Creative, Inc. Designed and Developed by Justin Parsons', 'background: #1d1d1d; color: white; padding: 5px 10px;')

// Mobile menu functionality
const mobileMenu = document.querySelector('.header__mobile-nav');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
  if (mobileMenu.classList.contains('nav-open')) {
    this.setAttribute('aria-expanded', 'false');
    this.setAttribute('aria-label', 'open mobile menu');
    mobileMenu.classList.remove('nav-open');
    hamburger.classList.remove('is-active');
  } else {
    mobileMenu.classList.add('nav-open');
    hamburger.classList.add('is-active');
    this.setAttribute('aria-expanded', 'true');
    this.setAttribute('aria-label', 'close mobile menu');
  }
}

mobileMenu.addEventListener('click', (event) => {
  const dropdownToggle = event.target.closest('.toggle-mobile-dropdown');

  // If the clicked element is not a dropdown toggle, exit early
  if (!dropdownToggle) {
    return;
  }

  const dropdown = dropdownToggle.parentElement;

  if (dropdown.classList.contains('mobile-dropdown-open')) {
    dropdown.setAttribute('aria-expanded', 'false');
    dropdown.setAttribute('aria-label', 'open mobile dropdown menu');
    mobileMenu.classList.remove('has-dropdown-open');
    dropdown.classList.remove('mobile-dropdown-open');
  } else {
    mobileMenu.classList.add('has-dropdown-open');
    dropdown.classList.add('mobile-dropdown-open');
    dropdown.setAttribute('aria-expanded', 'true');
    dropdown.setAttribute('aria-label', 'close mobile dropdown menu');
  }
});

// Desktop dropdown menus
const hasSubMenu = document.querySelectorAll(".has-sub-menu")

hasSubMenu.forEach((link) => {
  // Helper function to set ARIA-expanded attribute
  function setAriaExpandedAttribute(element, value) {
    element.setAttribute("aria-expanded", value);
  };

  const subMenuToggle = document.querySelector(".sub-menu-toggle");
  const subMenuLinks = link.querySelectorAll(".header__sub-menu-link");

  function openSubMenu() {
    link.classList.add("has-sub-menu-open");
    subMenuToggle.classList.add("sub-menu-is-toggled");
    setAriaExpandedAttribute(subMenuToggle, "true");
  };

  function closeSubMenu() {
    link.classList.remove("has-sub-menu-open");
    subMenuToggle.classList.remove("sub-menu-is-toggled");
    setAriaExpandedAttribute(subMenuToggle, "false");
  };

  link.addEventListener("mouseover", openSubMenu);
  link.addEventListener("mouseout", closeSubMenu);

  // ensure that we open our sub menu when sub menu links are tabbed and focused rather than these remaining visually hidden
  subMenuLinks.forEach((subMenuLink) => {
    subMenuLink.addEventListener("focus", openSubMenu);
    subMenuLink.addEventListener("blur", closeSubMenu);
  });
});

// Hybrid fixed/sticky navigation
const siteHeader = document.querySelector(".header")

let scrollState = 0;

const scrollTop = () => window.scrollY;

const scrollDetect = (collapse, expand) => {
  const currentScroll = scrollTop();
  if (currentScroll > scrollState) {
    collapse();
  } else {
    expand();
  }
  scrollState = scrollTop();
};

function collapseNav() {
  siteHeader.classList.remove("expand");
  siteHeader.classList.add("collapse");
}

function expandNav() {
  siteHeader.classList.remove("collapse");
  siteHeader.classList.add("expand");
}

let ticking = false;

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      scrollDetect(collapseNav, expandNav);
      ticking = false;
    });

    ticking = true;
  }
});

// Load the YouTube IFrame Player API
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function createPlayer(video, index) {
  var videoURL = new URL(video.src);
  // Extracts video ID from the URL path
  var videoId = videoURL.pathname.split('/').pop(); 
  
  // Append parameters for YouTube player
  videoURL.searchParams.set('enablejsapi', '1');
  videoURL.searchParams.set('autoplay', '1');
  videoURL.searchParams.set('mute', '1');
  videoURL.searchParams.set('rel', '0');
  videoURL.searchParams.set('loop', '1');
  videoURL.searchParams.set('origin', window.location.origin);
  videoURL.searchParams.set('playlist', videoId);
  
  // Set the modified source URL back to the iframe
  video.src = videoURL.href;

  return new YT.Player(video, {
    events: {
      'onReady': function(event) {
        bindControlButton(event.target, index);
      }
    }
  });
}

function bindControlButton(player, index) {
  var button = document.querySelectorAll('.video-controls')[index];
  if (button) {
    button.addEventListener('click', function() {
      var playerState = player.getPlayerState();
      togglePlayback(player, button, playerState);
    });
  }
}

function togglePlayback(player, button, playerState) {
  if (playerState === YT.PlayerState.PLAYING) {
    button.classList.replace('video-playing', 'video-paused');
    button.setAttribute('aria-label', 'play the video');
    button.setAttribute('title', 'play the video');
    player.pauseVideo();
  } else {
    button.classList.replace('video-paused', 'video-playing');
    button.setAttribute('aria-label', 'pause the video');
    button.setAttribute('title', 'pause the video');
    player.playVideo();
  }
}

// Controls/logic for the custom button overlay on YouTube videos
const videoPlayButtons = document.querySelectorAll('.media-text-block__overlay-button');

videoPlayButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    button.style.display = "none";
    const youtubeVideoContainer = button.nextElementSibling;
    const youtubeVideo = youtubeVideoContainer.querySelector('iframe');

    createYouTubePlayer(youtubeVideo);
  })
});

function createYouTubePlayer(video) {
  var videoURL = new URL(video.src);
  var videoId = videoURL.pathname.split('/').pop();

  videoURL.searchParams.set('enablejsapi', '1');
  videoURL.searchParams.set('rel', '0');
  videoURL.searchParams.set('origin', window.location.origin);
  videoURL.searchParams.set('playlist', videoId);
  video.src = videoURL.href;

  return new YT.Player(video, {
    events: {
      'onReady': function(event) {
        // Play the video when ready
        event.target.playVideo();
      }
    }
  });
}