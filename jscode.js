const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

function handleSubmit(e) {
  e.preventDefault();
  document.getElementById('form-success').hidden = false;
  e.target.reset();
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

fetch('https://khalid-yaser-infinityfreeapp.free.nf/api.php')
  .then(res => res.json())
  .then(data => {
    document.getElementById('hero-name').textContent    = data.full_name;
    document.getElementById('hero-text').textContent    = data.hero_text;
    document.getElementById('about-text').textContent   = data.about_text;

    const projectsList = document.getElementById('projects-list');
    data.projects.forEach(p => {
      const div = document.createElement('div');
      div.innerHTML = `<h3>${p.title}</h3><p>${p.description}</p>`;
      projectsList.appendChild(div);
    });
  });
