import { Backdrop, CircularProgress } from "@mui/material"


export default function Loading(props){

    return(
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={props.show}
        >
        <CircularProgress color="inherit" />
        </Backdrop>
    )
}