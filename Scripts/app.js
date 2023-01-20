let backgroundImg = document.getElementById('backgroundImg');
let backgroundImg2 = document.getElementsByClassName('backgroundImg2');
let gameMode1 = document.getElementById('gameMode1');
let injectHere = document.getElementById('injectHere');
let injectHereText = document.getElementById('injectHereText');
let injectHere2 = document.getElementById('injectHere2');
let injectHereText2 = document.getElementById('injectHereText2');
let dataGet = '';
let booleanTrue = true;
let winningResponse = document.getElementById('winningResponse');
let actualResponse = document.getElementById('actualResponse');
let actualResponse2 = document.getElementById('actualResponse2');
let actualResponse3 = document.getElementById('actualResponse3');
let counterResponseText1 = document.getElementById('counterResponseText1');
let counterResponseText2 = document.getElementById('counterResponseText2');
let counterResponse1 = document.getElementById('counterResponse1');
let counterResponse2 = document.getElementById('counterResponse2');
let counterResponseText3 = document.getElementById('counterResponseText3');
let counterResponse3 = document.getElementById('counterResponse3');
let counterResponse4 = document.getElementById('counterResponse4');
let counterResponseText4 = document.getElementById('counterResponseText4');
let rulesBtn = document.getElementById('rulesBtn');


//counter

let player1Counter = 0;
let player2Counter = 0;
let cpuCounter = 0;

//Player choice

let player1Choice = '';
let cpuChoice = '';
let player2Choice = '';

//Rounds

let round = 0;



//Options variables

let rockOption = document.getElementById('rockOption');
let paperOption = document.getElementById('paperOption');
let scissorsOption = document.getElementById('scissorsOption');
let lizardOption = document.getElementById('lizardOption');
let spockOption = document.getElementById('spockOption');
let options1 = document.getElementById('options1');

//Options Variables for 5 Round

let rockOption5 = document.getElementById('rockOption5');
let paperOption5 = document.getElementById('paperOption5');
let scissorsOption5 = document.getElementById('scissorsOption5');
let lizardOption5 = document.getElementById('lizardOption5');
let spockOption5 = document.getElementById('spockOption5');
let options2 = document.getElementById('options2');

//Options Variables for 7 Round

let rockOption7 = document.getElementById('rockOption7');
let paperOption7 = document.getElementById('paperOption7');
let scissorsOption7 = document.getElementById('scissorsOption7');
let lizardOption7 = document.getElementById('lizardOption7');
let spockOption7 = document.getElementById('spockOption7');
let options3 = document.getElementById('options3');

//Pvp option variables for 1 round

let pvpRockOption = document.getElementById('pvpRockOption');
let pvpPaperOption = document.getElementById('pvpPaperOption');
let pvpScissorsOption = document.getElementById('pvpScissorsOption');
let pvpLizardOption = document.getElementById('pvpLizardOption');
let pvpSpockOption = document.getElementById('pvpSpockOption');
let player2Options1 = document.getElementById('player2Options1');
let player2OptionsDropdown1 = document.getElementById('player2OptionsDropdown1');
let player1Options1 = document.getElementById('player1Options1');
let player1OptionsDropdown1 = document.getElementById('player1OptionsDropdown1');
let player1RockOption1 = document.getElementById('player1RockOption1');
let player1PaperOption1 = document.getElementById('player1PaperOption1');
let player1ScissorsOption1 = document.getElementById('player1ScissorsOption1');
let player1LizardOption1 = document.getElementById('player1LizardOption1');
let player1SpockOption1 = document.getElementById('player1SpockOption1');

//Pvp option variables for best of 5

let player1Options5 = document.getElementById('player1Options5');
let player1OptionsDropdown5 = document.getElementById('player1OptionsDropdown5');
let player1RockOption5 = document.getElementById('player1RockOption5');
let player1PaperOption5 = document.getElementById('player1PaperOption5');
let player1ScissorsOption5 = document.getElementById('player1ScissorsOption5');
let player1LizardOption5 = document.getElementById('player1LizardOption5');
let player1SpockOption5 = document.getElementById('player1SpockOption5');
let player2Options5 = document.getElementById('player2Options5');
let player2OptionsDropdown5 = document.getElementById('player2OptionsDropdown5');
let pvpRockOption5 = document.getElementById('pvpRockOption5');
let pvpPaperOption5 = document.getElementById('pvpPaperOption5');
let pvpScissorsOption5 = document.getElementById('pvpScissorsOption5');
let pvpLizardOption5 = document.getElementById('pvpLizardOption5');
let pvpSpockOption5 = document.getElementById('pvpSpockOption5');

//Pvp option variables for best of 7

let player1Options7 = document.getElementById('player1Options7');
let player1OptionsDropdown7 = document.getElementById('player1OptionsDropdown7');
let player1RockOption7 = document.getElementById('player1RockOption7');
let player1PaperOption7 = document.getElementById('player1PaperOption7');
let player1ScissorsOption7 = document.getElementById('player1ScissorsOption7');
let player1LizardOption7 = document.getElementById('player1LizardOption7');
let player1SpockOption7 = document.getElementById('player1SpockOption7');
let player2Options7 = document.getElementById('player2Options7');
let player2OptionsDropdown7 = document.getElementById('player2OptionsDropdown7');
let pvpRockOption7 = document.getElementById('pvpRockOption7');
let pvpPaperOption7 = document.getElementById('pvpPaperOption7');
let pvpScissorsOption7 = document.getElementById('pvpScissorsOption7');
let pvpLizardOption7 = document.getElementById('pvpLizardOption7');
let pvpSpockOption7 = document.getElementById('pvpSpockOption7');

// Buttons

let round1Btn = document.getElementById('round1Btn');
let round1BtnDiv = document.getElementById('round1BtnDiv');
let bestOf5Btn = document.getElementById('bestOf5Btn');
let bestOf5BtnDiv = document.getElementById('bestOf5BtnDiv');
let PvpBtn = document.getElementById('PvpBtn');
let PvpBtnDiv = document.getElementById('PvpBtnDiv');
let bestOf7Btn = document.getElementById('bestOf7Btn');
let bestOf7BtnDiv = document.getElementById('bestOf7BtnDiv');
let homeButton = document.getElementById('homeButton');
let resetButton = document.getElementById('resetButton');
let pageButton1 = document.getElementById('pageButton1');
let pageButton2 = document.getElementById('pageButton2');
let PvpBtn2 = document.getElementById('PvpBtn2');
let PvpBtn3 = document.getElementById('PvpBtn3');
let PvpBtn2Div = document.getElementById('PvpBtn2Div');
let PvpBtn3Div = document.getElementById('PvpBtn3Div');

//Event listeners

homeButton.addEventListener('click', function () {
    if (booleanTrue) {
        backgroundImg.className = 'backgroundImg1';
        bestOf5BtnDiv.classList.remove('hide');
        bestOf7BtnDiv.classList.remove('hide');
        PvpBtnDiv.classList.remove('hide');
        round1BtnDiv.classList.remove('hide');
        options1.classList.add('hide');
        options2.classList.add('hide');
        options3.classList.add('hide');
        injectHere.classList.add('hide');
        winningResponse.classList.add('hide');
        PvpBtn2Div.classList.remove('hide');
        PvpBtn3Div.classList.remove('hide');



    } else {
        backgroundImg.className = 'backgroundImg2';
    }
    window.location.reload();


})

rulesBtn.addEventListener('click', function(){
    alert('ROCK beats SCISSORS & LIZARD\nPAPER beats ROCK & SPOCK\nSCISSORS beats PAPER & LIZARD\nLIZARD beats PAPER & SPOCK\nSPOCK beats ROCK & SCISSORS');
})

round1Btn.addEventListener('click', function () {
    if (booleanTrue) {
        backgroundImg.className = 'backgroundImg2';
        bestOf5BtnDiv.classList.add('hide');
        bestOf7BtnDiv.classList.add('hide');
        PvpBtnDiv.classList.add('hide');
        PvpBtn2Div.classList.add('hide');
        PvpBtn3Div.classList.add('hide');
        round1BtnDiv.classList.add('hide');
        options1.classList.remove('hide');
        injectHere.classList.remove('hide');
        winningResponse.classList.remove('hide');
        homeButton.classList.remove('hide');


    } else {
        backgroundImg.className = 'backgroundImg1';
    }

    actualResponse.classList.remove('hide');

    injectHereText.classList.remove('hide');

})

bestOf5Btn.addEventListener('click', function () {
    if (booleanTrue) {
        backgroundImg.className = 'backgroundImg2';
        bestOf5BtnDiv.classList.add('hide');
        bestOf7BtnDiv.classList.add('hide');
        PvpBtnDiv.classList.add('hide');
        PvpBtn2Div.classList.add('hide');
        PvpBtn3Div.classList.add('hide');
        round1BtnDiv.classList.add('hide');
        homeButton.classList.remove('hide');
        options2.classList.remove('hide');
        injectHere2.classList.remove('hide');
        winningResponse.classList.remove('hide');
        injectHereText2.classList.remove('hide');
        actualResponse.classList.add('hide');
        actualResponse2.classList.remove('hide');
        counterResponse1.classList.remove('hide');
        counterResponse2.classList.remove('hide');
        counterResponseText1.classList.remove('hide');
        counterResponseText2.classList.remove('hide');
    } else {
        backgroundImg.className = 'backgroundImg1';
    }
})

bestOf7Btn.addEventListener('click', function () {
    if (booleanTrue) {
        backgroundImg.className = 'backgroundImg2';
        bestOf5BtnDiv.classList.add('hide');
        bestOf7BtnDiv.classList.add('hide');
        PvpBtnDiv.classList.add('hide');
        PvpBtn2Div.classList.add('hide');
        PvpBtn3Div.classList.add('hide');
        round1BtnDiv.classList.add('hide');
        homeButton.classList.remove('hide');
        options3.classList.remove('hide');
        injectHere2.classList.remove('hide');
        winningResponse.classList.remove('hide');
        injectHereText2.classList.remove('hide');
        actualResponse.classList.add('hide');
        actualResponse2.classList.add('hide');
        actualResponse3.classList.remove('hide');
        counterResponse3.classList.remove('hide');
        counterResponse4.classList.remove('hide');
        counterResponseText3.classList.remove('hide');
        counterResponseText4.classList.remove('hide');

    } else {
        backgroundImg.className = 'backgroundImg1';
    }


})

//----------------------------------------------------------------------------------

//PVP EVENTS

PvpBtn.addEventListener('click', function () {
    if (booleanTrue) {
        backgroundImg.className = 'backgroundImg2';
        bestOf5BtnDiv.classList.add('hide');
        bestOf7BtnDiv.classList.add('hide');
        PvpBtnDiv.classList.add('hide');
        PvpBtn2Div.classList.add('hide');
        PvpBtn3Div.classList.add('hide');
        round1BtnDiv.classList.add('hide');
        player1Options1.classList.remove('hide');
        player1OptionsDropdown1.classList.remove('hide');
        player2Options1.classList.remove('hide');
        player2OptionsDropdown1.classList.remove('hide');
        actualResponse.classList.remove('hide');
        winningResponse.classList.remove('hide');
        homeButton.classList.remove('hide');
        counterResponse1.classList.remove('hide');
        counterResponse2.classList.remove('hide');
        counterResponseText1.classList.remove('hide');
        counterResponseText2.classList.remove('hide');

    } else {
        backgroundImg.className = 'backgroundImg1';
    }

})

PvpBtn2.addEventListener('click', function () {
    if (booleanTrue) {
        backgroundImg.className = 'backgroundImg2';
        bestOf5BtnDiv.classList.add('hide');
        bestOf7BtnDiv.classList.add('hide');
        PvpBtnDiv.classList.add('hide');
        PvpBtn2Div.classList.add('hide');
        PvpBtn3Div.classList.add('hide');
        round1BtnDiv.classList.add('hide');
        player1Options5.classList.remove('hide');
        player1OptionsDropdown5.classList.remove('hide');
        player2Options5.classList.remove('hide');
        player2OptionsDropdown5.classList.remove('hide');
        actualResponse.classList.remove('hide');
        winningResponse.classList.remove('hide');
        homeButton.classList.remove('hide');
        counterResponse1.classList.remove('hide');
        counterResponse2.classList.remove('hide');
        counterResponse3.classList.remove('hide');
        counterResponse4.classList.remove('hide');
        counterResponseText1.classList.remove('hide');
        counterResponseText2.classList.remove('hide');
        counterResponseText3.classList.remove('hide');
        counterResponseText4.classList.remove('hide');
    } else {
        backgroundImg.className = 'backgroundImg1';
    }
})

PvpBtn3.addEventListener('click', function () {
    if (booleanTrue) {
        backgroundImg.className = 'backgroundImg2';
        bestOf5BtnDiv.classList.add('hide');
        bestOf7BtnDiv.classList.add('hide');
        PvpBtnDiv.classList.add('hide');
        PvpBtn2Div.classList.add('hide');
        PvpBtn3Div.classList.add('hide');
        round1BtnDiv.classList.add('hide');
        player1Options5.classList.remove('hide');
        player1OptionsDropdown5.classList.remove('hide');
        player2Options5.classList.remove('hide');
        player2OptionsDropdown5.classList.remove('hide');
        actualResponse.classList.remove('hide');
        winningResponse.classList.remove('hide');
        homeButton.classList.remove('hide');
        counterResponse1.classList.remove('hide');
        counterResponse2.classList.remove('hide');
        counterResponse3.classList.remove('hide');
        counterResponse4.classList.remove('hide');
        counterResponseText1.classList.remove('hide');
        counterResponseText2.classList.remove('hide');
        counterResponseText3.classList.remove('hide');
        counterResponseText4.classList.remove('hide');
    } else {
        backgroundImg.className = 'backgroundImg1';
    }
})

//1 round option Even listeners

rockOption.addEventListener('click', function () {


    if (dataGet === 'Paper' || dataGet === 'Spock') {
        actualResponse.textContent = 'Cpu wins!';
    } else if (dataGet === 'Rock') {
        actualResponse.textContent = 'You tied';
    } else {
        actualResponse.textContent = 'You win!'
    }
    injectHereText.textContent = dataGet;
    getData();



})



paperOption.addEventListener('click', function () {

    if (dataGet === 'Scissors' || dataGet === 'Lizard') {
        actualResponse.textContent = 'Cpu wins!';
    } else if (dataGet === 'Paper') {
        actualResponse.textContent = 'You tied';
    } else {
        actualResponse.textContent = 'You win!'
    }
    injectHereText.textContent = dataGet;
    getData();
})

scissorsOption.addEventListener('click', function () {

    if (dataGet === 'Rock' || dataGet === 'Spock') {
        actualResponse.textContent = 'Cpu wins!';
    } else if (dataGet === 'Scissors') {
        actualResponse.textContent = 'You tied';
    } else {
        actualResponse.textContent = 'You win!'
    }
    injectHereText.textContent = dataGet;
    getData();

})

lizardOption.addEventListener('click', function () {

    if (dataGet === 'Rock' || dataGet === 'Scissors') {
        actualResponse.textContent = 'Cpu wins!';
    } else if (dataGet === 'Lizard') {
        actualResponse.textContent = 'You tied';
    } else {
        actualResponse.textContent = 'You win!'
    }
    injectHereText.textContent = dataGet;

    getData();
})

spockOption.addEventListener('click', function () {

    if (dataGet === 'Lizard' || dataGet === 'Paper') {
        actualResponse.textContent = 'Cpu wins!';
    } else if (dataGet === 'Spock') {
        actualResponse.textContent = 'You tied';
    } else {
        actualResponse.textContent = 'You win!'
    }
    injectHereText.textContent = dataGet;
    getData();
})


//Round 5 Extra Logic



counterResponseText1.textContent = player1Counter;
counterResponseText2.textContent = cpuCounter;



//5 Round Option Event Listener



rockOption5.addEventListener('click', function () {



    if (dataGet === 'Paper' || dataGet === 'Spock') {
        actualResponse2.textContent = 'Cpu wins!';
    } else if (dataGet === 'Rock') {
        actualResponse2.textContent = 'You tied';
    } else {
        actualResponse2.textContent = 'You win!'
    }

    if (actualResponse2.textContent === 'Cpu wins!') {
        cpuCounter++;
        console.log(cpuCounter)
         
    }
    if (actualResponse2.textContent === 'You win!') {
        player1Counter++;
        

    }

    injectHereText2.textContent = dataGet;
    getData();

    counterResponseText1.textContent = player1Counter;
    counterResponseText2.textContent = cpuCounter;

    if (player1Counter === 3) {
        actualResponse2.textContent = 'You won the game!'
    }

    if (cpuCounter === 3) {
        actualResponse2.textContent = 'CPU won the game!'
    }

})



paperOption5.addEventListener('click', function () {

    if (dataGet === 'Scissors' || dataGet === 'Lizard') {
        actualResponse2.textContent = 'Cpu wins!';
    } else if (dataGet === 'Paper') {
        actualResponse2.textContent = 'You tied';
    } else {
        actualResponse2.textContent = 'You win!'
    }

    if (actualResponse2.textContent === 'Cpu wins!') {
        cpuCounter++;
    } else if (actualResponse2.textContent === 'You win!') {
        player1Counter++;
    } else {

    }


    injectHereText2.textContent = dataGet;
    getData();

    counterResponseText1.textContent = player1Counter;
    counterResponseText2.textContent = cpuCounter;

    if (player1Counter === 3) {
        actualResponse2.textContent = 'You won the game!'
    }

    if (cpuCounter === 3) {
        actualResponse2.textContent = 'CPU won the game!'
    }
})

scissorsOption5.addEventListener('click', function () {

    if (dataGet === 'Rock' || dataGet === 'Spock') {
        actualResponse2.textContent = 'Cpu wins!';
    } else if (dataGet === 'Scissors') {
        actualResponse2.textContent = 'You tied';
    } else {
        actualResponse2.textContent = 'You win!'
    }

    if (actualResponse2.textContent === 'Cpu wins!') {
        cpuCounter++;
    } else if (actualResponse2.textContent === 'You win!') {
        player1Counter++;
    } else {

    }

    injectHereText2.textContent = dataGet;
    getData();

    counterResponseText1.textContent = player1Counter;
    counterResponseText2.textContent = cpuCounter;

    if (player1Counter === 3) {
        actualResponse2.textContent = 'You won the game!'
    }

    if (cpuCounter === 3) {
        actualResponse2.textContent = 'CPU won the game!'
    }

})

lizardOption5.addEventListener('click', function () {

    if (dataGet === 'Rock' || dataGet === 'Scissors') {
        actualResponse2.textContent = 'Cpu wins!';
    } else if (dataGet === 'Lizard') {
        actualResponse2.textContent = 'You tied';
    } else {
        actualResponse2.textContent = 'You win!'
    }

    if (actualResponse2.textContent === 'Cpu wins!') {
        cpuCounter++;
    } else if (actualResponse2.textContent === 'You win!') {
        player1Counter++;
    } else {

    }

    injectHereText2.textContent = dataGet;
    getData();

    counterResponseText1.textContent = player1Counter;
    counterResponseText2.textContent = cpuCounter;

    if (player1Counter === 3) {
        actualResponse2.textContent = 'You won the game!'
    }

    if (cpuCounter === 3) {
        actualResponse2.textContent = 'CPU won the game!'
    }
})

spockOption5.addEventListener('click', function () {

    if (dataGet === 'Lizard' || dataGet === 'Paper') {
        actualResponse2.textContent = 'Cpu wins!';
    } else if (dataGet === 'Spock') {
        actualResponse2.textContent = 'You tied';
    } else {
        actualResponse2.textContent = 'You win!'
    }

    if (actualResponse2.textContent === 'Cpu wins!') {
        cpuCounter++;
    } else if (actualResponse2.textContent === 'You win!') {
        player1Counter++;
    } else {

    }

    injectHereText2.textContent = dataGet;
    getData();

    counterResponseText1.textContent = player1Counter;
    counterResponseText2.textContent = cpuCounter;

    if (player1Counter === 3) {
        actualResponse2.textContent = 'You won the game!'
    }

    if (cpuCounter === 3) {
        actualResponse2.textContent = 'CPU won the game!'
    }
})

//Best of 7 event listeners

counterResponseText3.textContent = player1Counter;
counterResponseText4.textContent = cpuCounter;


rockOption7.addEventListener('click', function () {


    if (dataGet === 'Paper' || dataGet === 'Spock') {
        actualResponse3.textContent = 'Cpu wins!';
    } else if (dataGet === 'Rock') {
        actualResponse3.textContent = 'You tied';
    } else {
        actualResponse3.textContent = 'You win!'
    }

    if (actualResponse3.textContent === 'Cpu wins!') {
        cpuCounter++;
        console.log(cpuCounter)
    }
    if (actualResponse3.textContent === 'You win!') {
        player1Counter++;

    }

    injectHereText2.textContent = dataGet;
    getData();

    counterResponseText3.textContent = player1Counter;
    counterResponseText4.textContent = cpuCounter;

    if (player1Counter === 5) {
        actualResponse3.textContent = 'You won the game!'
    }

    if (cpuCounter === 5) {
        actualResponse3.textContent = 'CPU won the game!'
    }

})



paperOption7.addEventListener('click', function () {

    if (dataGet === 'Scissors' || dataGet === 'Lizard') {
        actualResponse3.textContent = 'Cpu wins!';
    } else if (dataGet === 'Paper') {
        actualResponse3.textContent = 'You tied';
    } else {
        actualResponse3.textContent = 'You win!'
    }

    if (actualResponse3.textContent === 'Cpu wins!') {
        cpuCounter++;
    } else if (actualResponse3.textContent === 'You win!') {
        player1Counter++;
    } else {

    }


    injectHereText2.textContent = dataGet;
    getData();

    counterResponseText3.textContent = player1Counter;
    counterResponseText4.textContent = cpuCounter;

    if (player1Counter === 5) {
        actualResponse3.textContent = 'You won the game!'
    }

    if (cpuCounter === 5) {
        actualResponse3.textContent = 'CPU won the game!'
    }
})

scissorsOption7.addEventListener('click', function () {

    if (dataGet === 'Rock' || dataGet === 'Spock') {
        actualResponse3.textContent = 'Cpu wins!';
    } else if (dataGet === 'Scissors') {
        actualResponse3.textContent = 'You tied';
    } else {
        actualResponse3.textContent = 'You win!'
    }

    if (actualResponse3.textContent === 'Cpu wins!') {
        cpuCounter++;
    } else if (actualResponse3.textContent === 'You win!') {
        player1Counter++;
    } else {

    }

    injectHereText2.textContent = dataGet;
    getData();

    counterResponseText3.textContent = player1Counter;
    counterResponseText4.textContent = cpuCounter;

    if (player1Counter === 5) {
        actualResponse3.textContent = 'You won the game!'
    }

    if (cpuCounter === 5) {
        actualResponse3.textContent = 'CPU won the game!'
    }

})

lizardOption7.addEventListener('click', function () {

    if (dataGet === 'Rock' || dataGet === 'Scissors') {
        actualResponse3.textContent = 'Cpu wins!';
    } else if (dataGet === 'Lizard') {
        actualResponse3.textContent = 'You tied';
    } else {
        actualResponse3.textContent = 'You win!'
    }

    if (actualResponse3.textContent === 'Cpu wins!') {
        cpuCounter++;
    } else if (actualResponse3.textContent === 'You win!') {
        player1Counter++;
    } else {

    }

    injectHereText2.textContent = dataGet;
    getData();

    counterResponseText3.textContent = player1Counter;
    counterResponseText4.textContent = cpuCounter;

    if (player1Counter === 5) {
        actualResponse3.textContent = 'You won the game!'
    }

    if (cpuCounter === 5) {
        actualResponse3.textContent = 'CPU won the game!'
    }
})

spockOption7.addEventListener('click', function () {

    if (dataGet === 'Lizard' || dataGet === 'Paper') {
        actualResponse3.textContent = 'Cpu wins!';
    } else if (dataGet === 'Spock') {
        actualResponse3.textContent = 'You tied';
    } else {
        actualResponse3.textContent = 'You win!'
    }

    if (actualResponse3.textContent === 'Cpu wins!') {
        cpuCounter++;
    } else if (actualResponse3.textContent === 'You win!') {
        player1Counter++;
    } else {

    }

    injectHereText2.textContent = dataGet;
    getData();

    counterResponseText3.textContent = player1Counter;
    counterResponseText4.textContent = cpuCounter;

    if (player1Counter === 5) {
        actualResponse3.textContent = 'You won the game!'
    }

    if (cpuCounter === 5) {
        actualResponse3.textContent = 'CPU won the game!'
    }
})

//-----------------------------------------------------------------------------------------


//Pvp option 1 event listeners 1 round


player1RockOption1.addEventListener('click', function () {
    
    player1Choice = player1RockOption1.value;
    
    console.log(player1Choice);
    if(player2Choice === ''){

    }else{

        
        if (player2Choice === 'paper' || player2Choice === 'spock') {
            counterResponseText2.textContent = player2Choice;
            counterResponseText1.textContent = player1Choice;
            actualResponse.textContent = 'Player 2 wins!';
        } else if (player2Choice === 'rock') {
            actualResponse.textContent = 'You tied';
            counterResponseText2.textContent = player2Choice;
            counterResponseText1.textContent = player1Choice;
        } else {
            counterResponseText2.textContent = player2Choice;
            counterResponseText1.textContent = player1Choice;
            actualResponse.textContent = 'Player 1 wins!'
        }
       
        
    }

})

player1PaperOption1.addEventListener('click', function () {
    
    player1Choice = player1PaperOption1.value;
    
    if(player2Choice === ''){

    }else{

        
        if (player2Choice === 'scissors' || player2Choice === 'lizard') {
            counterResponseText2.textContent = player2Choice;
            counterResponseText1.textContent = player1Choice;

            actualResponse.textContent = 'Player 2 wins!';
        } else if (player2Choice === 'paper') {
            counterResponseText2.textContent = player2Choice;
            counterResponseText1.textContent = player1Choice;

            actualResponse.textContent = 'You tied';
        } else {
            counterResponseText2.textContent = player2Choice;
            counterResponseText1.textContent = player1Choice;
            actualResponse.textContent = 'Player 1 wins!'
        }

     
        
    }
})

player1ScissorsOption1.addEventListener('click', function () {
    
    player1Choice = player1ScissorsOption1.value;
    

    if(player2Choice === ''){
        
    }else{

    if (player2Choice === 'rock' || player2Choice === 'spock') {
        counterResponseText2.textContent = player2Choice;
        counterResponseText1.textContent = player1Choice;
        actualResponse.textContent = 'Player 2 wins!';
    } else if (player2Choice === 'scissors') {
        counterResponseText2.textContent = player2Choice;
        counterResponseText1.textContent = player1Choice;
        actualResponse.textContent = 'You tied';
    } else {
        counterResponseText2.textContent = player2Choice;
        counterResponseText1.textContent = player1Choice;
        actualResponse.textContent = 'Player 1 wins!'
    }
   
}
})

player1LizardOption1.addEventListener('click', function () {
   
    player1Choice = player1LizardOption1.value;
   

    if(player2Choice === ''){
        
    }else{

    if (player2Choice === 'rock' || player2Choice === 'scissors') {
        counterResponseText2.textContent = player2Choice;
        counterResponseText1.textContent = player1Choice;
        actualResponse.textContent = 'Player 2 wins!';
    } else if (player2Choice === 'lizard') {
        counterResponseText2.textContent = player2Choice;
        counterResponseText1.textContent = player1Choice;
        actualResponse.textContent = 'You tied';
    } else {
        counterResponseText2.textContent = player2Choice;
        counterResponseText1.textContent = player1Choice;
        actualResponse.textContent = 'Player 1 wins!'
    }
  

}

})

player1SpockOption1.addEventListener('click', function () {
    player1Choice = player1SpockOption1.value;
    

    if(player2Choice === ''){
        
    }else{

    if (player2Choice === 'lizard' || player2Choice === 'paper') {
        counterResponseText2.textContent = player2Choice;
        counterResponseText1.textContent = player1Choice;
        actualResponse.textContent = 'Player 2 wins!';
    } else if (player2Choice === 'spock') {
        counterResponseText2.textContent = player2Choice;
        counterResponseText1.textContent = player1Choice;
        actualResponse.textContent = 'You tied';
    } else {
        counterResponseText2.textContent = player2Choice;
        counterResponseText1.textContent = player1Choice;
        actualResponse.textContent = 'Player 1 wins!'
        
    }

    

}

})

//---------------------------------------------------------------------------------------

//Player 1 event Listeners Best of 5


player1RockOption5.addEventListener('click', function(){

    
    player1Choice = '';
    

    
    player1Choice = player1RockOption5.value;
    
    console.log(player1Choice);
    console.log(player2Choice);
    if(player2Choice === '' || player1Choice === ''){

    }else{

        
        if (player2Choice === 'paper' || player2Choice === 'spock') {
            counterResponseText3.textContent = player2Choice;
            counterResponseText1.textContent = player1Choice;
           
            actualResponse.textContent = 'Player 2 wins!';
        } else if (player2Choice === 'rock') {
            actualResponse.textContent = 'You tied';
            counterResponseText3.textContent = player2Choice;
            counterResponseText1.textContent = player1Choice;
        } else {
            counterResponseText3.textContent = player2Choice;
            counterResponseText1.textContent = player1Choice;
            actualResponse.textContent = 'Player 1 wins!'
        }

        if (actualResponse.textContent === 'Player 2 wins!') {
            player2Counter++;
            round++;
            player1Choice = '';
            player2Choice = '';
            
            console.log(player1Choice);
        console.log(player2Choice);
        } else if (actualResponse.textContent === 'Player 1 wins!') {
            player1Counter++;
            round++;
            player2Choice = '';
            player1Choice = '';
          
            console.log(player1Choice);
        console.log(player2Choice);
        } else {
    
        }

       
    
        counterResponseText2.textContent = player1Counter;
        counterResponseText4.textContent = player2Counter;


        if (player1Counter === 5) {
            actualResponse.textContent = 'Player 1 won the game!'
        }
    
        if (player2Counter === 5) {
            actualResponse.textContent = 'Player 2 won the game!'
        }
       
        
    }
})

player1PaperOption5.addEventListener('click', function(){
    
    player1Choice = player1PaperOption5.value;

    player1Choice = '';

    
    if(player1Choice === '' || player2Choice === ''){

    }else{

        
        if (player2Choice === 'scissors' || player2Choice === 'lizard') {
            counterResponseText3.textContent = player2Choice;
            counterResponseText1.textContent = player1Choice;

            actualResponse.textContent = 'Player 2 wins!';
        } else if (player2Choice === 'paper') {
            counterResponseText3.textContent = player2Choice;
            counterResponseText1.textContent = player1Choice;

            actualResponse.textContent = 'You tied';
        } else {
            counterResponseText3.textContent = player2Choice;
            counterResponseText1.textContent = player1Choice;
            actualResponse.textContent = 'Player 1 wins!'
        }

        if (actualResponse.textContent === 'Player 2 wins!') {
            player2Counter++;
            player1Choice = '';
            player2Choice = '';
        } else if (actualResponse.textContent === 'Player 1 wins!') {
            player1Counter++;
            player1Choice = '';
            player2Choice = '';
        } else {
    
        }
    
        counterResponseText2.textContent = player1Counter;
        counterResponseText4.textContent = player2Counter;

        if (player1Counter === 5) {
            actualResponse.textContent = 'Player 1 won the game!'
        }
    
        if (player2Counter === 5) {
            actualResponse.textContent = 'Player 2 won the game!'
        }
       

     
        
    }

})

player1ScissorsOption5.addEventListener('click', function(){

    player1Choice = player1ScissorsOption5.value;

    player1Choice = '';

    

    if(player2Choice === '' && player1Choice === ''){
        
    }else{

    if (player2Choice === 'rock' || player2Choice === 'spock') {
        counterResponseText3.textContent = player2Choice;
        counterResponseText1.textContent = player1Choice;
        actualResponse.textContent = 'Player 2 wins!';
    } else if (player2Choice === 'scissors') {
        counterResponseText3.textContent = player2Choice;
        counterResponseText1.textContent = player1Choice;
        actualResponse.textContent = 'You tied';
    } else {
        counterResponseText3.textContent = player2Choice;
        counterResponseText1.textContent = player1Choice;
        actualResponse.textContent = 'Player 1 wins!'
    }

    if (actualResponse.textContent === 'Player 2 wins!') {
        player2Counter++;
        player1Choice = ' ';
        player2Choice = ' ';
    } else if (actualResponse.textContent === 'Player 1 wins!') {
        player1Counter++;
        player1Choice = ' ';
        player2Choice = ' ';
    } else {

    }

    counterResponseText2.textContent = player1Counter;
    counterResponseText4.textContent = player2Counter;

    if (player1Counter === 5) {
        actualResponse.textContent = 'Player 1 won the game!'
    }

    if (player2Counter === 5) {
        actualResponse.textContent = 'Player 2 won the game!'
    }
   
   
}
})

player1LizardOption5.addEventListener('click', function(){

    player1Choice = player1LizardOption5.value;

    player1Choice = '';

   

    if(player1Choice === '' || player2Choice === ''){
        
    }else{

    if (player2Choice === 'rock' || player2Choice === 'scissors') {
        counterResponseText3.textContent = player2Choice;
        counterResponseText1.textContent = player1Choice;
        actualResponse.textContent = 'Player 2 wins!';
    } else if (player2Choice === 'lizard') {
        counterResponseText3.textContent = player2Choice;
        counterResponseText1.textContent = player1Choice;
        actualResponse.textContent = 'You tied';
    } else {
        counterResponseText3.textContent = player2Choice;
        counterResponseText1.textContent = player1Choice;
        actualResponse.textContent = 'Player 1 wins!'
    }

    if (actualResponse.textContent === 'Player 2 wins!') {
        player2Counter++;
        player1Choice = '';
            player2Choice = '';
    } else if (actualResponse.textContent === 'Player 1 wins!') {
        player1Counter++;
        player1Choice = '';
            player2Choice = '';
    } else {

    }

    counterResponseText2.textContent = player1Counter;
    counterResponseText4.textContent = player2Counter;

    if (player1Counter === 5) {
        actualResponse.textContent = 'Player 1 won the game!'
    }

    if (player2Counter === 5) {
        actualResponse.textContent = 'Player 2 won the game!'
    }
   
  

}
})

player1SpockOption5.addEventListener('click' , function(){

    player1Choice = player1SpockOption5.value;

    player1Choice = '';

    

    if(player1Choice === '' || player2Choice === ''){
        
    }else{

    if (player2Choice === 'lizard' || player2Choice === 'paper') {
        counterResponseText3.textContent = player2Choice;
        counterResponseText1.textContent = player1Choice;
        actualResponse.textContent = 'Player 2 wins!';
    } else if (player2Choice === 'spock') {
        counterResponseText3.textContent = player2Choice;
        counterResponseText1.textContent = player1Choice;
        actualResponse.textContent = 'You tied';
    } else {
        counterResponseText3.textContent = player2Choice;
        counterResponseText1.textContent = player1Choice;
        actualResponse.textContent = 'Player 1 wins!'
        
    }

    if (actualResponse.textContent === 'Player 2 wins!') {
        player2Counter++;
        player1Choice = '';
            player2Choice = '';
    } else if (actualResponse.textContent === 'Player 1 wins!') {
        player1Counter++;
        player1Choice = '';
            player2Choice = '';
    } else {

    }

    counterResponseText2.textContent = player1Counter;
    counterResponseText4.textContent = player2Counter;

    if (player1Counter === 5) {
        actualResponse.textContent = 'Player 1 won the game!'
    }

    if (player2Counter === 5) {
        actualResponse.textContent = 'Player 2 won the game!'
    }
   

    

}
})

//---------------------------------------------------------------------------------------

//Player 1 event Listeners Best of 7

player1RockOption7.addEventListener('click', function(){
    
    player1Choice = player1RockOption7.value;
    
    player1Choice = '';

    console.log(player1Choice);
    if(player1Choice === '' || player2Choice === ''){

    }else{

        
        if (player2Choice === 'paper' || player2Choice === 'spock') {
            counterResponseText3.textContent = player2Choice;
            counterResponseText1.textContent = player1Choice;
            actualResponse.textContent = 'Player 2 wins!';
        } else if (player2Choice === 'rock') {
            actualResponse.textContent = 'You tied';
            counterResponseText3.textContent = player2Choice;
            counterResponseText1.textContent = player1Choice;
        } else {
            counterResponseText3.textContent = player2Choice;
            counterResponseText1.textContent = player1Choice;
            actualResponse.textContent = 'Player 1 wins!'
        }

        if (actualResponse.textContent === 'Player 2 wins!') {
            player2Counter++;
            player1Choice = '';
            player2Choice = '';
        } else if (actualResponse.textContent === 'Player 1 wins!') {
            player1Counter++;
            player1Choice = '';
            player2Choice = '';
        } else {
    
        }
    
        counterResponseText2.textContent = player1Counter;
        counterResponseText4.textContent = player2Counter;

        if (player1Counter === 7) {
            actualResponse.textContent = 'Player 1 won the game!'
        }

        if (player2Counter === 7) {
            actualResponse.textContent = 'Player 2 won the game!'
        }
       
        
    }
})

player1PaperOption7.addEventListener('click', function(){

    player1Choice = player1PaperOption7.value;
    player1Choice = '';
    
    if(player1Choice === '' || player2Choice === ''){

    }else{

        
        if (player2Choice === 'scissors' || player2Choice === 'lizard') {
            counterResponseText3.textContent = player2Choice;
            counterResponseText1.textContent = player1Choice;

            actualResponse.textContent = 'Player 2 wins!';
        } else if (player2Choice === 'paper') {
            counterResponseText3.textContent = player2Choice;
            counterResponseText1.textContent = player1Choice;

            actualResponse.textContent = 'You tied';
        } else {
            counterResponseText3.textContent = player2Choice;
            counterResponseText1.textContent = player1Choice;
            actualResponse.textContent = 'Player 1 wins!'
        }

        if (actualResponse.textContent === 'Player 2 wins!') {
            player2Counter++;
            player1Choice = '';
            player2Choice = '';
        } else if (actualResponse.textContent === 'Player 1 wins!') {
            player1Counter++;
            player1Choice = '';
            player2Choice = '';
        } else {
    
        }
    
        counterResponseText2.textContent = player1Counter;
        counterResponseText4.textContent = player2Counter;

        if (player1Counter === 7) {
            actualResponse.textContent = 'Player 1 won the game!'
        }
    
        if (player2Counter === 7) {
            actualResponse.textContent = 'Player 2 won the game!'
        }
       

     
        
    }
})

player1ScissorsOption7.addEventListener('click', function(){

    player1Choice = player1ScissorsOption7.value;

    player1Choice = '';
    

    if(player1Choice === '' || player2Choice === ''){
        
    }else{

    if (player2Choice === 'rock' || player2Choice === 'spock') {
        counterResponseText3.textContent = player2Choice;
        counterResponseText1.textContent = player1Choice;
        actualResponse.textContent = 'Player 2 wins!';
    } else if (player2Choice === 'scissors') {
        counterResponseText3.textContent = player2Choice;
        counterResponseText1.textContent = player1Choice;
        actualResponse.textContent = 'You tied';
    } else {
        counterResponseText3.textContent = player2Choice;
        counterResponseText1.textContent = player1Choice;
        actualResponse.textContent = 'Player 1 wins!'
    }

    if (actualResponse.textContent === 'Player 2 wins!') {
        player2Counter++;
        player1Choice = '';
            player2Choice = '';
    } else if (actualResponse.textContent === 'Player 1 wins!') {
        player1Counter++;
        player1Choice = '';
            player2Choice = '';
    } else {

    }

    counterResponseText2.textContent = player1Counter;
    counterResponseText4.textContent = player2Counter;

    if (player1Counter === 7) {
        actualResponse.textContent = 'Player 1 won the game!'
    }

    if (player2Counter === 7) {
        actualResponse.textContent = 'Player 2 won the game!'
    }
   
   
}
})

player1LizardOption7.addEventListener('click', function(){


    player1Choice = player1LizardOption7.value;

    player1Choice = '';
   

    if(player1Choice === '' || player2Choice === ''){
        
    }else{

    if (player2Choice === 'rock' || player2Choice === 'scissors') {
        counterResponseText3.textContent = player2Choice;
        counterResponseText1.textContent = player1Choice;
        actualResponse.textContent = 'Player 2 wins!';
    } else if (player2Choice === 'lizard') {
        counterResponseText3.textContent = player2Choice;
        counterResponseText1.textContent = player1Choice;
        actualResponse.textContent = 'You tied';
    } else {
        counterResponseText3.textContent = player2Choice;
        counterResponseText1.textContent = player1Choice;
        actualResponse.textContent = 'Player 1 wins!'
    }

    if (actualResponse.textContent === 'Player 2 wins!') {
        player2Counter++;
        player1Choice = '';
            player2Choice = '';
    } else if (actualResponse.textContent === 'Player 1 wins!') {
        player1Counter++;
        player1Choice = '';
            player2Choice = '';
    } else {

    }

    counterResponseText2.textContent = player1Counter;
    counterResponseText4.textContent = player2Counter;

    if (player1Counter === 7) {
        actualResponse.textContent = 'Player 1 won the game!'
    }

    if (player2Counter === 7) {
        actualResponse.textContent = 'Player 2 won the game!'
    }
   
  

}
})

player1SpockOption7.addEventListener('click', function(){
    
    player1Choice = player1SpockOption7.value;
    player1Choice = '';
    

    if(player1Choice === '' || player2Choice === ''){
        
    }else{

    if (player2Choice === 'lizard' || player2Choice === 'paper') {
        counterResponseText3.textContent = player2Choice;
        counterResponseText1.textContent = player1Choice;
        actualResponse.textContent = 'Player 2 wins!';
    } else if (player2Choice === 'spock') {
        counterResponseText3.textContent = player2Choice;
        counterResponseText1.textContent = player1Choice;
        actualResponse.textContent = 'You tied';
    } else {
        counterResponseText3.textContent = player2Choice;
        counterResponseText1.textContent = player1Choice;
        actualResponse.textContent = 'Player 1 wins!'
        
    }

    if (actualResponse.textContent === 'Player 2 wins!') {
        player2Counter++;
        player1Choice = '';
            player2Choice = '';
    } else if (actualResponse.textContent === 'Player 1 wins!') {
        player1Counter++;
        player1Choice = '';
            player2Choice = '';
    } else {

    }

    counterResponseText2.textContent = player1Counter;
    counterResponseText4.textContent = player2Counter;

    if (player1Counter === 7) {
        actualResponse.textContent = 'Player 1 won the game!'
    }

    if (player2Counter === 7) {
        actualResponse.textContent = 'Player 2 won the game!'
    }
   

    

}
})

//---------------------------------------------------------------------------------------

//player 2 add event listeners 1 round

pvpRockOption.addEventListener('click', function () {
    player2Choice = pvpRockOption.value;

    if(player1Choice === ''){
        
    }else{

    if (player1Choice === 'paper' || player1Choice === 'spock') {
        counterResponseText1.textContent = player1Choice;
        counterResponseText2.textContent = player2Choice;
        actualResponse.textContent = 'Player 1 wins!';
    } else if (player1Choice === 'rock') {
        counterResponseText1.textContent = player1Choice;
        counterResponseText2.textContent = player2Choice;
        actualResponse.textContent = 'You tied';
    } else {
        counterResponseText1.textContent = player1Choice;
        counterResponseText2.textContent = player2Choice;
        actualResponse.textContent = 'Player 2 wins!'
    }
    
}
})

pvpPaperOption.addEventListener('click', function () {
    player2Choice = pvpPaperOption.value;

    if(player1Choice === ''){
        
    }else{
        
    if (player1Choice === 'scissors' || player1Choice === 'lizard') {
        counterResponseText1.textContent = player1Choice;
        counterResponseText2.textContent = player2Choice;
        actualResponse.textContent = 'Player 1 wins!';
    } else if (player1Choice === 'paper') {
        counterResponseText1.textContent = player1Choice;
        counterResponseText2.textContent = player2Choice;
        actualResponse.textContent = 'You tied';
    } else {
        counterResponseText1.textContent = player1Choice;
        counterResponseText2.textContent = player2Choice;
        actualResponse.textContent = 'Player 2 wins!'
    }
    
}
})

pvpScissorsOption.addEventListener('click', function () {
    player2Choice = pvpScissorsOption.value;

    if(player1Choice === ''){
        
    }else{
        
    if (player1Choice === 'rock' || player1Choice === 'spock') {
        counterResponseText1.textContent = player1Choice;
        counterResponseText2.textContent = player2Choice;
        actualResponse.textContent = 'Player 1 wins!';
    } else if (player1Choice === 'scissors') {
        counterResponseText1.textContent = player1Choice;
        counterResponseText2.textContent = player2Choice;
        actualResponse.textContent = 'You tied';
    } else {
        counterResponseText1.textContent = player1Choice;
        counterResponseText2.textContent = player2Choice;
        actualResponse.textContent = 'Player 2 wins!'
    }
   

}
})

pvpLizardOption.addEventListener('click', function () {
    player2Choice = pvpLizardOption.value;

    if(player1Choice === ''){
        
    }else{
        
    if (player1Choice === 'rock' || player1Choice === 'scissors') {
        counterResponseText1.textContent = player1Choice;
        counterResponseText2.textContent = player2Choice;
        actualResponse.textContent = 'Player 1 wins!';
    } else if (player1Choice === 'lizard') {
        counterResponseText1.textContent = player1Choice;
        counterResponseText2.textContent = player2Choice;
        actualResponse.textContent = 'You tied';
    } else {
        counterResponseText1.textContent = player1Choice;
        counterResponseText2.textContent = player2Choice;
        actualResponse.textContent = 'Player 2 wins!'
    }
 

}
})

pvpSpockOption.addEventListener('click', function () {
    player2Choice = pvpSpockOption.value;

    if(player1Choice === ''){
        
    }else{
        
    if (player1Choice === 'lizard' || player1Choice === 'paper') {

        counterResponseText1.textContent = player1Choice;
        counterResponseText2.textContent = player2Choice;
        actualResponse.textContent = 'Player 1 wins!';
    } else if (player1Choice === 'spock') {
        counterResponseText1.textContent = player1Choice;
        counterResponseText2.textContent = player2Choice;
        actualResponse.textContent = 'You tied';
    } else {
        counterResponseText1.textContent = player1Choice;
        counterResponseText2.textContent = player2Choice;
        actualResponse.textContent = 'Player 2 wins!'
    }
    

}
})

//---------------------------------------------------------------------------------------

//Player 2 Options Best of 5

pvpRockOption5.addEventListener('click', function(){
    
    player2Choice = '';

    player2Choice = pvpRockOption5.value;



    if(player1Choice === '' || player2Choice === ''){
        
    }else{

    if (player1Choice === 'paper' || player1Choice === 'spock') {
        counterResponseText1.textContent = player1Choice;
        counterResponseText3.textContent = player2Choice;
        actualResponse.textContent = 'Player 1 wins!';
    } else if (player1Choice === 'rock') {
        counterResponseText1.textContent = player1Choice;
        counterResponseText3.textContent = player2Choice;
        actualResponse.textContent = 'You tied';
    } else {
        counterResponseText1.textContent = player1Choice;
        counterResponseText3.textContent = player2Choice;
        actualResponse.textContent = 'Player 2 wins!'
    }

    if (actualResponse.textContent === 'Player 2 wins!') {
        player2Counter++;
        player2Choice = '';
        player1Choice = '';
        
    } else if (actualResponse.textContent === 'Player 1 wins!') {
        player1Counter++;
        player2Choice = '';
        player1Choice = '';
         
    } else {

    }

    counterResponseText2.textContent = player1Counter;
    counterResponseText4.textContent = player2Counter;

    if (player1Counter === 5) {
        actualResponse.textContent = 'Player 1 won the game!'
    }

    if (player2Counter === 5) {
        actualResponse.textContent = 'Player 2 won the game!'
    }
   
    
}

    
})

pvpPaperOption5.addEventListener('click', function(){

    
    player2Choice = '';

    player2Choice = pvpPaperOption5.value;

    console.log(player1Choice);
    console.log(player2Choice);

    if(player1Choice === '' || player2Choice === ''){
        
    }else{
        
    if (player1Choice === 'scissors' || player1Choice === 'lizard') {
        counterResponseText1.textContent = player1Choice;
        counterResponseText3.textContent = player2Choice;
        
        actualResponse.textContent = 'Player 1 wins!';
    } else if (player1Choice === 'paper') {
        counterResponseText1.textContent = player1Choice;
        counterResponseText3.textContent = player2Choice;


        actualResponse.textContent = 'You tied';
    } else {
        counterResponseText1.textContent = player1Choice;
        counterResponseText3.textContent = player2Choice;
        actualResponse.textContent = 'Player 2 wins!'
    }

    if (actualResponse.textContent === 'Player 2 wins!') {
        player2Counter++;
        round++;
        player2Choice = '';
        player1Choice = '';
        console.log(player1Choice);
        console.log(player2Choice);
    } else if (actualResponse.textContent === 'Player 1 wins!') {
        player1Counter++;
        round++;
       player1Choice = '';
       player2Choice = '';
        console.log(player1Choice);
        console.log(player2Choice);
    } else {

    }

    


    counterResponseText2.textContent = player1Counter;
    counterResponseText4.textContent = player2Counter;


    if (player1Counter === 5) {
        actualResponse.textContent = 'Player 1 won the game!'
    }

    if (player2Counter === 5) {
        actualResponse.textContent = 'Player 2 won the game!'
    }
   
    
}

})

pvpScissorsOption5.addEventListener('click', function(){
    player2Choice = pvpScissorsOption5.value;

    player2Choice = '';

    if(player1Choice === '' || player2Choice === ''){
        
    }else{
        
    if (player1Choice === 'rock' || player1Choice === 'spock') {
        counterResponseText1.textContent = player1Choice;
        counterResponseText3.textContent = player2Choice;
        actualResponse.textContent = 'Player 1 wins!';
    } else if (player1Choice === 'scissors') {
        counterResponseText1.textContent = player1Choice;
        counterResponseText3.textContent = player2Choice;
        actualResponse.textContent = 'You tied';
    } else {
        counterResponseText1.textContent = player1Choice;
        counterResponseText3.textContent = player2Choice;
        actualResponse.textContent = 'Player 2 wins!'
    }

    if (actualResponse.textContent === 'Player 2 wins!') {
        player2Counter++;
        player2Choice = '';
        player1Choice = '';
    } else if (actualResponse.textContent === 'Player 1 wins!') {
        player1Counter++;
        player2Choice = '';
        player1Choice = '';
    } else {

    }

    counterResponseText2.textContent = player1Counter;
    counterResponseText4.textContent = player2Counter;

    if (player1Counter === 5) {
        actualResponse.textContent = 'Player 1 won the game!'
    }

    if (player2Counter === 5) {
        actualResponse.textContent = 'Player 2 won the game!'
    }
   
   

}

})

pvpLizardOption5.addEventListener('click', function(){
    player2Choice = pvpLizardOption5.value;

    player2Choice = '';

    if(player1Choice === '' || player2Choice === ''){
        
    }else{
        
    if (player1Choice === 'rock' || player1Choice === 'scissors') {
        counterResponseText1.textContent = player1Choice;
        counterResponseText3.textContent = player2Choice;
        actualResponse.textContent = 'Player 1 wins!';
    } else if (player1Choice === 'lizard') {
        counterResponseText1.textContent = player1Choice;
        counterResponseText3.textContent = player2Choice;
        actualResponse.textContent = 'You tied';
    } else {
        counterResponseText1.textContent = player1Choice;
        counterResponseText3.textContent = player2Choice;
        actualResponse.textContent = 'Player 2 wins!'
    }

    if (actualResponse.textContent === 'Player 2 wins!') {
        player2Counter++;
        player2Choice = '';
        player1Choice = '';
    } else if (actualResponse.textContent === 'Player 1 wins!') {
        player1Counter++;
        player2Choice = '';
        player1Choice = '';
    } else {

    }

    counterResponseText2.textContent = player1Counter;
    counterResponseText4.textContent = player2Counter;
    
    if (player1Counter === 5) {
        actualResponse.textContent = 'Player 1 won the game!'
    }

    if (player2Counter === 5) {
        actualResponse.textContent = 'Player 2 won the game!'
    }
   
 

}

})

pvpSpockOption5.addEventListener('click', function(){
    player2Choice = pvpSpockOption5.value;

    player2Choice = '';

    if(player1Choice === '' || player2Choice === ''){
        
    }else{
        
    if (player1Choice === 'lizard' || player1Choice === 'paper') {

        counterResponseText1.textContent = player1Choice;
        counterResponseText3.textContent = player2Choice;
        actualResponse.textContent = 'Player 1 wins!';
    } else if (player1Choice === 'spock') {
        counterResponseText1.textContent = player1Choice;
        counterResponseText3.textContent = player2Choice;
        actualResponse.textContent = 'You tied';
    } else {
        counterResponseText1.textContent = player1Choice;
        counterResponseText3.textContent = player2Choice;
        actualResponse.textContent = 'Player 2 wins!'
    }

    if (actualResponse.textContent === 'Player 2 wins!') {
        player2Counter++;
        player2Choice = '';
        player1Choice = '';
    } else if (actualResponse.textContent === 'Player 1 wins!') {
        player1Counter++;
        player2Choice = '';
        player1Choice = '';
    } else {

    }

    counterResponseText2.textContent = player1Counter;
    counterResponseText4.textContent = player2Counter;

    if (player1Counter === 5) {
        actualResponse.textContent = 'Player 1 won the game!'
    }

    if (player2Counter === 5) {
        actualResponse.textContent = 'Player 2 won the game!'
    }
   
    

}

})

//---------------------------------------------------------------------------------------

//Player 2 Options Best of 7

pvpRockOption7.addEventListener('click', function(){

    player2Choice = pvpRockOption7.value;
    player2Choice = '';

    if(player1Choice === '' || player2Choice === ''){
        
    }else{

    if (player1Choice === 'paper' || player1Choice === 'spock') {
        counterResponseText1.textContent = player1Choice;
        counterResponseText3.textContent = player2Choice;
        actualResponse.textContent = 'Player 1 wins!';
    } else if (player1Choice === 'rock') {
        counterResponseText1.textContent = player1Choice;
        counterResponseText3.textContent = player2Choice;
        actualResponse.textContent = 'You tied';
    } else {
        counterResponseText1.textContent = player1Choice;
        counterResponseText3.textContent = player2Choice;
        actualResponse.textContent = 'Player 2 wins!'
    }

    if (actualResponse.textContent === 'Player 2 wins!') {
        player2Counter++;
        player2Choice = '';
        player1Choice = '';
    } else if (actualResponse.textContent === 'Player 1 wins!') {
        player1Counter++;
        player2Choice = '';
        player1Choice = '';
    } else {

    }

    counterResponseText2.textContent = player1Counter;
    counterResponseText4.textContent = player2Counter;

    if (player1Counter === 7) {
        actualResponse.textContent = 'Player 1 won the game!'
    }

    if (player2Counter === 7) {
        actualResponse.textContent = 'Player 2 won the game!'
    }
   
    
}
})

pvpPaperOption7.addEventListener('click', function(){

    player2Choice = pvpPaperOption7.value;

    player2Choice = '';

    if(player1Choice === '' || player2Choice === ''){
        
    }else{
        
    if (player1Choice === 'scissors' || player1Choice === 'lizard') {
        counterResponseText1.textContent = player1Choice;
        counterResponseText3.textContent = player2Choice;
        actualResponse.textContent = 'Player 1 wins!';
    } else if (player1Choice === 'paper') {
        counterResponseText1.textContent = player1Choice;
        counterResponseText3.textContent = player2Choice;
        actualResponse.textContent = 'You tied';
    } else {
        counterResponseText1.textContent = player1Choice;
        counterResponseText3.textContent = player2Choice;
        actualResponse.textContent = 'Player 2 wins!'
    }

    if (actualResponse.textContent === 'Player 2 wins!') {
        player2Counter++;
        player2Choice = '';
        player1Choice = '';
    } else if (actualResponse.textContent === 'Player 1 wins!') {
        player1Counter++;
        player2Choice = '';
        player1Choice = '';
    } else {

    }

    counterResponseText2.textContent = player1Counter;
    counterResponseText4.textContent = player2Counter;

    if (player1Counter === 7) {
        actualResponse.textContent = 'Player 1 won the game!'
    }

    if (player2Counter === 7) {
        actualResponse.textContent = 'Player 2 won the game!'
    }
   
    
}
})

pvpScissorsOption7.addEventListener('click', function(){

    player2Choice = pvpScissorsOption7.value;

    player2Choice = '';

    if(player1Choice === '' || player2Choice === ''){
        
    }else{
        
    if (player1Choice === 'rock' || player1Choice === 'spock') {
        counterResponseText1.textContent = player1Choice;
        counterResponseText3.textContent = player2Choice;
        actualResponse.textContent = 'Player 1 wins!';
    } else if (player1Choice === 'scissors') {
        counterResponseText1.textContent = player1Choice;
        counterResponseText3.textContent = player2Choice;
        actualResponse.textContent = 'You tied';
    } else {
        counterResponseText1.textContent = player1Choice;
        counterResponseText3.textContent = player2Choice;
        actualResponse.textContent = 'Player 2 wins!'
    }

    if (actualResponse.textContent === 'Player 2 wins!') {
        player2Counter++;
        player2Choice = '';
        player1Choice = '';
    } else if (actualResponse.textContent === 'Player 1 wins!') {
        player1Counter++;
        player2Choice = '';
        player1Choice = '';
    } else {

    }

    counterResponseText2.textContent = player1Counter;
    counterResponseText4.textContent = player2Counter;

    if (player1Counter === 7) {
        actualResponse.textContent = 'Player 1 won the game!'
    }

    if (player2Counter === 7) {
        actualResponse.textContent = 'Player 2 won the game!'
    }
   
   

}
})

pvpLizardOption7.addEventListener('click', function(){
    player2Choice = pvpLizardOption7.value;


    player2Choice = '';

    if(player1Choice === '' || player2Choice === ''){
        
    }else{
        
    if (player1Choice === 'rock' || player1Choice === 'scissors') {
        counterResponseText1.textContent = player1Choice;
        counterResponseText3.textContent = player2Choice;
        actualResponse.textContent = 'Player 1 wins!';
    } else if (player1Choice === 'lizard') {
        counterResponseText1.textContent = player1Choice;
        counterResponseText3.textContent = player2Choice;
        actualResponse.textContent = 'You tied';
    } else {
        counterResponseText1.textContent = player1Choice;
        counterResponseText3.textContent = player2Choice;
        actualResponse.textContent = 'Player 2 wins!'
    }

    if (actualResponse.textContent === 'Player 2 wins!') {
        player2Counter++;
        player2Choice = '';
        player1Choice = '';
    } else if (actualResponse.textContent === 'Player 1 wins!') {
        player1Counter++;
        player2Choice = '';
        player1Choice = '';
    } else {

    }

    counterResponseText2.textContent = player1Counter;
    counterResponseText4.textContent = player2Counter;
    
    if (player1Counter === 7) {
        actualResponse.textContent = 'Player 1 won the game!'
    }

    if (player2Counter === 7) {
        actualResponse.textContent = 'Player 2 won the game!'
    }
   
 

}
})

pvpSpockOption7.addEventListener('click', function(){

    player2Choice = pvpSpockOption7.value;

    player2Choice = '';

    if(player1Choice === '' || player2Choice === ''){
        
    }else{
        
    if (player1Choice === 'lizard' || player1Choice === 'paper') {

        counterResponseText1.textContent = player1Choice;
        counterResponseText3.textContent = player2Choice;
        actualResponse.textContent = 'Player 1 wins!';
    } else if (player1Choice === 'spock') {
        counterResponseText1.textContent = player1Choice;
        counterResponseText3.textContent = player2Choice;
        actualResponse.textContent = 'You tied';
    } else {
        counterResponseText1.textContent = player1Choice;
        counterResponseText3.textContent = player2Choice;
        actualResponse.textContent = 'Player 2 wins!'
    }

    if (actualResponse.textContent === 'Player 2 wins!') {
        player2Counter++;
        player2Choice = '';
        player1Choice = '';
    } else if (actualResponse.textContent === 'Player 1 wins!') {
        player1Counter++;
        player2Choice = '';
        player1Choice = '';
    } else {

    }

    counterResponseText2.textContent = player1Counter;
    counterResponseText4.textContent = player2Counter;

    if (player1Counter === 7) {
        actualResponse.textContent = 'Player 1 won the game!'
    }

    if (player2Counter === 7) {
        actualResponse.textContent = 'Player 2 won the game!'
    }
   
    

}
})








//---------------------------------------------------------------------------------------------------
//Fetching data

function getData() {
    fetch("https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption").then(
        response => response.text()
    ).then(
        data => {
            dataGet = data

        }
    )
}

getData();