import { useState, useMemo } from "react";

export default function ShoppingCart() {
    const [cartItems, setCartItems] = useState([]);
   
    const products=[
        {id: 1, name: "Teclado",price: 50, quantity: 1},
        {id: 2, name: "Mouse", price: 30, quantity: 1},
        {id: 3, name: "Monitor", price: 200, quantity: 1},
]
    const totalPrice = useMemo(() => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    }, [cartItems]);

    const totalProducts = useMemo(() =>{
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === product.id);
            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };
    const increaseQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    }
    const decreaseQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) => item.id === id ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item))
    }
    const removeItem = (id) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.id !== id)
        );
    };

    return(
        <div
            style={{
                margin: "20px auto",
                maxWidth: "700px",
                border: "1px solid #ccc",
                padding: "15px",
                borderRadius: "5px",
            }}
        >
            <h2>Carrito de compras</h2>

            <h3>Productos disponibles</h3>

            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button
                            onClick={() => addToCart(product)}
                            style={{ marginLeft: "10px" }}
                        >
                            Agregar
                        </button>
                    </li>
                ))}
            </ul>

            <hr />

            <h3>Carrito</h3>

            {cartItems.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            <strong>{item.name}</strong> -
                            ${item.price} x {item.quantity}
                            = $
                            {(item.price * item.quantity).toFixed(
                                2
                            )}
                            <button onClick={() => increaseQuantity(item.id)} style={{ marginLeft: "20px" }}>
                                +
                            </button>

                            <button onClick={() => decreaseQuantity(item.id)} style={{ marginLeft: "10px" }}>
                                -
                            </button>

                            <button onClick={() => removeItem(item.id) } style={{ marginLeft: "10px" }}>
                                Eliminar
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            <hr />
            <p>
                <strong>
                    Cantidad total de productos:
                </strong>{" "}
                {totalProducts}
            </p>

            <p>
                <strong>Total general:</strong> $
                {totalPrice.toFixed(2)}
            </p>
        </div>
    );
}
    