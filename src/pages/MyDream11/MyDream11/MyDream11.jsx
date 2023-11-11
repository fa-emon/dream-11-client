import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ShowDream11 from "./ShowDream11";
import Swal from "sweetalert2";

const MyDream11 = () => {
    const allPlayer = useLoaderData();
    const [mySquad, setMySquad] = useState(allPlayer);

    const handleDelete = (id) => {
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
                fetch(`http://localhost:5001/mySquad/${id}`, {
                    method: "DELETE",
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your player has been deleted.",
                                icon: "success"
                            });
                        }
                        const remaining = mySquad.filter(squad => squad._id !== id)
                        setMySquad(remaining);
                    });
            }
        });
    }

    return (
        <div>
            <h2 className="heading-font text-3xl text-center  border-b-4 w-[350px] border-[#D4C19E] rounded-lg mx-auto my-6">Total {mySquad.length} players available</h2>
            <>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="text-lg">IMAGE</th>
                                <th className="text-lg">NAME</th>
                                <th className="text-lg">COUNTRY</th>
                                <th className="text-lg">DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                mySquad.map(squad => <ShowDream11
                                    key={squad._id}
                                    squad={squad}
                                    handleDelete={handleDelete}
                                ></ShowDream11>)
                            }
                        </tbody>
                    </table>
                </div>
            </>
        </div>
    );
};

export default MyDream11;