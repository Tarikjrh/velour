import { useForm, FormProvider } from "react-hook-form";
import { RHFTextField } from "../../../components/hook-form";
import { Button, Container, Stack, Typography } from "@mui/material";
import ContactForm from "../../../components/ContactForm";

const ContactFormSection = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container sx={{ textAlign: "center", my: 10 }}>
      <Typography variant="section_title">Send Us a Message</Typography>
      <Typography sx={{ my: 2 }}>
        Let us know how we can help or when you need your uniforms by.
      </Typography>
      <ContactForm onSubmit={onSubmit} />
    </Container>
  );
};

export default ContactFormSection;
