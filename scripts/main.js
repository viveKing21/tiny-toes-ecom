export const LSK = {
    USERS: "users",
    ORDERS: "orders",
    CARTS: "carts",
    AUTH: "auth"
}

export const API = "https://64214f5434d6cd4ebd6fd51c.mockapi.io/products"

export const currency = (digit) => {
    return Number(digit).toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR',
    });
}