import React from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

const Cart = () => {
    const { cartItems } = useCart();

    const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0);

    if (cartItems.length === 0) {
        return <h2 className="text-center mt-5">Your cart is empty</h2>;
    }

    return (
        <div className="container py-5">
            <h2 className="mb-4">Your Cart</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Service</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item, idx) => (
                        <tr key={idx}>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
                    <tr>
                        <td><strong>Total</strong></td>
                        <td><strong>${total.toFixed(2)}</strong></td>
                    </tr>
                </tbody>
            </table>
            <Container className="d-flex gap-3 my-4">
                <Link to="/">
                    <Button variant="primary">Buy More</Button>
                </Link>
                <Link to="/">
                    <Button variant="outline-primary">Pay By UPI</Button>
                </Link>
            </Container>


        </div>
    );
};

export default Cart;
