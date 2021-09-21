import { MealProduct } from "../../slice/mealsSlice";
import styles from "./ProductListTable.module.css";
import LocalDiningOutlinedIcon from "@material-ui/icons/LocalDiningOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

interface ProductListTableProps {
  date: string;
  productsEaten: MealProduct[];
}

interface RowProps {
  name: string;
  totalCalories: number;
  quantity: number;
}

const Row: React.FC<RowProps> = (props) => {
  return (
    <tr className={styles.row}>
      <td>{props.name}</td>
      <td>{props.totalCalories}</td>
      <td className={styles.deleteIconButtonContainer}>
        {props.quantity}
        {/* <span style={{ width: "10px" }}></span>
        <IconButton>
          <DeleteOutlineOutlinedIcon fontSize="small" />
        </IconButton> */}
      </td>
      <td className={styles.deleteButtonDrawer}>
        <IconButton style={{ width: "10px", height: "10px" }}>
          <DeleteIcon style={{ fontSize: "20px" }} />
        </IconButton>
      </td>
    </tr>
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
