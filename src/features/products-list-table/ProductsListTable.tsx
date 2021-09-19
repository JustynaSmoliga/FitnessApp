import { MealProduct } from "../../slice/mealsSlice";
import styles from "./ProductListTable.module.css";

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
      <td>{props.quantity}</td>
    </tr>
  );
};

const ProductListTable: React.FC<ProductListTableProps> = (props) => {
  return (
    <table id="products" className={styles.table}>
      <thead>
        <tr>
          <th>Product name</th>
          <th>Total calories [kcal]</th>
          <th>Weight [g]</th>
        </tr>
        {props.productsEaten.map((product) => (
          <Row
            name={product.name}
            totalCalories={product.kcal}
            quantity={product.weightInGrams}
            key={product.id}
          />
        ))}
      </thead>
    </table>
  );
};

export default ProductListTable;
