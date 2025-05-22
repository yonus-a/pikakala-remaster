"use client";

import LoginBtns from "@/components/general/buttons/login";
import MenuBtn from "@/components/general/buttons/menu";
import Container from "@/components/general/container";
import CartBox from "@/components/widget/cart-box";
import { usePathname } from "next/navigation";
import Logo from "@/components/general/logo";
import Icon from "@/components/general/icon";
import Link from "next/link";
import clsx from "clsx";
import "./styles.scss";

export default function Header() {
  const path = usePathname();

  return (
    <header>
      <Container>
        <div className="header">
          <Logo />
          <MenuBtn />
          <nav aria-label="Main Navigation">
            <Logo />
            <ul role="menubar" aria-label="Main Navigation">
              <li role="none">
                <Link
                  href="/"
                  role="menuitem"
                  className={clsx(path === "/" && "active")}
                >
                  <Icon name="home" />
                  خانه
                </Link>
              </li>
              <li role="none">
                <Link
                  href="/shop"
                  role="menuitem"
                  className={clsx(path === "/shop" && "active")}
                >
                  <Icon name="shop" />
                  فروشگاه
                </Link>
              </li>
              <li role="none">
                <Link
                  href="/cart"
                  role="menuitem"
                  className={clsx(path === "/cart" && "active")}
                >
                  <Icon name="shopping-bag" />
                  سبد خرید
                </Link>
              </li>
              <li role="none">
                <Link
                  href="/contact"
                  role="menuitem"
                  className={clsx(path === "/contact" && "active")}
                >
                  <Icon name="support" />
                  تماس باما
                </Link>
              </li>
              <li role="none">
                <Link
                  href="/about"
                  role="menuitem"
                  className={clsx(path === "/about" && "active")}
                >
                  <Icon name="help" />
                  درباره ما
                </Link>
              </li>
            </ul>
            <div className="left-side">
              <LoginBtns />
              <CartBox />
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}
