import {
  Button,
  createStyles,
  makeStyles,
  TextField,
  Theme,
  Box,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useState } from "react";
import { getProducts } from "../../client/productClient";
import { Product } from "../meal/Meal";

interface AddMealProductProps {
  showAddMealProduct: React.Dispatch<React.SetStateAction<boolean>>;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        // margin: theme.spacing(1),
        marginBottom: "5%",
      },
    },
    form: {
      width: "170px",
      marginLeft: "1%",
      marginRight: "3%",
      paddingTop: "2%",
    },
  })
);

const AddMealProduct: React.FC<AddMealProductProps> = (props) => {
  const classes = useStyles();

  const [productsList, setProductsList] = useState<Product[]>([]);
  const [productName, setproductName] = useState<string | null>("");
  const [productQuantityInGrams, setproductQuantityInGrams] = useState(0);
  const [productCalories, setProductCalories] = useState(0);
  const [productWeightInGrams, setProductWeightInGrams] = useState(0);

  const changeTextFieldHandler = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const enteredProductLength = event.target.value.length;
    if (enteredProductLength < 3) {
      return;
    } else {
      const enteredProduct = event.target.value;
      const products = await getProducts(enteredProduct);
      setProductsList(products);
    }
  };

  const selectOptionHandler = (event: any, newValue: string | null) => {
    if (newValue === null) {
      setProductWeightInGrams(0);
      setproductQuantityInGrams(0);
      setProductCalories(0);
      return;
    }
    setproductName(newValue);
    const productIndex = productsList.findIndex(
      (product) => product.name === newValue
    );

    const selectedProductQuantityInGrams =
      productsList[productIndex].caloriesInGrams;
    const selectedProductCalories = productsList[productIndex].totalCalories;

    setProductWeightInGrams(100);
    setproductQuantityInGrams(selectedProductQuantityInGrams);
    setProductCalories(selectedProductCalories);
  };

  const changeQuantityOfProductHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let quantityOfProduct = event.target.value;
    const quantityOfProductAsNumber = +quantityOfProduct;
    setProductWeightInGrams(quantityOfProductAsNumber);
  };

  const calculateTotalCalories = (
    calories: number,
    quantityInGrams: number,
    weightInGrams: number
  ) => {
    if (calories === 0) {
      return 0;
    }

    const totalCalories = (calories * weightInGrams) / quantityInGrams;
    return totalCalories;
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("form submit");
    // let newProduct = {
    //   name: productName,
    //   totalCalories: productCalories,
    //   caloriesInGrams: productQuantityInGrams,
    //   quantity: productQuantity,
    // };

    //wywolac akcje z reduxa, w ktorej wysylamy na backend newProduct a nastepnie znow pobieramy cala liste produktow.

    props.showAddMealProduct(false);
  };

  const cancelButtonClickHandler = () => {
    props.showAddMealProduct(false);
  };

  return (
    <Box className={classes.form}>
      <form onSubmit={submitHandler} className={classes.root}>
        <Autocomplete
          value={productName}
          onChange={selectOptionHandler}
          freeSolo
          id="search-component"
          selectOnFocus
          blurOnSelect
          handleHomeEndKeys
          options={productsList.map((product) => product.name)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search product"
              margin="normal"
              variant="outlined"
              onChange={changeTextFieldHandler}
              value={productName}
            />
          )}
        />
        <TextField
          label="Calories in product portion: "
          variant="outlined"
          value={`${productCalories} kcal / ${productQuantityInGrams} g`}
          InputProps={{
            readOnly: true,
          }}
        />
        <Box display="flex">
          <TextField
            type="number"
            label="Weight in grams:"
            variant="outlined"
            onChange={changeQuantityOfProductHandler}
            value={productWeightInGrams}
          />
          <Box width="30px"></Box>
          <TextField
            value={calculateTotalCalories(
              productCalories,
              productQuantityInGrams,
              productWeightInGrams
            )}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            label="Total calories: "
          />
        </Box>
        <Box
          paddingTop="5%"
          paddingBottom="15%"
          display="flex"
          justifyContent="center"
        >
          <Button
            variant="outlined"
            color="secondary"
            type="button"
            onClick={cancelButtonClickHandler}
          >
            Cancel
          </Button>
          <Box width="5%"></Box>
          <Button variant="contained" color="secondary" type="submit">
            Save
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddMealProduct;