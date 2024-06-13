import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.less'
import Navbar from '../index/components/navbar'

export default function Report1() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='page'>
      <Navbar></Navbar>
    </View>
  )
}
