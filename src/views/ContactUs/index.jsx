import { Stack } from "@mui/material";
import SectionTitle from "./sections/SectionTitle";
import OtherContact from "./sections/OtherContact";
import WorkingHours from "./sections/WorkingHours";
import ContactFormSection from "./sections/ContactFormSection";

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
