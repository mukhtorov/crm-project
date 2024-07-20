/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Delete, Edit, Status, TimelineWrapper, Title } from "./tableStyle";

const styleCell = {
  display: "flex",
  flexDirection: "column",
  flex: 1,
  border: 0,
  gap: "4px",
};

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  console.log(row, "rooooow");
  return (
    <React.Fragment>
      <TableRow
        sx={{
          ":hover": { background: "#F8FAFC", cursor: "pointer" },
          "& > *": { borderBottom: "unset" },
        }}
        onClick={() => setOpen(!open)}
      >
        <TableCell
          component="th"
          scope="row"
          sx={{
            color: "#253E5F",
            fontWeight: 600,
            fontSize: "18px",
            border: 0,
          }}
        >
          {row.title}
        </TableCell>
        <TableCell sx={{ border: 0 }} align="right">
          <Edit />
          <Delete />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  {row?.groups?.map((rw) => {
                    console.log(rw, "rooww");
                    return (
                      <TableRow
                        key={rw.date}
                        sx={{
                          display: "flex",
                          border: "1px solid #d8d8d8",
                          borderRadius: "8px",
                          margin: "8px",
                          padding: "10px",
                          width: "100%",
                        }}
                      >
                        <TableCell sx={styleCell}>
                          <Title>{rw.level}</Title>
                          <Status active={rw.started}>
                            {rw.started ? "Active" : "Soon"}
                          </Status>
                        </TableCell>
                        <TableCell sx={{ ...styleCell, flex: 2 }}>
                          <Title>{rw.filial}</Title>
                          <Title color={"#1890FF"}>{rw.location}</Title>
                        </TableCell>
                        <TableCell sx={{ ...styleCell, flex: 2, gap: "8px" }}>
                          <TimelineWrapper>
                            {rw.timeline.replace(/ /g, " - ")}
                          </TimelineWrapper>
                          <TimelineWrapper time>{rw.time}</TimelineWrapper>
                        </TableCell>
                        <TableCell sx={styleCell}>
                          <Title center>O'qituvchilar</Title>
                          <Title color={"#929FAF"} center>
                            +{rw.students.length}
                          </Title>
                        </TableCell>
                        <TableCell
                          sx={{
                            border: 0,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Edit />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable(props) {
  const { rows } = props;
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "#929FAF", fontSize: "16px" }}>
              Kurslar Turi
            </TableCell>
            <TableCell align="right" />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export { CollapsibleTable };
