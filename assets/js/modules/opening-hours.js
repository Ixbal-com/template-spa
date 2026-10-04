// Lee el horario de la tabla [data-hours] (fuente única de verdad), marca el día
// de hoy y muestra "Abierto ahora" o "Cerrado" en [data-open-status].
export function initOpeningHours(now = new Date()) {
  const table = document.querySelector("[data-hours]");
  if (!table) return;

  const today = now.getDay();
  const minutesNow = now.getHours() * 60 + now.getMinutes();
  const todayRow = [...table.querySelectorAll("tr[data-days]")].find((row) =>
    row.dataset.days.split(",").map(Number).includes(today),
  );

  todayRow?.classList.add("is-today");

  const status = document.querySelector("[data-open-status]");
  if (!status) return;

  const { open, close } = todayRow?.dataset ?? {};
  const isOpen = Boolean(open && close) && minutesNow >= toMinutes(open) && minutesNow < toMinutes(close);

  status.textContent = isOpen ? `Abierto ahora · cierra a las ${close}` : "Cerrado en este momento";
  status.classList.toggle("is-open", isOpen);
  status.hidden = false;
}

function toMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}
