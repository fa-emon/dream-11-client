

const ShowOnCard = ({ allCountry }) => {
    const { CountryName, Flag } = allCountry;

    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <figure style={{ height: '200px', overflow: 'hidden' }}>
                    <img
                        src={Flag}
                        alt="Country Flag"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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