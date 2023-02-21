import React, { useState } from 'react';
import {saveRepo, deleteRepo, isSavedRepo} from '../js/localstoarge'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Chip from '@mui/material/Chip';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const RepositoryItem = ({data}) => {
    const createDate = new Date(data.createDate);
    const [isSaved, setSaved] = useState(isSavedRepo(data.id));


    const handleAddClick = ()=>{
      if (isSaved) return;

      saveRepo(data);
      setSaved(isSavedRepo(data.id));
    }

    const handleDeleteClick = ()=>{
      if (!isSaved) return;

      deleteRepo(data.id);
      setSaved(isSavedRepo(data.id));
    }

    const handleTitleClick = ()=>{
      alert('이슈리스트')
    }
    

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Grid xs={4}>
                <Item>{data.writer}</Item>
                </Grid>
                <Grid xs={5}>
                <Item onClick={handleTitleClick}>{data.title}</Item>
                </Grid>
                {/* <Grid xs>
                <Item>{createDate}</Item>
                </Grid> */}
                <Grid xs>
                {/* <Item>add</Item> */}
                <Chip label="Add" onClick={handleAddClick} variant="outlined" disabled={isSaved}/>

                </Grid>
                <Grid xs>
                {/* <Item>delete</Item> */}
                <Chip label="Delete" onClick={handleDeleteClick} disabled={!isSaved} />

                </Grid>
            </Grid>
        </Box>
    );
  };

export default RepositoryItem;