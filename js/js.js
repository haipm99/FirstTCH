// JavaScrip
function change()
{
	var x = document.getElementById("sideLeft");
	var y = document.getElementById("contentbody");
	if(x.style.width !== "0px")
	{
		x.style.width = "0px";
		y.style.marginLeft = "13%";
	}
	else{
		x.style.width = "20%";
		y.style.marginLeft = "20%";
	}

}
var i=0;
//invoice
function addinvoice(p1,p2)
{
	var x = document.getElementById(p1).innerHTML;
	var y = document.getElementById(p2).innerHTML;
	var container = document.getElementById("product1");
	var tagtable = document.createElement("table");
	var tagrow = document.createElement("tr");
	tagtable.appendChild(tagrow);
	var stt = document.createElement("td");
	var textnode = document.createTextNode("1");
	var textnode2 = document.createTextNode(x);
	var textnode3 = document.createTextNode(y);
	stt.appendChild(textnode);
	stt.width = "10px";
	var name=document.createElement("td");
	name.appendChild(textnode2);
	name.width="200px";
	var price = document.createElement("td");
	price.width = "150px";
	var del = document.createElement("button");
	del.textContent = "X";
	var del1 = document.createElement("td");
	del1.appendChild(del);
	price.appendChild(textnode3);
	tagrow.appendChild(stt);
	tagrow.appendChild(name);
	tagrow.appendChild(price);
	tagrow.appendChild(del1);
	del.addEventListener('click',function(){
		var l=0;
		for(l=0;l<=3;l++)
			{
				tagrow.deleteCell(0);
			}
		i--;
	z.innerHTML = "Cộng ("+i+") món";
		all.innerHTML = parseInt(all.innerHTML) - parseInt(y);
	});
	container.appendChild(tagtable);
	var z = document.getElementById("count");
	i++;
	z.innerHTML = "Cộng ("+i+") món";
	var all = document.getElementById("sumall");
	all.innerHTML = parseInt(all.innerHTML) + parseInt(y);
	
}
//giao hang

function check()
{
	var m=1;
	var x = document.getElementById("text-input");
	var y = document.getElementById("sumall");
	var z =document.getElementById("temp1");
	var u =document.getElementById("containerr");
	if( x.value === "")
		{
			alert("Please Enter Address!");
			m=0;
		}
	if(y.innerHTML === "0")
		{
			alert("Please Choose something to buy!");
			m=0;
		}
	var k = document.getElementById("text-caution");
	if(m==1)
		{
			k.style.opacity = "1";
			k.style.zIndex = "2";
			k.style.width ="300px";
			k.style.height = "300px";
			z.sytle.zIndex = "1";
			z.style.opacity = "0.5";
			u.style.zIndex = "0";
		}
}
//show
function showthanks()
{
	var x = document.getElementById("nice");
	var y = document.getElementById("id-phone");
	if(y.value !== "")
		{
			x.style.opacity ="1";
		}
	else{
		alert("Please input telephone number");
	}

}
function backmenu()
{
	var x=document.getElementById("text-caution");
	x.style.opacity = "0";
}