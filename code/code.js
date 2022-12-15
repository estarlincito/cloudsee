const menuID = document.getElementById("menu");

const menuHTML = `    
  <nav class="menu">
    <div class="menu__button" onclick="page('/')">
      Inicio
    </div>

    <div class="menu__button" onclick="page('/components/iphone.html')">
      iPhone
    </div>

    <div class="menu__button" onclick="page('/components/android.html')">
      Android
    </div>

    <div class="menu__button" onclick="page('/components/share.html')">
      Otros
    </div>
  </nav>`;

menuID.innerHTML = menuHTML;

const page = (path) => {
  if (path === "me") {
    window.open("https://linktr.ee/estarlincito");
  } else {
    window.location.href = `https://estarlincito.github.io/cloudsee${path}`;
  }
};
