import React, { Suspense } from 'react'
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom'
import { PriceFeedProvider } from '../context/PriceFeedContext'
import Header from '../components/header'
import Footer from '../components/footer'
import Home from './home'
import Stake from './stake'
import VaultsLite from './vaultsLite'
import Pool from './pool'
import About from './about'
import VaultsLitePool from './vaultsLitePool'

export default function App() {
  return (
    <Suspense fallback={null}>
      <PriceFeedProvider>
        <Header/>
        <HashRouter>
          <Switch>
            <Route exact strict path="/" component={Home} />
            <Route exact strict path="/home" component={Home} />
            <Route exact strict path="/stake" component={Stake} />
            <Route exact strict path="/stake/:id" component={Pool} />
            <Route exact strict path="/vaultslite" component={VaultsLite} />
            <Route exact strict path="/vaultslite/:path" component={VaultsLitePool} />
            <Route exact strict path="/about" component={About} />
          </Switch>
        </HashRouter>
        <Footer/>
      </PriceFeedProvider>
    </Suspense>
  )
}
