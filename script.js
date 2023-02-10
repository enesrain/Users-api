let table = document.querySelector("table")



//GET-----------------------------
const xhr = new XMLHttpRequest()

xhr.onload = function(){

    if(this.readyState==4 && this.status==200){
        
        let response = JSON.parse(this.responseText)
        response.data.forEach(element => {
              console.log(element.data)
              table.innerHTML+=`
              
              <tr>
                <td> <input type="text" class="name" value="${element.first_name}"></td>

                <td> <input type="text" class="surname" value="${element.last_name}"></td>

                <td> <input type="text" class="mail" value="${element.email}"></td>
               </tr>
              
              `

        });
    }
}

xhr.open("GET","https://reqres.in/api/users")
xhr.send()







