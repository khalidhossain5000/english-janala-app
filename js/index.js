//scrolling effect to a section
const scrollToFaq=()=>{
    const faqSection=document.getElementById('faq-section');
    faqSection.scrollIntoView({behavior:"smooth"});
}
const scrollToVoca=()=>{
    const vocabulaSection=document.getElementById('vocabularies-section');
    vocabulaSection.scrollIntoView({behavior:"smooth"})
}

// hidden block on password and name start 
document.getElementById("submit-btn").addEventListener("click",()=>{
    const nameField=document.getElementById('name-field').value ;
    const passwordField=document.getElementById('password-field').value ;
    const convertedPassword=parseInt(passwordField);
    if(nameField===""){
        // alert("Please Enter Your Name First !!")
        noNameSweetAlert();
    }
    else if(convertedPassword===123456){
        
        document.getElementById('nav-bar').classList.remove("hidden");
        document.getElementById('main').classList.remove("hidden");
        document.getElementById('banner-section').classList.add("hidden")
        setTimeout(()=>logInSuccessSweetAlert(),50)
    }

    else{
        // alert("Wrong Password!!.Contact admin to get your login code")
        wrongPasswordSweetAlert()
    }
})
//Log Out functionality start here 
document.getElementById('logout-btn').addEventListener('click',()=>{
    document.getElementById('nav-bar').classList.add("hidden");
    document.getElementById('main').classList.add("hidden");
    document.getElementById('banner-section').classList.remove("hidden");
})


// optional part showing alert start using sweet alert 
const noNameSweetAlert=()=>{
    Swal.fire({
        theme:"dark",
        icon: "warning",
        title: "Oops...No Name Found",
        text: "Please Enter Your Name First !!",
      });
}

const wrongPasswordSweetAlert=()=>{
    Swal.fire({
        theme:"dark",
        icon: "error",
        title: "Oops...Wrong Password!!",
        text: ".Contact admin to get your login code",
      });
}

const logInSuccessSweetAlert=()=>{
    Swal.fire({
        title: "অভিনন্দন!",
        text: "আপনি সফলভাবে লগইন করেছেন!",
        icon: "success",
        footer:"চলুন নতুন কিছু শেখা যাক।"
      });
}

