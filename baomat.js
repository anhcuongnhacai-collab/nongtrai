// 1. Chặn chuột phải
document.addEventListener('contextmenu', event => event.preventDefault());

// 2. Chặn F12, Ctrl+U, Ctrl+Shift+I
document.addEventListener('keydown', event => {
    if (event.keyCode === 123 || 
        (event.ctrlKey && event.shiftKey && (event.keyCode === 73 || event.keyCode === 74 || event.keyCode === 67)) || 
        (event.ctrlKey && event.keyCode === 85)) {
        event.preventDefault();
        return false;
    }
});

// 3. Bẫy Debugger gây đơ máy khi cố tình soi code
setInterval(function () {
    const startTime = performance.now();
    debugger; 
    const endTime = performance.now();
    if (endTime - startTime > 50) {
        document.body.innerHTML = "<h2 style='color:red;text-align:center;margin-top:50px;'>CẢNH BÁO: Không được phép xem mã nguồn!</h2>";
        window.location.reload(); 
    }
}, 500);