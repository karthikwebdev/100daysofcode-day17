function fun()
{
 let x = document.getElementById('india').value;
 var y = document.getElementById("select").value;
 if(y === "select")
 {
     document.getElementById('display').style.display = "none";
     document.getElementById('display').innerHTML = "please select currency";
    }
else if(y === "usd")
{
    var z = x * 0.014
    document.getElementById('display').style.display = "flex";
     document.getElementById('display').innerHTML = `INR: ${x}  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp = &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  USD: ${z}`;
}
else if(y === "euro")
{
    var z = x * 0.013
    document.getElementById('display').style.display = "flex";
     document.getElementById('display').innerHTML = `INR: ${x}  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp = &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  EUR: ${z}`;
}
else if(y === "japan")
{
    var z = x * 1.53
    document.getElementById('display').style.display = "flex";
     document.getElementById('display').innerHTML = `INR: ${x}  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp = &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  JPY: ${z}`;
}
else if(y === "cad")
{
    var z = x * 0.019
    document.getElementById('display').style.display = "flex";
     document.getElementById('display').innerHTML = ` INR: ${x}  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp = &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  CAD: ${z}`;
}
}