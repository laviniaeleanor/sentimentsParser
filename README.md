# Sentiment Parser

## Description
An npm Package for Node.js to analyze the content of comments based on categories of words.

To run the demo, clone the repo and run

    $ node demo.js 
    

## Basic Usage 

    
    
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
    
    
 ## Example Outcome
 The score consist in the percentage of the amount of space the occurring words take up in a comment
 
       {
         comment: "Delightful =) Adore the use of gradient and background!",
        "Selfcentered" : {score: 0, words: []},
        "Smileys" : {score: "3.64", words: ["=)"]},
        "Douche" : {score: 0, words: []},
        "Positive" : {score: "18.18", words: ["delightful"]},
        "Extra positive": {score: 0, words: []},
        "Over the top": {score: 0, words: []},
        "Tech talk": {score: "32.73", words: ["gradient", "background"]}  
       }
