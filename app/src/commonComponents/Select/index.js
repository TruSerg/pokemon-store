import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";

const BasicSelect = ({ value, label, name, handleChange }) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">GENDER</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={handleChange}
        >
          <MenuItem value="male">Mail</MenuItem>
          <MenuItem value="female">Femail</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
