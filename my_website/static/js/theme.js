document.addEventListener("DOMContentLoaded", function() {
    // Set initial theme
    var currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
      document.getElementById("theme-icon").classList.remove("fa-sun-o");
      document.getElementById("theme-icon").classList.add("fa-moon-o");
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
      document.getElementById("theme-icon").classList.remove("fa-moon-o");
      document.getElementById("theme-icon").classList.add("fa-sun-o");
    }
  });
  
  function toggleTheme() {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
  
    var themeIcon = document.getElementById("theme-icon");
    if (document.body.classList.contains('light-mode')) {
      themeIcon.classList.remove("fa-moon-o");
      themeIcon.classList.add("fa-sun-o");
      localStorage.setItem('theme', 'light');
    } else {
      themeIcon.classList.remove("fa-sun-o");
      themeIcon.classList.add("fa-moon-o");
      localStorage.setItem('theme', 'dark');
    }
  }
  
  const themeSwitch = document.getElementById('theme-switch');
  themeSwitch.addEventListener('change', toggleTheme);