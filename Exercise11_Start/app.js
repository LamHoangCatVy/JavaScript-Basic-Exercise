var tableObj = {
    methodHead: "Method",
    descHead: "Description",
    methods: [
        "getElementById()",
        "getElementsByTagName()",
        "getElementsByClassName()",
        "querySelector()",
        "querySelectorAll()"
    ],
    descriptions: [
        "Selects the first element it encounters with the ID you enter. The ID is entered as a string. (e.g. document.getElementById('content');) This method will return a single node.",
        /*1*/"Selects all the elements in the DOM for the tag you enter. The tag value is entered as a string. (e.g. document.getElementsByTagName('li');) This method returns an array of all the matching nodes.",
        "Selects all the elements in the DOM that is assigned the class that you enter. The class name should be expressed as a string. (e.g. document.getElementById('li');) This method returns an array of all the matching nodes.",
        /*2*/"Selects the first element in the DOM that matches the criteria you enter. You can use any CSS selector as the criteria. This method is very powerful for those that know CSS selectors. The CSS selector is entered as a string. (e.g. document.querySelector('#content li');) This method returns the first element that matches the criteria.",
        /*3*/"Selects all the elements in the DOM that match the criteria you enter. You can use any CSS selector as the criteria. This method is very powerful for those that know CSS selectors. The CSS selector is entered as a string. (e.g. document.querySelectorAll('#content li');) This method returns an array of all elements that match the criteria."
    ]
};

// //Method fill
// document.getElementById("header1");
// header1.innerHTML = tableObj.methodHead;

// document.getElementById("name1");
// name1.innerHTML = tableObj.methods[0];

// document.getElementById("name2");
// name2.innerHTML = tableObj.methods[1];

// document.getElementById("name3");
// name3.innerHTML = tableObj.methods[2];

// document.getElementById("name4");
// name4.innerHTML = tableObj.methods[3];

// document.getElementById("name5");
// name5.innerHTML = tableObj.methods[4];



// //Description fill
// document.getElementById("header2");
// header2.innerHTML = tableObj.descHead;

// document.getElementById("description1");
// description1.innerHTML = tableObj.descriptions[0];

// document.getElementById("description2");
// description2.innerHTML = tableObj.descriptions[1];

// document.getElementById("description3");
// description3.innerHTML = tableObj.descriptions[2];

// document.getElementById("description4");
// description4.innerHTML = tableObj.descriptions[3];

// document.getElementById("description5");
// description5.innerHTML = tableObj.descriptions[4];




//Faster and More Intelligent Way

function fillTable(obj){
    var tableHeader = document.querySelectorAll("#table th"),
        tableContent = document.querySelectorAll("#table td"),
        methodName = obj.methods,
        description = obj.descriptions,
        loc = 0;

    tableHeader[0].innerHTML = obj.methodHead;
    tableHeader[1].innerHTML = obj.descHead;
    for(let i = 0; i < tableContent.length; i++){
        tableContent[i].innerHTML = methodName[loc];
        tableContent[++i].innerHTML = description[loc];
        loc++;
    }




    }

fillTable(tableObj)