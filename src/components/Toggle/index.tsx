import { useState } from "react";
import styles from "./Toggle.module.scss";

interface IToggleProps {
  isEnabled?: boolean;
  onToggle: (state: boolean) => void;
  label: string;
}

const BLOCK = "toggle";

const Toggle = ({ isEnabled = false, onToggle, label }: IToggleProps) => {
  const [enabled, setEnabled] = useState(isEnabled);

  const handleClick = () => {
    const newState = !enabled;
    setEnabled(newState);
    if (onToggle) {
      onToggle(newState);
    }
  };

  return (
    <div className={styles[`${BLOCK}__container`]}>
      <button
        role="switch"
        aria-checked={enabled}
        onClick={handleClick}
        className={[
          styles[`${BLOCK}__switch`],
          `${enabled ? styles[`${BLOCK}__switch--enabled`] : ""}`,
        ].join(" ")}
      >
        <span className={styles[`${BLOCK}__handle`]} />
      </button>
      {label && <span className={styles[`${BLOCK}__label`]}>{label}</span>}
    </div>
  );
};

export default Toggle;
