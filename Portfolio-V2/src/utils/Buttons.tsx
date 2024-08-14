import { EventHandler, MouseEvent, ReactNode } from "react";
import styles from "./Buttons.module.scss";

function Button({
  component = "button",
  type = "",
  children,
  props,
  classNameAddon
}: {
  component?: "a" | "button";
  type?: "reset_btn" | "";
  children: ReactNode;
  props?: {
    [index: string]: string | undefined | EventHandler<any> | Object,
    style?: Object
    href?: string,
    onClick?: EventHandler<MouseEvent>
  },
  classNameAddon?: string
}) {

  if (component == "a") {
    return (
      <a
        className={`${styles.btn} ${type == "reset_btn" && styles.reset_btn} ${ classNameAddon }`}
        {...props}
      >
        {children}
      </a>
    );
  } else {
    return (
      <button
        type="button"
        className={`${styles.btn} ${type == "reset_btn" && styles.reset_btn} ${ classNameAddon }`}
        {...props}
      >
        {children}
      </button>
    );
  }
}

export default Button;
