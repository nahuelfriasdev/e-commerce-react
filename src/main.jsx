import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Layout } from './components/layout/layout'
import { Header } from './components/layout/Header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout>
      <Header/>
    </Layout>
  </React.StrictMode>,
)
