const menuID = document.getElementById("menu");

const menuHTML = `    
  <nav class="menu">
    <div class="menu__button" onclick="page('inicio')">
      Inicio
    </div>

    <div class="menu__button" onclick="page('iphone')">
      iPhone
    </div>

    <div class="menu__button" onclick="page('android')">
      Android
    </div>

    <div class="menu__button" onclick="page('share')">
      Otros
    </div>
  </nav>`;

menuID.innerHTML = menuHTML;

const page = (parr) => {
  window.location.href = "www.google.com"
};
