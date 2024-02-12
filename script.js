//toレジボタンの色変え
function cc(element) {
    element.style.backgroundColor = "hsl(356, 100%, 84%)"; /* マウスが乗ったときの色 */
}

function rc(element) {
    element.style.backgroundColor = "hsl(356, 100%, 74%)"; /* マウスが離れたときの色 */
}

//ページの移動
function np() {
    if(total == 0){
        alert("カートに何も入っていません");
    }
    else{
        window.location.href = "order-regi.html";
    }
}

//ボタン
let i1 = 0, i2 = 0, i3=0, i4 =0, i5=0, i6=0;
let total = 0;
let item_total = "";

document.getElementById("kb1").addEventListener("click", numcal1);
function numcal1(){
    i1++;
    document.getElementById("num1").innerHTML = "この商品はカートに" +i1+ "つ入っています";
    total += 3200;
    item_total = item_total + "ジェケット１：￥3200<br>" 
}

document.getElementById("kb2").addEventListener("click", numcal2);
function numcal2(){
    i2++;
    document.getElementById("num2").innerHTML = "この商品はカートに" +i2+ "つ入っています";
    total += 5100;
    item_total = item_total + "ジェケット２：￥5100<br>" 
}

document.getElementById("kb3").addEventListener("click", numcal3);
function numcal3(){
    i3++;
    document.getElementById("num3").innerHTML = "この商品はカートに" +i3+ "つ入っています";
    total += 2800;
    item_total = item_total + "ジェケット３：￥2800<br>" 
}

document.getElementById("kb4").addEventListener("click", numcal4);
function numcal4(){
    i4++;
    document.getElementById("num4").innerHTML = "この商品はカートに" +i4+ "つ入っています";
    total += 4500;
    item_total = item_total + "ジェケット４：￥4500<br>"
}

document.getElementById("kb5").addEventListener("click", numcal5);
function numcal5(){
    i5++;
    document.getElementById("num5").innerHTML = "この商品はカートに" +i5+ "つ入っています";
    total += 3100;
    item_total = item_total + "ジェケット５：￥3100<br>"
}

document.getElementById("kb6").addEventListener("click", numcal6);
function numcal6(){
    i6++;
    document.getElementById("num6").innerHTML = "この商品はカートに" +i6+ "つ入っています";
    total += 3600;
    item_total = item_total + "ジェケット６：￥3600<br>"
}

//合計計算、受け渡し

document.getElementById("goregi-id").addEventListener("click", cal_total);
function cal_total(){
    sessionStorage.setItem("result", total);
    sessionStorage.setItem("item_result", item_total);
}