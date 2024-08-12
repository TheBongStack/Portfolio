import { useRef } from "react";
import Experience from "../types/Exprince";
import styles from "./Carousel.module.scss";
import Link from "./Link";

function Carousel() {
  const scroll = useRef<HTMLDivElement>();
  const xps: Experience[] = new Array(7).fill({
    logo: "code",
    heading: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam accusamus necessitatibus provident sunt ducimus quibusdam vero unde ab facere deserunt fugiat quos, hic est inventore doloribus neque tempora voluptatum consequatur?",
    link_text: "lorem ipsum dolor",
  });
  return (
    <div className={styles.container}>
      <button
        className={styles.nav_button}
        type="button"
        title="Scroll left"
        onClick={() => scroll.current!.scrollLeft -= 39*16}
      >
        <i className="fa-solid fa-angle-left"></i>
      </button>
      <div className={styles.item_container} ref={scroll}>
        {xps.map((xp, idx) => (
          <Item {...xp} key={idx} />
        ))}
      </div>
      <button
        className={styles.nav_button}
        type="button"
        title="Scroll right"
        onClick={() => scroll.current!.scrollLeft += 39*16}
      >
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </div>
  );
}

function Item({
  heading,
  text,
  link,
  link_text,
  logo,
}: Experience & { key: number }) {
  return (
    <div className={styles.experience_item}>
      <i className={`fa-solid fa-${logo}`}></i>
      <h3>{heading}</h3>
      <p className={styles.experience_content}>{text}</p>
      <Link text={link_text} href={link} />
    </div>
  );
}

export default Carousel;
