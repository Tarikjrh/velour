import { Stack } from "@mui/material";
import SectionTitle from "./components/SectionTitle";
import ContactForm from "./components/ContactForm";
import OtherContact from "./components/OtherContact";
import WorkingHours from "./components/WorkingHours";

export default function ContactUs() {
  return (
    <Stack spacing={5}>
      <SectionTitle />
      <ContactForm />
      <OtherContact />
      <WorkingHours />
    </Stack>
  );
}
