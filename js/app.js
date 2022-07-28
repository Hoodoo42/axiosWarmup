
// this function send an axios request, and sets up a success or fail function
function imageButton(details){

    axios.request({
        url: `https://dog.ceo/api/breeds/image/random`,
    })
    .then(successFunction).catch(failureFunction);
}
// function will run if the request was a success
function successFunction(response){
    document.body.insertAdjacentHTML(`beforeend`, `<img src="${response[`data`][`message`]}">`)
}

// this function will run with an error message if request fails
function failureFunction(error){
    document.body.insertAdjacentHTML(`beforeend`, `<h3>Error!</h3>`)
}

// grab tag by id, add an eventListener for a click, will start imageButton Function
let button = document.getElementById(`button`);
button.addEventListener(`click`, imageButton)
