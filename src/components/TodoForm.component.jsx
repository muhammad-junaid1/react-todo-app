import {
  Box,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import { Edit } from "@mui/icons-material";

const TodoForm = ({inputValue, handleInput, handleClick}) => {
    return (
        <>
          <Box sx={{ background: "#de6873", borderRadius: 1 }} py={1} px={2}>
            <Stack
              alignItems="center"
              justifyContent="space-between"
              direction="row"
            >
              <Edit sx={{ color: "white", fontSize: 28 }}/>
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
                  mx: 2,
                  borderRadius: 1,
                }}
              />
              <Button onClick={handleClick} variant="contained" color="secondary" sx={{py: 1.5}}>
                Add
              </Button>
            </Stack>
          </Box>

        </>
    );
}

export default TodoForm;