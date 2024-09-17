let data = []

function formSubmission(){
    event.preventDefault()
    
    let name = inputName.value
    let gender = inputGender.value
    let email = inputEmail.value
    let password = inputPassword.value
    let phonenumber = inputPhonenumber.value

    let tmp = {
       name, 
       gender, 
       email, 
       password,
       phonenumber
    }

    data.push(tmp)

    renderData()

}

function renderData(){

    let tableLayOut = `
        <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Password</th>
            <th>Phone number</th>
        </tr>
    `

    for(let i=0; i < data.length; i++){
        tableLayOut += `
                        <tr> 
                        <td> ${data[i].name} </td>
                        <td> ${data[i].gender} </td>
                        <td> ${data[i].email} </td>
                        <td> ${data[i].password} </td>
                        <td> ${data[i].phonenumber} </td>
                        </tr>`
    }

    dataOutput.innerHTML = tableLayOut


}