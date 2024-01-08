function fetchData(){
    fetch('https://dummyjson.com/users').then(response=>response.json()).then(data=(data)=>{
        let users= data.users
        users.forEach(function(value,index){
            let demo= document.querySelector("#demo")
            demo.innerHTML +=`
              

                <tr>
                    <td>${value.id}</td>
                    <td>${value.firstName}</td>
                    <td>${value.lastName}</td>
                    <td>${value.maidenName}</td>
                    
                </tr>

        
          
           
                `
        
        })
       

    })
}