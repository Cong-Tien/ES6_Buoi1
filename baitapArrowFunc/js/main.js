const colorList = ["pallet","viridian","pewter","cerulean","vermillion","lavender","celadon","saffron","fuschia","cinnabar"];

let renderButton = (arrList) =>{
   let output='';
   for(let i=0; i < arrList.length; i++){
    let color = arrList[i];
    if(i===0)
    {
        output+=` <button class="color-button ${color} active"onclick="changeColor('${color}',event)"></button>  `
    }
    else
    {
        output+=` <button class="color-button ${color}"onclick="changeColor('${color}',event)"></button>  `
    }
   }
   document.querySelector("#colorContainer").innerHTML=output;
}

renderButton(colorList);

let changeColor = (color,e) => {
    console.log(color);
    //alert(color);
    for(let i=0; i < colorList.length; i++){
        let color = colorList[i];
        document.querySelector('#house').classList.remove(color);
        document.querySelector(`.${color}`).classList.remove("active");
   }
   
    document.querySelector('#house').classList.add(color);
    e.target.classList.add("active");
    
}