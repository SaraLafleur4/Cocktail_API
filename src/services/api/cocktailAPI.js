const getCocktailData = async function() {
    const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
    if (response.status == 200) {
        const data = await response.json()
        // console.log(data.drinks)
        return data.drinks
    } else {
        new Error(response.statusText)
    }
}

export default { getCocktailData }