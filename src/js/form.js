function formvalidationtest() {
   /* var firstname = document.forms["Students"]["firstname"];
    var middlename = document.forms["Students"]["middlename"];
    var lastname = document.forms["Students"]["lastname"];
    var date = document.forms["Students"]["date"];
    var month = document.forms["Students"]["month"];
    var year = document.forms["Students"]["year"];
    var gender = document.forms["Students"]["gender"];
    var number = document.forms["Students"]["number"]; */

    var firstname = document.getElementById("firstname");
    var middlename = document.getElementById("middlename");
    var lastname = document.getElementById("lastname");
    var date = document.getElementById("date");
    var month = document.getElementById("month");
    var year = document.getElementById("year");
    var gender = document.getElementById("gender");
    var number = document.getElementById("number");
    
    // alert(firstname);
   
    if (firstname.value == "" || firstname.value == undefined){
        window.alert("Please enter your First Name");
        firstname.focus();
        return false;
    }
    
    if (middlename.value == "" || middlename.value == undefined){
        window.alert("Please enter your Middle Name");
        middlename.focus();
        return false;
    }
    
    if (lastname.value == "" || lastname.value == undefined){
        window.alert("Please enter your Last Name");
        lastname.focus();
        return false;
    }
    
    if (date.value == "" || date.value == undefined){
        window.alert("Please enter Date");
        date.focus();
        return false;
    }
    
    if (month.value == "" || month.value == undefined){
        window.alert("Please enter Month");
        month.focus();
        return false;
    }
    
    if (year.value == "" || year.value == undefined){
        window.alert("Please enter Year");
        year.focus();
        return false;
    }
    
    if (gender.value == "" || gender.value == undefined){
        window.alert("Please enter Gender");
        gender.focus();
        return false;
    }
    
    if (number.value == "" || number.value == undefined){
        window.alert("Please enter Number");
        number.focus();
        return false;
    }

    return false;    
}

