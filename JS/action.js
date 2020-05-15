var firstName, lastName, office, party, vots, won;
var candidates = new Array();
var offices = new Array();
var offCount = 0;//count for offices array
var count = 0;//count for candidates array
var tempCount = 0;//count for temp array in createCandidatebyList function
var op = 0; //customize oppacity value for winnersHidden
var tripped = false;// to keep the error message from showing twice - turns true if data validator says false

    function Candidate(firstName, lastName, office, party, votes, won) { //Candidate object
        this.firstName = firstName;
        this.lastName = lastName;
        this.office = office;
        this.party = party;
        this.votes = votes;
        this.won = won;
    }
    
    document.getElementById("addCandidate").addEventListener("submit", function (event) {//Creats and adds a new candidate
    event.preventDefault();

    if(tripped == false){
        
        var firstName = document.getElementById("firstname").value;
        var lastName = document.getElementById("lastname").value;
        var office = document.getElementById("office").value;
        var party = document.getElementById("party").value;
        var vote = Number( document.getElementById("votes").value);
        var won = false;
        var a = new Candidate(firstName, lastName, office, party, vote, won);
        if (count < 250) {
            if(a.firstName != "" && a.lastName!= "" && a.office != "" & a.party != "" & a.vote != "" ){

            if (hasCandidate(a) == false) {
                candidates[count] = a;
                console.log(candidates[count]);
                count++;
                console.log(count);
                if (hasOffice(a) == false) {
                    offices[offCount] = a.office;
                    offCount++;
                    console.log(offices[0]);
                }
                var out = "Name: " + a.firstName + " " + a.lastName + "   Office: " + a.office + "   Party: " + a.party + " # of votes: " + a.votes;
                var node = document.createElement("P");
                var textnode = document.createTextNode(out);
                node.appendChild(textnode);
                document.getElementById("output").appendChild(node);


            }
            else alert("This candidate is already on the ballot.");
        }
    }
} else tripped = false;
});
function hasCandidate(candid) { //takes in some candidate and checks if that candidate is already on the ballot
    var hasThisCandidate = false;
    for (var i = 0; i < count; i++) {
        if (candidates[i].firstName === candid.firstName && candidates[i].lastName === (candid.lastName) && candidates[i].party === (candid.party)) {
            console.log(candidates[i].firstName);
            hasThisCandidate = true;
        }
    }
    return hasThisCandidate;
}
function hasOffice(candid) {//takes in some candidate and checks if that type of office has already been added onto the array
    var hasOffice = false;
    for (var i = 0; i < offCount; i++) {
        if (candid.office === offices[i]) {
            hasOffice = true;
        }
    }
    return hasOffice;
}
function winnersHidden() {
    createCandidateListByOffice();
    var box = document.getElementById("winnerBox-hidden");
    
    var id = setInterval(frame, 75);
    function frame() {
        if (op == 1) {
            clearInterval(id);
        } else {
            op += 0.05;
            box.style.opacity = op;

        }
    }
}
function addvotes() { //this upcoming feature will allow you to add votes after the race has been judged- finish this
    for (var i = 0; i < count; i++) {

    }
}
function createCandidateListByOffice() { //will likely be used after you  
    console.log("apple");
    console.log(offCount);
    refreshWinners();
    clearWinnersBox();
    for (var i = 0; i < offCount; i++) {//press the determine winner buton
        var temp = new Array();
        tempCount = 0;
        
        for (var j = 0; j < count; j++) {
            if (offices[i] === candidates[j].office) {
                temp[tempCount] = candidates[j];
                console.log(tempCount);
                tempCount++;
                
            }
        }
        
        determineWinners(temp);
        
    }
}
function determineWinners(candid) { //takes in candidate array of same offices from createCandidateListByOffice
    var highest = 0;
    for(var i = 0; i <tempCount; i++){
        if( candid[i].votes > highest){
            highest = candid[i].votes;
        }
    }
    

    var tieCounter = 0;
    var tie = false;
    for (var j = 0; j < count; j++) {
        if(candidates[j].votes == highest && candidates[j].office === candid[0].office){
            tieCounter++;
        } 
    }

    if(tieCounter > 1){
        var out = "There is a tie for the office of " + candid[0].office;
        var node = document.createElement("P");
        var textnode = document.createTextNode(out);
        node.appendChild(textnode);
        document.getElementById("winners").appendChild(node);
        tie = true;
    }

    if(tie == false){
        for (var k = 0; k < count; k++) {
            if(candidates[k].votes == highest && candidates[k].office === candid[0].office){
                    candidates[k].won = true;
                    var out = "For the office of " + candidates[k].office + ": " + candidates[k].firstName + " " + candidates[k].lastName;
                    var node = document.createElement("P");
                    var textnode = document.createTextNode(out);
                    node.appendChild(textnode);
                    document.getElementById("winners").appendChild(node);
                    console.log(out);
            }
        }
    }
}
function refreshWinners(){
    for(var i = 0; i < count; i++){
        candidates[i].won = false;
    }
}

function clearWinnersBox(){
  var list =  document.getElementById("winners");
  while(list.childNodes.length > 1){
    list.removeChild(list.childNodes[list.childNodes.length-1]);
  }
}
function validateForm() {
    var a = document.forms["myForm"]["firstname"].value;
    var b = document.forms["myForm"]["lastname"].value;
    var c = document.forms["myForm"]["office"].value;
    var d = document.forms["myForm"]["party"].value;
    var e = Number(document.forms["myForm"]["votes"].value);
    
   
    if (a == "" ) {
      alert("First name must be filled out");
      tripped = true;
      return false;
    }
    if (b == "" ) {
        alert("Last name must be filled out");
        tripped = true;
        return false;
      }
      if (c == "" ) {
        alert("Office must be filled out");
        tripped = true;
        return false;
      }
      if (d == "") {
        alert("Party must be filled out");
        tripped = true;
        return false;
      }
      if (isNaN(e)) {
        alert("Votes must be filled out and must be a number");
        tripped = true;
        return false;
      }
      return true;

  }