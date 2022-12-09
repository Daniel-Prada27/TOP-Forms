const toggleBtn = document.getElementById("themeToggle");


function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
    
    if (toggleBtn.textContent == "Dark Theme"){
        toggleBtn.textContent = "Light Theme";
    }else if (toggleBtn.textContent == "Light Theme"){
        toggleBtn.textContent = "Dark Theme";
    }

    document.querySelector('.theme-name').textContent = newTheme;
  }
  
toggleBtn.addEventListener('click', setTheme)

console.log(toggleBtn.textContent);