function submitter()
{
	var ID = document.getElementById("dataset_name").value;
	var URL = "http://isenseproject.org/api/v1/projects/"+ID;

	var response = $.ajax({ type: "GET",
							url: URL,
							async: false,
							dataType: "JSON"
							}).responseText;

	// Now we should have some information about the project.
	var object = arg[0].name;
	rev.innerHTML = "The closest project I have to that name is: <br/>"+ object;
	console.log(arg[0]);
	
	// DEBUG
	//rev.innerHTML = response;
	//console.log(response);

}
