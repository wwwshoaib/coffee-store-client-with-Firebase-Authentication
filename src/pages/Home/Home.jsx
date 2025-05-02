import { useLoaderData } from "react-router";
import CoffeeCard from "../../components/CoffeeCard";
import { useState, useEffect } from "react";


const Home = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState([]);
    useEffect(() => {
        fetch('https://coffee-store-server-wine-pi.vercel.app/coffee')
            .then(res => res.json())
            .then(data => setCoffees(data));
    }, []);
    return (
        <div className="h-lvh w-11/12 mx-auto">
            <h2>Coffees</h2>
            <p>Number of coffees: {coffees.length}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-4 ">
                {
                    loadedCoffees.map(coffee => <CoffeeCard
                        key={coffee._id}
                        coffee={coffee}
                        coffees={coffees}
                        setCoffees={setCoffees}
                    > </CoffeeCard>)
                }

            </div>

        </div>
    );
};

export default Home;