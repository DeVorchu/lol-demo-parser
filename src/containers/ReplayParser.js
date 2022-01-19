import React, { useState } from 'react'
import { BsFillFileEarmarkSlidesFill } from 'react-icons/bs';
import { StyledInputFile, StyledLabel } from '../styles/UI/ui.styled';
import DataTable from '../components/DataTable'
import { AppWraper } from '../styles/app.styled';

export default function ReplayParser() {

    const [demoData, setDemoData] = useState()
    

    const handleFileUpload = e => {
        const fileReader = new FileReader();
        fileReader.readAsBinaryString(e.target.files[0], "UTF-8")

        fileReader.onload = e => {
            let leagueData = e.target.result 
            let startPos = leagueData.search('{"gameLength"')
            let result = leagueData.slice(startPos)
            let endPoint = result.search('}]"}')
            result = result.substring(0, endPoint +4);
            result = result.replace('"[', '[')
            result = result.replace(']"', ']')
            result = result.replace(/\\/g, '')

            setDemoData(JSON.parse(result))

        };
    };

    return (
        <AppWraper>
             <StyledLabel htmlFor="file-upload" >
                <BsFillFileEarmarkSlidesFill /> <span>Dodaj demo</span>
            </StyledLabel>
            <StyledInputFile id="file-upload" type="file" onChange={handleFileUpload}/>

            <DataTable {...demoData}/>
        </AppWraper>
    )
}
