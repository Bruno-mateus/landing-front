import { styled } from "@stitches/react";

export const SuccessContainer = styled('div',{
    width:"100%",
    display:"flex",
    flexDirection:"column",
    gap:"3.5rem",
    alignItems:"center",
    justifyContent:'center',
    paddingBottom:"3.5rem",
    "@media (max-width:600px)": {
        img:{
            display:"none"
        },
        paddingBottom:"19rem",
      },
})