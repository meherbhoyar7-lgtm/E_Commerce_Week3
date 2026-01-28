import React, { useState, useEffect } from 'react';  
import Listout from './Listout.jsx';
import ProductTemplate from './ProductTemplate.jsx';

function Content() {
    const [fetchData, setFetchData] = useState(null);  
    
    useEffect(() => {  
        const fetching = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products");
                const json = await res.json();
                setFetchData(json);  
            } catch (error) {
                console.error(error);
            }
        };
        fetching();
    }, []);

    return (
        <div className="content-common">
            {fetchData == null ? <ProductTemplate /> : <Listout fd={fetchData} />}
        </div>
    );
}
export default Content;
