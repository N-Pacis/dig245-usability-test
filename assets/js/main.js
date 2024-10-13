let formHandler = document.getElementById("form")

formHandler.addEventListener("submit",(e)=>{
    e.preventDefault();

    let rating1 = document.getElementById("rating1").value;
    let rating2 = document.getElementById("rating2").value;
    let rating3 = document.getElementById("rating3").value;
    let rating4 = document.getElementById("rating4").value;
    let rating5 = document.getElementById("rating5").value;
    let rating6 = document.getElementById("rating6").value;
    let rating7 = document.getElementById("rating7").value;
    let rating8 = document.getElementById("rating8").value;
    let rating9 = document.getElementById("rating9").value;
    let rating10 = document.getElementById("rating10").value;

    //for odd items subtract 1 from the user's response
    rating1 -= 1;
    rating3 -= 1;
    rating5 -= 1;
    rating7 -= 1;
    rating9 -= 1;
    
    //for even items subtract the user's response from 5;
    rating2 = 5 - rating2;
    rating4 = 5 - rating4;
    rating6 = 5 - rating6;
    rating8 = 5 - rating8;
    rating10 = 5 - rating10;

    let total = (rating1 + rating2 + rating3 + rating4 + rating5 + rating6 + rating7 + rating8 + rating9 + rating10) * 2.5;
    console.log(total)

    let scoreElement = document.getElementById("score-value");
    scoreElement.textContent = total
})
/* javascript */
