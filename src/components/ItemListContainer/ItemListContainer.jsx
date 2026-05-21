import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { Hero } from "../Hero/Hero"

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/data/products.json")
            .then( res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false)
            });     
    }, []);

    if (loading) return <p>cargando...</p>;
    
    return (
        <section>
            <Hero />
            <ItemList products={products} />
        </section>
    );

};
