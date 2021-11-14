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

function Card() {
    return (
        <CardData>
            <div className="container">
                <div className="row">
                    <div className="col col-12  g-3 col-lg-6 col-xxl-6" >
                        <div className="card mb-3 p-2" >
                            <div className="row g-0">
                                <div className="col-sm-4 p-3">
                                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Blank_button.svg/1200px-Blank_button.svg.png" className="img-fluid  p-4" alt="..." />
                                </div>
                                <div className="col-sm-8">
                                    <div className="card-body">
                                        <h2 className="card-title ">Card title</h2>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <button type="button" class="btn btn-outline-danger float-end py-1 px-4">View Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </CardData>
    )
}

export default Card