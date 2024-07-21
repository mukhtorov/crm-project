/* eslint-disable react/prop-types */
import { FormControl, MenuItem, Select } from "@mui/material";
import { useState } from "react";

export const GenericSelect = (props) => {
  const { data, width } = props;
  console.log(props.mt, "props");
  const [defaultVal, setDefaultVal] = useState(
    props?.value || (data && data[0]?.value)
  );

  const handleChange = (event) => {
    setDefaultVal(event.target.value);
  };
  return (
    <FormControl
      fullWidth
      sx={{
        m: 0,
        minWidth: 120,
        width: width || 150,
        height: props?.height || "42px !important",
        // marginTop: props?.mt || 0,
      }}
      size="small"
    >
      <Select
        sx={{
          color: "#929FAF",
          borderColor: "#929FAF",
          fontSize: "14px",
          height: "42px !important",
        }}
        value={defaultVal || "Select"}
        onChange={handleChange}
      >
        {data?.map((item) => {
          return (
            <MenuItem
              sx={{ color: "#929FAF", fontSize: "14px" }}
              key={item.value}
              value={item?.value}
            >
              {item?.title}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default GenericSelect;
