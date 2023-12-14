import "./App.css";
import styles from "./App.module.css";

import { useEffect, useState } from "react";

interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
}

interface PaginationPropType {
  total: number;
  pageSize: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

function Pagination({
  pageSize,
  total,
  setCurrentPage,
  currentPage,
}: PaginationPropType) {
  let totalDivs = Math.floor(total / pageSize);
  totalDivs = total % pageSize ? totalDivs + 1 : totalDivs;

  console.log(totalDivs);

  return (
    <section className={styles["pag-container"]}>
      <button
        onClick={() => setCurrentPage((prev) => prev - 1)}
        disabled={currentPage === 0}
      >
        Prev
      </button>
      {Array(totalDivs)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentPage(i)}
            className={styles["pag-box"]}
          >
            {i + 1}
          </div>
        ))}
      <button
        onClick={() => setCurrentPage((prev) => prev + 1)}
        disabled={currentPage === totalDivs - 1}
      >
        Next
      </button>
    </section>
  );
}

const pageSize = 10;

function App() {
  const [allProducts, setAllProducts] = useState<Array<ProductType>>([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [viewProducts, setViewProducts] = useState<Array<ProductType>>([]);

  function getAllProducts() {
    fetch("https://dummyjson.com/products?limit=0")
      .then((res) => res.json())
      .then((data) => {
        setTotalProducts(data.total);
        setAllProducts(data.products);
      });
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    const temp = allProducts.slice(
      currentPage * pageSize,
      currentPage * pageSize + pageSize
    );

    setViewProducts(temp);
  }, [currentPage]);

  return (
    <>
      <section className={styles["grid"]}>
        {viewProducts.map((product, i) => (
          <div key={i} className={styles["product-card"]}>
            <img src={product.images[1]} />
          </div>
        ))}
      </section>
      <Pagination
        pageSize={pageSize}
        total={totalProducts}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}

export default App;
