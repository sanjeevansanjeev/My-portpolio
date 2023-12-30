// .....SHOW MENU.....

const navMenu=document.getElementById("nav-menu"),
navTaggle=document.getElementById("nav-taggle"),
navClose=document.getElementById("nav-close")

//.....MENU SHOW....

// variyable if constant exists

if (navTaggle){
    navTaggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}
 
// .....MENU HIDDEN.....
//variyable of constant exists



if (navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}
navLink.forEach(n=> n.addEventListener('click',llinActon))

// .........REMOVE MENU MOBILE.......

const navLink=()=>{
    const navMenu=document.getElementById('nav-menu')
    //when we click on each nav-- link, we remove the show-menu

navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click', linkAction))

//.... ADD BLUR TO HEADER....

const blurHeader=()=>{
    const header=document.getElementById('header')
    // when the scroll is greater than 50 viewpoint heoght,add the scroll-header class t
this.scrollY >=50? header.classList.add('blur-header')
:header.classList.remove('blur-header')
}
window.addEventListener('scroll',scrollHeader)

//     ....EMAIL JS....

const contactForm=document.getElementById('contact-form'),
contactMessage=document.getElementById('contact-message')

const sendEmail=(e)=>{
    e.preventDefault()

    // sevice id-template id -#form-publicKey
    emailjs.sendForm('sevice_8ii265v','template_85g6ftk','#contact-form','VQaq6RG_bxgUd7BNm')
    .then(()=>{
        // Show sent message
        contactMessage.textContent='Message sent Successfully ✅'
// remove after five seconds...
setTimeout(()=>{
    contactMessage.textContent=''
},5000)

// clear input fields...
contactForm.reset()


    },()=>{
        // Show error message
        contactMessage.textContent='Messgae not sent (service error) ❌'
    })

}

contactForm.addEventListener('submit',sendEmail)

// .....SHOW SCROLL UP...

const scrollUp=()=>{
    const scrollUp=document.getElementById('scroll-up')
    // whent the scroll is higher than 350 viewpoint high, add the show-scrol class to
    this.scrolly>=350 ? scrollUp.classList.add('show-scroll')
                :scrollUp.classList.remove('show-scroll')
    window.addEventListener('scroll',scrollUp)
}

// .....SCROLL SECTIONS ACTIVE LINK.....

const sections=()=>{
    const scrolly=window.pageYOffset

    sections.forEach(currevt=>{
        const sectionHeight=current.offsetHeight,
        sectionTop=current.offsetTop-58,
        sectionId=current.getAttribute('id'),
        sectionsClass=document.querySelector('.nav--menu a[herf*=' + sectionId + ']')

if(scrolly > sectionTop && scrolly<= sectionTop + sectionHeight){
    sectionsClass.classList.add('active-link')
}
else{
    sectionsClass.classList.remove('active-link')
}



    })
}
window.addEventListener('scroll', scrollActive)



// ....SCROLL REVERAL ANIMATION.....

const sr =ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    
    //reset:true// animations repeat

})
sr.reveal(`.home--data, .home--social, .contact--container, .footer--container`)
sr.reveal(`.home--image`, {origin:'bottom'})
sr.reveal(`.about--data, .skills--data`, {origin:'left'})
sr.reveal(`.about--image, .skills--content`, {origin:'right'})
sr.reveal(`.services--card, .projects--card`,{interval:100})



















