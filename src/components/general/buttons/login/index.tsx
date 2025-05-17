import Link from "next/link";
import "./styles.scss";

export default function LoginBtns() {
  return (
    <div className="login-btn">
      <Link href="/panel">ورود / ثبت نام</Link>
    </div>
  );
}
