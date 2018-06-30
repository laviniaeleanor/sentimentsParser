const {parseComments} = require("./index.js")
const {getRanking} = require("./index.js")

//command line styling
const bright = "\x1b[0m\x1b[1m"
const normal = "\x1b[0m"
const cyan = "\x1b[0m\x1b[36m"

//dummy data
const comments = [
    "This is nice work :)",
    "Please stop!",
    "Delightful =) Adore the use of gradient and background!",
    "Incredibly thought out! Wow love it!",
    "Such sleek.",
    "It's fun not just splendid!",
    "Just fresh.",
    "My 49 year old dad rates this style very delightful dude",
    "I think I'm crying. It's that revolutionary.",
    "Trying it now.",
    "Gorgeous. So minimal.",
    "Excellent atmosphere m8",
    "Lines, navigation, colour palette, boldness – appealing.",
    "Nice use of sky blue in this camera angle!",
    "Tremendously clean, friend.",
    "Mission accomplished. It's classic dude",
    "I want to learn this kind of background image! Teach me.",
    "Simple work you have here.",
    "It makes me laugh...",
    "Love your shot mate",
    "Let me take a nap... great concept, anyway.",
    "Very fab shot :)",
    "Such shot, many avatar, so clean",
    "This shot blew my mind.",
    "This shot has navigated right into my heart.",
    "Cyan. You are so inspiring!",
    "That's delightful and appealing, friend.",
    "I like your shapes :-)"
]


// Extra functions for demo: create four random categories by distributing all the words of the comments
Array.prototype.unique = function() {
    return Array.from(new Set(this));
}

const createCategories = (comments) => {
    const shuffledComments = comments
        .reduce((a,b) => a.toLowerCase().concat(" " + b.toLowerCase()))
        .split(" ")
        .sort((a,b) => 0.5 - Math.random())
        .map(element => element.replace(/[.!,]/g, ""))
        .unique()
        
    return {
        A: shuffledComments.slice(0, shuffledComments.length/4),
        B: shuffledComments.slice(shuffledComments.length/4, shuffledComments.length/2),
        C: shuffledComments.slice(shuffledComments.length/2, shuffledComments.length/4*3),
        D: shuffledComments.slice(shuffledComments.length/4*3, shuffledComments.length)
    }
}
    
    
const renderResults = (results) => {
    const categories = Object.keys(results[0]).filter(key => key !== "comment")
    
    results.map(result => {
        console.log(bright, `\n ${result.comment} \n \n`, normal, "Results:")
        categories.map(category => 
            console.log(cyan, `Category ${category}`, normal, `: ${result[category].score}% \n `, '\x1b[2m', result[category].words)
        )
    })
}
    
    
//Interaction for command line demo
const runDemoParser = () => {

    const categories = createCategories(comments)
    const categoriesKeys = Object.keys(categories)
    const results = parseComments(comments, categories)
    const winner = getRanking(results)[0]


    console.log(bright,"\n \n +-+-+-+-+-+-+-+ +-+-+-+-+-+ \n |W|e|l|c|o|m|e| |h|u|m|a|n|\n +-+-+-+-+-+-+-+ +-+-+-+-+-+\n")
    
    setTimeout(() => console.log(normal, " I am the", cyan, "~ SentimentParser 1.0 ~ \n", normal, "and today I will show you how I work\n"), 1000);
    setTimeout(() => console.log(normal, " I have been fed some",bright,"comments", normal, "to", bright, "parse.\n"), 2500);
    setTimeout(() => console.log(normal, " For the purpose of this demo, I created", bright, " 4 random categories \n", normal, "by shuffling all the words of those comments.\n"), 4000);
    setTimeout(() => console.log(" I will now calculate how each category scores in each comment. \n And finally I will declare a", bright, "winner!\n"), 5500);
    setTimeout(() => console.log(bright, "The categories are the following:\n"), 7000);
    setTimeout(() => categoriesKeys.map(category => console.log(cyan, `Category ${category}`, normal, `: ${categories[category]} \n \n`)), 8500);
    setTimeout(() => console.log(" Care to guess which one will win?\n"), 10000);
    setTimeout(() => console.log(" ...\n"), 11000);    
    setTimeout(() => console.log(" I'm ready! Are you?\n"), 12000);
    setTimeout(() => console.log(bright, "~ HERE WE GO THEN! ~\n"), 13500);
    setTimeout(() => console.log(normal, "All parsed comments:\n"), 14500);     
    setTimeout(() => renderResults(results), 15500);
    setTimeout(() => console.log(normal, '\n \n The category that scored the highest was:\n',), 17000)
    setTimeout(() => console.log(bright , `Category ${winner.category}`, normal, 'with', bright, `${winner.score}`, normal, `on the total of the comments\n \n \n`), 18000)
    setTimeout(() => console.log(bright, '~ SCROLL UP TO SEE ALL RESULTS. DID YOU GUESS THE WINNER? ~\n \n'), 19500)
    
}

runDemoParser()

