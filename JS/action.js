var firstName, lastName, office, party, vots, won;
var candidates = new Array(250);
var offices = new Array(250);
var offCount = 0;//count for offices array
var count = 0;//count for candidates array
var tempCount = 0;//count for temp array in createCandidatebyList function

function Candidate(firstName, lastName, office, party, votes, won) { //Candidate object
    this.firstName = firstName;
    this.lastName = lastName;
    this.office = office;
    this.party = party;
    this.votes = votes;
    this.won = won;
}

function addCandidate() {//Creats and adds a new candidate

    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var office = document.getElementById("office").value;
    var party = document.getElementById("party").value;
    var vote = document.getElementById("votes").value;
    var won = false;
    var a = new Candidate(firstName, lastName, office, party, vote, won);
    if (count < 250) {

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
        else alert("This candidate is already on the ballot.")
    }
}
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
        if (candid.office === candidates[i].office) {
            hasOffice = true;
        }
    }
    return hasOffice;
}
function winnersHidden() {
    createCandidateListByOffice();
    var box = document.getElementById("winnerBox-hidden");
    var op = 0;
    var id = setInterval(frame, 75);
    function frame() {
        if (op == 1) {
            clearInterval(id);
        } else {
            op += 0.1;
            box.style.opacity = op;

        }
    }
}
function addvotes() {
    for (var i = 0; i < count; i++) {

    }
}
function createCandidateListByOffice() { //will likely be used after you press 
    console.log("apple");
    for (var i = 0; i < offCount; i++) {//press the determine winner buton
        var temp = new Array(250);
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
function determineWinners(candid) {
    var highest = 0;
    for(var i = 0; i <tempCount; i++){
        if(candid[i].votes > highest){
            highest = candid[i].votes;
        }
    }
    for (var j = 0; j < count; j++) {
        if(candidates[j].votes == highest && candidates[j].office === candid[0].office){
            candidates[j].won = true;
            var out = candidates[j].firstName + " " + candidates[j].lastName
            var node = document.createElement("P");
            var textnode = document.createTextNode(out);
            node.appendChild(textnode);
            document.getElementById("winners").appendChild(node);
            console.log(out);
        }
    }
}