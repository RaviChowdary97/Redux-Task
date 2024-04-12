import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button sx={{ color: "#fff" }} onClick={() => navigate("/cart")}>
              Cart - {cartItems.length}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
