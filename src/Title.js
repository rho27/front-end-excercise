import React from 'react'

function Title(){
    const initialList =[]

    const [recipeList, setList] = React.useState(initialList);
    const [recipeName, setRecipeName] = React.useState('');
    const [recipeInst, setRecipeInst] = React.useState('');
    const [empty, setEmpty] = React.useState(true)
    const [showForm, setForm] = React.useState(false)
    const [showButton, setButton] = React.useState(true)

    function handleAdd(){
        const newRecipeList = recipeList.concat({recipeName, recipeInst})

        setEmpty(false);
        setList(newRecipeList);
        setForm(false);
        setButton(true);
        setRecipeName('');
        setRecipeInst('');
    }


    function addRecipeForm(){
        setForm(true);
        setButton(false);
    }

    return(
        <div>
            <h1>My Recipes</h1>
            <ul>
                {recipeList.map((item) => (
                    <li key = {item}> {item.recipeName} </li>
                ))}
            </ul>
            {empty === true &&
                <div>
                    There are no recipes to list
                </div>
            }
            {showButton === true && 
                <button onClick={addRecipeForm}>
                Add Recipe
                </button>
            }
            {showForm === true &&
                <div>
                    <form>
                        <label>
                            recipe-name
                            <input type="text" value = {recipeName} onChange={(e) => setRecipeName(e.target.value)}></input>
                        </label>
                        <label>
                            recipe-instructions
                            <input type="text" value = {recipeInst} onChange={(e) => setRecipeInst(e.target.value)}></input>
                        </label>
                        <button type='button' onClick={handleAdd}>
                            Submit
                        </button>
                    </form>
                </div>
            }
        </div>
    )
}

export default Title