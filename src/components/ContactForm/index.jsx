import { useForm, FormProvider } from "react-hook-form";
import { Button, Chip, Stack } from "@mui/material";
import { RHFAutocomplete, RHFTextField } from "../hook-form";
import productsData from "../../productsData";
import { useMemo } from "react";
import PropTypes from "prop-types";
import useLocales from "../../locales/use-locales";

const ContactForm = ({ onSubmit, sx }) => {
  const { t } = useLocales();

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
              <RHFTextField name="name" label={t("name")} />
              <RHFTextField name="company" label={t("company")} />
            </Stack>

            <Stack direction={"row"} spacing={2}>
              <RHFTextField name="email" label={t("email")} />

              <RHFTextField
                name="date"
                label={t("date")}
                type={"date"}
                slotProps={{ inputLabel: { shrink: true } }}
              />
            </Stack>

            <RHFAutocomplete
              disableCloseOnSelect
              name="products"
              label={t("products")}
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

            <RHFTextField
              name="message"
              label={t("message")}
              rows={4}
              multiline
            />

            <Button variant="contained" type="submit">
              {t("submit")}
            </Button>
          </Stack>
        </form>
      </FormProvider>
    </>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  sx: PropTypes.object,
};
