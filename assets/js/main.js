// Punto de entrada. Cada módulo busca sus propios elementos con data-* y no hace
// nada si no los encuentra, así que borrar una sección del HTML nunca rompe el sitio.
import { initNavigation } from "./modules/navigation.js";
import { initOpeningHours } from "./modules/opening-hours.js";
import { initCurrentYear } from "./modules/current-year.js";

initNavigation();
initOpeningHours();
initCurrentYear();
