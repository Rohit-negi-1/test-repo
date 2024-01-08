function fetchData(){
 fetch('https://dummyjson.com/carts').then(response =>response.json()).then(data=(data)=>{
    let carts= data.carts
    carts.forEach(function(value,index){
        let demo= document.querySelector("#demo")
        demo.innerHTML +=`
    
    <tr>
        <td>${value.id}</td>
        <td>${value.products}</td>
        <td>${value.total}</td>
        <td>${value.discountedTotal}</td>
        <td>${value.userId}</td>
        
    </tr>
            
            `
    
   
    })
    
})
  
}


