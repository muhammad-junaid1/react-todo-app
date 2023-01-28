import {
  Box,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
} from "@mui/material";
import Logo from "../assets/logo.png";

const Header = ({filterValue, handleChangeFilter}) => {
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