import { styled } from "@/styles";

export const Overlay = styled('div',{
    height:"100vh",
    width:"100%",
    position:'fixed',
    backgroundColor:"rgba(0,0,0,0.8)",
    backdropFilter: "blur(5px)",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    zIndex:10,
    
})

export const FormContainer = styled("form",{
    
    width:"40rem",
    height:"35.75",
    padding:"2rem",
    borderRadius:12,
    backgroundColor:"$white",
    position:"relative",
    header:{
        
        width:"100%",
        
        background:"red",
        button:{
            background:"transparent",
            border:'none',
            cursor:"pointer",
            top:12,
            right:12,
            position:"absolute",
        }
    },
    small:{
        fontSize:".75rem",
        color:"$gray300"
    },
    p:{
        marginTop:"2rem"
    },
    h3:{
        color:"$gray950"
    },
    strong:{
        fontSize:"0.875rem",
        color:"$gray800"
    },
    "@media (max-width:500px)": {
        width:"100%",
        height:"100%",
        borderRadius:0,
        padding:"1.5rem",
        margin:"auto",
        overflow:"auto"
      },
})

export const InputGroup=styled('div',{
    display:"grid",
    marginTop:"2rem",
    gridTemplateColumns:"repeat(2, 1fr)",
    gap:"1.5rem",
    paddingBottom:"1.5rem",
    label:{
        display:"flex",
        flexDirection:"column",
        gap:".5rem"
    },
    input:{
        width:"17.25rem",
        height:"3rem",
        padding:".75rem 1rem",
        borderRadius:6,
        border: "1px solid $gray100",
        "&::placeholder":{
            color:"$gray200"
        }

    },
    "@media (max-width:500px)": {
        gridTemplateColumns:"1fr",
        input:{
            width:"100%",
        }
      },
})

export const RadioGroup=styled('div',{
    display:"grid",
    gridTemplateColumns:"repeat(2, 1fr)",
    marginTop:"1rem",
    paddingBottom:"2rem",
    input:{
        "-webkit-appearance": "none",
        "-moz-appearance": "none",
        appearance: "none",
        width: 20,
        height: 20,
        borderRadius: "50%",
        border: "2px solid $gray100",
        boxShadow:"inset 0px 0px 0px 3px #fff",
        outline: "none",
        cursor: "pointer",
        "&:checked":{
            backgroundColor:"$orange700"
        },
       
    },
    label:{
        display:"flex",
        alignItems:"center",
        cursor: "pointer",
        span:{
            marginLeft:8
        }
    },
    "@media (max-width:500px)": {
        gridTemplateColumns:"1fr",
        gap:"1.25rem"
      },
})