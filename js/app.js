const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
const galleryImages = document.querySelectorAll('.open-image');

if(galleryImages) {
  galleryImages.forEach(image => {
    image.addEventListener('click', (e) => {
      document.body.style.paddingRight = scrollbarWidth + 'px';
      document.body.style.overflow = 'hidden';
    })
  })
}


try {
  if(fsLightbox) {
    fsLightbox.props.onClose = function () {
      document.body.style.paddingRight = 0;
      document.body.style.overflow = 'visible';
    }
  }
} catch(e) {}
