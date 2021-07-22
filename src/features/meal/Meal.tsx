import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {
  Box,
  Button,
  createStyles,
  makeStyles,
  Paper,
  Theme,
} from "@material-ui/core";
import React, { useState } from "react";
import styles from "./Meal.module.css";
import { getProducts } from "../../client/productClient";
import axios from "axios";
import ProductsListTable from "../products-list-table/ProductsListTable";

interface MealProps {
  title: string;
  productsEaten: Product[];
  date: Date;
}

interface Product {
  name: string;
  totalCalories: number;
  caloriesInGrams: number;
  quantity: number;
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
      paddingTop:'2%'
    },
  })
);

const Meal: React.FC<MealProps> = (props) => {
  const classes = useStyles();

  let [productsList, setProductsList] = useState<Product[]>([]);
  const [productNameInput, setProductNameInput] = useState<string | null>("");
  const [productQuantityInGrams, setproductQuantityInGrams] = useState(0);
  const [productCalories, setProductCalories] = useState(0);
  const [productQuantity, setProductQuantity] = useState(0);
  const [searchEngineShowed, setSearchEngineShowed] = useState(false);

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
      setProductQuantity(0);
      setproductQuantityInGrams(0);
      setProductCalories(0);
      return;
    }
    setProductNameInput(newValue);
    const productIndex = productsList.findIndex(
      (product) => product.name === newValue
    );

    const selectedProductQuantityInGrams =
      productsList[productIndex].caloriesInGrams;
    console.log(selectedProductQuantityInGrams);
    const selectedProductCalories = productsList[productIndex].totalCalories;
    // console.log(selectedProductCalories);

    setProductQuantity(1);
    setproductQuantityInGrams(selectedProductQuantityInGrams);
    setProductCalories(selectedProductCalories);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("form submit");
    setSearchEngineShowed(false);
  };

  const changeQuantityOfProductHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let quantityOfProduct = event.target.value;
    const quantityOfProductAsNumber = +quantityOfProduct;
    setProductQuantity(quantityOfProductAsNumber);
  };

  const addProductButtonClickHandler = () => {
    setSearchEngineShowed(true);
  };

  const cancelButtonClickHandler = () => {
    setSearchEngineShowed(false);
  };

  const calculateSumOfCalories = (
    calories: number,
    quantityInGrams: number,
    quantity: number
  ) => {
    if (calories === 0) {
      return 0;
    }
    const productQuantity = quantityInGrams * quantity;
    const sumOfCalories = (calories * productQuantity) / quantityInGrams;
    return sumOfCalories;
  };

  return (
    <div>
      <Paper elevation={3} square>
        <p className={styles.title}>{props.title}</p>
        <Box display="flex" minWidth="490px" justifyContent="center">
          <ProductsListTable
            productsEaten={props.productsEaten}
            date={props.date}
          />

          {searchEngineShowed && (
            <Box className={classes.form}>
              <form onSubmit={submitHandler} className={classes.root}>
                <Autocomplete
                  value={productNameInput}
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
                      value={productNameInput}
                    />
                  )}
                />

                <TextField
                  label="Calories per product portion: "
                  variant="outlined"
                  value={`${productCalories} kcal / ${productQuantityInGrams} g`}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <Box display="flex">
                  <TextField
                    type="number"
                    label="Quantity:"
                    variant="outlined"
                    onChange={changeQuantityOfProductHandler}
                    value={productQuantity}
                  />
                  <Box width="30px"></Box>
                  <TextField
                    value={calculateSumOfCalories(
                      productCalories,
                      productQuantityInGrams,
                      productQuantity
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
          )}
        </Box>
        {!searchEngineShowed && (
          <Box paddingBottom='4%'>
            <Button
              variant="contained"
              color="secondary"
              type="button"
              onClick={addProductButtonClickHandler}
            
            >
              Add product
            </Button>
          </Box>
        )}
      </Paper>
    </div>
  );
};

export default Meal;
