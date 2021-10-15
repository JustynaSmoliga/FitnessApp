import { Box, Button, Paper } from "@material-ui/core";
import React, { useState } from "react";
import styles from "./Meal.module.css";
import ProductsListTable from "../products-list-table/ProductsListTable";
import AddMealProduct from "../add-meal-product/AddMealProduct";
import { Meal } from "../../slice/mealsSlice";

export interface MealProps {
  title: string;
  meal: Meal;
}

const MealComponent: React.FC<MealProps> = (props) => {
  const [addMealProductVisible, setAddMealProductVisible] = useState(false);

  const addProductButtonClickHandler = () => {
    setAddMealProductVisible(true);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignContent="center"
      margin="15px 15px"
    >
      <Paper elevation={3} square>
        <p className={styles.title}>{props.title}</p>
        <Box display="flex" minWidth="550px" justifyContent="center">
          <ProductsListTable productsEaten={props.meal.mealProducts} />
          {addMealProductVisible && (
            <AddMealProduct
              showAddMealProduct={setAddMealProductVisible}
              mealId={props.meal.id}
            />
          )}
        </Box>
        {!addMealProductVisible && (
          <Box paddingBottom="4%" paddingTop="4%">
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
    </Box>
  );
};

export default MealComponent;
