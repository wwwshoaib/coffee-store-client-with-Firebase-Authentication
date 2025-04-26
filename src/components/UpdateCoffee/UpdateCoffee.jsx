import { useLoaderData } from "react-router";
import Swal from 'sweetalert2'


const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    // update a coffee
    const handleCoffeeUpdate = async (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo };

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(updatedCoffee),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee updated successfully!',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })

                }
                form.reset();

            })


    };


    return (
        <div className="w-11/12 mx-auto">

            <h3>Name of a coffee to update: {name} </h3>
            {/*form for updating a coffee */}
            <div className="relative min-h-screen flex items-center justify-center bg-center bg-gray-500 bg-no-repeat bg-cover py-12 px-4 sm:px-6 lg:px-8"
                style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1532423622396-10a3f979251a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80)`
                }}>
                <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
                <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
                    <div className="grid gap-8 grid-cols-1">
                        <div className="flex flex-col">
                            <div className="flex flex-col items-center justify-center">
                                <div className="text-center py-5">
                                    <h2 className="font-semibold text-lg mr-auto">Update  coffee: {name}</h2>
                                </div>
                                <p className="text-xs">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                </p>
                            </div>

                            <div className="mt-5">
                                <form onSubmit={handleCoffeeUpdate} className="form">
                                    {/* Name and Quantity */}
                                    <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                                        <div className="mb-3 space-y-2 w-full">
                                            <label className="font-semibold text-gray-600 py-2">Name <abbr title="required">*</abbr></label>
                                            <input name="name" defaultValue={name} placeholder="Enter Coffee Name" className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg h-10 px-4" required type="text" />
                                        </div>
                                        <div className="mb-3 space-y-2 w-full">
                                            <label className="font-semibold text-gray-600 py-2">Quantity <abbr title="required">*</abbr></label>
                                            <input name="quantity" defaultValue={quantity} placeholder="Enter Quantity" className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg h-10 px-4" required type="number" />
                                        </div>
                                    </div>

                                    {/* Supplier and Taste */}
                                    <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                                        <div className="mb-3 space-y-2 w-full">
                                            <label className="font-semibold text-gray-600 py-2">Supplier <abbr title="required">*</abbr></label>
                                            <input name="supplier" defaultValue={supplier} placeholder="Enter Supplier Name" className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg h-10 px-4" required type="text" />
                                        </div>
                                        <div className="mb-3 space-y-2 w-full">
                                            <label className="font-semibold text-gray-600 py-2">Taste <abbr title="required">*</abbr></label>
                                            <input name="taste" defaultValue={taste} placeholder="Enter Taste" className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg h-10 px-4" required type="text" />
                                        </div>
                                    </div>

                                    {/* Category and Details */}
                                    <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                                        <div className="mb-3 space-y-2 w-full">
                                            <label className="font-semibold text-gray-600 py-2">Category <abbr title="required">*</abbr></label>
                                            <input name="category" defaultValue={category} placeholder="Enter Category" className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg h-10 px-4" required type="text" />
                                        </div>
                                        <div className="mb-3 space-y-2 w-full">
                                            <label className="font-semibold text-gray-600 py-2">Details <abbr title="required">*</abbr></label>
                                            <input name="details" defaultValue={details} placeholder="Enter Details" className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg h-10 px-4" required type="text" />
                                        </div>
                                    </div>

                                    {/* Photo URL */}
                                    <div className="mb-3 space-y-2 w-full text-xs">
                                        <label className="font-semibold text-gray-600 py-2">Photo URL <abbr title="required">*</abbr></label>
                                        <input name="photo" defaultValue={photo} placeholder="Enter Photo URL" className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg h-10 px-4" required type="text" />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="w-full text-xs">
                                        <button
                                            type="submit"
                                            className="btn btn-success"

                                        >
                                            Update coffee

                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UpdateCoffee;