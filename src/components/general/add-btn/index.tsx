import { AddBtnType } from "./type";
import Link from "next/link";
import "./styles.scss";

export default function AddBtn({ href }: AddBtnType) {
  return (
    <div className="add-btn">
      <Link href={href} className="btn secondary-btn">
        اضافه کردن
      </Link>
    </div>
  );
}
