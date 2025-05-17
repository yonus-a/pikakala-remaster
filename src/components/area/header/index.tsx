"use client";

import LoginBtns from "@/components/general/buttons/login";
import MenuBtn from "@/components/general/buttons/menu";
import Container from "@/components/general/container";
import { usePathname } from "next/navigation";
import Logo from "@/components/general/logo";
import Link from "next/link";
import clsx from "clsx";
import "./styles.scss";

export default function Header() {
  const path = usePathname();

  return (
    <header>
      <Container>
        <div className="header">
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
                  خانه
                </Link>
              </li>
              <li role="none">
                <Link
                  href="/shop"
                  role="menuitem"
                  className={clsx(path === "/shop" && "active")}
                >
                  فروشگاه
                </Link>
              </li>
              <li role="none">
                <Link
                  href="/cart"
                  role="menuitem"
                  className={clsx(path === "/cart" && "active")}
                >
                  سبد خرید
                </Link>
              </li>
              <li role="none">
                <Link
                  href="/contact"
                  role="menuitem"
                  className={clsx(path === "/contact" && "active")}
                >
                  تماس باما
                </Link>
              </li>
              <li role="none">
                <Link
                  href="/about"
                  role="menuitem"
                  className={clsx(path === "/about" && "active")}
                >
                  درباره ما
                </Link>
              </li>
            </ul>
            <LoginBtns />
          </nav>
        </div>
      </Container>
    </header>
  );
}
