/* eslint-disable react/no-unescaped-entities */
import { GenericTable } from "../../Generics/Table";
import { Container } from "./style";
import { Breadcrumb } from "../../Generics/BreadCrumb";
import { students } from "../../../mock/students";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import { memo, useEffect, useState } from "react";
import useDate from "../../../hooks/date";

const headCells = [
  { id: "name", label: "Ismi" },
  { id: "phone", label: "Telefon raqam" },
];

export const Checkin = () => {
  const [rows, setRows] = useState(students);
  const [cell, setCell] = useState(headCells);
  const date = useDate();

  const add = () => {
    let today = new Date();
    let temp = [];
    for (let i = 1; i <= 10; i++) {
      temp.push({
        id: today.getMilliseconds(),
        label: `${today.getDate()}-${today.getMonth()}`,
      });
      today = date.addDay(today);
    }

    let tempRow = rows.map((val) => {
      return { ...val, checkin: temp };
    });

    setCell(cell.concat(temp));
    setRows(tempRow);
  };

  useEffect(() => {
    add();
  }, []);

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
        headCells={cell}
        rows={rows}
        checkbox={false}
      ></GenericTable>
    </Container>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(Checkin);
