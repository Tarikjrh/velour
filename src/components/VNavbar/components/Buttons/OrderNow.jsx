import { Button } from "@mui/material";
import Iconify from "../../../iconify";

export default function OrderNow(props) {
  return (
    <Button
      variant="contained"
      {...props}
      startIcon={<Iconify icon="heroicons:shopping-bag" />}
    >
      Order Now
    </Button>
  );
}
