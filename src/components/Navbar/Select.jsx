import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

export const GenericSelect = () => {
  const [lang, setLang] = useState("uzbek");

  const handleChange = (event) => {
    setLang(event.target.value);
  };
  return (
    <FormControl
      fullWidth
      sx={{ m: 1, minWidth: 120, width: 150 }}
      size="small"
    >
      <InputLabel id="demo-simple-select-label">Language</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={lang}
        label="Language"
        onChange={handleChange}
      >
        <MenuItem value={"uzbek"}>Uzbek</MenuItem>
        <MenuItem value={"russian"}>Russian</MenuItem>
        <MenuItem value={"english"}>English</MenuItem>
      </Select>
    </FormControl>
  );
};

export default GenericSelect;
