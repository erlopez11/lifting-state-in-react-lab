
const IngredientList = (props) => {
    return (
        <ul>
            {props.ingredients.map((ingredient, index) => (
                <li style={{backgroundColor: ingredient.color}} key={index}>
                    <p>{ingredient.name}</p>
                    <button>+</button>
                </li>
            ))}
        </ul>
    );
}

export default IngredientList;