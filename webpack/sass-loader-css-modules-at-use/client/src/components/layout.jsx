import React from "react";

import styles from "./layout.module.scss";

export function Layout({ children }) {
  return (<>
    {/* <header>
    </header> */}

    <main className={styles.main}>
      {children}
    </main>

    {/* <footer>
    </footer> */}
  </>);
}
