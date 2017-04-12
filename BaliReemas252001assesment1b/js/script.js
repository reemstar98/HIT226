/**
 * Scripts for {Assesment 1b and url}
 *
 * author: {Reema Bali}
 * Student Number: {s252001}
 */

var cnt=1;
var cnt1=1;
var font,fontsize,fontcolor,background;
// buttons to choose font family

function show()
{

    if(document.getElementById('far').checked)
    {
        alert("test");
        document.body.style.fontFamily="Arial";

    }
    else if(document.getElementById('ftr').checked)
    {
        document.body.style.fontFamily="Times New Roman";

    }
    else if(document.getElementById('fcg').checked) {
        document.body.style.fontFamily = "Century Gothic";

    }

// buttons to choose font size

    if(document.getElementById('fsm').checked)
    {
        document.body.style.fontSize = "small";
        fontsize = "fsm";
        alert("test");
    }
    else if(document.getElementById('fmd').checked)
    {
        document.body.style.fontSize = "medium";
        fontsize = "fmd";
    }
    else if(document.getElementById('flr').checked)
    {
        document.body.style.fontSize = "xx-large";
        fontsize = "flr";
    }
// buttons to choose font colour

    if(document.getElementById('fc1').checked)
    {
        document.body.style.fontcolor ="black";
        fontcolor ="fc1";
    }
    else if(document.getElementById('fc2').checked)
    {
        document.body.style.fontcolor ="red";
        fontcolor ="fc2";
    }
    else if(document.getElementById('fc3').checked)
    {
        document.body.style.fontcolor ="green";
        fontcolor="fc3";
    }
    else if(document.getElementById('fc4').checked)
    {
        document.body.style.fontcolor ="blue";
        fontcolor="fc4";
    }
    else if(document.getElementById('fc5').checked)
    {
        document.body.style.fontcolor ="white";
        fontcolor="fc5";
    }

// buttons to choose background colours

    if(document.getElementById('bc1').checked)
    {
        document.body.style.background ="black";
        background="bc1";
    }
    else if(document.getElementById('bc2').checked)
    {
        document.body.style.background ="red";
        background="bc2";
    }
    else if(document.getElementById('bc3').checked)
    {
        document.body.style.background ="green";
        background="bc3";
    }
    else if(document.getElementById('bc4').checked)
    {
        document.body.style.background ="blue";
        background="bc4";
    }
    else if(document.getElementById('bc5').checked)
    {
        document.body.style.background ="white";
        background="bc5";
    }



}
// code help gotten from HIT226 week 5/6 Local storage activies
function storeText()
{

    if (window.localStorage!==undefined) {

        localStorage.setItem("font",font);
        localStorage.setItem("fontSize",fontsize);
        localStorage.setItem("fontcolor",fontcolor);
        localStorage.setItem("background",background);

    }

};

function retrieveText()
{
    var allElements = "";
    if(localStorage.length == 0)
    {
        receiverElement.innerHTML = "The Database is Empty";
    }
    else
    {
        for (var i = 0; i < localStorage.length; i++)
        {
            allElements = allElements + localStorage.getItem(i) + " ";
        }
        receiverElement.innerHTML = allElements;
    }
};

function resetDatabase()

{
    localStorage.clear();
    receiverElement.innerHTML = null;
    myArrayIndex = 0;

};



function clr()
{
    document.body.style.background ="white";
    document.body.style.fontcolor ="black";
    document.body.style.fontSize ="12";
    document.body.style.fontFamily ="san-sirif";
    resetDatabase();
}

// creating triangles tutorial gotten from:
function triangle(Ax,Ay,Bx,By,Cx,Cy,d,ctx) {

    if(d>2) {
        triangle(Ax,Ay,(Ax + Cx) / 2,(Ay + Cy) / 2,(Ax + Bx) / 2,(Ay + By) / 2,d-1,ctx);
        triangle((Ax + Bx) / 2,(Ay + By) / 2,(Bx + Cx) / 2,(By + Cy) / 2,Bx,By,d-1,ctx);
        triangle((Ax + Cx) / 2,(Ay + Cy) / 2,(Bx + Cx) / 2,(By + Cy) / 2,Cx,Cy,d-1,ctx);
    }
    else {
        ctx.moveTo(Ax,Ay);
        ctx.lineTo(Bx,By);
        ctx.lineTo(Cx,Cy);
        ctx.lineTo(Ax,Ay);
    }
}
// Triangle help from https://www.khanacademy.org/computer-programming/trianglex1-y1-x2-y2-x3-y3-processingjs/839546599
window.onload = function()
{
    var ctx=document.getElementById("can1").getContext("2d");
    var cnt=1;
    ctx.font = '20pt ariel';
    ctx.fillStyle = 'blue';
    ctx.fillText('How many triangles do you count?', 50, 80);

    var ctx1=document.getElementById("can2").getContext("2d");
    ctx1.font = '20pt ariel';
    ctx1.fillStyle = 'blue';
    ctx1.fillText('Type the Text Shown ', 50, 80);

//if(localStorage== empty){
// store the values such as checked}

    img = document.getElementById("cap");
    ctx1.drawImage(img, 170, 190, 180, 180);

//triangle(50,365.47,450,365.47,250,19.06,4,ctx);
    triangle(50,470,450,470,250,120,4,ctx);
    ctx.fillStyle = 'purple';
    ctx.fill();
    ctx.strokeStyle = 'yellow';
    ctx.lineWidth = 2;
    ctx.stroke();
}

function ans(f)
{
    op=f.res.value;
    cnt++;
    f.l1.setAttribute("readOnly","true");;
    if(op!="17" && cnt<=3)
    {
        f.l1.value="Try Again";
    }
    else if(op=="17" && cnt<=3)
    {
        f.l1.value="Correct Answer "
    }
    if(cnt>3)
    {
        f.l1.value="Wrong Answer ! Correct Answer is  17";
    }
}

function ans1(f)
{

    // beloow is the code for the type the word part of the page
    op=f.l2;
    cnt1;
    f.l1.setAttribute("readOnly","true");
    if(op!="Words"&&cnt1<=3)
    {
        f.l1.value="Try Again";
    }
    else if(op=="Words"&&cnt1<=3)
    {
        f.l1.value="Correct Answer ";
    }
    if(cnt1>3)
    {
        f.l1.value="Wrong Answer ! Correct Answer is  Words";
    }
}