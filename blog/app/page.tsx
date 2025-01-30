import Image from "next/image";
import Alert from "react-bootstrap/Alert";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
    {[
      "primary",
      "secondary",
      "success",
      "danger",
      "warning",
      "info",
      "light",
      "dark",
    ].map((variant, idx) => (
      <Alert key={idx} variant={variant}>
        This is a {variant} alert—check it out!
      </Alert>
    ))}
  </div>
  );
}
