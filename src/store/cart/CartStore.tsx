import { ReactNode } from "react";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

 // Create your cart store
export type CartItemType = {
  sku: string;
  name: string;
  price: number;
  qty: number;
  img: string;
};

type CartState = {
  cart: CartItemType[] | [];
  addToCart: (item: CartItemType, sku: any) => void;
  removeFromCart: (sku: string) => void;
  totalQtyInCart: (cart: CartItemType[]) => ReactNode;
  totalPriceOfCart: (cart: CartItemType[]) => ReactNode;
  quantityofItem : (sku:string,newQty:number) =>void
};
const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set) => ({
        cart: [],
        addToCart: (item, sku) =>
          set((state) => ({
            cart: state.cart.find((itemCart) => item.sku === itemCart.sku)
              ? [
                  ...state.cart.filter((itemInCart) => itemInCart.sku !== sku),
                  { ...item, qty: item.qty + 1 },
                ]
              : [
                  ...state.cart.filter((itemInCart) => itemInCart.sku !== sku),
                  { ...item, qty: 1 },
                ],
          })),
          quantityofItem:(sku,newQty)=>set((state)=>({cart:state.cart.map((item)=>(item.sku === sku ? {...item,qty:newQty}  : item))}))
          ,
        removeFromCart: (sku) =>
          set((state) => ({
            cart: state.cart.filter((item) => item.sku !== sku),
          })),
        totalQtyInCart: (cart) =>
          cart
            .map((item) => item.qty)
            .reduce((previousValue, cartItem) => {
              return previousValue + cartItem;
            }, 0),
        totalPriceOfCart: (cart) =>
          new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(
            cart
              .map((item) => item.price * item.qty)
              .reduce((previousValue, cartItem) => {
                return previousValue + cartItem;
              }, 0)
          ),
      }),
      { name: "cartItems" }
    )
  )
);

export default useCartStore;