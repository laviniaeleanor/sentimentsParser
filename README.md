# Sentiment Parser

##Description
An npm Package for Node.js to analyze the content of comments based on categories of words.
Run $ node demo.js in the command line to see how it works. 

##Basic Usage 

    const comments = [
    "This is nice work :)",
    "Please stop!",
    "Delightful =) Adore the use of gradient and background!",
    "Incredibly thought out! Wow love it!",
    "Such sleek.",
    "It's fun not just splendid!",
    "Just fresh."]

    const categories = {
    "Selfcentered" : ["i", "me", "classic", "...", "simple"],
    "Smileys" : [":)", "=)", ":-)"],
    "Douche" : ["dude", "mate", "m8", "fresh", "laugh"],
    "Positive" : ["nice", "delightful", "love", "sleek", "fun", "clean", "appealing", "like"],
    "Extra positive": ["inspiring", "excellent", "splendid", "gorgeous"],
    "Over the top": ["heart", "tremendously", "fab", "blew", "mind", "mission"],
    "Tech talk": ["gradient", "background", "style", "minimal", "lines", "navigation", "colour", "palette", "boldness", "camera", "angle", "image", "avatar", "concept", "shot", "cyan", "shapes"]
    }

    parseComments(comments, categories)