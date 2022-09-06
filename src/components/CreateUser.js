import React from 'react'
import { useState } from 'react'
import { Box, Button, Input, Text, } from '@chakra-ui/react'
import axios from 'axios'

function CreateUser() {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')


    const passdata = () => {
        axios.post('https://reqres.in/api/users', {
            first_name: fname,
            last_name: lname,
            email: email
        }).then((response) => {


            console.log(response)
        })

        console.log(fname, lname, email)
        setFname('')
        setLname('')
        setEmail('')
    }
    return (

        <Box w='100%' h='150px' mt='2.5rem' bgGradient='linear(to-r, gray.800, gray.400)' display='flex' >

            <Text color='white' mt='1.5rem' mr='1rem'>Add new user : </Text>

            <Input placeholder='First Name' value={fname} mb='2rem' mt='1rem' color='White' mr='1rem' width='20%' onChange={(e) => { setFname(e.target.value) }}></Input>

            <Input placeholder='Last Name' value={lname} mb='2rem' color='White' mt='1rem' mr='1rem' width='20%' onChange={(e) => { setLname(e.target.value) }}></Input>

            <Input placeholder='Email' mb='2rem' value={email} color='White' mt='1rem' mr='1rem' width='20%' onChange={(e) => { setEmail(e.target.value) }}></Input>
            <Button mb='2rem' mt='1rem' mr='1rem' onClick={passdata}>Add user</Button>


        </Box>
    )
}

export default CreateUser