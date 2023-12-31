let Link=document.getElementById("link")
let qr=document.getElementById("QRcode")
function QR(){
    qr.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+Link.value

}