// //how to select by id
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className); //Note::when you will select class by id then you have to use className



// // styling by javascript
// console.log(document.getElementById('task-title').style.background='#2e2e2e');
// console.log(document.getElementById('task-title').style.color='#fff');
// console.log(document.getElementById('task-title').style.marginTop='10px');
// console.log(document.getElementById('task-title').style.padding='5px');
 


// // selecting text of tags by three way 
// console.log(document.getElementById('task-title').textContent='Below are all of list item');
// console.log(document.getElementById('task-title').innerText='All list item are below');
// console.log(document.getElementById('task-title').innerHTML='<span>All list item are below </span>');




// // id and class selecting by querySelector 
// console.log(document.querySelector('#task-title').id);
// console.log(document.querySelector('.demo').id);
// console.log(document.querySelector('#task-title').style.background='#4e4e');





// //move up & move down selecting {parent to children & children to parent Element Selecting}

// // move down selecting
// const items = document.querySelector('.list-group');

//   var  item = items.children['0'].children['0'].style.color='red';

//   console.log(item);

  


//   // move up selecting

// const item =document.querySelector('li.list-group-item');

//   var items= item.parentElement.parentElement;

//   console.log(items);





// // creating element by javaScript 

// const li =document.createElement('li');

// li.className='list-group-item';
// li.textContent='this is javaScript item';

//      document.querySelector('ul.list-group').appendChild(li);

//  const link = document.createElement('a');
       
 
//  console.log(link);
 

//  link.innerHTML='<i class="fa fa-trash-alt  " ></i>'

// li.appendChild(link);





// // const del= document.querySelector('li');

//    del.remove(0);





// //event of javascript
//   document.querySelector('.clearButton').addEventListener('click',function(e){

//          e.preventDefault();
//         console.log('clicked');


//   });
  

// document.querySelector('.clearButton').addEventListener('click',onClick);

// function onClick(e) {
 
//      let val ;
     
//       val=e;
//       val =e.target;
//       val = e.target.textContent='targated';

//      console.log(val);
//      e.preventDefault();
     

// }


// document.querySelector('.clearButton').addEventListener('mousedown',eventRun);

//   function eventRun(data){


//           console.log(`evet type:${data.type}`);

//   }






  


// //working with form

// const taskForm=document.querySelector('#task-Form');

// const taskInput=document.querySelector('#task');

//    taskForm.addEventListener('submit',eventRun);

// function eventRun(e){
  
//     console.log(taskInput.value);
//     console.log(`evetn type:${e.type}`);

//     e.preventDefault();

// }  









//working with task template 

const form =document.querySelector('#task-Form');
const taskInput=document.querySelector('#task');
const taskContainer = document.querySelector('.list-group');

const taskClear= document.querySelector('#clearButton');

const filter=document.querySelector('#filter');

//all function
loadEventLiseteners();

function loadEventLiseteners(){ 

         form.addEventListener('submit',addTask);

         taskContainer.addEventListener('click',removeTask);

         taskClear.addEventListener('click',clearTask);

         filter.addEventListener('keyup', filterTask);



}


function addTask(e){

    if (taskInput.value === '') {
      alert('field must not be empty!');
    } else{     


    const li= document.createElement('li');
    li.className='list-group-item';
    li.style.cursor='pointer';

    li.appendChild(document.createTextNode(taskInput.value));
    
    const link =document.createElement('a');
    link.style.float='right';
    link.style.cursor='pointer';
    link.id='link';

    
    link.innerHTML='<i class="fa fa-trash-alt " > </i>';
    li.appendChild(link);

    taskContainer.appendChild(li);
    
    taskInput.value='';


     e.preventDefault();
   
    }

}




// remove item of list 

function removeTask(e){
      
  let val;
      val=  e.target.querySelector('#link');
        if (val) {
          
            if (confirm('Are you sure?')) {
            val=  val.parentElement.remove() ; 
              
              return val;
            }
        }
        
         e.preventDefault();

}





// clear all task 

function clearTask(e){

       if (confirm('Are you sure to Clear all?')) {

           taskContainer.innerHTML='' ;

       }
 
     e.preventDefault();

}





//filter Task function

function filterTask(e){
   
      const text = e.target.value.toLowerCase();
      
       document.querySelectorAll('.list-group-item').forEach( function (task) {
             
          const fItem=  task.firstChild.textContent;

          if (fItem.toLowerCase().indexOf(text) != -1) {

                 task.style.display='block';    
            
          } else {
            
               task.style.display='none' ;
          }

       });

       

       console.log(text);

}













