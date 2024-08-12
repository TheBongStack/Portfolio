import Link from "./Link";
import styles from "./Widget.module.scss";

function Widget({
  heading,
  description,
  href,
  imgSrc
}: {
  heading: string;
  description: string;
  href: string;
  imgSrc: string;
}) {
  return (
    <div className={styles.project}>
      <img src={imgSrc} alt="Project 1" />
      <div className={styles.description}>
        <h3>{heading}</h3>
        <hr />
        <p>{description}</p>
        <Link href={href} text="Demo Link" className={styles.link_style}/>
      </div>
    </div>
  );
}

export default Widget;
