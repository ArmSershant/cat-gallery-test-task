import styles from "./CatImage.module.css";

export default function CatImage({ src }) {
  return src ? <img className={styles.img} src={src} alt="cat" /> : null;
}
