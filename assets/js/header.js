function initHeader() {
  const langMenu = document.querySelector('.lang-menu');
  const langSelected = document.querySelector('.lang-selected');
  const langItems = document.querySelectorAll('.lang-item');

  langSelected.addEventListener('click', function () {
    langMenu.classList.toggle('active');
  });

  langItems.forEach(function (item) {
    item.addEventListener('click', function () {
      const selectedLang = item.querySelector('span').textContent;
      langSelected.querySelector('span').textContent = selectedLang;
      langMenu.classList.remove('active');
    });
  });

  function closeMenu(event) {
    if (!langMenu.contains(event.target)) {
      langMenu.classList.remove('active');
    }
  }

  // 외부 클릭 및 스크롤 시 언어 메뉴 닫기
  document.addEventListener('click', closeMenu);
  window.addEventListener('scroll', function () {
    langMenu.classList.remove('active');
  });

  const checkExist = setInterval(function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const menu = document.querySelector('.menu');

    if (burgerMenu && menu) {
      clearInterval(checkExist);

      burgerMenu.addEventListener('click', function () {
        burgerMenu.classList.toggle('active');
        menu.classList.toggle('active');

        // 스크롤 막기 / 허용
        if (burgerMenu.classList.contains('active')) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
      });

      const menuItems = document.querySelectorAll('.menu-item a');
      menuItems.forEach((item) => {
        item.addEventListener('click', function () {
          burgerMenu.classList.remove('active');
          menu.classList.remove('active');

          // 스크롤 허용
          document.body.style.overflow = '';
        });
      });
    }
  }, 100); // 100ms마다 확인
}
