let average = (...restParam) => {
    var average1 = 0;
    for(let i=0; i<restParam.length;i++)
    {
        let value = restParam[i];
        average1 += value;
    }
    average1=average1/restParam.length;
    return average1;
}

let khoi1 = () =>{
    var math = +document.querySelector("#inpToan").value;
    var physic = +document.querySelector("#inpLy").value;
    var chemis = +document.querySelector("#inpHoa").value;

    document.querySelector("#tbKhoi1").innerHTML=average(math,physic,chemis);
    
}
//document.querySelector("#btnKhoi1").onclick = abc;

let khoi2 = () =>{
    var litera = +document.querySelector("#inpVan").value;
    var histo = +document.querySelector("#inpSu").value;
    var geogra = +document.querySelector("#inpDia").value;
    var eng = +document.querySelector("#inpEnglish").value;
    document.querySelector("#tbKhoi2").innerHTML=average(litera,histo,geogra,eng);
}