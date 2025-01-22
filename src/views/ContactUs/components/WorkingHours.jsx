import {
  Box,
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
import React from "react";

function createData(day, hours) {
  return { day, hours };
}

const rows = [
  createData("Monday", "9 am - 5 pm"),
  createData("Tuesday", "9 am - 5 pm"),
  createData("Wednesday", "9 am - 5 pm"),
  createData("Thursday", "9 am - 5 pm"),
  createData("Friday", "9 am - 5 pm"),
  createData("Saturday", "9 am - 1 pm"),
  createData("Sunday", "Closed"),
  createData("Holidays", "Closed"),
];

export default function WorkingHours() {
  return (
    <Container>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Working Hours
      </Typography>

      <TableContainer component={Paper} sx={{ my: 5 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Day </TableCell>
              <TableCell align="right">Working Hours</TableCell>
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
                <TableCell align="right">{row.hours}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
