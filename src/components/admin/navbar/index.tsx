import MenuBtn from "@/components/general/buttons/menu";
import Logo from "@/components/general/logo";
import Icon from "@/components/general/icon";
import Link from "next/link";
import "./styles.scss";

export default function AdminNavbar() {
  return (
    <nav className="admin-nav" aria-label="Admin Navigation">
      <Logo />
      <MenuBtn />
      <ul role="menubar" aria-orientation="vertical">
        <li role="none">
          <Link role="menuitem" href="/admin" className="active">
            <span>
              <Icon name="home" />
            </span>
            داشبورد
          </Link>
        </li>
        <li role="none">
          <Link role="menuitem" href="/admin/product-managment">
            <span>
              <Icon name="items" />
            </span>
            محصولات
          </Link>
        </li>
        <li role="none">
          <Link role="menuitem" href="/admin/show-requirement">
            <span>
              <Icon name="orders" />
            </span>
            سفارشات
          </Link>
        </li>
        <li role="none">
          <Link role="menuitem" href="/admin/settings">
            <span>
              <Icon name="setting" />
            </span>
            تنظیمات
          </Link>
        </li>
      </ul>
    </nav>
  );
}
