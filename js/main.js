const $inp = document.querySelector('.inp');
const $btns = document.querySelectorAll('.btn');
const $result = document.querySelector('.result');
const $all_clean = document.querySelector('#all_clean');
const $clean = document.querySelector('#clean');



const handleBtnClick = ({target:{innerText}}) =>{
    $inp.value += innerText;  
}

$btns.forEach(item =>{
    item.onclick = handleBtnClick;
})

$result.onclick = ()=>{
    let res = $inp.value;
    res = eval(res)
    $inp.value = res
}

$all_clean.onclick = () =>{
    $inp.value = "";
}

$clean.onclick = () =>{
    $inp.value = $inp.value.slice(0, $inp.value.length -1);
}
$inp.oninput = ()=>{0
    console.log('inp')
    if($inp.value == '1337'){
        alert("Congrates!")
    }
}