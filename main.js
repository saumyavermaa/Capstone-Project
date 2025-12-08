// Basic DOM examples: querySelector, addEventListener, querySelectorAll
// This file is intentionally simple and safe for demonstration.

document.addEventListener('DOMContentLoaded', function () {
  // THEME SWITCHER: Add floating button and toggle dark/light mode
  var themeBtn = document.createElement('button');
  themeBtn.className = 'theme-toggle-btn';
  themeBtn.title = 'Toggle theme';
  themeBtn.innerHTML = '<span class="material-icons">dark_mode</span>';
  document.body.appendChild(themeBtn);

  // Add theme styles if not present
  if (!document.getElementById('theme-toggle-style')) {
    var style = document.createElement('style');
    style.id = 'theme-toggle-style';
    style.textContent = `
      .theme-toggle-btn {
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 99999 !important;
        background: linear-gradient(135deg, #232526 0%, #764ba2 100%);
        color: #fff;
        border: none;
        border-radius: 50%;
        width: 52px;
        height: 52px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.18);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        transition: background 0.2s, transform 0.2s;
        opacity: 1 !important;
        pointer-events: auto !important;
      }
      .theme-toggle-btn:hover {
        background: linear-gradient(135deg, #764ba2 0%, #232526 100%);
        transform: scale(1.08);
      }
      body.light-theme {
        background: #f6f6f6 !important;
        color: #232526 !important;
      }
      body.light-theme nav,
      body.light-theme .login-container,
      body.light-theme .signup-container,
      body.light-theme aside,
      body.light-theme .aside_container,
      body.light-theme .aside_input,
      body.light-theme .header {
        background: #fff !important;
        color: #232526 !important;
        box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      }
      body.light-theme,
      body.light-theme h1,
      body.light-theme h2,
      body.light-theme h3,
      body.light-theme h4,
      body.light-theme h5,
      body.light-theme h6,
      body.light-theme p,
      body.light-theme span,
      body.light-theme a,
      body.light-theme label,
      body.light-theme .material-icons,
      body.light-theme .post_header-special,
      body.light-theme .post_badge,
      body.light-theme .trending-category,
      body.light-theme .trending-tag,
      body.light-theme .trending-tweets,
      body.light-theme .aside_input input,
      body.light-theme .aside_container h2 {
        color: #232526 !important;
      }
      body.light-theme .aside_input input {
        background: #f6f6f6 !important;
        border: 1px solid #e0e0e0 !important;
      }
      body.light-theme .trending-card,
      body.light-theme .post,
      body.light-theme .post_body,
      body.light-theme .post_header,
      body.light-theme .post_header-text,
      body.light-theme .post_header-description,
      body.light-theme .post_profile-image {
        background: #fff !important;
        color: #232526 !important;
        border-color: #e0e0e0 !important;
      }
      body.light-theme .post_footer .material-icons {
        color: #764ba2 !important;
      }
      body.light-theme .aside_container,
      body.light-theme .aside_input {
        border-radius: 16px !important;
        border: 1px solid #e0e0e0 !important;
      }
      /* Dark theme text color for contrast */
      body:not(.light-theme),
      body:not(.light-theme) h1,
      body:not(.light-theme) h2,
      body:not(.light-theme) h3,
      body:not(.light-theme) h4,
      body:not(.light-theme) h5,
      body:not(.light-theme) h6,
      body:not(.light-theme) p,
      body:not(.light-theme) span,
      body:not(.light-theme) a,
      body:not(.light-theme) label,
      body:not(.light-theme) .material-icons,
      body:not(.light-theme) .post_header-special,
      body:not(.light-theme) .post_badge,
      body:not(.light-theme) .trending-category,
      body:not(.light-theme) .trending-tag,
      body:not(.light-theme) .trending-tweets,
      body:not(.light-theme) .aside_input input,
      body:not(.light-theme) .aside_container h2 {
        color: #fff !important;
      }
      body.light-theme .theme-toggle-btn {
        background: linear-gradient(135deg, #fff 0%, #667eea 100%);
        color: #232526;
      }
    `;
    document.head.appendChild(style);
  }

  // Theme logic
  function setTheme(theme) {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
      themeBtn.innerHTML = '<span class="material-icons">light_mode</span>';
    } else {
      document.body.classList.remove('light-theme');
      themeBtn.innerHTML = '<span class="material-icons">dark_mode</span>';
    }
    localStorage.setItem('streakit_theme', theme);
  }
  // On load, restore theme
  var savedTheme = localStorage.getItem('streakit_theme');
  setTheme(savedTheme === 'light' ? 'light' : 'dark');
  // Toggle on click
  themeBtn.addEventListener('click', function() {
    var isLight = document.body.classList.contains('light-theme');
    setTheme(isLight ? 'dark' : 'light');
  });

  // Home page sidebar search: filter posts as you type
  var asideSearch = document.querySelector('.aside_input input[type="text"]');
  if (asideSearch) {
    asideSearch.addEventListener('input', function() {
      var query = asideSearch.value.trim().toLowerCase();
      var posts = document.querySelectorAll('.post');
      posts.forEach(function(post) {
        var text = post.textContent.toLowerCase();
        post.style.display = query === '' || text.includes(query) ? '' : 'none';
      });
    });
  }

  // Keep previous dynamic search icon color for explore page
  var exploreInput = document.querySelector('.explore_search input');
  var exploreIcon = document.querySelector('.explore_search_icon');
  if (exploreInput && exploreIcon) {
    exploreInput.addEventListener('focus', function () {
      exploreIcon.style.color = '#764ba2';
    });
    exploreInput.addEventListener('blur', function () {
      exploreIcon.style.color = '';
    });
  }
});
  // console.log('Total posts on page:', allPosts.length);
;
