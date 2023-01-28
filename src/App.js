import {useState} from "react";
import {
  Paper,
  Box,
  Container,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Logo from "./assets/logo.png";

function App() {
  const [filterValue, setFilterValue] = useState(1);

  const handleChange = (event) => {
    setFilterValue(event.target.value);
  }
  return (
    <>
      <Container maxWidth="md">
        <Paper variant="outlined" sx={{ mt: 5 }}>
          <Box p={2}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <img src={Logo} alt="Logo" width={60} />
              </Box>
              <Box>
                <FormControl autoWidth size="small">
                  <InputLabel id="select-label">Filter</InputLabel>
                  <Select
                    id="select"
                    labelId="select-label"
                    value={filterValue}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>All</MenuItem>
                    <MenuItem value={2}>Completed</MenuItem>
                    <MenuItem value={3}>Uncompleted</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Stack>
          </Box>
        </Paper>
      </Container>
    </>
  );
}

export default App;
