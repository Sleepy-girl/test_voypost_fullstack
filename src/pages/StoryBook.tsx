import { Box, Typography } from '@material-ui/core'
import React from 'react'

const fontSize=["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2"]

function StoryBook() {
  return (
    <Box>
      {fontSize.map(fsize => 
        <Typography variant={fsize} >
          Typography
        </Typography> )
      }
    </Box>
  )
}

export default StoryBook
