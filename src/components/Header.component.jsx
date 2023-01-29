import {
  Box,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
  Button,
  Typography,
} from "@mui/material";
import Logo from "../assets/logo.png";
import { Delete as DeleteIcon } from "@mui/icons-material";

const Header = ({filterValue, handleChangeFilter, todoItems, setTodoItems}) => {
  const deleteAll = () => {
    setTodoItems([]);
  }
    return (
        <>
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
                {todoItems.length ? <Button onClick={deleteAll} color="error" variant="contained" sx={{textTransform: "none", mr: 4}} title="Delete All">
                  <Stack direction="row" alignItems="center">
                    <DeleteIcon/>
                    <Typography>Delete All</Typography>
                  </Stack>
                </Button> : ""}
                <FormControl autoWidth size="small">
                  <InputLabel id="select-label">Filter</InputLabel>
                  <Select
                    id="select"
                    labelId="select-label"
                    value={filterValue}
                    label="Age"
                    onChange={handleChangeFilter}
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
        </>
    );
}

export default Header;