
const BurgerStack = (props) => {
    return (
        <ul>
            {props.stackIngredients.map((ingredient, index) => (
                <li style={{backgroundColor: ingredient.color}} key={index}>
                    <p>{ingredient.name}</p>
                    <button onClick={() => props.removeFromBurger(ingredient)} type="submit">X</button>
                </li>
            ))}
        </ul>
    );
};

export default BurgerStack;