const Form = document.querySelector("form");
const Email = Form.querySelector("#email");
const Password = Form.querySelector("#password");
const Number = Form.querySelector("#number");
const Date = Form.querySelector("#date");
const Group = Form.querySelector("#group")
// console.log(Password);




Form.addEventListener("submit", formHandler);

function formHandler(e){
    e.preventDefault();
    console.log(e);

    const formInfo = {
        Email: Email.value,
        Password: Password.value,
        Number: Number.value,
        Date: Date.value,
        Group: Group.value,

    }
    Email.value = "";
    Password.value = "";
    Number.value = "";
    Date.value = "";
    Group.value = "";


    
    console.log(formInfo);


}