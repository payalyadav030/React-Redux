import Button from '@material-ui/core/Button';


const ButtonComp = ({title, color, onClick})=>{
    return(
        <Button variant="contained" 
        size="small"
        onClick={onClick}
        color={color}>
        {title}
      </Button>
    )

}
export default ButtonComp;