import AnimatedItem from "../../general/animated-item";
import Image from "next/image";
import Link from "next/link";
import "./style.scss";

// it can fetched from db and controld in admin panel
const categories = [
  { id: 1, image: "sex.png", text: "لوازم بهداشت جنسی" },
  { id: 2, image: "pad.png", text: "لولازم بهداشتی بانوان" },
  { id: 3, image: "razor.png", text: "لولازم بهداشتی آقایان" },
  { id: 4, image: "perfume-men.png", text: "عطر ادکلن مردانه" },
  { id: 5, image: "perfume-women.png", text: "عطر ادکلن زنانه" },
  { id: 6, image: "skin-care.png", text: "مراقبت پوست" },
];

export default function ProductsCategorization() {
  return (
    <section
      className="products-categorization"
      aria-label="products categorization"
    >
      <ul>
        {categories.map(({ id, image, text }: any, idx: number) => (
          <AnimatedItem key={id} animation="animate__pulse" delay={idx * 200}>
            <Link href={`/shop?category=${id}`}>
              <Image
                src={`/images/products-categorization/${image}`}
                height={90}
                width={90}
                alt={text}
              />
              {text}
            </Link>
          </AnimatedItem>
        ))}
      </ul>
    </section>
  );
}
