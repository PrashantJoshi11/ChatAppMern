import { Box, Stack } from '@mui/material'
import React from 'react'
import { Chat_History } from '../../data'
import { DocMsg, Linkmsg, Mediamsg, Textmsg, TimeLine } from './MsgType';

function Message() {
  return (
    <Box p={3}  >
        <Stack spacing={3}  >
            {
                Chat_History.map((elm)=>{
                   switch(elm.type){
                    
                    case "divider":
                        return <TimeLine val={elm}/>
                        break;

                        case "msg":

                            switch(elm.subtype){
                                case "img":
                                     return  <Mediamsg val={elm} />
                                    break;
                                    case "doc":
                                        return <DocMsg val={elm} />
                                        break;
                                        case "link":
                                            return <Linkmsg val={elm} />
                                            break;
                                            case "reply":
                                                break;
                                                default:
                                                    return <Textmsg val={elm} ></Textmsg>
                                                break;
                            }
                         default:
                       return <></>
                            break;   
                   }
                })
            }

        </Stack>
    </Box>
  )
}

export default Message