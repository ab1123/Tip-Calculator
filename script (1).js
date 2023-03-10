/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
const bill=document.getElementById('billTotalInput')
const tipper=document.getElementById('tipInput')
let nop=1
const numberofPeople=document.getElementById('numberOfPeople')
const perPersonTotal=document.getElementById('perPersonTotal')


// bill input, tip input, number of people div, and per person total div



// Get number of people from number of people div


// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  let b=bill.value
  

  // get the tip from user & convert it into a percentage (divide by 100)
  let t=tipper.value

  // get the total tip amount
  let tip=(+t/100)*Number(b)
  

  // calculate the total (tip amount + bill)
  let tot_bill=Number(b)+tip
  

  // calculate the per person total (total divided by number of people)
  const perp=(tot_bill/nop)

  // update the perPersonTotal on DOM & show it to user
  perPersonTotal.innerText=`$ ${perp.toFixed(2)}`
}
// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  nop+=1

  // update the DOM with the new number of people
  numberofPeople.innerText=nop

  // calculate the bill based on the new number of people
  calculateBill()

}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  if(nop==1){
    alert('Hey, You cannot have less than one person')
    return
  }
  
  // decrement the amount of people
  else{
    nop-=1
    // update the DOM with the new number of people
    numberofPeople.innerText=nop
    calculateBill()
  }


  
  

  // calculate the bill based on the new number of people

}