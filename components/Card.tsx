import styles from "../styles/Card.module.css";

interface CardProps {
  bgcolor?: string;
}

export default function Card(props) {
  return (
    <div
      className={styles.card}
      style={{ backgroundColor: props.bgcolor ?? "#fff" }}
    >
      {props.children}
    </div>
  );
}
