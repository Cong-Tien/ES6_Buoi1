let jumpText = () =>{
    var text = document.querySelector(".heading").innerHTML;
    console.log(text);
    let chars = [...text];
    var innerHTML = "";
    for(let i=0;i<chars.length;i++)
    {
        let char = chars[i];
        innerHTML += `<span>${char}</span>`
    }
    document.querySelector(".heading").innerHTML = innerHTML;
}

jumpText();