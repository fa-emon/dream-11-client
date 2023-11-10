

const ShowPlayerOnCard = ({ player }) => {
    const { image, name, country, speciality, rating } = player;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure style={{ height: '200px', overflow: 'hidden' }}>
                <img
                    src={image}
                    alt="Player Image"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    className="object-cover transform hover:scale-125 transition-transform duration-300"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title heading-font">{name}</h2>
                <p className="all-font">{country}</p>
                <p className="all-font">Speciality: {speciality}</p>
                <p className="all-font">Ratings: {rating}</p>
                <div className="flex w-full justify-between heading-font">
                    <button className="w-1/2 btn btn-active  bg-[#eeeeee] hover:bg-[#dbdbdb]">Details</button>
                    <button className="w-1/2 btn btn-active bg-[#eedcb4] hover:bg-[#d3c19d]  ms-4">Update</button>
                </div>
            </div>
        </div>
    );
};

export default ShowPlayerOnCard;