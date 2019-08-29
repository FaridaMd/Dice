
  window.onload = function(e)
      {
          var num1=Math.floor(Math.random()*6)+1;
          var num2=Math.floor(Math.random()*6)+1;
          // var newImg=new Image();
          img1=$("img")[0];
          changeImage(num1,img1);
          img2=$("img")[1];
          changeImage(num2,img2);
          checkBiggest(num1,num2);

      }
function changeImage(num,image1){
  switch(num){
    case 1:image1.src="images/dice1.png";
            break;
    case 2:image1.src="images/dice2.png";
          break;
    case 3:image1.src="images/dice3.png";
          break;
    case 4:image1.src="images/dice4.png";
          break;
    case 5:image1.src="images/dice5.png";
            break;
    case 6:image1.src="images/dice6.png";
           break;
    default:console.log(num);
            break;
  }
}
function checkBiggest(num1,num2){
  if(num1>num2){
    $("h1")[0].textContent="🚩Player1 Wins";
  }
  else if(num1<num2){
    $("h1")[0].textContent="Player2 Wins🚩";
  }
  else{
    $("h1")[0].textContent="Draw!";
  }
}
