import { useState } from "react";
import {
  Paper,
  Box,
  Container,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import Logo from "./assets/logo.png";

function App() {
  const [filterValue, setFilterValue] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  const handleChange = (event) => {
    setFilterValue(event.target.value);
  };

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    setTodoItems((todoItems) => {
      return [...todoItems, inputValue];
    });
    setInputValue("");
  };

  return (
    <>
      <Container maxWidth="md">
        <Paper variant="outlined" sx={{ mt: 5, p: 2 }}>
          {/* Header section */}
          <Box>
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
            <Divider sx={{ mt: 3 }} />
          </Box>

          {/* Todo Items List */}
          <Box py={4}>
            {todoItems.length ? (
              todoItems.map((todoItem) => {
                return <p>{todoItem}</p>;
              })
            ) : (
              <Typography sx={{ color: "red" }} align="center">
                Nothing yet
              </Typography>
            )}
          </Box>

          <Box sx={{ background: "#de6873", borderRadius: 1 }} py={1} px={2}>
            <Stack
              alignItems="center"
              justifyContent="space-between"
              direction="row"
            >
              <Edit sx={{ color: "white" }} />
              <TextField
                onInput={handleInput}
                variant="outlined"
                InputProps={{ disableUnderline: true }}
                fullWidth
                value={inputValue}
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                      borderColor: "red",
                    },
                  },
                  background: "white",
                  ml: 3,
                  mr: 2,
                  borderRadius: 1,
                }}
              />
              <Button onClick={handleClick} variant="contained" color="secondary" sx={{py: 1.5}}>
                Add
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Container>
    </>
  );
}

export default App;
