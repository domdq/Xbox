const acodeons = document.querySelectorAll(".acodeon");

acodeons.forEach(function listAcodeon(acodeon) {
  acodeon.addEventListener("click", function handleAcodeon(evento) {
    const item = evento.target.closest(".acodeon");
    if (item) {
      item.classList.toggle("acodeon-aberto");
    }
  });
});
