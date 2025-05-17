import Link from "next/link";
import "./styles.scss";

export default function Nav() {
  return (
    <nav aria-label="Main Navigation" className="nav">
      <ul role="menubar">
        <li role="none">
          <Link href="#" role="menuitem">
            خانه
          </Link>
        </li>
        <li role="none">
          <Link href="#" role="menuitem">
            فروشگاه
          </Link>
        </li>
        <li role="none">
          <Link href="#" role="menuitem">
            سبد خرید
          </Link>
        </li>
        <li role="none">
          <Link href="#" role="menuitem">
            تماس با ما
          </Link>
        </li>
        <li role="none">
          <Link href="#" role="menuitem">
            درباره ما
          </Link>
        </li>
      </ul>
    </nav>
  );
}
