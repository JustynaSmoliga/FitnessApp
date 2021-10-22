import { deleteProduct, MealProduct } from "../../slice/mealsSlice";
import styles from "./ProductListTable.module.css";
import LocalDiningOutlinedIcon from "@material-ui/icons/LocalDiningOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch } from "react-redux";
import { useState } from "react";
import ModalWindow from "../modal-window/modalWindow";

interface ProductListTableProps {
  productsEaten: MealProduct[];
}

interface RowProps {
  name: string;
  totalCalories: number;
  quantity: number;
  productId: string;
}

const Row: React.FC<RowProps> = (props) => {
  const [openDialog, setOpenDialog] = useState(false);
  const dispatch = useDispatch();

  const deleteProductHandler = () => {
    dispatch(deleteProduct(props.productId));
  };

  const deleteIconClickHandler = () => {
    setOpenDialog(true);
  };

  const disagreeButtonClickHandler = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <tr className={styles.row}>
        <td>{props.name}</td>
        <td>{props.totalCalories}</td>
        <td className={styles.deleteIconButtonContainer}>{props.quantity}</td>
        <td className={styles.deleteButtonDrawer}>
          <IconButton
            style={{ width: "10px", height: "10px" }}
            onClick={deleteIconClickHandler}
            aria-label={"deleteButton"}
          >
            <DeleteIcon style={{ fontSize: "20px" }} />
          </IconButton>
        </td>
      </tr>
      <ModalWindow
        title="DELETE PRODUCT"
        text="Do you really want delete this product from meal?"
        confirmHandler={deleteProductHandler}
        disagreeHandler={disagreeButtonClickHandler}
        open={openDialog}
      />
    </>
  );
};

const ProductListTable: React.FC<ProductListTableProps> = (props) => {
  return (
    <div className={styles.container}>
      {props.productsEaten.length === 0 && (
        <div>
          <p className={styles.noProducts}>No products in the meal.</p>
          <LocalDiningOutlinedIcon
            fontSize="large"
            style={{ color: "#797581" }}
          />
        </div>
      )}
      {props.productsEaten.length !== 0 && (
        <table id="products" className={styles.table}>
          <thead>
            <tr className={styles.header}>
              <th>Product name</th>
              <th>Calories[kcal]</th>
              <th>Weight[g]</th>
              <th className={styles.deleteButtonHeader}></th>
            </tr>
          </thead>
          <tbody>
            {props.productsEaten.map((product) => (
              <Row
                name={product.name}
                totalCalories={product.kcal}
                quantity={product.weightInGrams}
                productId={product.id}
                key={product.id}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductListTable;
