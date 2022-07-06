//side-nav//
let width = $('#side-nav').innerWidth()
$('#side-nav').css({left :-`${width}`})
$('.bar').click(function(){
    let width = $('#side-nav').innerWidth()
    if($('#side-nav').css('left') =='0px'){
        $('#side-nav').animate({left: -`${width}`},500)
        //$('.bar').classList.replace('fa-align-justify','fa-xmark')
        
    }
    else{
        $('#side-nav').animate({left: '0px'},500)
        //$('.bar').classList.replace('fa-xmark','fa-align-justify')

    }
})

//regex//
var nameInput =document.getElementById('name');
var emailInput =document.getElementById('email');
var phoneInput = document.getElementById('phone')
var ageInput =document.getElementById('age')
var passwordInput =document.getElementById('password');
var rePasswordInput =document.getElementById('rePassword');
 

nameInput.addEventListener('keyup',function(){
    var regex=/^[a-zA-z]{3,10}$/ 

    nameInput.classList.add('is-invalid')
    
    if(regex.test(nameInput.value)== true && nameInput.value !=""){
        nameInput.classList.replace('is-invalid','is-valid')
        nameValidation.classList.replace('d-block','d-none')

    }
    else{
        nameInput.classList.replace('is-valid','is-invalid')
        nameValidation.classList.replace('d-none','d-block')
    }
});

emailInput.addEventListener('keyup',function(){
    var regex=/@[a-zA-Z]{3,10}[0-9]{0,10}(\.com)$/

    emailInput.classList.add('is-invalid')
    
    if(regex.test(emailInput.value)== true && emailInput.value !=""){
        emailInput.classList.replace('is-invalid','is-valid')
        emailValidation.classList.replace('d-block','d-none')

    }
    else{
        emailInput.classList.replace('is-valid','is-invalid')
        emailValidation.classList.replace('d-none','d-block')
    }
});

phoneInput.addEventListener('keyup',function(){
    var regex=/^(01)[01235][0-9]{8}$/ 

    phoneInput.classList.add('is-invalid')
    
    if(regex.test(phoneInput.value)== true && phoneInput.value !=""){
        phoneInput.classList.replace('is-invalid','is-valid')
        numberValidation.classList.replace('d-block','d-none')

    }
    else{
        phoneInput.classList.replace('is-valid','is-invalid')
        numberValidation.classList.replace('d-none','d-block')
    }
});

ageInput.addEventListener('keyup',function(){
    var regex=/^^[0-9]{2}$/ 

    ageInput.classList.add('is-invalid')
    
    if(regex.test(ageInput.value)== true && ageInput.value !=""){
        ageInput.classList.replace('is-invalid','is-valid')
        ageValidation.classList.replace('d-block','d-none')

    }
    else{
        ageInput.classList.replace('is-valid','is-invalid')
        ageValidation.classList.replace('d-none','d-block')
    }
});

passwordInput.addEventListener('keyup',function(){
    var regex=/.{5,15}$/ 

    passwordInput.classList.add('is-invalid')
    
    if(regex.test(passwordInput.value)== true && passwordInput.value !=""){
        passwordInput.classList.replace('is-invalid','is-valid')
        passwordValidation.classList.replace('d-block','d-none')

    }
    else{
        passwordInput.classList.replace('is-valid','is-invalid')
        passwordValidation.classList.replace('d-none','d-block')
    }
});

rePasswordInput.addEventListener('keyup',function(){
    var regex=/.{5,15}$/ 

    rePasswordInput.classList.add('is-invalid')
    
    if(regex.test(rePasswordInput.value)== true && rePasswordInput.value !=""){
        rePasswordInput.classList.replace('is-invalid','is-valid')
        rePasswordValidation.classList.replace('d-block','d-none')

    }
    else{
        rePasswordInput.classList.replace('is-valid','is-invalid')
        rePasswordValidation.classList.replace('d-none','d-block')
    }
});
//get apis//
//trending//
var displayPosts;  
 async function getTranding(){
    var response =await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=1240c5d0aeab086b0239c0a37c83c03c`);
    var finalResult =await response.json();
    displayPosts =finalResult.results
    //console.log(displayPosts)
    await displayItems()
  

}
getTranding()

function displayItems(){
    var cartona =``;
    for(var i=0 ;i<displayPosts.length ; i++){
        cartona+=`<div class="col-md-4">
        <div class="demo w-100 ms-5 ">
            <img class="w-100 pb-5" src=https://image.tmdb.org/t/p/w500${displayPosts[i].poster_path} alt="">
            <div class="layer-content d-flex justify-content-center align-items-center" >
            <div class="img-cintent">
            <h2>${displayPosts[i].original_title}</h2>
            <p>${displayPosts[i].overview}</p>
            <p>${displayPosts[i].vote_average}</p>
            <p>${displayPosts[i].release_date}</p></div>
            
            </div>
        </div>

    </div>`

    }
    document.getElementById('rowData').innerHTML = cartona;
}

getTranding()


async function hello(){
 await   getTranding()
}
hello();
