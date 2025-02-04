import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import useLocales from "../../../locales/use-locales";

function createData(day, hours) {
  return { day, hours };
}

export default function WorkingHours() {
  const { t } = useLocales();

  const rows = [
    createData(t("monday"), "9 am - 5 pm"),
    createData(t("tuesday"), "9 am - 5 pm"),
    createData(t("wednesday"), "9 am - 5 pm"),
    createData(t("thursday"), "9 am - 5 pm"),
    createData(t("friday"), "9 am - 5 pm"),
    createData(t("saturday"), "9 am - 1 pm"),
    createData(t("sunday"), t("closed")),
    createData(t("holidays"), t("closed")),
  ];

  return (
    <Container>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        {t("contact.working_hours")}
      </Typography>

      <TableContainer component={Paper} sx={{ my: 5 }}>
        <Table sx={{}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> {t("day")} </TableCell>
              <TableCell align="right"> {t("contact.working_hours")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.day}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.day}
                </TableCell>
                <TableCell align="right" style={{ direction: "ltr " }}>
                  {row.hours}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
