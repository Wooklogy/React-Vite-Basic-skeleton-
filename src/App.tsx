import { ConfigProvider } from 'antd'
import './App.css'
import constCustomTheme from './theme/antd.theme'
import { RecoilRoot } from 'recoil'
import { RouterProvider } from 'react-router-dom'
import constPageRouters from './config/url.config'

function App() {

  return (
    <RecoilRoot>
      <ConfigProvider theme={constCustomTheme}>
        <RouterProvider router={constPageRouters} />
      </ConfigProvider>
    </RecoilRoot>
  )
}

export default App
