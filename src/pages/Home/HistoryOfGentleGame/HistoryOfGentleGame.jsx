import image from '../../../assets/HistorySection/historyImage.jpg'

const HistoryOfGentleGame = () => {
    return (
        <div className="flex w-full my-12 px-2">
            <div className="w-1/2 me-6">
                <img className='rounded-md' src={image} alt="" />
            </div>
            <div className="all-font w-1/2">
                <p className="heading-font text-2xl">History Of Gentle Game</p>
                <p className="text-justify mt-6">Crickets early history dates back to 16th-century England, where it evolved from earlier bat-and-ball games played in the countryside. The first recorded cricket match took place in 1646 in Kent. Cricket gained popularity among the English aristocracy in the 17th century and gradually spread to other parts of the British Empire. The Marylebone Cricket Club (MCC) was established in 1787, formalizing the rules of the game. By the 19th century, cricket became an international sport, with matches between England and Australia marking the beginning of Test cricket in 1877. The sport continued to grow, eventually becoming a global phenomenon with widespread popularity in the 20th century.</p>
                <button className="btn btn-outline bg-[#D4C4A2] heading-font uppercase mt-4 border-white text-white">Read More</button>
            </div>
        </div>
    );
};

export default HistoryOfGentleGame;