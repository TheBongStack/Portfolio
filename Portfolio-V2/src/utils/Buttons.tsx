import { EventHandler, MouseEvent, MouseEventHandler, ReactNode } from "react";
import styles from "./Buttons.module.scss";

function Button({
  component = "button",
  type = "",
  children,
  props
}: {
  component?: "a" | "button";
  type?: "reset_btn" | "";
  children: ReactNode;
  props?: {
    [index: string]: string | undefined | EventHandler<any> | Object,
    style?: Object
    href?: string,
    onClick?: EventHandler<MouseEvent>
  }
}) {

  if (component == "a") {
    return (
      <a
        className={`${styles.btn} ${type == "reset_btn" && styles.reset_btn}`}
        {...props}
      >
        {children}
      </a>
    );
  } else {
    return (
      <button
        type="button"
        className={`${styles.btn} ${type == "reset_btn" && styles.reset_btn}`}
        {...props}
      >
        {children}
      </button>
    );
  }
}

export default Button;
