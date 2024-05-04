import { Link } from "react-router-dom";

const Card = () => {
    const dish = {
        image: "https://www.pngall.com/wp-content/uploads/8/Cooking-Recipe-PNG-Clipart.png",
        title: "Stracciatella (Italian Wedding Soup)",
        ingredients: `3 1/2 c Chicken broth; homemade,1 lb Fresh spinach; wash/trim/chop,1 Egg,1 c Grated parmesan cheese; --or--,1 c Romano cheese; freshly grated,Salt and pepper; to taste`,
        description:
            "The recipe originated in Rome hundreds and hundreds of years ago, and is said to have been created when families had loads of leftover broth on Christmas from cooking their meat.",
        instructions: `Bring 1 cup of the broth to a boil. Add spinach and cook until softened but still bright green. Remove spinach with a slotted spoon and set aside. Add remaining broth to pot. Bring to a boil. Meanwhile, beat egg lightly with a fork. Beat in 1/4 cup of cheese. When broth boils pour in egg mixture, stirring constantly for a few seconds until it cooks into "rags." Add reserved spinach, salt and pepper. Serve immediately, passing remaining cheese. NOTES: Someone asked for this recipe a while back. I believe this soup, known as "Stracciatella" is synonymous with Italian Wedding Soup, however, I seem to remember from I-don't-know-where that Italian Wedding Soup is the same as this but with the addition of tiny meatballs.`,
    };
    return (
        <Link
            to="/recipes/1"
            className="mr-[3.3%] mb-[3%] text-center w-[30%]  b p-5 shadow-[10px_10px_15px_0px_rgba(0,0,0,0.1)] hover:scale-[1.02] duration-200"
        >
            <img className="w-[80%]" src={dish.image} alt={dish.title} />
            <h1 className="mt-5 mb-3 text-xl text-semibold">{dish.title}</h1>
            <p>{dish.description.slice(0, 100)}...</p>
            <div className="flex justify-between text-zinc-400 mt-5 ">
                <p className="text-center ">
                    <i class="ri-timer-line"></i>
                    <br />
                    <span className="text-sm">20min</span>
                </p>
                <p className="text-center">
                    <i class="ri-thumb-up-line"></i>
                    <br />
                    <span className="text-sm">Easy</span>
                </p>
                <p className="text-center">
                    <i class="ri-share-line"></i>
                    <br />
                    <span className="text-sm">Share</span>
                </p>
            </div>
        </Link>
    );
};

export default Card;
