import { useForm, FormProvider } from "react-hook-form";
import { Avatar, Button, Chip, Stack } from "@mui/material";
import { RHFAutocomplete, RHFTextField } from "../hook-form";
import productsData from "../../productsData";
import { useMemo } from "react";

const ContactForm = ({ onSubmit, sx }) => {
  const defaultValues = useMemo(
    () => ({
      name: "",
      company: "",
      email: "",
      products: [],
      message: "",
    }),
    []
  );
  const methods = useForm({
    defaultValues,
  });
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Stack spacing={2} sx={{ px: { xs: 0, md: 20 }, mt: 5, ...sx }}>
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

            <RHFAutocomplete
              disableCloseOnSelect
              name="products"
              label="Products"
              placeholder="Products"
              multiple
              options={productsData.map((option) => option.name)}
              getOptionLabel={(option) => option}
              renderOption={(props, option) => (
                <li {...props} key={option}>
                  {option}
                </li>
              )}
              renderTags={(selected, getTagProps) =>
                selected.map((option, index) => (
                  <Chip
                    {...getTagProps({ index })}
                    key={option}
                    label={option}
                    size="small"
                    color="success"
                    variant="soft"
                  />
                ))
              }
            />

            <RHFTextField name="message" label="Message" rows={4} multiline />

            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Stack>
        </form>
      </FormProvider>
    </>
  );
};

export default ContactForm;
