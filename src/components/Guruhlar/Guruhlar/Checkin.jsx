/* eslint-disable react/no-unescaped-entities */
import { GenericTable } from "../../Generics/Table";
import { Container } from "./style";
import { Breadcrumb } from "../../Generics/BreadCrumb";
import { students } from "../../../mock/students";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import { useState } from "react";

const headCells = [
  { id: "name", label: "Ismi" },
  { id: "phone", label: "Telefon raqam" },
];

export const Checkin = () => {
  const [rows] = useState(students);

  return (
    <Container>
      <Breadcrumb>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            defaultValue={moment()}
            views={["year", "month", "day"]}
            slotProps={{ textField: { size: "small" } }}
            sx={{ width: 150 }}
          />
        </LocalizationProvider>
      </Breadcrumb>
      <GenericTable
        headCells={headCells}
        rows={rows}
        checkbox={false}
      ></GenericTable>
    </Container>
  );
};

export default Checkin;
