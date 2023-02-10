import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

import { useState } from "react";

const Notification = ({ message }: { message: string }) => {
  const [open, setOpen] = useState(true);
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={() => {
        setOpen(false);
      }}
    >
      <Alert severity="success" sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
