import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { findRepo } from '../js/gh';

const SearchBar = (props) => {
    const [title, setTitle] = useState("");

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }
    
    const handleSearchBtn = async() => {
        const dataArr = await findRepo(title);
        props.onDatas(dataArr);
    }


    return (
    <div className="div-search">
        <p>Find Repository</p>
        <TextField className="ta" label="input repository name" variant="standard" onChange={onChangeTitle}/>
        <Button variant="contained" onClick={handleSearchBtn}>Search</Button>
    </div>
    );
  };
export default SearchBar;
