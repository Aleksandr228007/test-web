const firstNum = document.getElementById('firstNum')
const secondNum = document.getElementById('secondNum')
const answer = document.getElementById('ans')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')

let ans_cur = 0

plus.onclick = function(){
    ans_cur = Number(firstNum.value) + Number(secondNum.value)
    answer.textContent = ans_cur

}

minus.onclick = function(){
    ans_cur = Number(firstNum.value) - Number(secondNum.value)
    answer.textContent = ans_cur
}






