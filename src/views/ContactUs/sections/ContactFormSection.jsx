import { Container, Typography } from "@mui/material";
import ContactForm from "../../../components/ContactForm";
import useLocales from "../../../locales/use-locales";

const ContactFormSection = () => {
  const { t } = useLocales();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container sx={{ textAlign: "center", my: 10 }}>
      <Typography variant="section_title">
        {t("contact.send_us_a_message")}
      </Typography>
      <Typography sx={{ my: 2 }}>{t("contact.description")}</Typography>
      <ContactForm onSubmit={onSubmit} />
    </Container>
  );
};

export default ContactFormSection;
