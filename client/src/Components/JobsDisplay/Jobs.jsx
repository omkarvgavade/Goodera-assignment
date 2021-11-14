import React from 'react'
import styled from 'styled-components'
import Card from '../JobCard/Card'
function Jobs({ jobsData }) {
    console.log(jobsData, "yues")
    return (
        <JobsStyled>

            <Card jobsData={jobsData} />

        </JobsStyled>
    )
}
const JobsStyled = styled.div`
width: 100%;
height: 100vh;

background: #E5E5E5;
padding: 5rem 2.5rem;
display: grid;
min-height:50rem;
`

export default Jobs
