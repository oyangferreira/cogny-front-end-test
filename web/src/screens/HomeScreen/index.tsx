import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import Card from "../../components/Card";
import { db } from "../../service/firebase";
import { Product } from "../../config/types";
import './index.css' 


const HomeScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(db, 'products');
      const productSnapshot = await getDocs(productsCollection);
      const productList = productSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Product[];
      setProducts(productList);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="product-grid">
      {products.map(product => (
        <Card key={product.id} item={product} />
      ))}
      </div>
    </>
  )
}

export default HomeScreen