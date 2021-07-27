import { Box, Button, Paper } from "@material-ui/core";
import React, { useState } from "react";
import styles from "./Meal.module.css";
import ProductsListTable from "../products-list-table/ProductsListTable";
import AddMealProduct from "../add-meal-product/AddMealProduct";

interface MealProps {
  title: string;
  productsEaten: Product[];
  date: Date;
}

export interface Product {
  id:number;
  name: string;
  totalCalories: number;
  caloriesInGrams: number;
  quantity: number;
}

const Meal: React.FC<MealProps> = (props) => {
  const [addMealProductShowed, setAddMealProductShowed] = useState(false);

  const addProductButtonClickHandler = () => {
    setAddMealProductShowed(true);
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
          {addMealProductShowed && (
            <AddMealProduct
              showAddMealProduct={setAddMealProductShowed}
            />
          )}
        </Box>
        {!addMealProductShowed && (
          <Box paddingBottom="4%">
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
