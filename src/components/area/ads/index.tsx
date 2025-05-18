import AnimatedItem from "../../general/animated-item";
import Image from "next/image";
import Link from "next/link";
import "./style.scss";

export default function Ads() {
  return (
    <section className="ads" aria-label="ads">
      <ul>
        <AnimatedItem animation="animate__zoomInRight">
          <Link href="/product/7">
            <Image
              src="/images/ads/ads1.png"
              alt="گوشی OPPO F19 PRO"
              height={440}
              width={880}
            />
          </Link>
        </AnimatedItem>
        <AnimatedItem animation="animate__zoomInLeft">
          <Link href="/product/11">
            <Image
              src="/images/ads/ads2.png"
              alt="بهترین موبایل OnePlus در هند"
              height={440}
              width={880}
            />
          </Link>
        </AnimatedItem>
      </ul>
    </section>
  );
}
