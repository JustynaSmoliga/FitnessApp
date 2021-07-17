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
import styles from "./SearchEngine.module.css";
import axios from "axios";
import ProductsListTable from "../products-list-table/ProductsListTable";

interface MealProps {
  title: string;
}

interface Product {
  name: string;
  kcal: number;
  quantityInGrams: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        // margin: theme.spacing(1),
        marginBottom: "5%",
        // marginRight: "2%",
        // marginLeft: "2%",
      },
      "& .MuiAutocomplete-inputRoot": {
        width: "100%",
      },
    },
    form: {
      width: "300px",
    },
  })
);

const SearchEngine: React.FC<MealProps> = (props) => {
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
      const products = await axios.get("http://localhost:8080/products", {
        params: { productName: enteredProduct },
      });

      setProductsList(products.data);
      console.log(products.data);
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
      productsList[productIndex].quantityInGrams;
    const selectedProductCalories = productsList[productIndex].kcal;
    console.log(selectedProductCalories);

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
    <div className={styles.searchEngineContainer}>
      <Paper elevation={3} square>
        <p className={styles.title}>{props.title}</p>
        <ProductsListTable />

        {searchEngineShowed && (
          <Box className={classes.form}>
            <form onSubmit={submitHandler} className={classes.root}>
              <Box padding="6px">
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
              </Box>
              <TextField
                label="Calories per product portion: "
                variant="outlined"
                value={`${productCalories} kcal / ${productQuantityInGrams} g`}
                InputProps={{
                  readOnly: true,
                }}
              />

              <TextField
                type="number"
                label="Quantity:"
                variant="outlined"
                onChange={changeQuantityOfProductHandler}
                value={productQuantity}
              />
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
              <Box paddingBottom="10%" display="flex" justifyContent="center">
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
        {!searchEngineShowed && (
          <Button
            variant="contained"
            color="secondary"
            type="button"
            onClick={addProductButtonClickHandler}
          >
            Add
          </Button>
        )}
      </Paper>
    </div>
  );
};

export default SearchEngine;
