import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Box, Button, Input, SimpleGrid } from '@chakra-ui/react'
import SearchDetails from './SearchDetails'
import AllDetails from './AllDetails'



function ShowUser() {
    const [items, setItems] = useState([])
    const [pgno, setPgno] = useState(1)
    const [filter, setFilter] = useState(false)
    const [filtername, setFiltername] = useState('')

    useEffect(() => {
        axios.get(`https://reqres.in/api/users?page=${pgno}&per_page=10`).then((response) => {
            console.log(response.data)
            setItems(response.data.data)
        })
    }, [])
    const firstpage = () => {
        axios.get(`https://reqres.in/api/users?page=1&per_page=10`).then((response) => {

            setItems(response.data.data)
        })
    }
    const secondpage = () => {
        axios.get(`https://reqres.in/api/users?page=2&per_page=10`).then((response) => {

            setItems(response.data.data)
        })
    }
    const searchHandler = () => {
        setFilter(true)
    }


    return (
        <Box h="700px">

            <Input type='text' placeholder='enter email id ' onChange={(e) => { setFiltername(e.target.value) }} color='white' w='300px' mb='1rem' mr='1rem'></Input><Button mb='1rem' onClick={searchHandler}> Search</Button>

            {
                filter ? <SearchDetails filtername={filtername} items={items} /> : <AllDetails items={items} />
            }
            <Box display='flex' justifyContent='flex-end' >
                <Button color='white' variant='outline' mr='1rem' value='1' onClick={firstpage}>
                    1
                </Button>
                <Button color='white' variant='outline' value='2' onClick={secondpage}>
                    2
                </Button>
            </Box>
        </Box>

    )
}

export default ShowUser