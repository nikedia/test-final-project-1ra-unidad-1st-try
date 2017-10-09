
function cipher (str) {

    var arr = [];


    for (var i= 0 ; i<str.length ; i++){

        if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90)

        {console.log(arr.push((str.charCodeAt(i)-65 + 33) % 26 + 65));}

         else if(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=120)

        {console.log(arr.push((str.charCodeAt(i)-97 + 33) %26 + 97));}

        else {(str.charCodeAt(i)<65)
            console.log(arr.push(str[i]))};

    }



};

cipher ('A');
