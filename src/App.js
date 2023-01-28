import * as React from "react";
import { Paper, Box, Container, Stack } from "@mui/material";

function App() {
  return (
    <>
      <Container maxWidth="md">
        <Paper variant="outlined" sx={{ mt: 5 }}>
          <Box p={2}>
            <Stack direction="row" justifyContent="space-between">
              <Box>LOGO</Box>
              <Box>FILTER</Box>
            </Stack>
          </Box>
        </Paper>
      </Container>
    </>
  );
}

export default App;
