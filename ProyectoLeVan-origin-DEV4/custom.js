const navButton = document.getElementById("hamburguer");
const navList = document.getElementById("navUl");

navButton.onclick = () => {
  const styles = getComputedStyle(navList);
  const { left } = styles;
  if (left === "-200px") {
    navList.style.left = 0;
    navList.style.top = "80px";
  } else {
    navList.style.left = "-200px";
  }
};

window.onresize = () => {
  if (window.innerWidth > 760) {
    navList.style.left = "60vw";
  }
};

const PICTURES = {
  Inicio: "/assets/images/sushi.inicio.jpg",
  Menu: "/assets/images/sushi.menu.jpg",
  Contacto: "/assets/images/sushi.contacto.jpg",
};

const body = document.querySelector("main");
const presentacion = document.getElementById("presentacion");
const svg = document.querySelector("#fondoSvg");
const menu = document.querySelector(".menu");
const combos = document.querySelector(".inicio");

const doSomethingAccordingToURL = () => {
  const { pathname } = window.location;

  switch (pathname) {
    case "/":
      body.style.backgroundImage = `url(${PICTURES.Inicio})`;
      presentacion.innerHTML =
        "<p>Bienvenidos a levan sushi, en nuestra web vas a encontrar todos nuestros combos y muchas mas cosas</p>";
      svg.classList.remove("rotatedMinus180");
      svg.classList.remove("rotated90");
      combosLev();
      emptyMenu();
      emptyContact();

      combosFilled = true;
      menuFilled = false;
      contactMenuFilled = false;

      break;

    case "/Menu":
      body.style.backgroundImage = `url(${PICTURES.Menu})`;
      presentacion.innerHTML =
        "<p>En esta seccion encontras nuestro menu completo</p>";
      svg.classList.remove("rotatedMinus180");
      svg.classList.add("rotated90");
      fillMenu();
      saucesMenu();
      chisaMenu();
      emptyCombo();
      emptyContact();

      combosFilled = false;
      saucesMenuFilled = true;
      menuFilled = true;
      chisaMenuFilled = true;
      contactMenuFilled = false;

      break;
    case "/Contacto":
      body.style.backgroundImage = `url(${PICTURES.Contacto})`;
      presentacion.innerHTML =
        "<p>Aqui podras ver nuestras formas de contacto</p>";
      svg.classList.remove("rotated90");
      svg.classList.add("rotatedMinus180");
      emptyMenu();
      emptyCombo();
      fillContact();

      saucesMenuFilled = false;
      menuFilled = false;
      chisaMenuFilled = false;
      combosFilled = false;

      break;
  }
};

const listItems = document.querySelectorAll("li");
listItems.forEach((node) => {
  node.onclick = (e) => {
    const content = e.target.textContent;
    window.history.pushState({}, content, content == "Inicio" ? "/" : content);
    doSomethingAccordingToURL();
  };
});

window.onload = () => doSomethingAccordingToURL();

const COMBOS = [
  {
    nombre: "Combo clasico (16 o 32p)",
    photo: "./assets/images/californiaroll.jpg",
    description: "New York, Philadelphia, California y Atun.",
  },
  {
    nombre: "Combo clasico 2 (12 o 24p)",
    photo: "./assets/images/californiaroll.jpg",
    description: "New York, California y Niguiris.",
  },
  {
    nombre: "Combo LeVan (16 o 32p)",
    photo: "./assets/images/californiaroll.jpg",
    description: "Criollo, Caribeño, Tamago Vege y Krack Chicken.",
  },
  {
    nombre: "Combo Lovers (15 o 30p)",
    photo: "./assets/images/californiaroll.jpg",
    description: "New York, Origenes, Hosomaki, Geishas y Niguiris.",
  },
  {
    nombre: "Combo Verano (30p)",
    photo: "./assets/images/californiaroll.jpg",
    description: "MDQ Cool, Atun, Salmon Grill, Maki-salmon y niguiris.",
  },
  {
    nombre: "Combo Mundial (32p)",
    photo: "./assets/images/californiaroll.jpg",
    description: "Italia, Francia, Tuna y niguiris flameado de salmon.",
  },
  {
    nombre: "Combo Elite (15 o 30p)",
    photo: "./assets/images/californiaroll.jpg",
    description: "Origenes, Hot Roll, Salmon grill y Geishas.",
  },
  {
    nombre: "Combo Veggi life (12 o 24p)",
    photo: "./assets/images/californiaroll.jpg",
    description: "Tamago vege, Vegetariano y Caprese.",
  },
  {
    nombre: "Combo Vegano (30p)",
    photo: "./assets/images/californiaroll.jpg",
    description: "Champion, Arcoiris, Vegetariano y Hosomaki.",
  },
  {
    nombre: "Combo Fusion (32p)",
    photo: "./assets/images/californiaroll.jpg",
    description: "New York, Criollo, Caprese y Hot Roll.",
  },
  {
    nombre: "Combo Picadito (48p)",
    photo: "./assets/images/californiaroll.jpg",
    description:
      "New York, Salmon Grill, Atun, Philadelphia, California, Vegetariano, Maki-Vegue, Niguiris salmon y Niguiris Kanikama",
  },
  {
    nombre: "Combo Familiar (68p)",
    photo: "./assets/images/californiaroll.jpg",
    description:
      "New York, California, Atun, Philadelphia, Salmon Grill, Vegetariano, Maki-salmon, Maki-vegue, Niguiris salmon y Niguiris kanikama.",
  },
  {
    nombre: "Combo City (30p)",
    photo: "./assets/images/californiaroll.jpg",
    description:
      "Mardel, California, Maki-salmon, Niguiris kanikama y Niguiris langostino",
  },
  {
    nombre: "Combo Niguiris (12p)",
    photo: "./assets/images/californiaroll.jpg",
    description: "Salmon, Salmon ahumado, Kanikama y Langostinos",
  },
  {
    nombre: "Combo Clasicas del mar",
    photo: "./assets/images/californiaroll.jpg",
    description: "12 piezas clasicas + 6 langostinos rebozados",
  },
  {
    nombre: "Combo Empanaditas",
    photo: "./assets/images/californiaroll.jpg",
    description: "4 Arrolladitos primavera de carne/verdura",
  },
  {
    nombre: "Combo Crispy de salmon",
    photo: "./assets/images/californiaroll.jpg",
    description: "Bolitas de salmon rebozado y frito mas mayonesa de wasabi",
  },
  {
    nombre: "Combo Lang rebozados",
    photo: "./assets/images/californiaroll.jpg",
    description: "Langostinos rebozados en panko y fritos",
  },
];

const MENU_ITEMS = [
  {
    name: "California Roll",
    photo: "./assets/images/californiaroll.jpg",
    description: "Kanikama, palta y queso crema.",
  },
  {
    name: "New York Roll",
    photo: "./assets/images/newyork.jpg",
    description: "Salmon, palta y queso crema.",
  },
  {
    name: "Philadelphia Roll",
    photo: "./assets/images/philadelphia.jpg",
    description: "Langostino, palta y queso crema.",
  },
  {
    name: "Atun 8p",
    photo: "./assets/images/atun.jpg",
    description: "Atun, queso y verdeo.",
  },
  {
    name: "Salmon Grill",
    photo: "./assets/images/salmongrill.jpg",
    description: "Salmon grillado, queso y verdeo.",
  },
  {
    name: "Tamago vege",
    photo: "./assets/images/tamagovegieroll-02.png",
    description: "Tamago, palmitos, morron asado, queso c. (Vegetariano)",
  },
  {
    name: "Caprese",
    photo: "./assets/images/capreseroll.jpg",
    description:
      "Tomate, albahac, queso c, coronado con praline (Vegetariano).",
  },
  {
    name: "Green",
    photo: "./assets/images/greenroll.jpg",
    description:
      "Queso, tomate deshidratado, envuelto en crepe de espinaca. (Vegetariano).",
  },
  {
    name: "Vegetariano",
    photo:
      "https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg",
    description: "Pepino, zanahoria, palta. ",
  },
  {
    name: "Uramaki Arcoiris",
    photo:
      "https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg",
    description: "Remolacha, tomate, palta y mousse de remolacha. (Veggie)",
  },
  {
    name: "Futomaki Champion",
    photo:
      "https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg",
    description:
      "Champiñones salteados con cebolla, morron y ajo. Coronado con chips de papa. (Veggie)",
  },
  {
    name: "Playa",
    photo:
      "https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg",
    description:
      "Futomaki-solomillo de cerdo salteado en morron y cebolla, mozzarella, rebozado y frito.",
  },
  {
    name: "Caribeño",
    photo:
      "https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg",
    description: "Langostino, guacamole rebozado.",
  },
  {
    name: "Krack Chicken",
    photo:
      "https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg",
    description: "Pollo marinado, rebozado y panceta crocante.",
  },
  {
    name: "Criollo",
    photo:
      "https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg",
    description:
      "Solomillo de cerdo salteado con cebolla morada y morron. Rebozado.",
  },
  {
    name: "Origenes",
    photo:
      "https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg",
    description: "Salmon, langostino y queso crema envuelto en tamago.",
  },
  {
    name: "Hot roll",
    photo:
      "https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg",
    description: "Langostino crocante y salmon ahumado.",
  },
  {
    name: "Mardel",
    photo:
      "https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg",
    description:
      "Pesca blanca, pepino, y queso c. Rebozado y frito coronado con limon.",
  },
  {
    name: "Salmon (6p)",
    photo:
      "https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg",
    description: "",
  },
  {
    name: "Langostino",
    photo:
      "https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg",
    description: "",
  },
  {
    name: "Kanikama",
    photo:
      "https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg",
    description: "",
  },
  {
    name: "Vegetariano",
    photo:
      "https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg",
    description:
      "Futomaki-solomillo de cerdo salteado en morron y cebolla, mozzarella, rebozado y frito.",
  },
  {
    name: "Salmon",
    photo:
      "https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg",
    description: "Niguiri x3.",
  },
  {
    name: "S. Ahumado",
    photo:
      "https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg",
    description: "Niguiri x3.",
  },
  {
    name: "Langostino",
    photo:
      "https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg",
    description: "Niguiri x3.",
  },
  {
    name: "Kanikama",
    photo:
      "https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg",
    description: "Niguiri x3.",
  },
  {
    name: "Vegetariano",
    photo:
      "https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg",
    description: "Niguiri x3.",
  },
  {
    name: "Geishas",
    photo:
      "https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg",
    description: "Niguiri x3.",
  },
];
const SALSAS = [
  {
    name: "Ostras",
    photo:
      "https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg",
    description: "No apta celiacos.",
  },
  {
    name: "Maracuya",
    photo:
      "https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg",
    description: "",
  },
  {
    name: "Soja",
    photo:
      "https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg",
    description: "",
  },
  {
    name: "Teriyaki",
    photo:
      "https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg",
    description: "",
  },
  {
    name: "Mayonesa de wasabi",
    photo:
      "https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg",
    description: "",
  },
  {
    name: "Mostaza y miel",
    photo:
      "https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg",
    description: "",
  },
  {
    name: "Mousse de remolacha",
    photo:
      "https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg",
    description: "",
  },
  {
    name: "Agridulce de tomate",
    photo:
      "https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg",
    description: "",
  },
  {
    name: "Jengibre encurtido",
    photo:
      "https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg",
    description: "",
  },
];
const CHIRASHI = [
  {
    name: "Cooked",
    photo:
      "https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg",
    description:
      "Arroz shari, sesamo, tiras de algas nori, queso crema, palta, lomo de atun, salmon grill y verdep.",
  },
  {
    name: "Mar",
    photo:
      "https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg",
    description:
      "Arroz shari, sesamo, tiras de alga nori, queso crema, palta, langostino, salmon, kanikama.",
  },
  {
    name: "Tierra",
    photo:
      "https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg",
    description:
      "Arroz shari, sesamo, tiras de alga nori, solomillo de cerdoy pechuga de pollo salteado con morron, cebolla, jengibre y ajo, tiras de tamago.",
  },
  {
    name: "Primavera",
    photo:
      "https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg",
    description:
      "Arroz shari, sesamo, tiras de alga nori, queso crema, palta, tomate, zanahoria, pepino.",
  },
  {
    name: "Hot",
    photo:
      "https://images.zeald.com/site/redwasabi/images/sushi-354628_1920.jpg",
    description:
      "Arroz shari, sesamo, tiras de alga nori, queso crema, palta, salmon y langostinos rebozados, kanikama crocante.",
  },
];

const createCombo = (obj) => {
  const { nombre, photo, description } = obj;
  const tarjeta = document.createElement("div");
  const titulo = document.createElement("h2");
  const desc = document.createElement("span");
  const imgInit = document.createElement("img");
  tarjeta.setAttribute("class", "tarjeta");
  titulo.textContent = nombre;
  desc.textContent = description;
  imgInit.setAttribute("src", photo);
  tarjeta.appendChild(titulo);
  tarjeta.appendChild(desc);
  tarjeta.appendChild(imgInit);
  combos.appendChild(tarjeta);
};

const createMenuCard = (obj) => {
  const { name, photo, description } = obj;
  const card = document.createElement("div");
  const title = document.createElement("h2");
  const text = document.createElement("span");
  const picture = document.createElement("img");
  card.setAttribute("class", "card");
  title.textContent = name;
  text.textContent = description;
  picture.classList.add("imgmenu");
  picture.setAttribute("src", photo);
  card.appendChild(title);
  card.appendChild(picture);
  card.appendChild(text);
  menu.appendChild(card);
};

const emptyMenu = () => (menu.innerHTML = "");
const emptyCombo = () => (combos.innerHTML = "");

// const combosInicio = () =>

let menuFilled = false;

const fillMenu = () => {
  if (!menuFilled) {
    MENU_ITEMS.forEach((item) => createMenuCard(item));
    menuFilled = true;
  }
};

let combosFilled = false;

const combosLev = () => {
  if (!combosFilled) {
    COMBOS.forEach((item) => createCombo(item));
    combosFilled = true;
  }
};

let saucesMenuFilled = false;

const saucesMenu = () => {
  if (!saucesMenuFilled) {
    SALSAS.forEach((item) => createCombo(item));
    saucesMenuFilled = true;
  }
};

let chisaMenuFilled = false;

const chisaMenu = () => {
  if (!chisaMenuFilled) {
    CHIRASHI.forEach((item) => createCombo(item));
    chisaMenuFilled = true;
  }
};

//seccion form contacto
const contactSection = document.getElementById("contact");

let contactMenuFilled = false;

const fillContact = () => {
  const computedStyle = window.getComputedStyle(contactSection);
  if (!contactMenuFilled && computedStyle.display === "none") {
    contactSection.style.display = "block";
    contactMenuFilled = true;
  }
};

const emptyContact = () => {
  const computedStyle = window.getComputedStyle(contactSection);
  if (computedStyle.display === "block") {
    contactSection.style.display = "none";
    contactMenuFilled = true;
  }
};
