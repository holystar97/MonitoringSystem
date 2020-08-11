/* function addUser () {
     // div 객체 생성
    var div =document.createElement("div");
    var image =document.createElement("img");
 var connectBtn = document.createElement("button");
 var removeBtn=document.createElement("button");
 var divIp=document.createElement("div");
 var divButton=document.createElement("div");

 //div 붙이기


    //css 설정

    //removeBtn.innerText("remove");
    //div.style.border="1px solid black"
    div.style.margin="20px";
    div.style.width="256px";
    div.style.height="224px";
   div.style.float="left";
    connectBtn.style.width="20px";
    connectBtn.style.height="20px";
    //divButton.style
   div.style.backgroundImage="url('monitor.png')"
   // div.style.backgroundSize = "200px";


    document.getElementById("user").append(div);
    div.appendChild(divIp);
    divIp.appendChild(connectBtn);
    divIp.appendChild(removeBtn);
} */

/*function addUser () {
    // div 객체 생성
    var div =document.createElement("div");
    var image =document.createElement("img");
    var connectBtn = document.createElement("button");
    var removeBtn=document.createElement("button");
    var divIp=document.createElement("div");
    var divButton=document.createElement("div");
    var ipAdresss =document.getElementById("ipAdress").value;


    //div 붙이기


    //css 설정

    //removeBtn.innerText("remove");
    //div.style.border="1px solid black"
    div.style.paddingLeft="30px"
    div.style.paddingRight="20px"
    div.style.paddingTop="25px"
    div.style.paddingBottom="40px"

    div.style.width="256px"
    div.style.height="224px"
    div.style.margin="20px"
    div.style.float="left"
    divIp.innerText="IP : "+ipAdresss;
    connectBtn.style.width="70px"
    connectBtn.style.height="35px"
    connectBtn.innerText="connect"
    //  connectBtn.style.margin="30px"
    removeBtn.style.width="70px"
    removeBtn.style.height="35px"
    removeBtn.innerText="Remove"
    removeBtn.style.marginLeft="30px"

    //divButton.style
    div.style.backgroundImage="url('monitor.png')"
    // div.style.backgroundSize = "200px";

    divButton.style.marginTop="30px"

    document.getElementById("user").append(div);
    div.appendChild(divIp);
    div.appendChild(divButton);
    divButton.appendChild(connectBtn);
    divButton.appendChild(removeBtn);


}*/

function add_info() {
    var IPdiv =document.getElementById("Ipdiv");
    var ipAdress=document.getElementById("ipAdress").value;

    // 원본 찾아서 pre_set으로 저장.
    var pre_set = document.getElementById('pre_set');
    // last-id 속성에서 필드ID르 쓸값 찾고
    var fieldid = pre_set.getAttribute('last-id');
    // 다음에 필드ID가 중복되지 않도록 1 증가.
    pre_set.setAttribute('last-id', fieldid + 1 );

    // 복사할 div 엘리먼트 생성
    var div = document.createElement('div');
    // 내용 복사
    div.innerHTML = pre_set.innerHTML;
    // 복사된 엘리먼트의 id를 'field-data-XX'가 되도록 지정.
    div.id = 'field-data-' + fieldid;
    // selection_content 영역에 내용 변경.
    var temp = div.getElementsByClassName('selection_content')[0];
     temp.innerText = "IP :" +ipAdress;
   // temp.innerText = x;
    // delete_box에 삭제할 fieldid 정보 건네기
    var deleteBox = div.getElementsByClassName('delete_box')[0];
    // target이라는 속성에 삭제할 div id 저장
    deleteBox.setAttribute('target',div.id);
    // #field에 복사한 div 추가.
    document.getElementById('field').appendChild(div);
}

function delete_info(obj) {
    // 삭제할 ID 정보 찾기
    var target = obj.parentNode.getAttribute('target');
    // 삭제할 element 찾기
    var field = document.getElementById(target);
    // #field 에서 삭제할 element 제거하기
    document.getElementById('field').removeChild(field);
}

// var ipAdresss=document.getElementById("ipAdress").value;
// IPdiv.innerText="IP : "+ipAdresss;