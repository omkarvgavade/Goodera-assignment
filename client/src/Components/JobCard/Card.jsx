import React from 'react'
import styled from 'styled-components'
const CardData = styled.div`
img{
   background-color:rgb(242,242,242);
   border-radius:20px
}
.card{
    border-radius:20px
}
button:hover{
    background-color:rgb(13,110,253)
}

.btn:focus{
    outline:none;
    box-shadow:none
}
.card-body{
    text-align:start;
}
`

function Card({ jobsData }) {
    return (
        <CardData>

            <div className="container">
                <div className="row">
                    {jobsData ? jobsData.map((el) => {
                        return <div className="col col-12  g-3 col-lg-6 col-xxl-6" >
                            <div className="card mb-3 p-2" >
                                <div className="row g-0">
                                    <div className="col-sm-4 p-3">
                                        <img src={el.image} className="img-fluid  p-4" alt="..." />
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="card-body">
                                            <h2 className="card-title ">{el.title}</h2>
                                            <p className="card-text">{el.description}</p>
                                            <button type="button" class="btn btn-outline-danger float-end py-1 px-4">View Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }) : <h1>No jobs are available</h1>}


                </div>


            </div>


        </CardData>
    )
}

export default Card