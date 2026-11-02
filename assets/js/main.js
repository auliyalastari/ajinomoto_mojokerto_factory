/**
* Template Name: Remember
* Template URL: https://bootstrapmade.com/remember-free-multipurpose-bootstrap-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();

document.addEventListener("DOMContentLoaded", function () {

  // =====================================
  // DATA PRODUK
  // =====================================

  const products = [
    // AJI-NO-MOTO
    {name:"AJI-NO-MOTO Original",brand:"AJI-NO-MOTO",category:"lainnya",folder:"ajinamoto",file:"ajinamoto1",desc:"Penyedap rasa untuk berbagai masakan."},
    {name:"AJINOMOTO Terasi Udang",brand:"AJI-NO-MOTO",category:"lainnya",folder:"ajinamoto",file:"ajinamoto2",desc:"Bumbu terasi udang."},
    {name:"Amino Vital",brand:"AJI-NO-MOTO",category:"lainnya",folder:"ajinamoto",file:"ajinamoto3",desc:"Produk Amino Vital."},
    {name:"AJI-NO-MOTO Plus",brand:"AJI-NO-MOTO",category:"lainnya",folder:"ajinamoto",file:"ajinamoto4",desc:"Produk penyedap rasa varian Plus."},
    {name:"Chicken Gyoza",brand:"AJI-NO-MOTO",category:"lainnya",folder:"ajinamoto",file:"ajinamoto5",desc:"Gyoza ayam."},

    // MASAKO
    {name:"Masako Rasa Ayam",brand:"Masako",category:"masako",folder:"masako",file:"masako1",desc:"Kaldu penyedap rasa ayam."},
    {name:"Masako Rasa Sapi",brand:"Masako",category:"masako",folder:"masako",file:"masako2",desc:"Kaldu penyedap rasa sapi."},
    {name:"Masako Rasa Jamur",brand:"Masako",category:"masako",folder:"masako",file:"masako3",desc:"Kaldu penyedap rasa jamur."},

    // MAYUMI
    {name:"Mayumi Original",brand:"Mayumi",category:"mayumi",folder:"mayumi",file:"mayumi1",desc:"Saus mayones."},
    {name:"Mayumi Pedas",brand:"Mayumi",category:"mayumi",folder:"mayumi",file:"mayumi2",desc:"Saus mayones pedas."},

    // SAJIKU
    {name:"Tepung Bumbu Serbaguna",brand:"Sajiku",category:"sajiku",folder:"sajiku",file:"sajiku1",desc:"Tepung bumbu praktis."},
    {name:"Golden Crispy",brand:"Sajiku",category:"sajiku",folder:"sajiku",file:"sajiku2",desc:"Tepung bumbu crispy."},
    {name:"Bumbu Soto Ayam",brand:"Sajiku",category:"sajiku",folder:"sajiku",file:"sajiku3",desc:"Bumbu praktis soto ayam."},
    {name:"Tepung Bakwan Crispy",brand:"Sajiku",category:"sajiku",folder:"sajiku",file:"sajiku4",desc:"Tepung bumbu bakwan."},
    {name:"Tepung Bumbu Pedas",brand:"Sajiku",category:"sajiku",folder:"sajiku",file:"sajiku5",desc:"Tepung bumbu pedas."},
    {name:"Bumbu Nasi Goreng Ayam",brand:"Sajiku",category:"sajiku",folder:"sajiku",file:"sajiku6",desc:"Bumbu nasi goreng ayam."},
    {name:"Bumbu Nasi Goreng Pedas",brand:"Sajiku",category:"sajiku",folder:"sajiku",file:"sajiku7",desc:"Bumbu nasi goreng pedas."},
    {name:"Tepung Manis Serbaguna",brand:"Sajiku",category:"sajiku",folder:"sajiku",file:"sajiku8",desc:"Tepung untuk olahan manis."},
    {name:"Tempe Crispy",brand:"Sajiku",category:"sajiku",folder:"sajiku",file:"sajiku9",desc:"Tepung bumbu tempe crispy."},
    {name:"Pisang Crispy",brand:"Sajiku",category:"sajiku",folder:"sajiku",file:"sajiku10",desc:"Tepung bumbu pisang crispy."},
    {name:"Bumbu Rawon",brand:"Sajiku",category:"sajiku",folder:"sajiku",file:"sajiku11",desc:"Bumbu masakan rawon."},
    {name:"Bumbu Gulai",brand:"Sajiku",category:"sajiku",folder:"sajiku",file:"sajiku12",desc:"Bumbu masakan gulai."},
    {name:"Bumbu Opor",brand:"Sajiku",category:"sajiku",folder:"sajiku",file:"sajiku13",desc:"Bumbu masakan opor."},
    {name:"Bumbu Capcay",brand:"Sajiku",category:"sajiku",folder:"sajiku",file:"sajiku14",desc:"Bumbu masakan capcay."},
    {name:"Bumbu Sayur Sop",brand:"Sajiku",category:"sajiku",folder:"sajiku",file:"sajiku15",desc:"Bumbu sayur sop."},
    {name:"Bumbu Sayur Asem",brand:"Sajiku",category:"sajiku",folder:"sajiku",file:"sajiku16",desc:"Bumbu sayur asem."},
    {name:"Bumbu Ikan Goreng",brand:"Sajiku",category:"sajiku",folder:"sajiku",file:"sajiku17",desc:"Bumbu ikan goreng."},
    {name:"Ayam Goreng Tradisional",brand:"Sajiku",category:"sajiku",folder:"sajiku",file:"sajiku18",desc:"Bumbu ayam goreng tradisional."},
    {name:"Nasi Goreng Kecap",brand:"Sajiku",category:"sajiku",folder:"sajiku",file:"sajiku19",desc:"Bumbu nasi goreng kecap."},

    // SAORI
    {name:"Saus Tiram",brand:"SAORI",category:"saori",folder:"saori",file:"saori1",desc:"Saus tiram."},
    {name:"Saus Teriyaki",brand:"SAORI",category:"saori",folder:"saori",file:"saori2",desc:"Saus rasa teriyaki."},
    {name:"Saus Mentega",brand:"SAORI",category:"saori",folder:"saori",file:"saori3",desc:"Saus rasa mentega."},
    {name:"Saus Bulgogi",brand:"SAORI",category:"saori",folder:"saori",file:"saori4",desc:"Saus rasa bulgogi."},
    {name:"Saus Asam Manis",brand:"SAORI",category:"saori",folder:"saori",file:"saori5",desc:"Saus asam manis."},
    {name:"Saus Lada Hitam",brand:"SAORI",category:"saori",folder:"saori",file:"saori6",desc:"Saus lada hitam."}
  ];

  const grid = document.getElementById("productGrid");
  const search = document.getElementById("productSearch");
  const count = document.getElementById("productCount");
  const empty = document.getElementById("emptyProduct");

  if (!grid || !search || !count || !empty) return;

  let activeCategory = "all";

  // =====================================
  // GAMBAR PRODUK
  // =====================================

  function loadImage(img, folder, file) {
    const extensions = ["jpg", "jpeg", "png", "webp"];
    let index = 0;

    img.onerror = function () {
      index++;

      if (index < extensions.length) {
        img.src = `assets/img/${folder}/${file}.${extensions[index]}`;
      } else {
        img.onerror = null;
        img.alt = "Gambar belum ditemukan";
      }
    };

    img.src = `assets/img/${folder}/${file}.${extensions[index]}`;
  }

  // =====================================
  // POPUP DETAIL PRODUK
  // =====================================

  function showDetail(product) {
    const modal = document.getElementById("productDetailModal");

    document.getElementById("modalProductBrand").textContent = product.brand;
    document.getElementById("productModalTitle").textContent = product.name;
    document.getElementById("modalProductDescription").textContent = product.desc;

    const img = document.getElementById("modalProductImage");
    img.alt = product.name;
    loadImage(img, product.folder, product.file);

    bootstrap.Modal.getOrCreateInstance(modal).show();
  }

  // =====================================
  // TAMPILKAN PRODUK
  // =====================================

  function render(list) {
    grid.innerHTML = "";

    list.forEach(product => {
      const col = document.createElement("div");
      col.className = "col-lg-3 col-md-4 col-6";

      const card = document.createElement("div");
      card.className = "product-card";

      const imageBox = document.createElement("div");
      imageBox.className = "product-image";

      const img = document.createElement("img");
      img.loading = "lazy";
      img.alt = product.name;
      loadImage(img, product.folder, product.file);

      imageBox.appendChild(img);

      const info = document.createElement("div");
      info.className = "product-info";

      const brand = document.createElement("span");
      brand.className = "product-brand";
      brand.textContent = product.brand;

      const title = document.createElement("h3");
      title.textContent = product.name;

      const desc = document.createElement("p");
      desc.textContent = product.desc;

      const button = document.createElement("button");
      button.className = "product-detail-btn";
      button.type = "button";
      button.textContent = "Lihat detail →";
      button.addEventListener("click", () => showDetail(product));

      info.append(brand, title, desc, button);
      card.append(imageBox, info);
      col.appendChild(card);
      grid.appendChild(col);
    });

    count.textContent = `Menampilkan ${list.length} produk`;
    empty.hidden = list.length > 0;
  }

  // =====================================
  // FILTER DAN PENCARIAN
  // =====================================

  function applyFilter() {
    const keyword = search.value.toLowerCase().trim();

    const filtered = products.filter(product => {
      const categoryMatch =
        activeCategory === "all" ||
        product.category === activeCategory;

      const searchMatch =
        product.name.toLowerCase().includes(keyword) ||
        product.brand.toLowerCase().includes(keyword);

      return categoryMatch && searchMatch;
    });

    render(filtered);
  }

  document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", function () {
      document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.classList.remove("active");
      });

      this.classList.add("active");
      activeCategory = this.dataset.filter;

      applyFilter();
    });
  });

  search.addEventListener("input", applyFilter);

  // TAMPILKAN SEMUA PRODUK
  render(products);

});
