import {useState} from "react";
import {Navigate, useNavigate} from 'react-router-dom'
import {
    Button,
    Container,
    Paper,
    TextField
} from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {makeStyles} from '@material-ui/core'
import Typography from "@mui/material/Typography";


const useStyles = makeStyles({
    field: {
        margin: 'auto',
        display: 'block'
    },
    formContainer: {
        marginTop: 30,
        marginBottom: 20,
    }
})


const Register = ({data}) => {
    const classes = useStyles()
    const navigate = useNavigate()

    //component state
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)
    const [category, setCategory] = useState('money')


    const handleSubmit = (e) => {
        e.preventDefault();
        const items = {title,};

        fetch('http://localhost:8000/items/', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(items)
        }).then(() => {
            navigate('/');
        })
    }

    console.log("inside")
    return (
        <Container size="sm" className={classes.formContainer}>
            <Paper variant="outlined" square>
                <Container size="sm" className={classes.formContainer}>
                    <Typography
                        variant="h6"
                        color="textSecondary"
                        component="h2"
                        gutterBottom
                    >create Profile
                    </Typography>
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <TextField className={classes.field}
                                   onChange={(e) => setTitle(e.target.value)}
                                   label="Note Title"
                                   variant="outlined"
                                   color="primary"
                                   fullWidth
                                   required
                                   error={titleError}

                                   variant="filled"
                        />
                        <TextField className={classes.field}
                                   onChange={(e) => setDetails(e.target.value)}
                                   label="Details"
                                   variant="outlined"
                                   color="primary"
                                   background
                                   multiline
                                   rows={4}
                                   fullWidth
                                   required
                                   error={detailsError}
                        />

                        <Button
                            type="submit"
                            color="secondary"
                            variant="contained"
                            endIcon={<KeyboardArrowRightIcon/>}>
                            Submit
                        </Button>
                    </form>
                </Container>
            </Paper>
        </Container>
    )
}

export default Register;