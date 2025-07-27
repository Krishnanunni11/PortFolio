
    const body = document.body;
    const toggleBtn = document.querySelector('.toggle-theme-btn');
    const popupCard = document.getElementById('popup-card');
    const popupContent = document.getElementById('popup-content');
    const popupProfilePic = document.getElementById('popupProfilePic');
    const mainProfilePic = document.getElementById('mainProfilePic');

    // Dark/Light toggle
    toggleBtn.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    body.classList.replace('dark-mode', 'light-mode');
    toggleBtn.textContent = '🌙 Dark';
  } else {
    body.classList.replace('light-mode', 'dark-mode');
    toggleBtn.textContent = '☀ Light';
  }
});


    // Open popup with animated morph profile picture
    function openPopup(title, content) {
      popupContent.innerHTML = `<h2 id="popup-title">${title}</h2><p>${content}</p>`;
      popupCard.classList.remove('hidden');
      // Reset animation
      popupProfilePic.style.animation = 'none';
      void popupProfilePic.offsetWidth; // trigger reflow
      popupProfilePic.style.animation = null;

      // Optionally, smooth scroll popup into view
      popupCard.scrollIntoView({behavior: 'smooth'});

      // Animate main profile pic "moving" to popup
      animateProfilePicMorph();
    }

    // Close popup
    function closePopup() {
      popupCard.classList.add('hidden');
    }

    // Animate profile pic morph from circle to rectangle inside popup
    function animateProfilePicMorph() {
      // We use CSS animation defined @keyframes morphProfile
      // The popup-profile-pic already animates on popup show by CSS
      // For the mainProfilePic, we can add a quick pulse or glow:
      mainProfilePic.animate([
        { boxShadow: '0 0 15px rgba(0,255,255,0.6)' },
        { boxShadow: '0 0 40px rgba(0,255,255,1)' },
        { boxShadow: '0 0 15px rgba(0,255,255,0.6)' }
      ], {
        duration: 800,
        iterations: 1
      });
    }

    // Download resume function
    function downloadResume() {
      // Replace with your actual resume file URL
      const resumeUrl = 'krishnanunni_CV.pdf';
      const a = document.createElement('a');
      a.href = resumeUrl;
      a.download = 'krishnanunni_h_pillai_resume.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  