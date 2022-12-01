import type { NextPage } from 'next'
import Layout from '../components/layout/layout'
import { Category, Slider, ProductView } from '../components/component'
import { CategoryData, SliderData, productCategory } from '../data/Data'

const Home: NextPage = () => {
  return (
    <>
      <Layout title={'Home'}>
        <Category data={CategoryData} />
        <Slider data={SliderData} />
        <ProductView data={productCategory} />
      </Layout>
    </>
  )
}

export default Home
