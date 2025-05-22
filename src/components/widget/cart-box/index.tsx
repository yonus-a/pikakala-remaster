"use client";

import DialogContainer from "@/components/general/dialog-container";
import DialogLink from "@/components/general/dialog-link";
import DialogCta from "@/components/general/dialog-cta";
import Dialog from "@/components/general/dialog";
import Icon from "@/components/general/icon";
import { useCart } from "react-use-cart";
import Image from "next/image";
import "./style.scss";

export default function CartBox() {
  const { items, isEmpty } = useCart();

  const variants = {
    initial: { y: -10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div className="cart-box">
      <Dialog ariaLabel="cart dialog">
        <DialogCta>
          <Icon name="cart" title="shopping cart" />
        </DialogCta>
        <DialogContainer variants={variants}>
          
          {!isEmpty ? (
            <>
              <ul>
                {items.map(({ product, color }: any) => (
                  <li key={product.id}>
                    <Image
                      src={`/images/products/${product.image}`}
                      alt={product.name}
                      width={60}
                      height={60}
                    />
                    <div className="wrapper">
                      <p>{product.name}</p>
                      <p>
                        <span className="color">
                          <span
                            style={
                              {
                                "--bg-color": color.code,
                              } as React.CSSProperties
                            }
                          ></span>
                          {color.name}
                        </span>
                        <span className="price">{product.price} تومان</span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <DialogLink href="/cart" className="more">
                مشاهده سبد خرید
              </DialogLink>
            </>
          ) : (
            <div className="empty-cart">سبد خرید شما خالی است</div>
          )}
        </DialogContainer>
      </Dialog>
    </div>
  );
}
