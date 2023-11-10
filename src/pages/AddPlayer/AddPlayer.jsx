import { useForm } from "react-hook-form"

const AddPlayer = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="w-9/12 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                {/* {photo URL field} */}
                <div className="form-control all-font">
                    <label className="label">
                        <span className="label-text heading-font">Photo URL</span>
                    </label>
                    <input type="text all-font"
                        {...register('photoURL', { required: true })}
                        placeholder="photo URL" className="input input-bordered" />
                    {errors.photoURL && <p className='text-red-500'>photo URL is required.</p>}
                </div>

                <div className="flex w-full">
                    {/* {Name field} */}
                    <div className="form-control all-font w-1/2 me-6">
                        <label className="label">
                            <span className="label-text heading-font">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                        {errors.name && <span className="text-red-600">name is required</span>}
                    </div>

                    {/* {country field} */}
                    <div className="form-control all-font w-1/2">
                        <label className="label">
                            <span className="label-text heading-font">Country</span>
                        </label>
                        <input type="text" {...register("country", { required: true })} placeholder="Country" className="input input-bordered" />
                        {errors.country && <span className="text-red-600">country is required</span>}
                    </div>
                </div>

                {/* {player type field} */}
                <div className="form-control all-font">
                    <label className="label">
                        <span className="label-text heading-font">Player Type</span>
                    </label>
                    <input
                        type="text"
                        {...register("player_type", {
                            required: true
                        })}
                        placeholder="(Batsman,Bowler,AllRounder,WicketKeeper)"
                        className="input input-bordered"
                    />
                    {errors.player_type && (
                        <span className="text-red-600">
                            player type is required!
                        </span>
                    )}

                </div>

                {/* {description field} */}
                <div className="form-control all-font">
                    <label className="label">
                        <span className="label-text heading-font">Short Description</span>
                    </label>
                    <textarea
                        {...register("description", { required: true })}
                        placeholder="Enter player description"
                        className="textarea textarea-bordered"
                    />
                    {errors.description && (
                        <span className="text-red-600">
                            description is required!
                        </span>
                    )}
                </div>

                <div className="flex w-full">
                    {/* {rating for type field} */}
                    <div className="form-control w-1/2 me-6 all-font">
                        <label className="label">
                            <span className="label-text heading-font">Rating For Type</span>
                        </label>
                        <input type="number" {...register("rating_for_type")} placeholder="Rating (out of 5)" className="input input-bordered" />
                        {errors.rating_for_type && (
                            <span className="text-red-600">
                                rating is required!
                            </span>
                        )}
                    </div>

                    {/* {rating for fielding field} */}
                    <div className="form-control w-1/2 all-font">
                        <label className="label">
                            <span className="label-text heading-font">Rating For Fielding</span>
                        </label>
                        <input type="number" {...register("rating_for_fielding")} placeholder="Rating (out of 5)" className="input input-bordered" />
                        {errors.rating_for_fielding && (
                            <span className="text-red-600">
                                rating is required!
                            </span>
                        )}
                    </div>
                </div>

                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Add Player" />
                </div>
            </form>
        </div>
    );
};

export default AddPlayer;