import { create } from 'zustand';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  type: 'product' | 'donation';
  isTaxable: boolean;
}

export interface ShippingAddress {
  fullName: string;
  streetAddress: string;
  apartment?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone?: string;
}

interface CartStore {
  items: CartItem[];
  shippingAddress: ShippingAddress | null;
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  addDonation: (amount: number) => void;
  removeDonation: () => void;
  setShippingAddress: (address: ShippingAddress) => void;
  getTotalAmount: () => number;
  getTaxableAmount: () => number;
  getTaxAmount: () => number;
  getShippingCost: () => number;
  getMerchandiseTotal: () => number;
}

const TAX_RATE = 0.0725; // 7.25% tax rate
const SHIPPING_COST = 5.95; // Flat shipping rate
const FREE_SHIPPING_THRESHOLD = 75; // Free shipping threshold

const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  shippingAddress: null,
  
  addItem: (item) => {
    const quantity = item.quantity || 1;
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
          ),
        };
      }
      return { items: [...state.items, { ...item, quantity }] };
    });
  },

  removeItem: (id) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));
  },

  updateQuantity: (id, quantity) => {
    if (quantity === 0) {
      get().removeItem(id);
      return;
    }
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      ),
    }));
  },

  clearCart: () => {
    set({ items: [], shippingAddress: null });
  },

  addDonation: (amount) => {
    set((state) => {
      const existingDonation = state.items.find((i) => i.type === 'donation');
      if (existingDonation) {
        return {
          items: state.items.map((i) =>
            i.type === 'donation' ? { ...i, price: amount } : i
          ),
        };
      }
      return {
        items: [
          ...state.items,
          {
            id: 'donation',
            name: 'Donation',
            price: amount,
            quantity: 1,
            type: 'donation',
            isTaxable: false,
          },
        ],
      };
    });
  },

  removeDonation: () => {
    set((state) => ({
      items: state.items.filter((item) => item.type !== 'donation'),
    }));
  },

  setShippingAddress: (address) => {
    set({ shippingAddress: address });
  },

  getTaxableAmount: () => {
    const { items } = get();
    return items
      .filter((item) => item.isTaxable)
      .reduce((total, item) => total + item.price * item.quantity, 0);
  },

  getTaxAmount: () => {
    const taxableAmount = get().getTaxableAmount();
    return taxableAmount * TAX_RATE;
  },

  getMerchandiseTotal: () => {
    const { items } = get();
    return items
      .filter((item) => item.type === 'product')
      .reduce((total, item) => total + item.price * item.quantity, 0);
  },

  getShippingCost: () => {
    const merchandiseTotal = get().getMerchandiseTotal();
    return merchandiseTotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  },

  getTotalAmount: () => {
    const { items } = get();
    const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
    const tax = get().getTaxAmount();
    const shipping = get().getShippingCost();
    return subtotal + tax + shipping;
  },
}));

export default useCartStore;