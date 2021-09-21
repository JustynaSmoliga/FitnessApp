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
import { useDispatch } from "react-redux";
import { getProducts, Product } from "../../client/productClient";
import { addProduct } from "../../slice/mealsSlice";

export interface AddMealProductForm {
  productId: string;
  mealId: string;
  weightInGrams: number;
}

interface AddMealProductProps {
  showAddMealProduct: React.Dispatch<React.SetStateAction<boolean>>;
  mealId: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        marginBottom: "5%",
        // width: "50%",
      },
    },
    formContainer: {
      display: "flex",
      flexDirection: "column",
      width: "300px",
      // marginLeft: "3%",
      marginRight: "3%",
      // paddingTop: "2%",
      // alignContent: "center",
    },
    inputAlignment: {
      width: "100%",
    },
    addProductParagraph: {
      marginTop: "0",
      marginBottom: "0",
      textAlign: "left",
      color: theme.palette.secondary.dark,
      // fontWeight: "bold",
      // fontSize: "1rem",
    },
  })
);

const AddMealProduct: React.FC<AddMealProductProps> = (props) => {
  const classes = useStyles();

  const [productsList, setProductsList] = useState<Product[]>([]);
  const [productName, setProductName] = useState<string | null>("");
  const [productQuantityInGrams, setProductQuantityInGrams] = useState(0);
  const [productCalories, setProductCalories] = useState(0);
  const [productWeightInGrams, setProductWeightInGrams] = useState(0);
  const [productId, setProductId] = useState("");

  const dispatch = useDispatch();

  const changeTextFieldHandler = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const enteredProductLength = event.target.value.length;
    if (enteredProductLength < 3) {
      return;
    } else {
      const enteredProduct = event.target.value;
      const productsPrompt = await getProducts(enteredProduct);
      setProductsList(productsPrompt);
    }
  };

  const selectOptionHandler = (event: any, newValue: string | null) => {
    if (newValue === null) {
      setProductWeightInGrams(0);
      setProductQuantityInGrams(0);
      setProductCalories(0);
      return;
    }
    setProductName(newValue);
    const productIndex = productsList.findIndex(
      (product) => product.name === newValue
    );

    const selectedProductQuantityInGrams =
      productsList[productIndex].weightInGrams;
    const selectedProductCalories = productsList[productIndex].kcal;
    const selectedProductId = productsList[productIndex].id;

    setProductWeightInGrams(100);
    setProductQuantityInGrams(selectedProductQuantityInGrams);
    setProductCalories(selectedProductCalories);
    setProductId(selectedProductId);
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

    const product: AddMealProductForm = {
      mealId: props.mealId,
      productId: productId,
      weightInGrams: productWeightInGrams,
    };

    dispatch(addProduct(product));

    props.showAddMealProduct(false);
  };

  const cancelButtonClickHandler = () => {
    props.showAddMealProduct(false);
  };

  return (
    <Box className={classes.formContainer}>
      <form onSubmit={submitHandler} className={classes.root}>
        <p className={classes.addProductParagraph}>ADD NEW PRODUCT:</p>
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
          label="Calories in product portion"
          variant="outlined"
          value={`${productCalories} kcal / ${productQuantityInGrams} g`}
          InputProps={{
            readOnly: true,
          }}
          className={classes.inputAlignment}
        />
        <Box display="flex" width="100%">
          <TextField
            type="number"
            label="Weight[g]"
            variant="outlined"
            onChange={changeQuantityOfProductHandler}
            value={productWeightInGrams}
          />
          <Box width="10%"></Box>
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
            label="Calories"
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
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            disabled={!productCalories}
          >
            Save
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddMealProduct;
