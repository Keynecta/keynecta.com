const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './layouts/**/*.html',
        './layouts/**/*.svg',
        './content/**/*.md',
      ],
      safelist: [
        'content-grid',
        'content-sm',
        'content-md',
        'content-lg',
        'content-full',
        'breakout',
        'block',
        'block-sm',
        'block-md',
        'block-lg',
        'block-xl',
        'mobile-dropdown-open',
        'is-active',
        'nav-open',
        'has-dropdown-open',
        'has-sub-menu-open',
        'expand',
        'collapse',
        'page-home',
        'page-our-services',
        'page-our-projects',
        'page-our-industries',
        'page-our-company',
        'page-our-careers',
        'page-our-locations',
        'page-our-news',
        'page-contact',
        'page-hvac',
        'page-safety',
        'parent-page-our-services',
        'parent-page-our-projects',
        'parent-page-our-industries',
        'parent-page-our-company',
        'parent-page-our-locations',
        'parent-page-categories',
        'parent-page-our-news',
        'parent-page-our-careers',
        'active-button',
        'position-open',
        'list-open',
        'toggle-mobile-dropdown',
        'ul', 
        'ol',
        'table',
        'tr',
        'td',
        'pre',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'grid-6-md',
        'mt-6',
        'btn--active',
        'auto-grid',
        'media-text-block',
        'media-text-block__image',
        'media-text-block--text-left',
        'media-text-block--text-right',
        'bg-black',
        'bg-gray',
        'bg-white',
        'grid-columns-3',
        'grid-columns-4',
        'testimonials',
        'testimonials__content',
        'reel',
        'reel__testimonial',
        'reel__body',
        'reel__image',
        'text-align-start',
        'text-align-center',
        'text-align-end',
        'iframe',
        'hero--split-hero',
        'pause-icon',
        'play-icon',
        'video-controls',
        'video-paused',
        'video-playing',
        'home-hero__media',
        'home-hero__video-wrapper',
        'hero__media-background',
        'home-hero__video',
        'home-hero__video-fallback',
        'skew-wrapper',
        'hero__image-wrapper',
        'home-hero__image',
        'home-hero__image-1',
        'home-hero__image-2',
        'hero__image',
        'intro',
        'intro__content',
        'intro--locations',
        'swiper-pagination-bullet',
        'swiper-pagination-bullet-active',
        'swiper-slide-active',
        'hero__breadcrumbs',
        'hero__breadcrumbs-list',
        'hero__breadcrumbs-list-item',
        'hero__breadcrumbs-link',
        'has-list-two-col',
        'media-text-block',
        'media-text-block__content',
        'media-text-block__media',
        'media-text-block__media-wrapper',
        'media-text-block__overlay-button',
        'media-text-block__play-icon',
        'media-text-block__video',
        'media-text-block__image',
        'video-block',
        'video-block__content',
        'video-block__media',
        'video-block__media-wrapper',
        'video-block__overlay-button',
        'video-block__play-icon',
        'video-block__video',
        'video-block__image',
        'history-block__year',
        'history-block__media',
        'history-timeline',
        'history-timeline__wrapper',
        'history-timeline__year',
        'history-block__heading',
        'services-card',
        'services-card__link',
        'services-card__image-wrap',
        'services-card__image',
        'services-card__overlay',
        'services-card__body',
        'services-card__icon',
        'services-card__title',
        'spacer',
        'award',
        'award__year',
        'award__title',
        'award__project',
        'border-grid',
        'border-grid__col',
        'content',
      ],
    }),
  ],
}