import { Product } from "../../slice/mealsSlice";
import styles from "./ProductListTable.module.css";

interface ProductListTableProps {
  date: Date;
  productsEaten: Product[];
}

interface RowProps {
  name: string;
  totalCalories: number;
  quantity: any;
}

const Row: React.FC<RowProps> = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.totalCalories}</td>
      <td>{props.quantity}</td>
    </tr>
  );
};

const ProductListTable: React.FC<ProductListTableProps> = (props) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <td>Product name</td>
          <td>Total calories </td>
          <td>Quantity</td>
        </tr>
        {props.productsEaten.map((product) => (
          <Row
            name={product.name}
            totalCalories={product.totalCalories}
            quantity={product.quantity}
            key={product.name}
          />
        ))}
      </thead>
    </table>
  );
};

export default ProductListTable;
