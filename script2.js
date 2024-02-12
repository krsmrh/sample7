function np2() {
    if(document.getElementById("name").value === ""){
        alert("お名前をご入力ください");
    }
    else if(document.getElementById("mail").value === ""){
        alert("メールアドレスをご入力ください");
    }
    else if(document.getElementById("add").value === ""){
        alert("ご住所をご入力ください");
    }
    else if(document.getElementById("card").value === ""){
        alert("お支払い情報をご入力ください");
    }
    else{
    window.location.href = "order-deci.html";
    }
}

const result = sessionStorage.getItem("result");
document.getElementById("show_total").innerHTML = result;

const item_result = sessionStorage.getItem("item_result");
document.getElementById("show_item_total").innerHTML = item_result;