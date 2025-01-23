import { useForm, FormProvider } from "react-hook-form";
import { RHFTextField } from "../../../components/hook-form";
import { Button, Container, Stack, Typography } from "@mui/material";

const MyForm = () => {
  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container sx={{ textAlign: "center", my: 10 }}>
      <Typography variant="section_title">Send Us a Message</Typography>
      <Typography sx={{ my: 2 }}>
        Let us know how we can help or when you need your uniforms by.
      </Typography>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Stack spacing={2} sx={{ px: { xs: 0, md: 20 }, mt: 5 }}>
            <Stack direction={"row"} spacing={2}>
              <RHFTextField name="name" label="Name" />
              <RHFTextField name="company" label="Company Name (Optional)" />
            </Stack>

            <Stack direction={"row"} spacing={2}>
              <RHFTextField name="email" label="Email" />
              <RHFTextField
                name="date"
                label="Date"
                type={"date"}
                slotProps={{ inputLabel: { shrink: true } }}
              />
            </Stack>

            <RHFTextField name="message" label="Message" rows={4} multiline />

            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Stack>
        </form>
      </FormProvider>
    </Container>
  );
};

export default MyForm;
