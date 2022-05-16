import faker from '@faker-js/faker/locale/en';
import { useRouter } from 'next/router';

import type { GetStaticProps, GetStaticPaths, GetStaticPathsResult, InferGetStaticPropsType } from 'next'
import type { ParsedUrlQuery } from "querystring"
import type { IBasePageProps } from '../../types'

const DAY = 60 * 60 - 24

interface IPage {
  id: number,
  description: string
}

interface IProps extends IBasePageProps {
  page: IPage
}

interface IParams extends ParsedUrlQuery {
  id: string
}

interface IStaticPath {
  params: IParams,
  locale: string
}

function Page({ locale, page }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  if (router.isFallback) return <div>Loading...</div>;

  return <div>
    <p>{locale}</p>
    <article>
      <header>{page.id}</header>
      <section>{page.description}</section>
    </article>

  </div>
}

const pages = new Array(25).fill(null).map<IPage>((_, index) => {
  return {
    id: index + 1,
    description: faker.lorem.paragraphs(3)
  }
})

export const getStaticPaths: GetStaticPaths<IParams> = async ({ locales }) => {

  const paths: GetStaticPathsResult<IParams>["paths"] = pages.reduce<IStaticPath[]>((paths, page) => {

    const localizedPaths = locales!.map<IStaticPath>((locale) => {
      return {
        locale,
        params: { id: String(page.id) }
      }
    })

    paths.push(...localizedPaths)

    return paths
  }, [])

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<IProps, IParams> = async ({ locale, params }) => {
  const pageID = Number(params!.id)
  const page = pages.find((page) => page.id === pageID)!

  const props = {
    locale: locale!,
    page
  }

  // console.log(JSON.stringify(props))
  return {
    props,
    revalidate: DAY
  }
}

export default Page