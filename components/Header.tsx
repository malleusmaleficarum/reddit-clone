import Image from "next/image";
import styles from "../styles/Header.module.css";
import { ChevronDownIcon, HomeIcon, SearchIcon } from "@heroicons/react/solid";
import {
  BellIcon,
  ChatIcon,
  GlobeIcon,
  PlusIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  VideoCameraIcon,
  UserIcon,
  ArrowDownIcon,
} from "@heroicons/react/outline";

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
      <div className={styles.middleside}>
        <HomeIcon height={23} width={23} />
        <p>Home</p>
        <ChevronDownIcon height={23} width={23} />
      </div>

      <form className={styles.searchbar}>
        <SearchIcon height={23} width={23} color={"rgb(156 163 175)"} />
        <input type='text' placeholder='Search Reddit' />
        <button type='submit' hidden />
      </form>

      <div className={styles.rightside}>
        <SparklesIcon className={styles.icon} />
        <GlobeIcon className={styles.icon} />
        <VideoCameraIcon className={styles.icon} />
        <hr />
        <ChatIcon className={styles.icon} />
        <BellIcon className={styles.icon} />
        <PlusIcon className={styles.icon} />
        <SpeakerphoneIcon className={styles.icon} />
      </div>

      {/* Hamburger Menu */}
      <div className={styles.burger}>
        <UserIcon className={styles.burger__icon} />
        <ChevronDownIcon className={styles.icon__icon} />
      </div>

      {/* Log In */}
      <div className={styles.login}>
        <Image
          src='https://links.papareact.com/23l'
          alt='Reddit'
          width={20}
          height={20}
          objectFit='contain'
        />
        <p>Sign In</p>
      </div>
    </div>
  );
};

export default Header;
