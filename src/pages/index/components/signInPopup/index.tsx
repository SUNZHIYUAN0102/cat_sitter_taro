import Popup from "@/components/popup";
import emailValidate from "@/utils/emailValidate";
import passwordValidate from "@/utils/passwordValidate";
import { Input, View, Text } from "@tarojs/components";
import { PropsWithChildren, useEffect, useState } from "react";


interface SignInPopupProps {
    visible: boolean;
    handlePopup: (visible: boolean) => void;
}

const SignInPopup: React.FC<SignInPopupProps> = ({ visible, handlePopup }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleEmailValidate = (email: string) => {
        if (!emailValidate(email)) {
            setEmailError('Invalid email address.');
            return false;
        } else {
            setEmailError('');
            return true;
        }
    }

    const handlePasswordValidate = (password: string) => {
        if (!passwordValidate(password)) {
            setPasswordError('Invalid password.');
            return false;
        } else {
            setPasswordError('');
            return true;
        }
    }

    useEffect(() => {
        setEmail('');
        setPassword('');
        setEmailError('');
        setPasswordError('');
    }, [visible])

    return <Popup visible={visible} handlePopup={handlePopup}>
        <View className='flex flex-col items-center gap-[15px]'>
            <Text className="text-orange-400 text-[25px] font-bold font-['Pacifico']">Sign In</Text>

            <View className="flex flex-col gap-[5px]">
                {emailError && <Text className="text-red-500 text-[6px]">{emailError}</Text>}
                <Input
                    style={{ borderColor: emailError ? 'red' : '' }}
                    className='w-[200px] border-[0.5px] border-neutral-200 rounded-md p-[5px] text-[8px]'
                    placeholder='Email'
                    value={email}
                    onInput={(e) => { setEmail(e.detail.value), setEmailError('') }}
                    onBlur={(e) => { handleEmailValidate(e.detail.value) }}
                />
            </View>

            <View className="flex flex-col gap-[5px]">
                {passwordError && <Text className="text-red-500 text-[6px]">{passwordError}</Text>}
                <Input
                    style={{ borderColor: passwordError ? 'red' : '' }}
                    password
                    className='w-[200px] border-[0.5px] border-neutral-200 rounded-md p-[5px] text-[8px]'
                    placeholder='Password'
                    value={password}
                    onInput={(e) => { setPassword(e.detail.value), setPasswordError('') }}
                    onBlur={(e) => { handlePasswordValidate(e.detail.value) }}
                />
            </View>

            <View className="w-[100px] py-[6px] rounded-lg bg-orange-600 flex justify-center items-center text-white text-[10px] cursor-pointer">
                Sign In
            </View>
        </View>
    </Popup>
}

export default SignInPopup;