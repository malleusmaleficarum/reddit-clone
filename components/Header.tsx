import Image from "next/image";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftside}>
        <Image
          src='https://links.papareact.com/fqy'
          alt='Logo'
          width={110}
          height={35}
          objectFit='contain'
        />
      </div>
    </div>
  );
};

export default Header;
