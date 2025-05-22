import Container from "@/components/general/container";
import Icon from "@/components/general/icon";
import Image from "next/image";
import "./styles.scss";

export default function ContactUs() {
  return (
    <section aria-label="contact us" className="contact-us">
      <Image
        src="/images/contact/contact.jpg"
        width={1280}
        height={720}
        alt=""
      />
      <Container>
        <div className="box">
          <h1>تماس با پیکاکالا</h1>
          <p>
            تماس با پیکاکالا از طریق پورتال مشتریان، گفتگوی آنلاین و تماس تلفنی
            امکان پذیر است. بهترین و سریعترین روش، ارتباط از طریق پورتال مشتریان
            پیکاکالا می باشد .چنانچه در پورتال مشتریان عضو هستید جهت استفاده از
            خدمات پشتیبانی می توانید به بخش ارسال تیکت مراجعه فرمایید.
          </p>
          <div className="card-wrapper">
            <div className="card">
              <Icon name="call" />
              <p>تماس تلفنی</p>
              <strong>09030432204</strong>
            </div>
            <div className="card">
              <Icon name="call" />
              <p>پشتیبانی تیکت</p>
              <strong>۲۴ ساعت</strong>
            </div>
            <div className="card">
              <Icon name="monitor" />
              <p>گفتگو آنلاین</p>
              <strong>از طریق چت</strong>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
