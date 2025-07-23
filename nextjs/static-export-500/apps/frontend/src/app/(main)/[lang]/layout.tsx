import type { ReactNode } from "react";
import type { Metadata } from "next";
import { LOCALES } from "#lib/internationalization";
import { getDictionary } from "#server";
import { ClientProvider } from "#hooks";
import { GlobalNavigation } from "#components";
import type { IBasePageParams } from "#pages/types";

import "@repo/ui/styles/global";
import styles from "./layout.module.scss";

interface IProps {
  children: ReactNode;
  params: Promise<IBasePageParams>;
}

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  const { lang } = await params;
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

async function RootLayout({ children, params }: IProps) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body>
        <ClientProvider>
          <header className={styles.header}>
            <GlobalNavigation language={lang} />
          </header>

          <main className={styles.main}>{children}</main>
        </ClientProvider>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  const params = LOCALES.map((locale) => {
    return { lang: locale };
  });

  return params;
}

export default RootLayout;
