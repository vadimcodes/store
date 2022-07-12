document.querySelectorAll('.products__btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.products__btn').forEach(function (btn) {
      btn.classList.remove('active')
    });
    e.currentTarget.classList.add('active');

    document.querySelectorAll('.products-content').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('active');
  });
});

