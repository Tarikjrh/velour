import { Stack } from "@mui/material";
import SectionTitle from "./components/SectionTitle";
import OtherContact from "./components/OtherContact";
import WorkingHours from "./components/WorkingHours";
import ContactFormSection from "./components/ContactFormSection";

export default function ContactUs() {
  return (
    <Stack spacing={5}>
      <SectionTitle />
      <ContactFormSection />
      <OtherContact />
      <WorkingHours />
    </Stack>
  );
}
