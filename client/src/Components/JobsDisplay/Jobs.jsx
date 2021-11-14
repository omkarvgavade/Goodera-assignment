import React from 'react'
import styled from 'styled-components'
import Card from '../JobCard/Card'
function Jobs() {
    return (
        <JobsStyled>
            <Card />
        </JobsStyled>
    )
}
const JobsStyled = styled.div`
width: 100%;
height: 100vh;

background: #E5E5E5;
padding: 5rem 2.5rem;
`

export default Jobs
