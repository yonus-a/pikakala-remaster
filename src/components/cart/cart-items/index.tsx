import Counter from "@/components/widget/counter";
import Icon from "@/components/general/icon";
import { useCart } from "react-use-cart";
import { CartType } from "../type";
import Image from "next/image";
import "./style.scss";

export default function CartItems({ items }: CartType) {
  const { updateItemQuantity, removeItem } = useCart();

  return (
    <div className="cart-items">
      {items.map(({ product, color, id, quantity }) => (
        <div className="item" key={product.id}>
          <Image
            src={`/images/products/${product.image}`}
            alt={product.name}
            height={100}
            width={100}
          />
          <div className="col-right">
            <h3>{product.name}</h3>
            <div className="details">
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
              <span className="guarantee">
                <Icon name="verified" />
                اصالت کالا و سلامتی فیزیکی
              </span>
            </div>
            <div className="price">
              <Counter
                onIncrement={() => updateItemQuantity(id, quantity + 1)}
                onDecrement={() => updateItemQuantity(id, quantity - 1)}
                onDelete={() => removeItem(id)}
                showDelete={quantity <= 1}
                count={quantity}
              />
              <strong>{product.price} ریال</strong>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
