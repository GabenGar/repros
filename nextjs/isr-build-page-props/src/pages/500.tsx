import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import type { IBasePageProps } from '../types'

export default function Custom500() {
  return <h1>500 - Server-side error occurred</h1>
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