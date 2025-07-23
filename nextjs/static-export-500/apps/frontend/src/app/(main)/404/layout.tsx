import type { ReactNode } from "react";
import type { Metadata } from "next";
import { DEFAULT_LOCALE } from "#lib/internationalization";
import { getDictionary } from "#server";

import "@repo/ui/styles/global";
import styles from "./layout.module.scss";

interface IProps {
  children: ReactNode;
}

export async function generateMetadata({}: IProps): Promise<Metadata> {
  const lang = DEFAULT_LOCALE;
  const dict = await getDictionary(lang);
  const { layout } = dict;

  const metadata: Metadata = {
    title: { template: `%s | Repro`, default: "Repro" },
    description: layout.description,
    generator: "Next.js",
    openGraph: {
      type: "website",
      locale: lang,
      title: "Repro",
      description: layout.description,
    },
  };

  return metadata;
}

async function RootLayout({ children }: IProps) {
  const lang = DEFAULT_LOCALE;

  return (
    <html lang={lang}>
      <body>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
