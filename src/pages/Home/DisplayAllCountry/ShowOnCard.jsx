

const ShowOnCard = ({ allCountry, handleSeeAllPlayer }) => {
    const { CountryName, Flag } = allCountry;

    return (
        <>
            <div onClick={() => handleSeeAllPlayer(allCountry.CountryName)} className="card w-96 bg-base-100 shadow-xl mx-auto">
                <figure style={{ height: '200px', overflow: 'hidden' }}>
                    <img
                        src={Flag}
                        alt="Country Flag"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        className="object-cover transform hover:scale-125 transition-transform duration-300"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{CountryName}</h2>
                </div>
            </div>
        </>
    );
};

export default ShowOnCard;