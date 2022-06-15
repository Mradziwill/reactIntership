
function step2(str) {
    // TODO: Implement
    let i = 0;
      let intern = str.split(' ');
      let res = intern.map(function(x) {
        i++;
          if(i%2 == 0){
              //res.concat(x.toUpperCase());
              return x.toUpperCase();
          }
          else{
              //res.concat(x);
              return x;
          }
      });
      res = res.join([separator = ' '])
      console.log(res);
      return res;
  }



// function step4(numbers) {
//     function getMax(max, num) {
//         // console.log(max);
//          if(num > max){
//              return num;
//          }
//          else{
//              return max;
//          }
//        }
//     // TODO: Implement
//     console.log("start");
//     let max = numbers.reduce(getMax)
//     return max; 
//   }

const students = [
  {
    name: 'Martin',
    lastName: 'Lant',
    marks: [9, 8, null, 7, 5],
  },
  
  {
    name: 'Francesco',
    lastName: 'Portus',
    marks: [9, 8, null, 7, 5],
  },
  {
    name: 'Bill',
    lastName: 'Merdoc',
    marks: [10, null, null, null, 10],
  },
  {
    name: 'John',
    lastName: 'Entman',
    marks: [9, 8, 9, 6, 5],
  },
];

function changeColor(card){
  if(card.style.backgroundColor == 'green'){
    card.style.backgroundColor = 'white';
  }
  else{
    card.style.backgroundColor = 'green';
  }
}
function setWhite(card){
  card.style.backgroundColor = 'white';
}


window.onload = function() {
  let active = 0;
  let mainList = document.getElementById("mainList")
  let cards = [];
  students.forEach(element => {
      let wrapper =  document.createElement("div");
      let card = document.createElement("div");
      card.classList.add("card");

      card.addEventListener('click', function onClick() {
        changeColor(card);
        mainList.forEach(element => {
          let child = element.firstChild
          if(child.style.backgroundColor == 'green'){
            setWhite(child);
            changeColor(child);
          }
        })
        
      });

      let listInCard = document.createElement("th");
      let name = document.createElement('div');
      name.innerHTML = element.name;
      let lastName = document.createElement('div');
      lastName.innerHTML = element.lastName;
      
      let sum = 0;
      let sum2 = 0;
      for(var i =0; i< element.marks.length;i++){
        if(element.marks[i]!=null){
          sum++;
          sum2 += element.marks[i];
        }
      }
      let av = sum2/element.marks.length;
      let lectures = document.createElement('div');
      lectures.innerHTML = sum;
      let avarage = document.createElement('div');
      avarage.innerHTML = av;
      if(av < 5){
        //red border
        card.classList.add("red");
      }
      else{
        //green border
        card.classList.add("green");
      }

      //card.setAttribute("onclick", "click()");
      // Add listItem to the listElement
      listInCard.appendChild(name);
      listInCard.appendChild(lastName);
      listInCard.appendChild(lectures);
      listInCard.appendChild(avarage );
      card.appendChild(listInCard);
      cards.push(card);
      wrapper.appendChild(card);

      mainList.appendChild(wrapper);
    });
};