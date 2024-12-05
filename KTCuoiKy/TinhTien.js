var s = 0;
function Them(button)
{
    var thumb = button.parentElement.parentElement.cloneNode(true);
    var btnXoa = thumb.getElementsByTagName("button")[0];
    var price = Number(thumb.getElementsByTagName("span")[0].innerText);

    btnXoa.innerText = "Xóa"
    btnXoa.setAttribute('onclick','xoa(this)');
    document.getElementById("fu").appendChild(thumb);
    s+=price;   
    document.getElementById("tong").innerText = s;
}

function xoa(button)
{
    var thumb = button.parentElement.parentElement;
    var price = Number(thumb.getElementsByTagName("span")[0].innerText);
    document.getElementById("fu").removeChild(thumb);
    s-=price;
    document.getElementById("tong").innerText = s;
}

