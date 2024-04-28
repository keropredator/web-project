function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}
function btnActive() {
  const toggle = document.getElementById("toggle");
  toggle.classList.toggle("active");
  const body = document.querySelector("body");
  body.classList.toggle("active");
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const wrapper = document.querySelector(".wrapper");
  wrapper.classList.toggle("activeDark");
}

function registerLink() {
  const wrapper = document.querySelector(".wrapper");
  wrapper.classList.add("active");
}

function loginLink() {
  const wrapper = document.querySelector(".wrapper");
  wrapper.classList.remove("active");
}
function btnPopup() {
  const wrapper = document.querySelector(".wrapper");
  wrapper.classList.add("active-popup");
}
function iconClose() {
  const wrapper = document.querySelector(".wrapper");
  wrapper.classList.remove("active-popup");
}
