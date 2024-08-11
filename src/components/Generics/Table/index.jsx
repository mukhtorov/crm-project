/* eslint-disable react/prop-types */
import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner";

function EnhancedTableHead(props) {
  const { onSelectAllClick, numSelected, rowCount, headCells, checkbox } =
    props;

  return (
    <TableHead>
      <TableRow>
        {checkbox && (
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                "aria-label": "select all desserts",
              }}
            />
          </TableCell>
        )}
        {headCells.map((headCell) => (
          <TableCell
            sx={{
              color: "#929FAF",
              fontSize: "16px",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
            align={headCell?.align || "left"}
            key={headCell.id}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export function GenericTable(props) {
  const [selected, setSelected] = React.useState([]);
  const {
    headCells,
    rows,
    open,
    checkbox = true,
    url,
    spinner = false,
  } = props;
  const navigate = useNavigate();

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, row) => {
    if (checkbox) {
      const selectedIndex = selected.indexOf(row.id);
      let newSelected = [];

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, row.id);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1)
        );
      }
      setSelected(newSelected);
    } else {
      url &&
        navigate(`${url}/${row?.title.toLowerCase()}`, {
          state: { parent: "Guruhlar", child: "Checkin" },
        });
    }
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          marginTop: "24px",
          height: open ? "64px" : 0,
          overflow: "hidden",
          border: 0,
        }}
      >
        <Table>
          <TableBody>
            <TableRow sx={{ display: "flex", gap: 5 }}>
              {props?.children}
            </TableRow>
          </TableBody>
        </Table>
      </Box>

      <Paper sx={{ width: "100%", mb: 2, position: "relative" }}>
        {spinner && <Spinner />}
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={rows.length}
              headCells={headCells}
              checkbox={checkbox}
            />
            <TableBody>
              {rows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    {checkbox && (
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                    )}

                    {headCells.map((val) => (
                      <TableCell
                        align={val?.align || "left"}
                        key={val.id}
                        sx={{ color: "#253E5F" }}
                      >
                        {val?.render ? val?.render(row) : row[val.id]}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })}
              {rows?.length < 1 && (
                <TableRow>
                  <TableCell align="center" colSpan={6}>
                    No Data
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}

export default GenericTable;
