import { GenericTable } from "../../Generics/Table";
import { Container } from "./style";
import { Breadcrumb } from "../../Generics/BreadCrumb";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import { useContext, useEffect, useState } from "react";
import Status from "./Status";
import { useNavigate, useParams } from "react-router-dom";
import { GroupsContext } from "../../../context/groups";
import useFetch from "../../../hooks/useFetch";

let headCells = [
  { id: "name", label: "Ismi" },
  { id: "phone", label: "Telefon raqam" },
];

export const Checkin = () => {
  const { id } = useParams();
  const [spinner, setSpinner] = useState(false);
  const [groups] = useContext(GroupsContext);
  const [state, dispatch] = useState([]);
  const [cell, setCell] = useState(headCells);
  const request = useFetch();

  const navigate = useNavigate();

  const getData = async () => {
    let temp = [];
    setSpinner(true);
    let res = await request(`/tabs/${id}`);
    Object.entries(res[0]).map(([key, value]) => {
      if (parseInt(key))
        temp = [
          ...temp,
          {
            id: key,
            label: key,
            align: "center",
            render: (props) => (
              <Status
                value={props[key]}
                title={key}
                path={id}
                reload={getData}
                id={props.id}
              />
            ),
          },
        ];
    });
    setCell([...headCells, ...temp]);
    dispatch(res);
    setSpinner(false);
  };

  // fetch
  useEffect(() => {
    if (groups.find((val) => val.title.toLowerCase() === id)) getData();
    else navigate("/guruhlar/guruhlar");
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
        rows={state}
        checkbox={false}
        reload={getData}
        spinner={spinner}
      ></GenericTable>
    </Container>
  );
};

export default Checkin;

// "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
