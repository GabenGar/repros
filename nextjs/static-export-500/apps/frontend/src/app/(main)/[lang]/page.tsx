import type { Metadata } from "next";
import { getDictionary } from "#server";
import type { IStaticPageProps } from "#pages/types";
import { Page } from "#components";
import { Overview, OverviewHeader } from "#components/overview";
import { Heading } from "#components/heading";

import styles from "./page.module.scss";

interface IProps extends IStaticPageProps {}

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const { home } = dict.pages;

  return {
    title: `${home.title} | Repro`,
  };
}

async function FrontPage({ params }: IProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const { home } = dict.pages;

  return (
    <Page heading={home.heading}>
      <Overview headingLevel={2}>
        {(headinglevel) => (
          <OverviewHeader className={styles.header}>
            <Heading level={headinglevel + 1}>{home["Tools"]}</Heading>
          </OverviewHeader>
        )}
      </Overview>
    </Page>
  );
}

export default FrontPage;
