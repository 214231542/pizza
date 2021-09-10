menu_list_array = [
    "Paneer Tikka Pizza",
    "Deluxe Veggie Pizza",
    "Chicken Tandoori",
    "Veg Extravaganza Pizza",
    "Veg Margherita Pizza",
];

function getmenu(){
    var htmldata = "";
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+ menu_list_array[i] + '<br/>'
    }
    document.getElementById("display_menu").innerHTML = htmldata;
    //give the appropriate id name as display_menu  
}

function add_item(){
    var imageTag = '<img src="https://pizzacharlottenc.com/wp-content/uploads/2020/08/pepperoni-pizza.png" width = "100" />'

    // get new image and add to array
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);

    // create html and display
    var htmldata="";
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
         htmldata = htmldata + imageTag + menu_list_array[i]+'<br />';
    }
    document.getElementById("display_addedmenu").innerHTML = htmldata;		
}

// function add_top(){
//     var item=document.getElementById("add_item").value;
//    menu_list_array.push(item);
//	add_item();
// }
