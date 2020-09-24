document.addEventListener("DOMContentLoaded", function () {
    let btn = document.createElement("button");
    document.body.appendChild(btn);
    btn.innerText = "My Button";


    btn.addEventListener("click", function () {
        alert('I love Taco Casa');

    });
    let div = document.querySelector('div')
    div.addEventListener("mouseenter", function (event) {
        event.target.style.backgroundColor = "purple";


        setTimeout(function () {
            event.target.style.backgroundColor = "";
        }, 1000);
    }, false);

    





    let para = document.createElement("p");
    let node = document.createTextNode("This is very hard.");
    para.style.color = "blue";
    para.appendChild(node);

    let element = document.getElementById("div1");
    element.appendChild(para);
    para.addEventListener('click', function (event) {
        event.target.style.color = "pink";
    });
    document.body.appendChild(para);



    let addSpanButton = document.getElementById("button-id");
    let element2 = document.getElementById("div2");

    addSpanButton.addEventListener('click', function (event) {
        let addSpan = document.createElement("span");
        let node2 = document.createTextNode("Jackie");
        addSpan.appendChild(node2);
        element2.appendChild(addSpan);
    });





});


