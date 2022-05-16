import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import type { IBasePageProps } from '../types'

export default function Custom404({ }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <h1>404 - Page Not Found</h1>
}

interface IProps extends IBasePageProps {
}

export const getStaticProps: GetStaticProps<IProps> = async ({ locale, params }) => {

  const props = {
    locale: locale!,
  }

  return {
    props
  }
}