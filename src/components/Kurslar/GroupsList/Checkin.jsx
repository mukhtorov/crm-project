/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { GenericTable } from "../../Generics/Table";
import { Container } from "./style";
import { Breadcrumb } from "../../Generics/BreadCrumb";
import { students } from "../../../mock/students";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import { useState } from "react";
import Status from "./Status";

export const Checkin = () => {
  const [rows] = useState(students);

  const headCells = [
    { id: "name", label: "Ismi" },
    { id: "phone", label: "Telefon raqam" },
    {
      id: "13-07",
      label: "13-07",
      render: (props) => <Status value={props["13-07"]} />,
      align: "center",
    },
    {
      id: "14-07",
      label: "14-07",
      render: (props) => <Status value={props["14-07"]} />,
      align: "center",
    },
    {
      id: "15-07",
      label: "15-07",
      render: (props) => <Status value={props["15-07"]} />,
      align: "center",
    },
    {
      id: "16-07",
      label: "16-07",
      render: (props) => <Status value={props["16-07"]} />,
      align: "center",
    },
    {
      id: "17-07",
      label: "17-07",
      render: (props) => <Status value={props["17-07"]} />,
      align: "center",
    },
    {
      id: "18-07",
      label: "18-07",
      render: (props) => <Status value={props["18-07"]} />,
      align: "center",
    },
    {
      id: "19-07",
      label: "19-07",
      render: (props) => <Status value={props["19-07"]} />,
      align: "center",
    },
    {
      id: "20-07",
      label: "20-07",
      render: (props) => <Status value={props["20-07"]} />,
      align: "center",
    },
  ];
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
