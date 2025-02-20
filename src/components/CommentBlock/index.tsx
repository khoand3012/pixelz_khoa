import { Pencil, Trash, Send } from "lucide-react";
import styles from "./CommentBlock.module.scss";

interface ICommentBlockProps {
  comments: {
    filename: string;
    section: string;
    comment: string;
  }[];
}

const BLOCK = "comment";

const CommentBlock = ({ comments }: ICommentBlockProps) => {
  return (
    <div className={styles[BLOCK]}>
      {comments.map((item, index) => (
        <div key={item.filename} className={styles[`${BLOCK}__block`]}>
          <div className={styles[`${BLOCK}__checkbox-wrapper`]}>
            <input className={styles[`${BLOCK}__checkbox`]} type="checkbox" name={`checkbox_${index}`} />
          </div>

          <div className={styles[`${BLOCK}__thumbnail`]}>
            <img
              src="/placeholder.jpg"
              alt={item.filename}
              className={styles[`${BLOCK}__thumbnail-image`]}
            />
          </div>

          <div className={styles[`${BLOCK}__content`]}>
            <h3 className={styles[`${BLOCK}__filename`]}>{item.filename}</h3>

            <div className={styles[`${BLOCK}__comment-container`]}>
              <span className={styles[`${BLOCK}__comment-label`]}>
                {item.section}
              </span>
              <p className={styles[`${BLOCK}__comment`]}>{item.comment}</p>
            </div>
          </div>

          <div className={styles[`${BLOCK}__actions`]}>
            <button className={styles[`${BLOCK}__action-button`]}>
              <Pencil size={16} />
            </button>
            <button className={styles[`${BLOCK}__action-button`]}>
              <Trash size={16} />
            </button>
            <button className={styles[`${BLOCK}__action-button`]}>
              <Send size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentBlock;
