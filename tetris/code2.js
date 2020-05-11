var objConcept = [
    {
        "concept": "הגדרת נהלים",
        "shape": "shape1.png",
        "category": "2"
    },
    {
        "concept": "ה+ה",
        "shape": "shape2.png",
        "category": "2"
    },
    {
        "concept": "וויכוח",
        "shape": "shape3.png",
        "category": "1"
    },
    {
        "concept": "חיזוקים",
        "shape": "shape4.png",
        "category": "3"
    },{
        "concept": "סיכום",
        "shape": "shape1.png",
        "category": "2"
    },
    {
        "concept": "שיקופים",
        "shape": "shape2.png",
        "category": "3"
    },
    {
        "concept": "כיבוי שריפות",
        "shape": "shape3.png",
        "category": "1"
    },
    {
        "concept": "סיכומי ביניים",
        "shape": "shape4.png",
        "category": "2"
    },
    {
        "concept": "וידוא הבנה",
        "shape": "shape1.png",
        "category": "2"
    },
    {
        "concept": "סילוק ידידותי",
        "shape": "shape2.png",
        "category": "1"
    },
    {
        "concept": "ראשוניות ואחרוניות",
        "shape": "shape3.png",
        "category": "2"
    },
    {
        "concept": "ווידוא הבנה",
        "shape": "shape4.png",
        "category": "3"
    },
    {
        "concept": "עצירת תרחיש",
        "shape": "shape1.png",
        "category": "1"
    },
    {
        "concept": "יצירת אמפתיה",
        "shape": "shape2.png",
        "category": "3"
    },
    {
        "concept": "הצגה עצמית",
        "shape": "shape3.png",
        "category": "2"
    },
    {
        "concept": "הוצאה מהחניך",
        "shape": "shape4.png",
        "category": "3"
    },
    {
        "concept": "שיקוף",
        "shape": "shape1.png",
        "category": "1"
    },
    {
        "concept": "הצגת נושא",
        "shape": "shape2.png",
        "category": "2"
    }
    ];
const DISTANCE = 29;
var DIR_MAT = [
    [1, 0], //Down
    [0, 1], //Right
    [-1, 0], //Up
    [0, -1] //Left
];
var nCountShape = 0;
var elShape;
var strConcept;
var elLeftErow;
var elRightErow;
var elConcept;
var PositionXCounter = 35;
var nCountWrong = 5;
var nCountRight = 0;
var elHeart;
var elPlayAgain;

 /*
load
==================================
Description: Initialize the program.
Parameters: none.
-----------------------------------
Programmer: rony shoshan.
Date: 27/03/2020
-----------------------------------
*/
window.addEventListener("load", function() {
    AddListeners();
    ChangeConcept();
    setInterval(ChangeAllConcept, 6500);

    // We execute the same script as before
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

/*
AddListeners
==================================
Description: reset the elemnt and add the listners.
Parameters: none.
-----------------------------------
Programmer: rony shoshan.
Date: 27/03/2020
-----------------------------------
*/
 function AddListeners() {
    elShape = document.getElementById("the-shape");
    strConceptn = document.getElementById("the-concept");
    elLeftErow = document.getElementById("left-erow");
    elRightErow = document.getElementById("right-erow");
    elConcept = document.getElementById("move");
    elPlayAgain = document.getElementById("play-again");
    elLeftErow.addEventListener("click", Left);
    elRightErow.addEventListener("click", Right);
 }

 /*
ChangeAllConcept
==================================
Description: happens every 7 seconds, checks if the match was right and call the ChangeConcept function thet update the concept.
Parameters: none.
-----------------------------------
Programmer: rony shoshan.
Date: 27/03/2020
-----------------------------------
*/
function ChangeAllConcept() {
    IsRight();
    nCountShape++;
    ChangeConcept();
}

 /*
ChangeConcept
==================================
Description: changes the shape and the concept and add Listeners to the erow.
Parameters: none.
-----------------------------------
Programmer: rony shoshan.
Date: 27/03/2020
-----------------------------------
*/
function ChangeConcept() {
    elShape.src = objConcept[nCountShape].shape;
    strConceptn.innerHTML  = objConcept[nCountShape].concept;
    elLeftErow.addEventListener("click", Left);
    elRightErow.addEventListener("click", Right);
    PositionXCounter = 35;
    elConcept.style.left = PositionXCounter + "%";
}

 /*
Left
==================================
Description: change the posoition of the concept to the left until the border.
Parameters: event.
-----------------------------------
Programmer: rony shoshan.
Date: 27/03/2020
-----------------------------------
*/
function Left(event) {
    elRightErow.addEventListener("click", Right);
    PositionXCounter += DIR_MAT[3][1] * DISTANCE;
    elConcept.style.left = PositionXCounter + "%";
    if (PositionXCounter === 6) {
        elLeftErow.removeEventListener("click", Left);
    } 
}

 /*
Right
==================================
Description: change the posoition of the concept to the right until the border.
Parameters: event.
-----------------------------------
Programmer: rony shoshan.
Date: 27/03/2020
-----------------------------------
*/
function Right(event) {
    elLeftErow.addEventListener("click", Left);
    PositionXCounter += DIR_MAT[1][1] * DISTANCE;
    elConcept.style.left = PositionXCounter + "%";
    if (PositionXCounter === 64) {
        elRightErow.removeEventListener("click", Right);
    } 
}

 /*
IsRight
==================================
Description: cheks if the concept match to the right place, if yes he chackd if there was 20 good matches and go to 
the winning massage, and if not he removes one life and chack if there was 5 erong matches and go to the loosing massage.
Parameters: none.
-----------------------------------
Programmer: rony shoshan.
Date: 27/03/2020
-----------------------------------
*/
function IsRight() {
    if ((objConcept[nCountShape].category === "1" && PositionXCounter === 6) || (objConcept[nCountShape].category === "2" && PositionXCounter === 35) || (objConcept[nCountShape].category === "3" && PositionXCounter === 64)) {
        nCountRight++;
        if(nCountRight === 14) {
            winnnig();
        }
    } else {
        elHeart = document.getElementById("life" + nCountWrong);
        elHeart.style.visibility = "hidden";
        if(nCountWrong === 1) {
            losing();
        }
        nCountWrong--;
    }
}

 /*
winnnig
==================================
Description: if the player win, the game stop and shows the winning massage with a button of play again.
Parameters: none.
-----------------------------------
Programmer: rony shoshan.
Date: 27/03/2020
-----------------------------------
*/
function winnnig() {
    elConcept.style.visibility = "hidden";
    nCountShape = null;
    nCountWrong = null;
    elPlayAgain.style.opacity = "1";
    document.getElementById("win").style.opacity = "1";
    elPlayAgain.addEventListener("click", function(){
        window.location.href = "index.html"
    });
}

 /*
losing
==================================
Description: if the player lose, the game stop and shows the losing massage with a button of play again.
Parameters: none.
-----------------------------------
Programmer: rony shoshan.
Date: 27/03/2020
-----------------------------------
*/
function losing() {
    elConcept.style.visibility = "hidden";
    nCountShape = null;
    nCountWrong = null;
    elPlayAgain.style.opacity = "1";
    document.getElementById("lose").style.opacity = "1";
    elPlayAgain.addEventListener("click", function(){
        window.location.href = "index.html"
    });
}