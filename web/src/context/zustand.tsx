import { create } from 'zustand';

type Item = {
  id: string,
  description: string,
  price: number,
  image: string,
};

interface CartState {
  items: Item[];
  count: number;
  addToCart: (item: Item) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

const useCartStore = create<CartState>((set) => ({
  items: [],
  count: 0,
  addToCart: (item) =>
    set((state) => {
      const itemExists = state.items.some((cartItem) => cartItem.id === item.id);
      if (itemExists) {
        return state;
      }
      return {
        items: [...state.items, item],
        count: state.count + 1,
      };
    }),
  removeFromCart: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
      count: state.count > 0 ? state.count - 1 : 0,
    })),
  clearCart: () =>
    set(() => ({
      items: [],
      count: 0,
    })),
}));

export default useCartStore;
