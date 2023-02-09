//When the window loads, call this initialize function
function init(event) {
    var pages = ["page1.html", "page2.html", "page3.html"],
        win = window,
        locParts = win.location.href.split("/"),
        /*window.location.href returns the href (URL) of the current page
        0: "file:"
        1: ""
        2: ""
        3: "C:"
        4: "Users"
        5: "lamho"
        6: "Desktop"
        7: "ExcerciseFiles"
        8: "Start%20Files"
        9: "Exercise12_Start"
        10: "page1.html"
        length: 11*/ 
        curPage = locParts[locParts.length - 1],
        //page1.html if you on page1.html
        //the idea is to take the last part of the file and then reference to it
        pageCounter = 0,
        leftArrow = document.querySelector("#leftArrow"),
        rightArrow = document.querySelector("#rightArrow");
        


    for (let i = 0;i < pages.length; i++) {
        if (curPage === pages[i]) {
            pageCounter = i;
        }
    }

    //Add function for going to next and previous page.

    var goNext = function(e){
        if(pageCounter < pages.length - 1){
            pageCounter++;
            win.location.assign(pages[pageCounter]);
        }
    }

    var goPrevious = function(e){
        if(pageCounter > 0){
            pageCounter--;
            win.location.assign(pages[pageCounter]);
        }
    }
    //assign() method is used to load a new document


    //Add Event listeners for key and mouse click.

    //for mouse click
    leftArrow.addEventListener("click", goPrevious);
    rightArrow.addEventListener("click", goNext);

    //for key
    win.addEventListener('keydown', function(e){
        if (e.keyCode === 37){
            goPrevious(e);
        } else if(e.keyCode === 39){
            goNext(e)
        }
    })
    
}


window.addEventListener("load", init)