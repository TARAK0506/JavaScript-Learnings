var obj_array = [];

function createObject(name, age, height, weight) {
    return { 
        FullName : name, 
        Years : age, 
        Stature : height, 
        Mass : weight 
    };
}

const addArray = (obj) => {
    obj_array.push(obj);
    return obj_array;
}


function display() {
	try {
	    let name = document.getElementById("name").value;
	    let age = document.getElementById("age").value;
	    let height = document.getElementById("height").value;
	    let weight = document.getElementById("weight").value;
	    var resultDiv = document.getElementById("result").value;
	    
	    var newObject = createObject(name, age, height, weight);
        const arr = addArray(newObject);

        var output = "<table class='table'><tr><th>Full Name</th><th>Age</th><th>Height</th><th>Weight</th></tr>";
        arr.forEach(function(item) {
            output += "<tr><td>" + item.FullName + "</td><td>" + item.Years + "</td><td>" + item.Stature + "</td><td>" + item.Mass + "</td></tr>";
        });
        output += "</table>";
        document.getElementById("result").innerHTML = output;
	} 
	catch(err){
       document.getElementById("result").innerHTML="Function display: "+err;
    }
}

