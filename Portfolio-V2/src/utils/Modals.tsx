import { Dispatch, ReactNode, SetStateAction } from "react";
import styles from "./Modals.module.scss";

function Modals({
  children,
  handleState,
  className
}: {
  children: ReactNode;
  handleState: Dispatch<SetStateAction<boolean>>;
  className: string
}) {
  return (
    <div className={styles.backdrop} onScroll={(e) => e.stopPropagation()}>
      <div className={styles.options}>
        <i
          className={"fa-solid fa-xmark " + styles.cross}
          onClick={() => handleState(false)}
        ></i>
        <div className={styles.container + ` ${className}`}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modals;
