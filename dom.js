//const names=['dipu','mehdi','rafi','sojal']
 
//for (let i =0; i<names.length;i++){
 //   console.log(names[i]);
//}
//for (const name of names) {
  //  console.log(name + 'chowdury');
//}
//const byclassname=document.getElementsByClassName('title')
//console.log(byclassname);
//for(const tag of classroom){
   // const useStyle=tag.Style.color='grey'
    //console.log(tag);
//}
document.getElementById('list').style.color='red'
 const h1collection= document.querySelectorAll('h1')
 console.log(h1collection);
 for(const h1 of h1collection)
 {
    h1.style.backgroundcolor='grey'
 }

 const contanier=document.getElementById('list')
 contanier.innerText='i got change'