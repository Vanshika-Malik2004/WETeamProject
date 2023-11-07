import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import NavbarForDashboard from "../components/NavbarForDashboard";

const EventBookingsTable = ({ eventBookings }) => {
  return (
    <div className="background-container min-h-screen ">
      <NavbarForDashboard />
      <div className="px-16 py-20">
        <div className="flex flex-col justify-between items-center mb-20">
          <h1 className="font-Lexend font-semibold tracking-tighter text-solid-500 text-5xl">
            All Bookings ({eventBookings?.length})
          </h1>


        </div>

        <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow className="!bg-purple-300">
            <TableCell className="!font-bold !text-lg !font-Lexend">
              Serial Num
            </TableCell>
            <TableCell
              className="!font-bold !text-lg !font-Lexend"
              align="right"
            >
              Name
            </TableCell>
            <TableCell
              className="!font-bold !text-lg !font-Lexend"
              align="right"
            >
              Email
            </TableCell>
            <TableCell
              className="!font-bold !text-lg !font-Lexend"
              align="right"
            >
              Date
            </TableCell>
            <TableCell
              className="!font-bold !text-lg !font-Lexend"
              align="right"
            >
              Timeslot
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {eventBookings.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                className="!font-normal !text-base !font-Lexend"
                component="th"
                scope="row"
              >
                {index + 1}
              </TableCell>
              <TableCell
                className="!font-normal !text-base !font-Lexend"
                align="right"
              >
                {row.name}
              </TableCell>
              <TableCell
                className="!font-normal !text-base !font-Lexend"
                align="right"
              >
                {row.email}
              </TableCell>
              <TableCell
                className="!font-normal !text-base !font-Lexend"
                align="right"
              >
                {row.date}
              </TableCell>
              <TableCell
                className="!font-normal !text-base !font-Lexend"
                align="right"
              >
                {row.ts}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    </div>
    
  );
};

export default EventBookingsTable;
