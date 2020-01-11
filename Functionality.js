inames = [];
ipnumber = [];
ipgendar = [];
iAdult = [];
ichld = [];

function addItem(){
	
	 inames.push(document.getElementById('pname').value)
	 ipgendar.push(document.getElementById('pgendar').value)
	 ipnumber.push(document.getElementById('pnumber').value)
	 
	 iAdult.push(parseInt(document.getElementById('Adult').value))
	 ichld.push(parseInt(document.getElementById('chld').value))
	 
	 displayTable()
}

function displayTable(){
	  cartdata = '<table><tr><th>Petient Name</th><th>Gendar</th><th>Contact</th><th>Adult</th><th>Child</th><th>Pateint Total</th></tr>';
	  
	  
	  total = 0;
	  
	  
	  for(i=0; i < inames.length; i++)
	  {
		  total1 = iAdult[i] + ichld[i];
		  
		  total += iAdult[i] + ichld[i]
		  cartdata += "<tr><td>" + inames[i] + "</td><td>" + ipgendar[i] + "</td><td>" + ipnumber[i] + "</td><td>" + iAdult[i] + "</td><td>" + ichld[i] + "</td><td>" + total1 +
		    "</td><td><button onclick= 'delElement("+ 1 +")'>Delete</button></td></tr>"
		   
	  }
	  
	  cartdata += '<tr><td></td><td></td><td></td><td>' + total + '</td></tr></table>'

       document.getElementById('cart').innerHTML = cartdata 
	   
}

function delElement(a){
	  inames.splice(a, 1)
	  ipnumber.splice(a, 1)
	  ipgendar.splice(a, 1)
	  iAdult.splice(a, 1)
	  ichld.splice(a, 1)
	  displayTable()
}
