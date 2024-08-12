import styles from "./Link.module.scss";

function Link({
  href,
  text,
  props,
  className,
}: {
  href?: string;
  text: string;
  props?: Object;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={className ? styles.link + ` ${className}` : styles.link}
      {...props}
    >
      {text} &nbsp;
      <i className="fa-solid fa-up-right-from-square fa-lg"></i>
    </a>
  );
}

export default Link;
