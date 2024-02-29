
import { useState } from 'react'
import Layout from '../Layout/Layout'

import ProductList from '../ProductList/ProductList'
import SearchInput from '../SearchInput/SearchInput'
import "./HomePageComponent.css"
import {useDebounce} from '../../hooks/useDebounce'

const HomePageComponent = () => {
  const [searchValue, setSearchValue] = useState('')
  const debouncedSearchValue = useDebounce(searchValue, 1000)
  return (
    <>
    <Layout>
      
    <div className="main wrapper">
    <div>
        <SearchInput searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
    <ProductList debouncedSearchValue={debouncedSearchValue}/>
     </div>
    </Layout>
    </>
  )
}

export default HomePageComponent