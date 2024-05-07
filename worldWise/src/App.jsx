import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pricing from '../pages/Pricing'
import Homepage from '../pages/Homepage'
import PageNotFound from '../pages/PageNotFound'
import AppLayout from '../pages/AppLayout'
import Product from '../pages/Product'
import CityList from '../components/CityList'
import { useEffect, useState } from 'react'
import CountriesList from '../components/CountriesList'

const ВАСЕ_URL = 'http://localhost:8000'

function App() {
    const [cities, setCities] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchSites = async () => {
            try {
                setIsLoading((is) => !is)
                const res = await fetch(`${ВАСЕ_URL}/cities`)
                const data = await res.json()
                setCities(data)
                setIsLoading((is) => !is)
            } catch (error) {
                console.log(`${error}!!! <= There was an error loading data...`)
            }
        }
        fetchSites()
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Homepage />} />
                <Route path="product" element={<Product />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="app" element={<AppLayout />}>
                    <Route
                        index
                        element={
                            <CityList cities={cities} isLoading={isLoading} />
                        }
                    />
                    <Route
                        path="cities"
                        element={
                            <CityList cities={cities} isLoading={isLoading} />
                        }
                    />
                    <Route
                        path="countries"
                        element={
                            <CountriesList
                                cities={cities}
                                isLoading={isLoading}
                            />
                        }
                    />
                    <Route path="form" element={<p>Form</p>} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
