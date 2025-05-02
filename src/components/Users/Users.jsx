import { useState } from "react";
import { useLoaderData } from "react-router";
import Swal from 'sweetalert2'

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    //handle to delete a user
    const handleUserDelete = id => {
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
                fetch(`https://coffee-store-server-wine-pi.vercel.app/users/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "User has been deleted.",
                            icon: "success"
                        });
                        const remaining = users.filter(user => user._id !== id);
                        setUsers(remaining);
                    }
                });
            }
        });
    }

    return (
        <div className="w-11/12 mx-auto">
            <h1>No. of Users: {users.length}</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Created At</th>
                                <th>Last Login at</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) =>
                                    <tr className="hover:bg-base-300" key={user._id}>
                                        <th>{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.createdAt}</td>
                                        <td>{user.lastSignInTime}</td>
                                        <td>
                                            <button className="btn btn-primary">Edit</button> &nbsp;
                                            <button 
                                                onClick={() => handleUserDelete(user._id)} 
                                                className="btn btn-warning">X</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;
