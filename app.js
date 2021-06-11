var removeCartButtons = document.getElementsByClassName("btn-danger");

for( i=0; i<removeCartButtons.length; i++ ){
    var button = removeCartButtons[i];
    button.addEventListener("click" , function(event){
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove()
    })
}