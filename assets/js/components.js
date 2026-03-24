class SiteHeader extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/Common/header.html").then((r) =>
      r.text(),
    );
    this.innerHTML = html;
  }
}
customElements.define("site-header", SiteHeader);

class SiteBanner extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/Home/hero.html").then((r) => r.text());
    this.innerHTML = html;
    const heroSlider = this.querySelector(".hero-slider");
    if (heroSlider) {
      new Swiper(heroSlider, {
        speed: 1200,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
      });
    }
  }
}
customElements.define("site-banner", SiteBanner);

class SiteAbout extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/Common/about.html").then((r) =>
      r.text(),
    );
    this.innerHTML = html;
  }
}
customElements.define("site-about", SiteAbout);

class SiteAbout2 extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/Common/about-2.html").then((r) =>
      r.text(),
    );
    this.innerHTML = html;
  }
}
customElements.define("site-about-2", SiteAbout2);

class SiteRoomSlider2 extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/Common/room-slider-2.html").then((r) =>
      r.text(),
    );
    this.innerHTML = html;
    const roomSlider2 = this.querySelector(".gt-room-explore-slider");
    if (roomSlider2) {
      new Swiper(roomSlider2, {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        // navigation: {
        //   nextEl: ".array-prev",
        //   prevEl: ".array-next",
        // },
        breakpoints: {
          1199: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 1,
          },
          767: {
            slidesPerView: 1,
          },
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }
  }
}
customElements.define("site-room-slider-2", SiteRoomSlider2);

class SiteVideoBanner extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/Common/video-banner.html").then((r) =>
      r.text(),
    );
    this.innerHTML = html;
  }
}
customElements.define("site-video-banner", SiteVideoBanner);

class SiteFacility extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/Common/facility.html").then((r) =>
      r.text(),
    );
    this.innerHTML = html;
  }
}
customElements.define("site-facility", SiteFacility);

class SiteFacility2 extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/Common/facility-2.html").then((r) =>
      r.text(),
    );
    this.innerHTML = html;
  }
}
customElements.define("site-facility-2", SiteFacility2);

class SiteBreadCrumb extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/Common/banner-breadcrumb.html").then(
      (r) => r.text(),
    );
    this.innerHTML = html;

    const title = this.getAttribute("title");

    this.querySelectorAll(".page-title").forEach((el) => {
      el.textContent = title;
    });
  }
}
customElements.define("site-breadcrumb", SiteBreadCrumb);

class SiteOurOfferings extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/Services/our-offerings.html").then(
      (r) => r.text(),
    );
    this.innerHTML = html;
    const servicesSlider = this.querySelector(".service-image-slider");
    if (servicesSlider) {
      new Swiper(servicesSlider, {
        spaceBetween: 0,
        speed: 1300,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        },
      });
    }
  }
}
customElements.define("site-our-offerings", SiteOurOfferings);

class SiteOurHotels extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/Services/hotel-section.html").then(
      (r) => r.text(),
    );
    this.innerHTML = html;
  }
}
customElements.define("site-our-hotels", SiteOurHotels);

class SiteRooms extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/Home/rooms.html").then((r) =>
      r.text(),
    );
    this.innerHTML = html;

    const slider = this.querySelector(".room-slider");
    if (slider) {
      new Swiper(slider, {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".prev-btn",
          prevEl: ".next-btn",
        },
        breakpoints: {
          1699: {
            slidesPerView: 5,
          },
          1399: {
            slidesPerView: 4.5,
          },
          1199: {
            slidesPerView: 4,
          },
          991: {
            slidesPerView: 3,
          },
          767: {
            slidesPerView: 2,
          },
          575: {
            slidesPerView: 1.5,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }
  }
}
customElements.define("site-rooms", SiteRooms);

class SiteBooking extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/Home/booking.html").then((r) =>
      r.text(),
    );
    this.innerHTML = html;
    $(".video-popup").magnificPopup({
      type: "iframe",
      callbacks: {},
    });
  }
}
customElements.define("site-booking", SiteBooking);

class SiteRoomBook extends HTMLElement {
  async connectedCallback() {
    const html = await fetch(
      "components/Hotel Details/room-booking-form.html",
    ).then((r) => r.text());
    this.innerHTML = html;
  }
}
customElements.define("site-room-book", SiteRoomBook);

class SiteServiceBook extends HTMLElement {
  async connectedCallback() {
    const html = await fetch(
      "components/Service Details/service-book.html",
    ).then((r) => r.text());
    this.innerHTML = html;
  }
}
customElements.define("site-service-book", SiteServiceBook);

class SiteBlogsGrid extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/Blogs/blogs-grid.html").then((r) =>
      r.text(),
    );
    this.innerHTML = html;
  }
}
customElements.define("site-blogs-grid", SiteBlogsGrid);

class SiteSingleBlogDetails extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/Blogs/single-blog-details.html").then(
      (r) => r.text(),
    );
    this.innerHTML = html;
  }
}
customElements.define("site-single-blog-details", SiteSingleBlogDetails);

class SiteOffers extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/Home/exclusive-deals.html").then((r) =>
      r.text(),
    );
    this.innerHTML = html;
    const dealsSlider = this.querySelector(".special-offer-slider");
    if (dealsSlider) {
      new Swiper(dealsSlider, {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        breakpoints: {
          1199: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 2,
          },
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }
  }
}
customElements.define("site-offers", SiteOffers);

class SiteCounter extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/Common/counter.html").then((r) =>
      r.text(),
    );
    this.innerHTML = html;
    $(".count-value").counterUp({
      delay: 15,
      time: 4000,
    });
  }
}
customElements.define("site-counter", SiteCounter);

class SiteTestimonials extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/Common/testimonial.html").then((r) =>
      r.text(),
    );
    this.innerHTML = html;
    const testimonialSlider = this.querySelector(".testimonial-slider");
    if (testimonialSlider) {
      new Swiper(testimonialSlider, {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        },
        pagination: {
          el: ".dot",
          clickable: true,
        },
      });
    }
  }
}
customElements.define("site-testimonial", SiteTestimonials);

class SiteMarquee extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/Home/marquee.html").then((r) =>
      r.text(),
    );
    this.innerHTML = html;
  }
}
customElements.define("site-marquee", SiteMarquee);

class SiteBlogs extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/Home/blogs.html").then((r) =>
      r.text(),
    );
    this.innerHTML = html;
  }
}
customElements.define("site-blogs", SiteBlogs);

class SiteInstagram extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/Common/instagram.html").then((r) =>
      r.text(),
    );
    this.innerHTML = html;

    const showInstaTitleSection = this.getAttribute("show-insta-title-section");

    if (showInstaTitleSection !== "true") {
      const instaTitleSection = this.querySelector(".insta-title-section");
      if (instaTitleSection) instaTitleSection.remove();
    }
    const instagramSlider = this.querySelector(".instagram-slider");
    if (instagramSlider) {
      new Swiper(instagramSlider, {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        // navigation: {
        //   nextEl: ".array-prev",
        //   prevEl: ".array-next",
        // },
        breakpoints: {
          1399: {
            slidesPerView: 6,
          },
          1199: {
            slidesPerView: 4,
          },
          991: {
            slidesPerView: 3,
          },
          767: {
            slidesPerView: 2,
          },
          575: {
            slidesPerView: 1.5,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }
  }
}
customElements.define("site-instagram", SiteInstagram);

class SiteFAQ2 extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/Common/faq-2.html").then((r) =>
      r.text(),
    );
    this.innerHTML = html;
  }
}
customElements.define("site-faq-2", SiteFAQ2);

class SiteContactForm extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/Contact/contact-form.html").then((r) =>
      r.text(),
    );
    this.innerHTML = html;
  }
}
customElements.define("site-contact-form", SiteContactForm);

class SiteMap extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/Contact/map.html").then((r) =>
      r.text(),
    );
    this.innerHTML = html;
  }
}
customElements.define("site-map", SiteMap);

class SiteFooter extends HTMLElement {
  async connectedCallback() {
    const html = await fetch("components/Common/footer.html").then((r) =>
      r.text(),
    );
    this.outerHTML = html;
  }
}
customElements.define("site-footer", SiteFooter);
