// ============================================================
// PerfumeHub API Layer
// Handles all data operations for products, orders, cart, and user profile
// Currently uses localStorage — replace BASE_URL with your real backend later
// ============================================================

const BASE_URL = "https://api.perfumehub.com"; // Replace with your real API URL when ready

// ============================================================
// PRODUCTS
// ============================================================

export interface Product {
  id: string;
  name: string;
  price: number;
  scent: string;
  size: string;
  image?: string;
  category: "women" | "men" | "children";
  description?: string;
}

const dummyProducts: Product[] = [
  { id: "p1", name: "Bergamot Fresh", price: 1450, scent: "Fresh", size: "100ml", category: "men", description: "Crisp calabrian bergamot layered with bright citrus blossoms." },
  { id: "p2", name: "Rose Elixir", price: 1800, scent: "Floral", size: "75ml", category: "women", description: "A delicate bouquet of Turkish rose and soft white musks." },
  { id: "p3", name: "Oud Noir", price: 2200, scent: "Woody", size: "100ml", category: "men", description: "Rich Cambodian oud blended with dark vanilla and oriental spices." },
  { id: "p4", name: "Vanilla Dusk", price: 1600, scent: "Sweet", size: "50ml", category: "women", description: "Warm Madagascar vanilla with a soft amber base." },
  { id: "p5", name: "Velvet Oud", price: 1850, scent: "Woody & Oriental", size: "100ml", category: "men", description: "A deep smoky accord of cedarwood, dark amber, and vetiver." },
  { id: "p6", name: "Golden Amber", price: 1650, scent: "Warm & Sweet", size: "100ml", category: "women", description: "Luxurious amber resin with hints of sandalwood and musk." },
  { id: "p7", name: "Citrus Bloom", price: 1350, scent: "Citrus", size: "75ml", category: "women", description: "A burst of Sicilian lemon and orange blossom." },
  { id: "p8", name: "Little Garden", price: 950, scent: "Fresh & Clean", size: "50ml", category: "children", description: "Gentle, alcohol-free blend of green apple and soft cotton." },
  { id: "p9", name: "Santal Blend", price: 1650, scent: "Woody", size: "100ml", category: "men", description: "Smooth Australian sandalwood with papyrus and leather notes." },
  { id: "p10", name: "Royal Saffron", price: 2400, scent: "Spicy", size: "100ml", category: "men", description: "Persian saffron layered with rose and warm musks." },
  { id: "p11", name: "Noir Essence", price: 2100, scent: "Woody Amber", size: "100ml", category: "men", description: "A bold woody amber blend for the confident individual." },
  { id: "p12", name: "Bubble Cloud", price: 850, scent: "Sweet & Clean", size: "50ml", category: "children", description: "Light, playful blend of bubblegum and soft powder." },
];

export const getProducts = async (): Promise<Product[]> => {
  try {
    
    return dummyProducts;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return dummyProducts;
  }
};

export const getProductById = async (id: string): Promise<Product | undefined> => {
  try {
    
    return dummyProducts.find((p) => p.id === id);
  } catch (error) {
    console.error("Failed to fetch product:", error);
    return dummyProducts.find((p) => p.id === id);
  }
};

export const getProductsByCategory = async (category: string): Promise<Product[]> => {
  const all = await getProducts();
  return all.filter((p) => p.category === category);
};

// ============================================================
// ORDERS
// ============================================================

export interface Order {
  id: string;
  date: string;
  customer: string;
  phone: string;
  address: string;
  city: string;
  method: string;
  amount: number;
  status: string;

  items: CartItem[];
}

export const getOrders = (): Order[] => {
  try {
    const saved = localStorage.getItem("perfume_orders");
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("Failed to fetch orders:", error);
    return [];
  }
};

export const saveOrder = (order: Order): void => {
  try {
    const existing = getOrders();
    existing.unshift(order);
    localStorage.setItem("perfume_orders", JSON.stringify(existing));
  } catch (error) {
    console.error("Failed to save order:", error);
  }
};

export const clearOrders = (): void => {
  localStorage.removeItem("perfume_orders");
};

// ============================================================
// CART
// ============================================================

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  size: string;
  scent: string;
  image?: string;
}

export const getCart = (): CartItem[] => {
  try {
    const saved = localStorage.getItem("perfume_cart");
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("Failed to fetch cart:", error);
    return [];
  }
};

export const saveCart = (items: CartItem[]): void => {
  try {
    localStorage.setItem("perfume_cart", JSON.stringify(items));
  } catch (error) {
    console.error("Failed to save cart:", error);
  }
};

export const clearCart = (): void => {
  localStorage.removeItem("perfume_cart");
};

// ============================================================
// USER PROFILE
// ============================================================

export interface UserProfile {
  fullName: string;
  email: string;
  phone: string;
  username: string;
  joinDate: string;
  favoriteScentNotes: string;
  frequencyPreference: string;
  deliveryAddress: string;
  city: string;
}

export const getProfile = (): UserProfile => {
  try {
    const saved = localStorage.getItem("user_profile_settings");
    if (saved) return JSON.parse(saved);
  } catch (error) {
    console.error("Failed to fetch profile:", error);
  }
  return {
    fullName: "Bruce Nzala",
    email: "brucenzala@gmail.com",
    phone: "0777392580",
    username: "brucenzala",
    joinDate: "March 2026",
    favoriteScentNotes: "Oud, Vanilla, Bergamot",
    frequencyPreference: "Monthly",
    deliveryAddress: "Lusaka Province",
    city: "Lusaka",
  };
};

export const saveProfile = (profile: UserProfile): void => {
  try {
    localStorage.setItem("user_profile_settings", JSON.stringify(profile));
  } catch (error) {
    console.error("Failed to save profile:", error);
  }
};

// ============================================================
// AUTHENTICATION (placeholder — connect to real auth later)
// ============================================================

export const loginUser = async (email: string, password: string): Promise<boolean> => {
  try {
    // Uncomment when backend is ready:
    // const res = await fetch(`${BASE_URL}/auth/login`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email, password }),
    // });
    // return res.ok;
    return email.length > 0 && password.length >= 8;
  } catch (error) {
    console.error("Login failed:", error);
    return false;
  }
};

export const registerUser = async (fullName: string, email: string, password: string): Promise<boolean> => {
  try {
    // Uncomment when backend is ready:
    // const res = await fetch(`${BASE_URL}/auth/register`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ fullName, email, password }),
    // });
    // return res.ok;
    return fullName.length > 0 && email.length > 0 && password.length >= 8;
  } catch (error) {
    console.error("Registration failed:", error);
    return false;
  }
};
