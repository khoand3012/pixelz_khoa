import { X } from "lucide-react";
import Toggle from "../Toggle";
import styles from "./Modal.module.scss";
import { commentData } from "../../config/fakeData";
import CommentBlock from "../CommentBlock";

const BLOCK = "modal";

interface IModalProps {
  onClose: () => void;
}

export default function Modal({ onClose }: IModalProps) {
  return (
    <div className={styles[BLOCK]}>
      <div className={styles[`${BLOCK}__header`]}>
        <span className={styles[`${BLOCK}__header-text`]}>Send Comments</span>
        <button
          className={styles[`${BLOCK}__header-close-btn`]}
          onClick={onClose}
        >
          <X />
        </button>
      </div>
      <div className={styles[`${BLOCK}__body`]}>
        <div className={styles[`${BLOCK}__body-utils-bar`]}>
          <div className={styles[`${BLOCK}__body-saved-comments`]}>
            <span>Saved Comments</span>
            <div className={styles[`${BLOCK}__body-comments-count`]}>3</div>
          </div>
          <Toggle label="All Users" onToggle={() => {}} />
        </div>
        <CommentBlock comments={commentData} />
      </div>
    </div>
  );
}
