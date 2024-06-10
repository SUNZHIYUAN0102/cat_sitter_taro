import { View, Text, Input } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import NavBar from "./components/navbar/index"
import Content from './components/content'
import Popup from '@/components/popup'
import SignInPopup from './components/signInPopup'
import { useState } from 'react'
import SignUpPopup from './components/signUpPopup'

export default function Index() {
  const [category, setCategory] = useState('main')
  const [signInPopupVisible, setSignInPopupVisible] = useState(false)
  const [signUpPopupVisible, setSignUpPopupVisible] = useState(false)

  useLoad(() => {
    console.log('Page loaded.')
  })

  const handleCategoryRender = (): JSX.Element => {
    switch (category) {
      case 'main':
        return <Content></Content>
      default:
        return <Content></Content>
    }
  }

  return (
    <View className='w-screen'>
      <NavBar handleSignInPopup={setSignInPopupVisible} handleSignUpPopup={setSignUpPopupVisible}></NavBar>

      {handleCategoryRender()}

      <SignInPopup visible={signInPopupVisible} handlePopup={setSignInPopupVisible}></SignInPopup>
      <SignUpPopup visible={signUpPopupVisible} handlePopup={setSignUpPopupVisible}></SignUpPopup>
    </View>
  )
}
