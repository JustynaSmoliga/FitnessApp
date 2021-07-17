import { Product } from "../../slice/mealsSlice";
import styles from "./ProductListTable.module.css";



interface ProductListTableProps {
  date:Date;
  productsEaten: Product[];
}

const ProductListTable: React.FC<ProductListTableProps> = (props) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <td> Product name </td>
          <td>Total calories </td>
          <td>Quantity </td>
        </tr>
      </thead>
    </table>
  );
};

export default ProductListTable;
