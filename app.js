const countdown = () => {
  const countDate = new Date("May 21, 2022").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;
  const secondi = 1000;
  const minuti = secondi * 60;
  const ore = minuti * 60;
  const giorni = ore * 24;

  const giornoApertura = Math.floor(gap / giorni);
  const oreApertura = Math.floor((gap % giorni) / ore);
  const minutiApertura = Math.floor((gap % ore) / minuti);
  const secondiApertura = Math.floor((gap % minuti) / secondi);

  setInnerTextByID("giorni", giornoApertura);
  setInnerTextByID("ore", oreApertura);
  setInnerTextByID("minuti", minutiApertura);
  setInnerTextByID("secondi", secondiApertura);
};

function setInnerTextByID(id, text) {
  document.querySelector(`#${id}`).innerText = text;
}
setInterval(countdown, 1000);
