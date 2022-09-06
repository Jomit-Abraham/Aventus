import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react'

function SearchDetails(props) {
    return (
        <div>

            {
                props.items.filter((obj) => props.filtername === obj.email).map((obj) => <SimpleGrid columns={3} spacing={3} key={Math.random()}>
                    <Box bg='white' height='40px' mb='1rem' padding='.5rem'>{obj.first_name}</Box>
                    <Box bg='white' height='40px' mb='1rem' padding='.5rem'>{obj.last_name}</Box>
                    <Box bg='white' height='40px' mb='1rem' padding='.5rem'>{obj.email}</Box>

                </SimpleGrid>)
            }

        </div>
    )
}

export default SearchDetails