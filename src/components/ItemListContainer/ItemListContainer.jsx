import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { Hero } from "../Hero/Hero"
import { getProducts } from "../../sevices/productsServices";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getProducts()
            .then(data => setProducts(data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));     
    }, []);

    if (loading) return <p>cargando...</p>;
    
    return (
        <section>
            <Hero />
            <ItemList products={products} />
        </section>
    );

};
