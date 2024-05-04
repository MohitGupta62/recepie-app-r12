import { Link } from "react-router-dom";

const Details = () => {
    const dish = {
        image: "https://www.pngall.com/wp-content/uploads/8/Cooking-Recipe-PNG-Clipart.png",
        title: "Stracciatella (Italian Wedding Soup)",
        ingredients: `3 1/2 c Chicken broth; homemade|1 lb Fresh spinach; wash/trim/chop|1 Egg|1 c Grated parmesan cheese; --or--|1 c Romano cheese; freshly grated|Salt and pepper; to taste`,
        description:
            "The recipe originated in Rome hundreds and hundreds of years ago, and is said to have been created when families had loads of leftover broth on Christmas from cooking their meat.",
        instructions: `Bring 1 cup of the broth to a boil. Add spinach and cook until softened but still bright green. Remove spinach with a slotted spoon and set aside. Add remaining broth to pot. Bring to a boil. Meanwhile, beat egg lightly with a fork. Beat in 1/4 cup of cheese. When broth boils pour in egg mixture, stirring constantly for a few seconds until it cooks into "rags." Add reserved spinach, salt and pepper. Serve immediately, passing remaining cheese. NOTES: Someone asked for this recipe a while back. I believe this soup, known as "Stracciatella" is synonymous with Italian Wedding Soup, however, I seem to remember from I-don't-know-where that Italian Wedding Soup is the same as this but with the addition of tiny meatballs.`,
    };
    return (
        <div className="w-[80%] m-auto p-5">
            <Link to="/recipes" class="text-3xl ri-arrow-left-line"></Link>
            <div className="details w-full flex h-[75vh] mt-3">
                <div className="dets w-[50%] p-[3%] shadow">
                    <img className="" src={dish.image} alt="" />
                    <h1 className="text-xl mb-5 mt-[10%] text-center">
                        {dish.title}
                    </h1>
                    <p className="text-zinc-400">{dish.description}</p>
                    <div className="flex justify-between py-10 px-5">
                        <Link
                            to="/update-recipe"
                            className="text-blue-400 border-blue-400 border py-2 px-5"
                        >
                            Update
                        </Link>
                        <Link className="text-red-400 border-red-400 border py-2 px-5">
                            Delete
                        </Link>
                    </div>
                </div>
                <div className="desc w-[50%] px-[5%] py-[3%] overflow-auto">
                    <h1 className="text-3xl border-b border-green-600 text-green-600">
                        Ingredients
                    </h1>
                    <ul className="text-zinc-600 list-disc  p-3 ">
                        {dish.ingredients.split(",").map((d, i) => (
                            <li className="list-item text-sm  mb-2" key={i}>
                                {d}
                            </li>
                        ))}
                    </ul>
                    <h1 className="text-3xl border-b border-green-600 text-green-600">
                        Instructions
                    </h1>
                    <ul className="text-zinc-600 list-decimal  p-3 ">
                        {dish.instructions.split(".").map((d, i) => (
                            <li className="list-item text-sm  mb-2" key={i}>
                                {d}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Details;
