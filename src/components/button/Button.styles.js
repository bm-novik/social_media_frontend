import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({

    button: {
        background: "#ec5990",
        color: "secondary",
        textTransform: "uppercase",
        border: "none",
        marginTop: "40px",
        padding: "20px",
        fontSize: "16px",
        fontWeight: "100",
        letterSpacing: "10px",
        display: "block",
        appearance: "none",
        borderRadius: "4px",
        width: "100%",
    },

    buttonBlack: {
        background: "black",
        border: "1px solid white",
    }
})
export const FormSubmitButton = () => {
    const classes = useStyles()
    return (
        <button className={classes.button}>submit</button>
    );
};

