import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";

const BasicSelect = ({ value, label, name, onChange }) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">GENDER</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name={name}
          value={value}
          label={label}
          onChange={onChange}
        >
          <MenuItem value="male">Mail</MenuItem>
          <MenuItem value="female">Femail</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default BasicSelect;
