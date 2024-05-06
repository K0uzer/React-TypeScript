import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pricing from '../pages/Pricing'
import Homepage from '../pages/Homepage'
import PageNotFound from '../pages/PageNotFound'
import AppLayout from '../pages/AppLayout'
import Product from '../pages/Product'
import CityList from '../components/CityList'
import { useLayoutEffect, useState } from 'react'

const ВАСЕ_URL = 'http://localhost:8000'

function App() {
    const [cities, setCities] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useLayoutEffect(() => {
        const fetchSites = async () => {
            try {
                setIsLoading((is) => !is)
                const res = await fetch(`${ВАСЕ_URL}/cities`)
                const data = await res.json()
                setCities(data)
            } catch (error) {
                console.log(`${error}!!! <= There was an error loading data...`)
            } finally {
                setIsLoading((is) => !is)
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
                        element={<p>List of countries</p>}
                    />
                    <Route path="form" element={<p>Form</p>} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
