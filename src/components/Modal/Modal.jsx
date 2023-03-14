import css from './Modal.module.css';

export const Modal = ({ img: { src, alt }, closeModal }) => {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <img src={src} alt={alt} />
        <button type="button" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};
