import Button from "@/components/general/buttons/btn";
import { CartType } from "../type";
import "./style.scss";

export default function Bill({ items }: CartType) {
  const totoalPrice = items.reduce(
    (acc, { product }) => acc + product.price,
    0
  );

  return (
    <div className="bill">
      <h2>اطلاعات پرداخت</h2>
      <p>
        مبلغ کالاها
        <strong>{totoalPrice} ریال</strong>
      </p>
      <p>
        هزینه ارسال
        <span>در مرحله بعد مشخص می شود</span>
      </p>
      <hr />
      <p>
        مبلغ قابل پرداخت
        <strong>{totoalPrice} ریال</strong>
      </p>
      <Button>ادامه</Button>
    </div>
  );
}
