//Parsing function
const parseComments = (comments, categories) => {
    
    const results = []
    
    const categoriesKeys = Object.keys(categories)
    
    comments.map(comment => {
        
        //Save current comment in results
        results.push({comment: comment})
        
        categoriesKeys.map(category => {
            
            //Filter each category to contain only the words present in the comment
            const filteredCategory = categories[category]
            .map(word => word.toLowerCase())
            .filter(word => comment
                .toLowerCase()
                .replace(/[.!,]/g, "")
                .split(" ")
                .includes(word)
            )
                     
            //Determine the score - THE percentage of the amount of space the occurring words take up in a comment
            let score 
            
            if (filteredCategory.length > 0) {
                score = (100/comment.length*(filteredCategory.reduce(((a,b) => 
                a + b.length), 0))).toFixed(2)
            } else { score = 0 }
            
            //Save score and words in the result object containing the comment
            const result = results.filter(object => object.comment === comment)
            result[0][category] = {score: score, words: filteredCategory}
        })   
    })
    
    return results
}


//Function to get ranking of parsing results
const getRanking = (results) => {
    
    //From the result array, trace back the categories and commments
    const categories = Object.keys(results[0]).filter(key => key !== "comment")
    const comments = results.reduce((a,b) => a.concat(b.comment), [])

    //Set up a count to keep track of the score
    const count = []
    categories.map(category => count.push({category: category, score: 0}))
    
    results.map(result => 
        categories.map(category => {

            //Select correct object from count array
            const categoryCount = count.filter(element => element.category === category)[0]
            
            //Update score with the total of the length of all the present words in each comment
            const words = result[category].words
            if (words.length > 0) categoryCount.score += words.reduce(((a,b) => a + b.length), 0)
            else return
        })
    )
    
    //Calculate total characters of all comments
    const totalComments = comments.reduce(((a,b) => a + b.length), 0)    
    
    //Return a ranking with the score for each category as a percentage on the totalComments
    return count
    .sort((a,b) => b.score - a.score)
    .map(category => {return {...category, score : (100/totalComments*category.score).toFixed(2) + "%"}})
}

module.exports = {parseComments: parseComments, getRanking: getRanking};