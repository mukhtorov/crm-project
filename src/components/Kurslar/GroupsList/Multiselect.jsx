import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <Select
        id="demo-multiple-chip"
        multiple
        value={personName}
        onChange={handleChange}
        input={<OutlinedInput id="select-multiple-chip" />}
        renderValue={(selected) => (
          <Box
            sx={{
              display: "flex",
              overflowX: "scroll",
              gap: 0.5,
              maxWidth: "400px",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            {selected.map((value) => (
              <Chip
                key={value}
                label={value}
                sx={{
                  background: "#1890FF",
                  height: "fit-content",
                  color: "white",
                  "& .MuiChip-label": {
                    padding: "0 12px",
                  },
                }}
              />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
        sx={{ width: "100%", maxHeight: "40px" }}
        size="small"
      >
        {names.map((name) => (
          <MenuItem
            key={name}
            value={name}
            style={getStyles(name, personName, theme)}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}

export { MultipleSelect };
