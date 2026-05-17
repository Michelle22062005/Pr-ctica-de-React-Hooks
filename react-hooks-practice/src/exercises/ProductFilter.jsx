import { useState, useMemo } from "react";

export default function ProductFilter() {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("Todos");
    const [sortOrder, setSortOrder] = useState("");
    const [stockOnly, setStockOnly] = useState(false);


    const products=[
        {id: 1, name: "Teclado", category: "Tecnología", price: 50, stock: 5},
        {id: 2, name: "Mochila", category: "Ropa", price: 25, stock: 10},
        {id: 3, name: "Monitor", category: "Tecnología", price: 200, stock: 3},
        {id: 4, name: "Laptop", category: "Tecnología", price: 800, stock: 2},
        {id: 5, name: "Camiseta", category: "Ropa", price: 20, stock: 0},
    ]

    const categories =[
        "Todos",
        ...new Set(products.map((product) => product.category))
    ];
  
     const filteredProducts = useMemo(() => {
        let result = [...products];

        if (query.trim()) {
            result = result.filter((product) =>
                product.name
                    .toLowerCase()
                    .includes(query.toLowerCase())
            );
        }

        if (category !== "Todos") {
            result = result.filter(
                (product) =>
                    product.category === category
            );
        }

        if (stockOnly) {
            result = result.filter(
                (product) => product.stock > 0
            );
        }

        if (sortOrder === "asc") {
            result.sort((a, b) => a.price - b.price);
        }

        if (sortOrder === "desc") {
            result.sort((a, b) => b.price - a.price);
        }

        return result;
    }, [query, category, sortOrder, stockOnly]);

    return(
<div
            style={{
                border: "1px solid #ccc",
                padding: "20px",
                maxWidth: "700px",
                margin: "20px auto",
                borderRadius: "8px",
            }}
        >
            <h2>Filtro de Productos</h2>

            <input
                type="search"
                placeholder="Buscar por nombre..."
                value={query}
                onChange={(e) =>
                    setQuery(e.target.value)
                }
                style={{
                    padding: "8px",
                    width: "100%",
                    marginBottom: "10px",
                }}
            />

            <select
                value={category}
                onChange={(e) =>
                    setCategory(e.target.value)
                }
            >
                {categories.map((cat) => (
                    <option
                        key={cat}
                        value={cat}
                    >
                        {cat}
                    </option>
                ))}
            </select>

            <select
                value={sortOrder}
                onChange={(e) =>
                    setSortOrder(e.target.value)
                }
                style={{ marginLeft: "10px" }}
            >
                <option value="">
                    Ordenar por precio
                </option>
                <option value="asc">
                    Menor a mayor
                </option>
                <option value="desc">
                    Mayor a menor
                </option>
            </select>

            <label style={{ marginLeft: "10px" }}>
                <input
                    type="checkbox"
                    checked={stockOnly}
                    onChange={(e) =>
                        setStockOnly(e.target.checked)
                    }
                />
                Solo con stock
            </label>

            <p>
                Productos encontrados:{" "}
                {filteredProducts.length}
            </p>

            {filteredProducts.length === 0 ? (
                <p>
                    No hay productos disponibles
                    con los filtros
                    seleccionados.
                </p>
            ) : (
                <ul>
                    {filteredProducts.map(
                        (product) => (
                            <li key={product.id}>
                                {product.name} |
                                {product.category} |
                                ${product.price} |
                                Stock:{" "}
                                {product.stock}
                            </li>
                        )
                    )}
                </ul>
            )}
        </div>
    );
}