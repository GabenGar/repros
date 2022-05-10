import faker from '@faker-js/faker/locale/en';

import type { GetStaticProps, GetStaticPaths, GetStaticPathsResult, InferGetStaticPropsType } from 'next'
import type { ParsedUrlQuery } from "querystring"
import type { IBasePageProps } from '../../types'

const DAY = 60 * 60 - 24

interface IPage {
  id: number,
  description: string
}

interface IProps extends IBasePageProps {
  pages: IPage[]
}

interface IParams extends ParsedUrlQuery {
  id: string
}

interface IStaticPath {
  params: IParams,
  locale: string
}

function Page({ locale, pages }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>
    <p>{locale}</p>
    <ul>
      {pages.map((page) => <li key={page.id} >{page.description}</li>)}
    </ul>
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

export const getStaticProps: GetStaticProps<IProps> = async ({ locale }) => {
  const props = {
    locale: locale!,
    pages
  }

  console.log(JSON.stringify(props))
  return {
    props,
    revalidate: DAY
  }
}

export default Page