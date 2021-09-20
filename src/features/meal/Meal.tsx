import { Box, Button, Paper } from "@material-ui/core";
import React, { useState } from "react";
import styles from "./Meal.module.css";
import ProductsListTable from "../products-list-table/ProductsListTable";
import AddMealProduct from "../add-meal-product/AddMealProduct";
import { Meal } from "../../slice/mealsSlice";

interface MealProps {
  title: string;
  meal: Meal;
  date: string;
}

const MealComponent: React.FC<MealProps> = (props) => {
  const [addMealProductVisible, setAddMealProductVisible] = useState(false);

  const addProductButtonClickHandler = () => {
    setAddMealProductVisible(true);
  };

  return (
    <div>
      <Paper elevation={3} square>
        <p className={styles.title}>{props.title}</p>
        <Box display="flex" minWidth="490px" justifyContent="center">
          <ProductsListTable
            productsEaten={props.meal.mealProducts}
            date={props.date}
          />
          {addMealProductVisible && (
            <AddMealProduct
              showAddMealProduct={setAddMealProductVisible}
              mealId={props.meal.id}
            />
          )}
        </Box>
        {!addMealProductVisible && (
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

export default MealComponent;
