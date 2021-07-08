import { Button, Input, InputLabel, Paper } from "@material-ui/core";
import React, { useState } from "react";
import styles from "./SearchEngine.module.css";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

interface SearchEngineProps {
  title: string;
}

interface Product {
  name: string;
  kcal: number;
  quantityInGrams: number;
}

const dummyProducts: Product[] = [
  { name: "egg", kcal: 90, quantityInGrams: 100 },
  { name: "cucumber", kcal: 50, quantityInGrams: 100 },
  { name: "plum", kcal: 100, quantityInGrams: 100 },
];

const SearchEngine: React.FC<SearchEngineProps> = (props) => {
  let [productsList, setProductsList] = useState([]);
  const [productNameInput, setProductNameINput]=useState('');
  const [productQuantityInput, setProductQuantityInput]=useState('');

  //useState ustawic initial value quantity na 1
  //kiedy ktos wpisze 3 pierwsze litery produktu strzal na backend po liste produktow
  // https://stackoverflow.com/questions/66249791/load-material-ui-autocomplete-suggestions-after-user-input

  const changeTextFieldHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const enteredProduct = event.target.value.length;
    if (enteredProduct < 3 && enteredProduct !== 0) {
      return;
    } else {
      //request API, po pobraniu produktow umieszczamy je w useState
    }
  };

  const submitHandler = (event:React.FormEvent) => {
    event.preventDefault();
    console.log("form submit");
    
  };

  return (
    <div className={styles.searchEngineContainer}>
      <Paper elevation={3} square>
        <p className={styles.title}>{props.title}</p>

        <form onSubmit={submitHandler}>
          <Autocomplete
            id="search-component"
            freeSolo
            options={dummyProducts.map((product) => product.name)}
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
            label="Quantity in grams"
            variant="outlined"
            InputProps={{ inputProps: { min: 1 } }}
          />
          {/* ta labelka ma sie pokazac dopiero po wybraniu produktu i ilosci */}
          <InputLabel>60 kcal</InputLabel>
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
