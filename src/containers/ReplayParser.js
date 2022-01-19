import React, { useState } from 'react'
import { BsFillFileEarmarkSlidesFill } from 'react-icons/bs';
import { StyledButton, StyledInputFile, StyledLabel } from '../styles/ui.styled';

export default function ReplayParser() {

    const [demoData, setDemoData] = useState()
    

    const handleFileUpload = e => {
        
    };

    return (
        <div>
             <StyledLabel htmlFor="file-upload" >
                <BsFillFileEarmarkSlidesFill /> <span>Dodaj demo</span>
            </StyledLabel>
            <StyledInputFile id="file-upload" type="file" onChange={handleFileUpload}/>
        </div>
    )
}
