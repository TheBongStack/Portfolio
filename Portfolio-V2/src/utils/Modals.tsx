import { Dispatch, ReactNode, SetStateAction } from "react";
import styles from "./Modals.module.scss";

function Modals({
  children,
  handleState,
}: {
  children: ReactNode;
  handleState: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className={styles.backdrop} onScroll={(e) => e.stopPropagation()}>
      <div className={styles.options}>
        <i
          className={"fa-solid fa-xmark " + styles.cross}
          onClick={() => handleState(false)}
        ></i>
        {children}
      </div>
    </div>
  );
}

export default Modals;
