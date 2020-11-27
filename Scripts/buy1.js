var totalAmount=0;
function display() {

	var tot_amount=0;
	
	var e=document.getElementById("manufacturers");
	var bev=e.options[e.selectedIndex].text;
    
    var opt2=document.getElementById("pack");
    
    var opt=document.getElementById("quantity");
    tot_amount=Number(opt.options[opt.selectedIndex].value);
	var selSizeText=opt.options[opt.selectedIndex].text;
	
	
    var setText=opt2.options[opt2.selectedIndex].text;
		
    var mug_amount=document.getElementById("mug");
	var pin_amount=document.getElementById("pin");
	var souvenir_amount=document.getElementById("souvenir");
	
	var table=document.getElementById("tbOrder");
	var row=table.insertRow(table.rows.length);
	var cell1=row.insertCell(0);
	var cell2=row.insertCell(1);
	var cell3=row.insertCell(2);
	var cell4=row.insertCell(3);
	var cell5=row.insertCell(4);
	var cell6=row.insertCell(5);
	var cell7=row.insertCell(6);
	
	
    cell1.innerHTML=table.rows.length - 2;
	cell2.innerHTML=bev +" ( "+ selSizeText + " )";
	cell3.innerHTML=setText;
	
	if (mug_amount.checked==true) {
		cell4.innerHTML="Yes";
		tot_amount=tot_amount+500;
    }
    
	else {
		cell4.innerHTML="No";
	}
	
	if (pin_amount.checked==true) {
		cell5.innerHTML="Yes";
        tot_amount=tot_amount+1000;
    }
    
	else {
		cell5.innerHTML="No";
	}

	if(souvenir_amount.checked==true) {
		cell6.innerHTML="Yes";
		tot_amount=tot_amount+1500;
    }
    
	else {
		cell6.innerHTML="No";
	}
	
	
	cell7.innerHTML="Rs. "+tot_amount;
	totalAmount=totalAmount+tot_amount;
	
	var gTotal=document.getElementById("totalAmount");
	gTotal.value=totalAmount;
	
	document.getElementById("show").style.display="block";

}
function confmsg()
{
	totalAmount=0;
	var table=document.getElementById("tbOrder");
	for(var i=table.rows.length-1;i>1; i--)
	{
		table.deleteRow(i);
	}
	document.getElementById("show").style.display="none";
	alert("THANK YOU FOR ORDERING WITH US, HOPE YOU COME AGAIN")
}

