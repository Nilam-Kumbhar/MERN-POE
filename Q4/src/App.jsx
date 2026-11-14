
import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Switch from "@mui/material/Switch";
import Alert from "@mui/material/Alert";

function App() {
  return (
    <div>
      <h2>Five MUI Components</h2>

      <h3>1. Button</h3>
      <Button variant="contained">Click Me</Button>

      <h3>2. TextField</h3>
      <TextField label="Enter Name" variant="outlined" />

      <h3>3. Checkbox</h3>
      <Checkbox defaultChecked />

      <h3>4. Switch</h3>
      <Switch defaultChecked />

      <h3>5. Alert</h3>
      <Alert severity="success">
        Operation Successful!
      </Alert>
    </div>
  );
}

export default App;
