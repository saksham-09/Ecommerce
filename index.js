
function fetchdata(){
    fetch('https://fakestoreapi.com/products').then( res=>{
        return res.json();
    }).then(data=>{
     
       abc(data);
       
    }).catch(err => console.log(err))
    
}
fetchdata();

function abc(data){

console.log(data);
for(var i=0;i<8;i++)
{
        document.querySelector('.first'+i.toString()).setAttribute("src",data[i].image);
        document.querySelector('.priced'+i.toString()).innerHTML='$'+data[i].price;
        document.querySelector('.title'+i.toString()).innerHTML=data[i].title;
}
}