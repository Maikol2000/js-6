
var getElm = function (id) {
    return document.getElementById(id)
}
// bài 1
var opBaiMot = getElm('opBaiMot')

var n = 0;
var tongMot = 0
while (tongMot < 10000) {
    tongMot += n
    n++
}
opBaiMot.innerHTML = 'Số nguyên dương nhỏ nhất: ' + (n -1)

// bài 2
var opBaiHai = getElm('opBaiHai')
function tinhTong() {
    var x = getElm('ipNhap_x').value
    var n = getElm('ipNhap_n').value
    var tong = 1

    if(x<0){
        alert("x phải lớn hơn không, không được để trống")
        return
    }
    if(isNaN(n) || isNaN(x) || n != parseInt(n))  {
        alert('Không được nhập chữ, số thập phân, không được để trống')
        return
    } else if(n<0) {
        for  (var i = -1; i >=n; i--) {
            tong = tong + Math.pow(x,i)
        }
    }
    for  (var i = 1; i <=n; i++) {
        tong = tong + Math.pow(x,i)
    }
    opBaiHai.innerHTML = tong - 1 
    opBaiHai.style.height = '40px'
}

// bài 3
var opBaiBa = getElm('opBaiBa')
function tinhBaiBa() {
    var giaiThua = getElm('ipBaiBa').value
    if (isNaN(giaiThua) || giaiThua != parseInt(giaiThua)) {
        alert('Không được nhập chữ, số thập phân')
        return
    } else if (giaiThua >= 0) {
        var ketQuaGt = 1
        for (i = 1; i <= giaiThua; i++) {
            ketQuaGt = ketQuaGt * i
        }
        opBaiBa.innerHTML = (ketQuaGt)
    } else if (giaiThua < 0) {
        var ketQuaGt = 1
        for (i = -1; i >= giaiThua; i--) {
            ketQuaGt = ketQuaGt * i
        }
        opBaiBa.innerHTML = ketQuaGt
    }
}


// bài 4
var opBaiBon = getElm('opBaiBon')
function taoDiv() {
    var n = 1
    var itemHTML = ''
    while (n <= 10) {
        if (n % 2 === 0) {
            itemHTML += "<selection>Div chẵn " + n + "</selection>"

        } else {
            itemHTML += "<selection>Div lẻ " + n + "</selection>"
        }
        n++
    }
    opBaiBon.innerHTML = itemHTML

    var selection = document.getElementsByTagName('selection')
    for (var i = 0; i < selection.length; i++) {
        if (i % 2 == 0) {
            selection[i].style.backgroundColor = '#007bff'
        } else {
            selection[i].style.backgroundColor = '#dc3545'
        }
    }
}