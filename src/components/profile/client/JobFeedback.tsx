import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Divider, Paper, Typography, Rating } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  margin: 10,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#fbbc05' : '#308fe8',
  },
}));

const clientFeedback = [{
  name: 'perry lance',
  value: 3,
  date: '2020-03-12',
  description: 'Delivered good work on this Node JS development project and I enjoyed working with him. His skills were reasonably strong. I enjoyed working with him.'
},
{
  name: 'akira suzuki',
  value: 5,
  date: '2020-03-12',
  description: 'Delivered good work on this Node JS development project and I enjoyed working with him. His skills were reasonably strong. I enjoyed working with him.'
},
{
  name: 'perry lance',
  value: 5,
  date: '2020-03-12',
  description: 'Delivered good work on this Node JS development project and I enjoyed working with him. His skills were reasonably strong. I enjoyed working with him.'
}];

export default function JobFeedback() {
  return (
    <Paper style={{ marginBottom: '20px', border: '1px solid #cccccc' }}>
      <Box style={{ padding: '20px' }}>
        <Typography style={{ fontSize: '20px' }}>
          Job feedback
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ flexGrow: 1, marginRight: '3%' }}>
            <BorderLinearProgress variant="determinate" value={100} />
            <BorderLinearProgress variant="determinate" value={80} />
            <BorderLinearProgress variant="determinate" value={30} />
            <BorderLinearProgress variant="determinate" value={60} />
            <BorderLinearProgress variant="determinate" value={10} />
          </Box>
          <Box>
            <Box>4.3</Box>
            <Rating value={3} readOnly />
            <Box>58 reviews</Box>
          </Box>
        </Box>
        <Divider />
        {
          clientFeedback.map((item, index) => {
            return (
              <Box key={index}>
                <Box style={{ display: 'flex', width: 'fit-content', margin: '10px' }}>
                  <Box><AccountCircleIcon style={{ color: '#9e9e9e', marginRight: '6px' }} /></Box>
                  <Box>
                    <Box>{item.name}</Box>
                    <Box sx={{ display: 'flex' }}>
                      <Rating value={item.value} readOnly style={{ marginRight: '10px' }} />
                      <Box>{item.date}</Box>
                    </Box>
                  </Box>
                </Box >
                <Box>{item.description}</Box>
              </Box>
            )

          })
        }
      </Box>
      <Box color='#336def' width='fit-content' display='flex'>
        <Typography margin='6px'>See more</Typography>
        <KeyboardArrowDownIcon />
      </Box>
    </Paper>
  )
}
