
// Mobile menu
function toggleMobile() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
function closeMobileIfBg(e) {
  if (e.target === document.getElementById('mobileMenu')) toggleMobile();
}

// FAQ toggle
function toggleFaq(el) {
  const item = el.parentElement;
  item.classList.toggle('open');
}

// Brand tabs
function setBrandTab(brand) {
  document.querySelectorAll('.brand-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.brand-content').forEach(c => c.classList.remove('active'));
  const tab = document.getElementById('tab-' + brand);
  const content = document.getElementById('brand-' + brand);
  if (tab) tab.classList.add('active');
  if (content) content.classList.add('active');
}

// Dropdown keyboard support
document.querySelectorAll('.dropdown').forEach(d => {
  d.addEventListener('click', () => d.classList.toggle('open'));
  document.addEventListener('click', e => {
    if (!d.contains(e.target)) d.classList.remove('open');
  });
});
