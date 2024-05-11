import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/baseUrl";
import { useAuth } from "../context/Auth/AuthContext";

const CartPage = () => {
  const { token } = useAuth();
  const [cart, setCart] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    if (!token) {
      return;
    }

    const fetchCart = async () => {
      const response = await fetch(`${BASE_URL}/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        setError("Failed to fetch user cart. Please try again");
      }

      const data = await response.json();
      setCart(data);
    };

    fetchCart();
  }, [token]);

  console.log({ cart });
  return (
    <Container sx={{ mt: 2 }}>
      <Typography variant="h4">My Cart</Typography>
    </Container>
  );
};

export default CartPage;
