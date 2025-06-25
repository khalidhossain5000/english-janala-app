//loader start 
const showLoader=()=>{
    document.getElementById('loader').classList.remove('hidden');
    document.getElementById('word-card-container').classList.add('hidden');
}
//hide loader 
const hideLoader=()=>{
    document.getElementById('loader').classList.add('hidden');
    document.getElementById('word-card-container').classList.remove('hidden');
}

//remove active class from button after one is active
const removeActiveClass=()=>{
    const activeBtn=document.getElementsByClassName('active')
    for(const btn of activeBtn){
        btn.classList.remove("active")
    }
}
//load all lesson 
const loadAllLesson=()=>{
     
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(res=>res.json())
    .then(data=> displayLesson(data.data))
}
//load word by level and id
const loadWordByLevel=(id)=>{
    showLoader() 
    const url=`https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        removeActiveClass()
        const clickedBtn=document.getElementById(`btn-${id}`);
        clickedBtn.classList.add("active")
        displayWordByLevel(data.data);
    })
}
//load specific word details 
const showWordDetails=(wordId)=>{
    const url=`https://openapi.programming-hero.com/api/word/${wordId}`
    fetch(url)
    .then(res=>res.json())
    .then(words=>displayWordDetails(words.data))
}

//display lesson
const displayLesson=(lessons)=>{
    
    //get the container where lesson will be showed
    const lessonContainer=document.getElementById("lesson-container");
    //loop on the lesson data
    for(const lesson of lessons){
        
        //create elememnt
        const div=document.createElement('div');
        //store lesson on element
        div.innerHTML=`
            <button id="btn-${lesson.level_no}" onclick="loadWordByLevel(${lesson.level_no})" class="py-5 px-8 text-[16px] font-semibold btn btn-outline btn-primary hover:bg-[#422AD5] hover:text-white"><span><i class="text-sm fa-solid fa-book-open"></i></span>Lesson-${lesson.level_no}</button>
        `
        // append the child 
        lessonContainer.appendChild(div)
    }
    
}
//display word by level
const displayWordByLevel=(wordByLevel)=>{
 
    //get the parent container where word card will be shown
    const wordByLevelContainer=document.getElementById('word-card-container');
    wordByLevelContainer.innerHTML=" "
    if(wordByLevel.length===0){
        wordByLevelContainer.innerHTML=`
              <!-- Empty data handle message section  -->
          <div class="col-span-full bg-[#F8F8F8] py-12 space-y-6">
            <img src="./assets/alert-error.png" alt="" class="mx-auto">
            <h5 class="hind-siliguri text-[#79716B] font-semibold text-center">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</h5>
            <h2 class="text-4xl font-semibold text-[#292524] text-center">নেক্সট Lesson এ যান</h2>
          </div>
        `
        hideLoader()
        return 
    }
    //looping on the array of object-->
    for(const word of wordByLevel){
    const nullHandle=(word.meaning===null)? "অর্থ পাওয়া যায়নি": word.meaning ;
    //create element
    const div=document.createElement('div');
    div.innerHTML=`
        <!-- card-1  -->
           <div class="inter bg-white text-center rounded-xl py-6 shadow-md">
            <!-- text  -->
             <div class="space-y-5">
            <h2 class="font-bold text-[32px] text-black">${word.word}</h2>
            <h3 class="font-medium text-xl text-black">${nullHandle}</h3>
            <h2 class="hind-siliguri text-[32px] title font-semibold">"${word.pronunciation}"</h2>
             </div>
             <!-- icon  -->
              <div class="flex items-center justify-between px-12 pt-3 mt-8">
                <span onclick="showWordDetails(${word.id})" class="cursor-pointer text-2xl text-[#374957] bg-[#e8f4ff] p-3 rounded-xl"><i class="fa-solid fa-circle-info"></i></span>
                <span id="speaker-btn" class="cursor-pointer text-2xl text-[#374957] bg-[#e8f4ff] p-3 rounded-xl"><i class="fa-solid fa-volume-high"></i></span>
              </div>
           </div>
    `
  
    //append the child to parent container
    wordByLevelContainer.appendChild(div)
    }
    
    hideLoader()

}

//display specific word details 
const displayWordDetails=(wordDetails)=>{
    // console.log(wordDetails)
const nullHandleForWordDetails=(wordDetails.meaning===null)? "অর্থ পাওয়া যায়নি": wordDetails.meaning;
    document.getElementById("word_details_modal").showModal();
    const modalContainer=document.getElementById('modal-container');
    modalContainer.innerHTML=`
     <!-- modal container  -->
     <div class="bg-white py-8">
      <!-- modal insides  -->
       <div class="bg-white border-3 border-[#EDF7FF] p-6 space-y-6 w-full" >
        <h2 class="text-4xl font-semibold text-black">${wordDetails.word}(<i class="fa-solid fa-microphone-lines"></i> : ${wordDetails.pronunciation})</h2>
        <h3 class="text-2xl font-semibold text-black">Meaning:</h3>
        <h4 class="hind-siliguri text-2xl font-medium text-black">${nullHandleForWordDetails}</h4>
        <h2 class="text-2xl font-semibold text-black">Example:</h2>
        <p  class="text-2xl font-normal text-[#000000]">${wordDetails.sentence}</p>
        <h2 class="hind-siliguri text-2xl font-medium text-black">সমার্থক শব্দ গুলো:</h2>
        
        <div id="button-container" class="flex items-center gap-3"></div>
       </div>
     </div>
    `
    const synonymsAll=wordDetails.synonyms;
    const synonymBtnContianer=document.getElementById('button-container');
    for(const synonym of synonymsAll){
        const div=document.createElement('div');
        div.innerHTML=`<button class="font-normal py-6 px-5 btn btn-sm text-xl text-black bg-[#EDF7FF] border-1 border-[#EDF7FF]">${synonym}</button>`
    synonymBtnContianer.appendChild(div)
    }
 
}


loadAllLesson()