import { Button } from "@mui/material";
import Iconify from "../../../iconify";
import PropTypes from "prop-types";

export default function Language({ handleChangeLang, locales }) {
  return (
    <Button
      startIcon={<Iconify icon="mdi:language" />}
      onClick={() =>
        handleChangeLang(locales.currentLang.value === "en" ? "ar" : "en")
      }
    >
      {locales.currentLang.value === "en" ? "عربي" : "English"}
    </Button>
  );
}

Language.propTypes = {
  handleChangeLang: PropTypes.func.isRequired,
  locales: PropTypes.object.isRequired,
};
