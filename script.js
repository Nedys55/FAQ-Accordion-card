const answer = document.querySelectorAll(".question-answer-accordion")
    
answer.forEach((event) => event.addEventListener("click", () =>{
  
        if(event.classList.contains("active")){
            event.classList.toggle("active")
        }
    else{
    answer.forEach(question => question.classList.remove("active"))
    event.classList.add("active")
        }

    }))