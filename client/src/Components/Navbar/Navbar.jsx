import React from 'react'
import styled from 'styled-components'
// import WorkIcon from '@mui/icons-material/Work';
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Jobs from '../JobsDisplay/Jobs';
function Navbar() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <MainLayout>
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
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.5 28.5L19.5 19.5L28.5 28.5ZM22.5 12C22.5 13.3789 22.2284 14.7443 21.7007 16.0182C21.1731 17.2921 20.3996 18.4496 19.4246 19.4246C18.4496 20.3996 17.2921 21.1731 16.0182 21.7007C14.7443 22.2284 13.3789 22.5 12 22.5C10.6211 22.5 9.25574 22.2284 7.98182 21.7007C6.70791 21.1731 5.55039 20.3996 4.57538 19.4246C3.60036 18.4496 2.82694 17.2921 2.29927 16.0182C1.77159 14.7443 1.5 13.3789 1.5 12C1.5 9.21523 2.60625 6.54451 4.57538 4.57538C6.54451 2.60625 9.21523 1.5 12 1.5C14.7848 1.5 17.4555 2.60625 19.4246 4.57538C21.3938 6.54451 22.5 9.21523 22.5 12Z" stroke="#7B7B7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <input type="text" />
                    </div>
                    <div className="locationSelect">
                        <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.5 1L10.5 5.5M10.5 25L2.3295 20.914C2.08038 20.7895 1.87083 20.5981 1.72433 20.3613C1.57782 20.1244 1.50015 19.8515 1.5 19.573V3.427C1.50014 3.17141 1.56558 2.9201 1.69012 2.69691C1.81465 2.47372 1.99416 2.28605 2.21159 2.15171C2.42903 2.01737 2.67718 1.94082 2.93251 1.92932C3.18784 1.91782 3.44187 1.97175 3.6705 2.086L10.5 5.5V25ZM10.5 25L19.5 20.5L10.5 25ZM10.5 25V5.5V25ZM19.5 20.5L26.3295 23.914C26.5581 24.0282 26.8122 24.0822 27.0675 24.0707C27.3228 24.0592 27.571 23.9826 27.7884 23.8483C28.0058 23.714 28.1853 23.5263 28.3099 23.3031C28.4344 23.0799 28.4999 22.8286 28.5 22.573V6.427C28.4999 6.14851 28.4222 5.87555 28.2757 5.63871C28.1292 5.40187 27.9196 5.21049 27.6705 5.086L19.5 1V20.5ZM19.5 20.5V1V20.5Z" stroke="#7B7B7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <select name="" style={{ border: "none", outline: "none" }} id="">
                            <option value="" selected>Select Location</option>
                            <option value="berlin">Berlin</option>
                            <option value="delhi">Delhi</option>
                            <option value="mumbai">Mumbai</option>
                            <option value="delhi">Delhi</option>
                            <option value="pune">Pune</option>
                        </select>
                    </div>
                    <div>
                        <svg className="searchButton" width="280" height="60" viewBox="0 0 280 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="280" height="60" rx="8" fill="#F07987" />
                            <text>Search</text>
                            <path d="M103.44 38.168C102.272 38.168 101.216 37.968 100.272 37.568C99.344 37.168 98.608 36.592 98.064 35.84C97.52 35.088 97.24 34.2 97.224 33.176H100.824C100.872 33.864 101.112 34.408 101.544 34.808C101.992 35.208 102.6 35.408 103.368 35.408C104.152 35.408 104.768 35.224 105.216 34.856C105.664 34.472 105.888 33.976 105.888 33.368C105.888 32.872 105.736 32.464 105.432 32.144C105.128 31.824 104.744 31.576 104.28 31.4C103.832 31.208 103.208 31 102.408 30.776C101.32 30.456 100.432 30.144 99.744 29.84C99.072 29.52 98.488 29.048 97.992 28.424C97.512 27.784 97.272 26.936 97.272 25.88C97.272 24.888 97.52 24.024 98.016 23.288C98.512 22.552 99.208 21.992 100.104 21.608C101 21.208 102.024 21.008 103.176 21.008C104.904 21.008 106.304 21.432 107.376 22.28C108.464 23.112 109.064 24.28 109.176 25.784H105.48C105.448 25.208 105.2 24.736 104.736 24.368C104.288 23.984 103.688 23.792 102.936 23.792C102.28 23.792 101.752 23.96 101.352 24.296C100.968 24.632 100.776 25.12 100.776 25.76C100.776 26.208 100.92 26.584 101.208 26.888C101.512 27.176 101.88 27.416 102.312 27.608C102.76 27.784 103.384 27.992 104.184 28.232C105.272 28.552 106.16 28.872 106.848 29.192C107.536 29.512 108.128 29.992 108.624 30.632C109.12 31.272 109.368 32.112 109.368 33.152C109.368 34.048 109.136 34.88 108.672 35.648C108.208 36.416 107.528 37.032 106.632 37.496C105.736 37.944 104.672 38.168 103.44 38.168ZM124.641 31.064C124.641 31.544 124.609 31.976 124.545 32.36H114.825C114.905 33.32 115.241 34.072 115.833 34.616C116.425 35.16 117.153 35.432 118.017 35.432C119.265 35.432 120.153 34.896 120.681 33.824H124.305C123.921 35.104 123.185 36.16 122.097 36.992C121.009 37.808 119.673 38.216 118.089 38.216C116.809 38.216 115.657 37.936 114.633 37.376C113.625 36.8 112.833 35.992 112.257 34.952C111.697 33.912 111.417 32.712 111.417 31.352C111.417 29.976 111.697 28.768 112.257 27.728C112.817 26.688 113.601 25.888 114.609 25.328C115.617 24.768 116.777 24.488 118.089 24.488C119.353 24.488 120.481 24.76 121.473 25.304C122.481 25.848 123.257 26.624 123.801 27.632C124.361 28.624 124.641 29.768 124.641 31.064ZM121.161 30.104C121.145 29.24 120.833 28.552 120.225 28.04C119.617 27.512 118.873 27.248 117.993 27.248C117.161 27.248 116.457 27.504 115.881 28.016C115.321 28.512 114.977 29.208 114.849 30.104H121.161ZM126.229 31.304C126.229 29.96 126.493 28.768 127.021 27.728C127.566 26.688 128.294 25.888 129.206 25.328C130.134 24.768 131.166 24.488 132.302 24.488C133.294 24.488 134.158 24.688 134.894 25.088C135.646 25.488 136.246 25.992 136.694 26.6V24.704H140.078V38H136.694V36.056C136.262 36.68 135.662 37.2 134.894 37.616C134.142 38.016 133.27 38.216 132.278 38.216C131.158 38.216 130.134 37.928 129.206 37.352C128.294 36.776 127.566 35.968 127.021 34.928C126.493 33.872 126.229 32.664 126.229 31.304ZM136.694 31.352C136.694 30.536 136.534 29.84 136.214 29.264C135.894 28.672 135.462 28.224 134.918 27.92C134.374 27.6 133.79 27.44 133.166 27.44C132.542 27.44 131.966 27.592 131.438 27.896C130.91 28.2 130.478 28.648 130.142 29.24C129.822 29.816 129.662 30.504 129.662 31.304C129.662 32.104 129.822 32.808 130.142 33.416C130.478 34.008 130.91 34.464 131.438 34.784C131.982 35.104 132.558 35.264 133.166 35.264C133.79 35.264 134.374 35.112 134.918 34.808C135.462 34.488 135.894 34.04 136.214 33.464C136.534 32.872 136.694 32.168 136.694 31.352ZM146.719 26.768C147.151 26.064 147.711 25.512 148.399 25.112C149.103 24.712 149.903 24.512 150.799 24.512V28.04H149.911C148.855 28.04 148.055 28.288 147.511 28.784C146.983 29.28 146.719 30.144 146.719 31.376V38H143.359V24.704H146.719V26.768ZM152.198 31.352C152.198 29.976 152.478 28.776 153.038 27.752C153.598 26.712 154.374 25.912 155.366 25.352C156.358 24.776 157.494 24.488 158.774 24.488C160.422 24.488 161.782 24.904 162.854 25.736C163.942 26.552 164.67 27.704 165.038 29.192H161.414C161.222 28.616 160.894 28.168 160.43 27.848C159.982 27.512 159.422 27.344 158.75 27.344C157.79 27.344 157.03 27.696 156.47 28.4C155.91 29.088 155.63 30.072 155.63 31.352C155.63 32.616 155.91 33.6 156.47 34.304C157.03 34.992 157.79 35.336 158.75 35.336C160.11 35.336 160.998 34.728 161.414 33.512H165.038C164.67 34.952 163.942 36.096 162.854 36.944C161.766 37.792 160.406 38.216 158.774 38.216C157.494 38.216 156.358 37.936 155.366 37.376C154.374 36.8 153.598 36 153.038 34.976C152.478 33.936 152.198 32.728 152.198 31.352ZM174.988 24.512C175.996 24.512 176.892 24.736 177.676 25.184C178.46 25.616 179.068 26.264 179.5 27.128C179.948 27.976 180.172 29 180.172 30.2V38H176.812V30.656C176.812 29.6 176.548 28.792 176.02 28.232C175.492 27.656 174.772 27.368 173.86 27.368C172.932 27.368 172.196 27.656 171.652 28.232C171.124 28.792 170.86 29.6 170.86 30.656V38H167.5V20.24H170.86V26.36C171.292 25.784 171.868 25.336 172.588 25.016C173.308 24.68 174.108 24.512 174.988 24.512Z" fill="white" />
                        </svg>



                    </div>
                </SearchStyled>
            </NavbarStyled>
            <Jobs />
        </MainLayout>
    )
}
const MainLayout = styled.div`
width: 100%;
height: 100%;
padding:0 6rem;
`
const NavbarStyled = styled.div`

width: 100%;
height: 312px;
background: linear-gradient(274.83deg, #5DB0DF 0.58%, #5D7ADF 74.3%);
padding:2rem;

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
top: 260px;

background: #FFFFFF;
box-shadow: 2px 12px 8px 2px rgba(0, 0, 0, 0.05);
border-radius: 24px;
display: grid;
grid-template-columns: 4fr 4fr 3fr;
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
    padding-left: 1rem;

font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
/* identical to box height */


color: #7B7B7B;
}
.css-i4bv87-MuiSvgIcon-root {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: #7B7B7B;
    width: 1.5em;
    height: 1.5em;
    display: inline-block;
    fill: currentColor;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-size: 1.5rem;
}
}
.searchButton{
    cursor: pointer;
        position: relative;

}

.locationSelect{
display: grid;
grid-template-columns: 1fr 5fr;
select{
    font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
}
}
`
export default Navbar
