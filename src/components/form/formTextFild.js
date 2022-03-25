import {Grid} from "@mui/material";
import * as React from "react";
import {styled} from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import {makeStyles} from "@material-ui/core";

import Box from "@mui/material/Box";


const FormTextField = styled((props) => (
    <TextField InputProps={{disableUnderline: true}} {...props} />
))
(({theme}) => ({
    '& .MuiFilledInput-root': {
        border: '1px solid #e2e2e1',
        backgroundColor: '#fcfcfb',
    },
}));


const useStyles = makeStyles({
    field: {
        padding: '3',
        xs: 8
    },
    grid: {
        marginTop: 7,
        marginBottom: 7,

    }
})


export const FormOneLineGrid = ({label, value, set}) => {
    const classes = useStyles()
    return (
        <Box>
            <Grid item className={classes.grid} >
                <FormTextField
                    className={classes.field}
                    label={label}
                    value={value}
                    id={label}
                    variant="filled"
                    fullWidth
                    onChange={(e) => set(e.target.value)}
                />
            </Grid>
        </Box>
    );
};


export const FormTwoLineGrid = ({label1,value1, set1, label2, value2, set2}) => {
    const classes = useStyles()
    return (
        <Grid container spacing={2}>
            <Grid item className={classes.grid}>
                <FormTextField
                    label={label1}
                    value={value1}
                    defaultValue=""
                    id={label1}
                    variant="filled"
                    fullWidth
                    onChange={(e) => set1(e.target.value)}
                />
            </Grid>
            <Grid item className={classes.grid}>
                <FormTextField
                    label={label2}
                    value={value2}
                    defaultValue=""
                    id={label2}
                    variant="filled"
                    fullWidth
                    onChange={(e) => set2(e.target.value)}
                />
            </Grid>
        </Grid>
    );
};


export const FormBdayGrid = ({label}) => {
    const classes = useStyles()
    return (
        <Box>
            <Grid item className={classes.grid}>
                <TextField
                    id={label}
                    label={{label}}
                    type="date"
                    // defaultValue="2021-10-25"
                    // sx={{width: 220}}
                    // InputLabelProps={{
                    //     shrink: true,
                    // }}
                />
            </Grid>
        </Box>
    );
};