import {
    Box,
    Button, 
    Center,
    chakra,
    Container,
    FormControl,
    FormLabel,
    Grid,
    Heading,
    Input,
    Spacer,
    useToast,
    } from '@chakra-ui/react'
import { get } from 'http'
import { FormEvent, useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { FirebaseError } from '@firebase/util'
import { set } from 'firebase/database'


    
export const Page = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const toast = useToast()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        setIsLoading(true)
        e.preventDefault()
        try {
            const auth = getAuth()
            await signInWithEmailAndPassword(auth, email, password)
            // console.log({ email, password })
            setEmail('')
            setPassword('')
            toast({
                title: 'ログインしました。',
                status: 'success',
                position: 'top',
            })
        } catch (e) {
            toast({
                title: 'ログインに失敗しました。',
                status: 'error',
                position: 'top',
            })
            if (e instanceof FirebaseError) {
                console.log(e.code)
                console.log(e.message)
            }
        } finally {
            setIsLoading(false)
        }
            
    }
    return (
        <Container py={14}>
            <Heading>サインイン</Heading>
            <chakra.form onSubmit={handleSubmit}>
                <Spacer height={8} aria-hidden />
                    <Grid gap={4}>
                        <Box display={'contents'}>
                            <FormControl>
                                <FormLabel>メールアドレス</FormLabel>
                                <Input 
                                    type={'email'}
                                    name={'email'}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                 />
                            </FormControl>
                            <FormControl>
                                <FormLabel>パスワード</FormLabel>
                                <Input 
                                    type={'password'} 
                                    name={'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </FormControl>
                        </Box>
                    </Grid>
                <Spacer height={4} aria-hidden />
                <Center>
                <Button type={'submit'} isLoading={isLoading}>ログイン</Button>
                </Center>
            </chakra.form>
        </Container>
    )
}
    
export default Page