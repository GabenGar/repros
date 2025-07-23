import type { ReactNode } from "react";
import { type Metadata } from "next";

import "@repo/ui/styles/global";
import styles from "./layout.module.scss";

interface IProps {
  children: ReactNode;
}

export async function generateMetadata({}: IProps): Promise<Metadata> {
  const metadata: Metadata = {
    title: { template: `%s | Repro`, default: "Repro" },
    generator: "Next.js",
    openGraph: {
      type: "website",
      title: "Repro",
    },
  };

  return metadata;
}

async function RootLayout({ children }: IProps) {
  return (
    <html>
      <body>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
