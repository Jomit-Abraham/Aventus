import React from 'react'
import { useState } from 'react'
import { Box, Button, Input, Text } from '@chakra-ui/react'
import axios from 'axios'

function UpdateUser() {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [id, setId] = useState('')

    const passdata = () => {
        axios.patch(`https://reqres.in/api/users/${id}`, {
            first_name: fname,
            last_name: lname,
            email: email
        }).then((response) => {
            console.log(response)
        })
        setFname('')
        setLname('')
        setEmail('')
        setId('')

    }
    return (
        <Box w='100%' h='150px' bgGradient='linear(to-r, gray.800, gray.400)' display='flex' >

            <Text color='white' mt='1.5rem' mr='1rem'>Update user : </Text>
            <Input placeholder='id' value={id} mb='2rem' mt='1rem' color='White' mr='1rem' width='20%' onChange={(e) => { setId(e.target.value) }}></Input>

            <Input placeholder='First Name' value={fname} mb='2rem' mt='1rem' color='White' mr='1rem' width='20%' onChange={(e) => { setFname(e.target.value) }}></Input>

            <Input placeholder='Last Name' value={lname} mb='2rem' color='White' mt='1rem' mr='1rem' width='20%' onChange={(e) => { setLname(e.target.value) }}></Input>

            <Input placeholder='Email' value={email} mb='2rem' color='White' mt='1rem' mr='1rem' width='20%' onChange={(e) => { setEmail(e.target.value) }}></Input>
            <Button mb='2rem' mt='1rem' mr='1rem' onClick={passdata}>Update User</Button>

        </Box>
    )
}

export default UpdateUser