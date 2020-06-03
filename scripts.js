window.addEventListener("load", function(){
    let setSearchEngine = document.getElementById("go");
    
    setSearchEngine.addEventListener("click", function(event) {
        let text = document.querySelector("input[name=q]").value;
        if (text === "") {
            alert("Please type something to search.");
            event.preventDefault();
        }

        let searchEngine = document.querySelector("input[name=engine]:checked").value;
        
        let actions = {
            "google": "https://www.google.com/search",
            "duckDockGo": "https://duckduckgo.com/",
            "bing": "https://www.bing.com/search",
            "ask": "https://www.ask.com/web"
        }	

        let actionURL;
        if (searchEngine === "google") {
            actionURL = actions.google;
        }
        else if (searchEngine === "duckDuckGo") {
            actionURL = actions.duckDockGo;
        }
        else if (searchEngine === "bing") {
            actionURL = actions.bing;
        }
        else {
            actionURL = actions.ask;
        }
        alert("You have selected " + searchEngine + "'s search engine.");
        document.getElementsByTagName("FORM")[0].setAttribute("action", actionURL);
    })

});