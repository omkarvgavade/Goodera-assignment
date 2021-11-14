import React from 'react'
import styled from 'styled-components'
// import WorkIcon from '@mui/icons-material/Work';
function Navbar() {
    return (
        <NavbarStyled>
            <LinkStyled>
                <div>
                    <div className="bigSize">JobHunt</div>
                    <div>Find Job</div>
                    <div>Upskill Yourself</div>
                </div>
                <div>
                    <div>Post a Job</div>
                    <div>Sign In</div>

                </div>

            </LinkStyled>
            <HeadingStyled>
                <div>
                    <h1>Find Your Dream Job</h1>
                </div>
                <p>Browse through thousands of full time and part time near you</p>
            </HeadingStyled>
        </NavbarStyled>
    )
}
const NavbarStyled = styled.div`

width: 100%;
height: 20rem;
background-color: rgb(93,135,223);
padding: 2rem 6rem;


`
const LinkStyled = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
&>div{
    display: flex;
    align-items: center;
    &>div{
        margin-left: 1rem;
        color: white;
        font-size: 14px;
        font-weight: 500;
    }
}
.bigSize{
    font-size: 17px;
    display: flex;
    justify-content: center;
    align-items:center;
    font-weight: bold;
}

`
const HeadingStyled = styled.div`

width: 100%;
margin-top: 3rem;
height: 6rem;
display: grid;
 text-align: start;
 align-items: center;
 padding-left: 1rem;
 color: white;

`
export default Navbar
