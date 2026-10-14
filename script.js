function increaseScores(){
            let scores = document.getElementById("scores-value-firstteam")
            scores.innerHTML = Number(scores.innerHTML) + 1;

            

}


function decreaseScores(){
            let scores= document.getElementById("scores-value-firstteam")
            if (scores.innerHTML > 0){
                scores.innerHTML = Number(scores.innerHTML) -1;
            }
}

function increasingScores(){
    let scores = document.getElementById("scores-value-secondteam")
    scores.innerHTML = Number(scores.innerHTML) +1;
}

function decreasingScores(){
    let scores = document.getElementById("scores-value-secondteam")
    if (scores.innerHTML > 0){
        scores.innerHTML = Number(scores.innerHTML) -1;
    }
}

function changeTeamname(){
    let firstTeamText = document.getElementById("first-team-text")
    let firstTeamInput = document.getElementById("first-team-input").value
    if (firstTeamText.innerHTML !== firstTeamInput){
        firstTeamText.innerHTML = firstTeamInput

    }

}


