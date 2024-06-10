import { View } from '@tarojs/components'
import NavBar from "./components/navbar/index"
import Content from './components/content'
import Footer from './components/footer'

export default function MainPage() {
  return (
    <View className='page'>
      <NavBar></NavBar>
      <Content></Content>
      <Footer></Footer>
    </View>
  )
}
