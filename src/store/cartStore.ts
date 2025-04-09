import { create } from 'zustand';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  type: 'product' | 'donation';
  isTaxable: boolean;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  addDonation: (amount: number) => void;
  removeDonation: () => void;
  getTotalAmount: () => number;
  getTaxableAmount: () => number;
  getTaxAmount: () => number;
}

const TAX_RATE = 0.0725; // 7.25% tax rate

const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  
  addItem: (item) => {
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { items: [...state.items, { ...item, quantity: 1 }] };
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
    set({ items: [] });
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

  getTotalAmount: () => {
    const { items } = get();
    const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
    const tax = get().getTaxAmount();
    return subtotal + tax;
  },
}));

export default useCartStore;