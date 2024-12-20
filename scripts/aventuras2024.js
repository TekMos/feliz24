/*Lógica para el drawer*/
const drawerButton = document.getElementById("drawer-button");
const drawer = document.getElementById("drawer");
const closeDrawer = document.getElementById("close-drawer");

drawerButton.addEventListener("click", () => {
  drawer.classList.toggle("open");
});

closeDrawer.addEventListener("click", () => {
  drawer.classList.remove("open");
});

/*Lógica para el modal de imagenes*/
const images = document.querySelectorAll(".month-content img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.getElementById("close-modal");

images.forEach((image) => {
  image.addEventListener("click", () => {
    //Mostramos el modal al hacer click
    modal.style.display = "flex";
    //Asignamos la source a la imagen del modal
    modalImg.src = image.src;
  });
});

closeModal.addEventListener("click", () => {
  //Vuelve a ocultar el modal
  modal.style.display = "none";
  //Limpia el modal para mejorar eficiencia
  modalImg.src = "";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    modalImg.src = "";
  }
});

// Selecciona todas las secciones de los meses
const months = document.querySelectorAll(".month-section");

// Oculta todas las secciones al inicio
months.forEach((month) => (month.style.display = "none"));

// Muestra la sección de "Enero" por defecto
document.getElementById("enero").style.display = "block";

// Maneja el clic en los enlaces del drawer
document.querySelector(".drawer ul").addEventListener("click", (event) => {
  drawer.classList.remove("open"); //Cierra el drawer al seleccionar
  event.preventDefault(); // Evita el comportamiento por defecto del enlace
  const target = event.target;

  // Verifica si el clic fue en un enlace
  if (target.tagName === "A") {
    const targetId = target.getAttribute("href").substring(1); // Obtén el ID sin '#'

    // Oculta todas las secciones
    months.forEach((month) => (month.style.display = "none"));

    // Muestra la sección correspondiente
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.style.display = "block";
    }
  }
});
