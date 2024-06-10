import { PropsWithChildren } from 'react'
import { useLaunch } from '@tarojs/taro'
import './app.less'
import { Provider } from 'react-redux'
import { Store } from './store/store'

function App({ children }: PropsWithChildren<any>) {

  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  return <Provider store={Store} >
    {children}
  </Provider>
}

export default App
