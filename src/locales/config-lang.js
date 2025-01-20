// @mui
import { enUS, arSA } from "@mui/material/locale";

// PLEASE REMOVE `LOCAL STORAGE` WHEN YOU CHANGE SETTINGS.
// ----------------------------------------------------------------------

export const allLangs = [
  {
    label: "English",
    value: "en",
    systemValue: enUS,
    icon: "flagpack:gb-nir",
  },

  {
    label: "Arabic",
    value: "ar",
    systemValue: arSA,
    icon: "flagpack:sa",
  },
];

export const defaultLang = allLangs[0]; // English
