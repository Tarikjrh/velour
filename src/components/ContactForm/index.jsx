import { useForm, FormProvider } from "react-hook-form";
import { Avatar, Box, Button, Chip, Stack, Typography } from "@mui/material";
import { RHFAutocomplete, RHFTextField } from "../hook-form";
import productsData from "../../productsData/productsData";
import { useMemo } from "react";
import PropTypes from "prop-types";
import useLocales from "../../locales/use-locales";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";

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
              options={productsData}
              getOptionLabel={(option) => option.name}
              renderOption={(props, option, { inputValue }) => {
                const matches = match(option.name, inputValue);
                const parts = parse(option.name, matches);
                return (
                  <Box component="li" {...props} key={option.id}>
                    <Avatar
                      alt={option.name}
                      src={option.coverUrl}
                      variant="rounded"
                      sx={{
                        width: 48,
                        height: 48,
                        flexShrink: 0,
                        mr: 1.5,
                        borderRadius: 1,
                      }}
                    />
                    <div key={inputValue}>
                      {parts.map((part, index) => (
                        <Typography
                          key={index}
                          component="span"
                          color={part.highlight ? "primary" : "textPrimary"}
                          sx={{
                            typography: "body2",
                            fontWeight: part.highlight
                              ? "fontWeightSemiBold"
                              : "fontWeightMedium",
                          }}
                        >
                          {part.text}
                        </Typography>
                      ))}
                    </div>
                  </Box>
                );
              }}
              renderTags={(selected, getTagProps) =>
                selected.map((option, index) => (
                  <Chip
                    {...getTagProps({ index })}
                    key={option.id}
                    label={option.name}
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
