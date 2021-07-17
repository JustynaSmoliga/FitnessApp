import styles from "./ProductListTable.module.css";

interface Product {
  name: string;
  totalCalories: number;
  caloriesInGrams: number;
  quantity: number;
}

interface Meals {
  date: Date;
  breakfast: Product[];
  lunch: Product[];
  dinner: Product[];
  supper: Product[];
  snacks: Product[];
}

const meals = {
  date: Date.now(),
  breakfast: [
    { name: "egg", totalCalories: 30, caloriesInGrams: 15, quantity: 2 },
    { name: "cucumber", totalCalories: 15, caloriesInGrams: 15, quantity: 1 },
  ],
  lunch: [],
  dinner: [
    { name: "egg", totalCalories: 30, caloriesInGrams: 15, quantity: 2 },
    { name: "cucumber", totalCalories: 15, caloriesInGrams: 15, quantity: 1 },
  ],
  supper: [],
  snacks: [
    {
      name: "popcorn",
      totalCalories: 100,
      caloriesInGrams: 100,
      quantity: 1,
    },
  ],
};

interface ProductListTableProps {}

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
