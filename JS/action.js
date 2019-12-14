var firstName, lastName, office, party, vots, won;
var candidates = new Array(250);
var count = 0;


function Candidate(firstName, lastName, office, party, votes, won){
 this.firstName = firstName;
 this.lastName = lastName;
 this.office = office;
 this.party = party;
 this.votes = votes;
 this.won = won;
}

function addCandidate(){
    var firstName = prompt("Please enter the candidate's first name.", "John");
    var lastName = prompt("Please enter the candidate's last name.", "Doe");
    var office = prompt("Please enter the candidate's office.", "Doe");
    var party = prompt("Please enter the candidate's party.", "Doe");
    var votes = 0;
    var won = new Boolean(false);
    var a = new Candidate(firstName, lastName, office, party, votes, won);
    if(count <= 250){
     
     if()
     
     
     candidates[count] = a;
     count++;
     console.log(a);
     console.log(candidates[0]);
    }
}
