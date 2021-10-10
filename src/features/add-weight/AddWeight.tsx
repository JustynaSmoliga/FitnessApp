//do danego dnia moze byc przypisana tylko jedna waga
//jesli tego samego dnia uzytkownik bedzie chcial dodac nowa wage, to powinno sie pojawic okno z pytaniem
//czy na pewno chce zmienic wage przypisana do tego dnia i ze poprzednia waga zostanie utracona

import {
  Box,
  createStyles,
  makeStyles,
  Paper,
  TextField,
  Theme,
} from "@material-ui/core";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       "& .MuiTextField-root": {
//         marginBottom: "5%",
//       },
//     },
//   })
// );

const AddWeight = () => {
  //   const classes = useStyles();

  return (
    <Box width="50%">
      <Paper elevation={3} square>
        <p>ADD YOUR WEIGHT</p>
        <TextField label="Your weight" variant="outlined" />
      </Paper>
    </Box>
  );
};

export default AddWeight;
