import Swal from 'sweetalert2'
import { Link } from 'react-router';
import { useState } from 'react';




const CoffeeCard = ({ coffee, coffees }) => {
    const [loadedCoffees, setLoadedCoffees] = useState(coffees)

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelete = id => {

        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {



                // console.log("A coffee was deleted!")
                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "A coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = loadedCoffees.filter(c => String(c._id) !== String(id));
                            setLoadedCoffees(remaining);

                        }

                    })
            }
        });
    }
    return (
        <div className="border border-spacing-2">
            <div className="card card-side bg-base-100 shadow-sm">
                <div className="flex justify-between">
                    <div className="flex  gap-5">
                        <figure>
                            <img src={photo} alt="Coffee" className="w-32 h-32 object-cover" />
                        </figure>
                        <div className="">
                            <h2 className="card-title">Name of coffee: {name}</h2>
                            <p>Quantity: {quantity}</p>
                            <p>Supplier: {supplier}</p>
                            <p>Taste: {taste}</p>
                            <p>Category: {category}</p>
                            <p>Details: {details}</p>
                        </div>
                    </div>

                    <div className="">
                        <div className="join join-vertical space-y-2 p-2">
                            <button className="btn btn-primary">View</button>
                            <Link to={`/updateCoffee/${_id}`}>
                                <button className="btn btn-secondary">Edit</button>
                            </Link>
                            <button
                               onClick={() => handleDelete(coffee._id)} 
                                className="btn btn-warning"
                            >
                                X
                            </button>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default CoffeeCard;