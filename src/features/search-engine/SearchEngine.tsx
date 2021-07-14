import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Button, Input, InputLabel, Paper } from "@material-ui/core";
import React, { useState } from "react";
import styles from "./SearchEngine.module.css";
import axios from "axios";

interface SearchEngineProps {
  title: string;
}

interface Product {
  name: string;
  kcal: number;
  quantityInGrams: number;
}

const SearchEngine: React.FC<SearchEngineProps> = (props) => {
  let [productsList, setProductsList] = useState<Product[]>([]);
  const [productNameInput, setProductNameInput] = useState<string | null>("");
  const [productQuantityInGrams, setproductQuantityInGrams] = useState(0);
  const [productCalories, setProductCalories] = useState(0);
  const [productQuantity, setProductQuantity] = useState(0);

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
  };

  const changeQuantityOfProductHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let quantityOfProduct = event.target.value;
    const quantityOfProductAsNumber = +quantityOfProduct;
    setProductQuantity(quantityOfProductAsNumber);
  };

  const calculateSumOfCalories = (
    calories: number,
    quantityInGrams: number,
    quantity: number
  ) => {
    const productQuantity = quantityInGrams * quantity;
    const sumOfCalories = (calories * productQuantity) / quantityInGrams;
    return sumOfCalories;
  };

  return (
    <div className={styles.searchEngineContainer}>
      <Paper elevation={3} square>
        <p className={styles.title}>{props.title}</p>

        <form onSubmit={submitHandler}>
          <Autocomplete
            value={productNameInput}
            onChange={selectOptionHandler}
            id="search-component"
            freeSolo
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
            type="number"
            label="Product in grams"
            variant="outlined"
            InputProps={{ inputProps: { min: 1 } }}
            value={productQuantityInGrams}
          />
          <TextField
            type="number"
            label="Quantity"
            variant="outlined"
            InputProps={{ inputProps: { min: 0.0001 } }}
            onChange={changeQuantityOfProductHandler}
            value={productQuantity}
          />
          <InputLabel>
            {calculateSumOfCalories(
              productCalories,
              productQuantityInGrams,
              productQuantity
            )}
          </InputLabel>
          <Button
            variant="contained"
            color="secondary"
            // disabled
            type="submit"
          >
            ADD
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default SearchEngine;
