

// bài 1

var getElm = function (id) {
    return document.getElementById(id)
}

var n = 0;
var tong = 0
while (tong < 10000) {
    tong = tong + n
    n++
}
var opBaiMot = getElm('opBaiMot')
opBaiMot.innerHTML = 'Số nguyên dương nhỏ nhất: ' + (n - 1)

// bài 2
var opBaiHai = getElm('opBaiHai')
function tinhTong() {
    var x = getElm('ipNhap_x').value
    var n = getElm('ipNhap_n').value

    var S = 0
    var tong = 1
    debugger
    if (n >= 0) {
        for (var i = 1; i <= n; i++) {
            tong = tong * x
            S = S + tong
        }
        opBaiHai.innerHTML = (parseFloat(tong))
    } else if (n < 0) {
        for (var i = -1; i >= n; i--) {
            tong = tong / x
            S = S + tong
        }
        opBaiHai.innerHTML = (parseFloat(tong))
    }
    opBaiHai.style.height = '40px'
}


// bài 3
var opBaiBa = getElm('opBaiBa')
function tinhBaiBa() {
    var giaiThua = getElm('ipBaiBa').value
    if (giaiThua == '') {
        alert('Vui lòng nhập số')
        return
    } 
    debugger
    if (giaiThua >= 0) {
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
        opBaiBa.innerHTML = (ketQuaGt)
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
    debugger
    var selection = document.getElementsByTagName('selection')
    for (var i = 0; i < selection.length; i++) {
        if (i % 2 == 0) {
            selection[i].style.backgroundColor = '#007bff'
        } else {
            selection[i].style.backgroundColor = '#dc3545'
        }
    }
}