var firstName, lastName, office, party, vots, won;
var candidates = new Array(250);
var offices = new Array(250);
var offCount = 0;//count for offices array
var count = 0;//count for candidates array


function Candidate(firstName, lastName, office, party, votes, won){ //Candidate object
 this.firstName = firstName;
 this.lastName = lastName;
 this.office = office;
 this.party = party;
 this.votes = votes;
 this.won = won;
}

function addCandidate(){//Creats and adds a new candidate
    
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var office = document.getElementById("office").value;
    var party = document.getElementById("party").value;
    var vote = 0;
    var won = false;
    var a = new Candidate(firstName, lastName, office, party, vote, won);
    if(count <= 250){
        
        if(hasCandidate(a)==false){
            candidates[count] = a;
            console.log(candidates[count]);
            count++;
            console.log(count);
            if(hasOffice(a) == false){
               offices[offCount] =  a.office;
               offCount++;
               console.log(offices[0]);
            }
            var out =  "Name: " + a.firstName + " " + a.lastName + "   Office: " + a.office +  "   Party: " + a.party ;   
            var node = document.createElement("P");
            var textnode = document.createTextNode(out);
            node.appendChild(textnode);
            document.getElementById("output").appendChild(node);
            

        }
        else alert("This candidate is already on the ballot.")
    }
}
function hasCandidate( candid){ //takes in some candidate and checks if that candidate is already on the ballot
    var hasThisCandidate = false;
    for( var i = 0; i < count; i++){
        if(candidates[i].firstName === candid.firstName && candidates[i].lastName === (candid.lastName) && candidates[i].party === (candid.party)){
            console.log(candidates[i].firstName);
            hasThisCandidate = true;
        }
    }
    return  hasThisCandidate;
}
function hasOffice(candid){//takes in some candidate and checks if that type of office has already been added onto the array
    var hasOffice = false;
    for( var i = 0; i < offCount; i++){
        if(candid.office === candidates[i].office){
            hasOffice = true;
        }
    }
    return hasOffice;
}