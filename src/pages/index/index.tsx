import { View, Text, Input } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import NavBar from "./components/navbar/index"
import Content from './components/content'
import Popup from '@/components/popup'
import SignInPopup from './components/signInPopup'
import { useState } from 'react'
import SignUpPopup from './components/signUpPopup'

export default function Index() {

  const [signInPopupVisible, setSignInPopupVisible] = useState(false)
  const [signUpPopupVisible, setSignUpPopupVisible] = useState(false)

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='page'>
      <NavBar handleSignInPopup={setSignInPopupVisible} handleSignUpPopup={setSignUpPopupVisible}></NavBar>
      <Content></Content>

      <SignInPopup visible={signInPopupVisible} handlePopup={setSignInPopupVisible}></SignInPopup>
      <SignUpPopup visible={signUpPopupVisible} handlePopup={setSignUpPopupVisible}></SignUpPopup>
    </View>
  )
}
