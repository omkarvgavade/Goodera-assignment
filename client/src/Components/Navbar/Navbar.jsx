import React from 'react'
import styled from 'styled-components'
// import WorkIcon from '@mui/icons-material/Work';
import SearchIcon from '@mui/icons-material/Search';
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
            <SearchStyled>
                <div>
                    <SearchIcon />  <input type="text" />
                </div>
                <div>

                </div>
                <div>
                    <button>Search</button>
                </div>
            </SearchStyled>
        </NavbarStyled>
    )
}
const NavbarStyled = styled.div`

width: 100%;
height: 20rem;
background: linear-gradient(274.83deg, #5DB0DF 0.58%, #5D7ADF 74.3%);
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
const SearchStyled = styled.div`
position: absolute;
width: 1154px;
height: 100px;
left: 143px;
top: 314px;

background: #FFFFFF;
box-shadow: 2px 12px 8px 2px rgba(0, 0, 0, 0.05);
border-radius: 24px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
justify-content: center;
align-items: center;
&>div:nth-child(1){
display: flex;
justify-content: center;
align-items: center;
input{
    width: 80%;
    border: none;
    outline: none;
}
}
`
export default Navbar
