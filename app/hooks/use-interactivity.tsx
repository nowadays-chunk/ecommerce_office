"use client";

import { useState, useEffect, createContext, useContext, useCallback } from "react";

// --- Types ---

export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    image: string;
    description: string;
    stock: number;
}

export interface CartItem extends Product {
    quantity: number;
}

export interface Order {
    id: string;
    date: string;
    items: CartItem[];
    total: number;
    status: "pending" | "shipped" | "delivered" | "cancelled";
    customer: string;
}

export interface ContactMessage {
    id: string;
    name: string;
    email: string;
    message: string;
    date: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    role: "admin" | "customer";
}

interface InteractivityContextType {
    // Cart
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    clearCart: () => void;
    cartTotal: number;

    // Mock DB (Admin CRUD)
    products: Product[];
    addProduct: (product: Omit<Product, "id">) => void;
    updateProduct: (id: string, updates: Partial<Product>) => void;
    deleteProduct: (id: string) => void;

    orders: Order[];
    placeOrder: (customerName: string) => void;
    updateOrderStatus: (id: string, status: Order["status"]) => void;

    contacts: ContactMessage[];
    addContact: (msg: Omit<ContactMessage, "id" | "date">) => void;

    // Auth
    user: User | null;
    login: (email: string) => void;
    logout: () => void;

    // Preferences
    preferences: { language: string; currency: string };
    setPreference: (key: "language" | "currency", value: string) => void;
}

// --- Default Data ---

const DEFAULT_PRODUCTS: Product[] = [
    { id: "1", name: "Classic Audio Tech", price: 299, category: "Audio", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e", description: "Studio quality headphones.", stock: 15 },
    { id: "2", name: "Vibe Record Player", price: 499, category: "Players", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617", description: "Vintage turntable for modern homes.", stock: 8 },
    { id: "3", name: "Neon Glow Keyboard", price: 129, category: "Peripherals", image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae", description: "RGB backlit mechanical keyboard.", stock: 20 },
];

const InteractivityContext = createContext<InteractivityContextType | undefined>(undefined);

// --- Provider ---

export function InteractivityProvider({ children }: { children: React.ReactNode }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [cart, setCart] = useState<CartItem[]>([]);
    const [products, setProducts] = useState<Product[]>(DEFAULT_PRODUCTS);
    const [orders, setOrders] = useState<Order[]>([]);
    const [contacts, setContacts] = useState<ContactMessage[]>([]);
    const [user, setUser] = useState<User | null>(null);
    const [preferences, setPreferences] = useState({ language: "en", currency: "USD" });

    // Persistence
    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        const savedProducts = localStorage.getItem("mock_products");
        const savedOrders = localStorage.getItem("mock_orders");
        const savedContacts = localStorage.getItem("mock_contacts");
        const savedUser = localStorage.getItem("user");
        const savedPrefs = localStorage.getItem("preferences");

        if (savedCart) setCart(JSON.parse(savedCart));
        if (savedProducts) setProducts(JSON.parse(savedProducts));
        if (savedOrders) setOrders(JSON.parse(savedOrders));
        if (savedContacts) setContacts(JSON.parse(savedContacts));
        if (savedUser) setUser(JSON.parse(savedUser));
        if (savedPrefs) setPreferences(JSON.parse(savedPrefs));

        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (!isLoaded) return;
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("mock_products", JSON.stringify(products));
        localStorage.setItem("mock_orders", JSON.stringify(orders));
        localStorage.setItem("mock_contacts", JSON.stringify(contacts));
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("preferences", JSON.stringify(preferences));
    }, [cart, products, orders, contacts, user, preferences, isLoaded]);

    // Cart Actions
    const addToCart = useCallback((product: Product) => {
        setCart(curr => {
            const existing = curr.find(i => i.id === product.id);
            if (existing) {
                return curr.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
            }
            return [...curr, { ...product, quantity: 1 }];
        });
    }, []);

    const removeFromCart = useCallback((productId: string) => {
        setCart(curr => curr.filter(i => i.id !== productId));
    }, []);

    const clearCart = useCallback(() => setCart([]), []);

    const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Product CRUD
    const addProduct = useCallback((p: Omit<Product, "id">) => {
        const newProduct = { ...p, id: Math.random().toString(36).substr(2, 9) };
        setProducts(curr => [...curr, newProduct]);
    }, []);

    const updateProduct = useCallback((id: string, updates: Partial<Product>) => {
        setProducts(curr => curr.map(p => p.id === id ? { ...p, ...updates } : p));
    }, []);

    const deleteProduct = useCallback((id: string) => {
        setProducts(curr => curr.filter(p => p.id !== id));
    }, []);

    // Order Actions
    const placeOrder = useCallback((customerName: string) => {
        if (cart.length === 0) return;
        const newOrder: Order = {
            id: "ORD-" + Math.random().toString(36).substr(2, 5).toUpperCase(),
            date: new Date().toISOString(),
            items: [...cart],
            total: cartTotal,
            status: "pending",
            customer: customerName
        };
        setOrders(curr => [newOrder, ...curr]);
        clearCart();
    }, [cart, cartTotal, clearCart]);

    const updateOrderStatus = useCallback((id: string, status: Order["status"]) => {
        setOrders(curr => curr.map(o => o.id === id ? { ...o, status } : o));
    }, []);

    // Contact Actions
    const addContact = useCallback((msg: Omit<ContactMessage, "id" | "date">) => {
        const newMsg = { ...msg, id: Date.now().toString(), date: new Date().toISOString() };
        setContacts(curr => [newMsg, ...curr]);
    }, []);

    // Auth Actions
    const login = useCallback((email: string) => {
        setUser({ id: "U1", name: email.split("@")[0], email, role: "admin" });
    }, []);

    const logout = useCallback(() => setUser(null), []);

    // Preference Actions
    const setPreference = useCallback((key: "language" | "currency", value: string) => {
        setPreferences(prev => ({ ...prev, [key]: value }));
    }, []);

    return (
        <InteractivityContext.Provider value= {{
        cart, addToCart, removeFromCart, clearCart, cartTotal,
            products, addProduct, updateProduct, deleteProduct,
            orders, placeOrder, updateOrderStatus,
            contacts, addContact,
            user, login, logout,
            preferences, setPreference
    }
}>
    { children }
    </InteractivityContext.Provider>
    );
}

// --- Hook ---

export function useInteractivity() {
    const context = useContext(InteractivityContext);
    if (context === undefined) {
        throw new Error("useInteractivity must be used within an InteractivityProvider");
    }
    return context;
}
