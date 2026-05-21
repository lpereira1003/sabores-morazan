/* Copyright (c) 2026 sabores-morazan contributors. Licensed under the MIT License. */
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const destacarBtn = document.getElementById("destacarBtn");
const tarjetas = document.querySelectorAll(".card");
const reservaForm = document.getElementById("reservaForm");
const mensajeForm = document.getElementById("mensajeForm");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

destacarBtn.addEventListener("click", () => {
  tarjetas.forEach((tarjeta) => {
    tarjeta.classList.remove("destacada");
  });

  tarjetas[0].classList.add("destacada");
});

reservaForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const fecha = document.getElementById("fecha").value;
  const personas = document.getElementById("personas").value;

  if (
    nombre === "" ||
    correo === "" ||
    telefono === "" ||
    fecha === "" ||
    personas === ""
  ) {
    mostrarMensaje("Todos los campos principales son obligatorios.", "error");
    return;
  }

  if (!correo.includes("@") || !correo.includes(".")) {
    mostrarMensaje("Ingrese un correo electrónico válido.", "error");
    return;
  }

  if (telefono.length < 8) {
    mostrarMensaje("El teléfono debe tener al menos 8 dígitos.", "error");
    return;
  }

  if (Number(personas) < 1) {
    mostrarMensaje("Debe reservar para al menos una persona.", "error");
    return;
  }

  mostrarMensaje(
    `Gracias ${nombre}. Tu reserva para ${personas} persona(s) fue registrada correctamente.`,
    "exito"
  );

  reservaForm.reset();
});

function mostrarMensaje(texto, tipo) {
  mensajeForm.textContent = texto;
  mensajeForm.className = `mensaje ${tipo}`;
}
