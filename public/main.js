getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200) {
            console.log(request.response)

        }
    }
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const object = JSON.parse(request.response)
                // 转化成对象
                myName.textContent = object.name
            }
        }
    }
    request.send()
}









getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/style.css"); // readyState = 1
    request.onreadystatechange = () => {
        console.log(request.readyState);
        // 下载完成，但不知道是成功 2xx 还是失败 4xx 5xx
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                // 创建 style 标签
                const style = document.createElement("style");
                // 填写 style 内容
                style.innerHTML = request.response;
                // 插到头里面
                document.head.appendChild(style);
            } else {
                alert("加载 CSS 失败");
            }
        }
    };
    request.send(); // readyState = 2
};
getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/2.js')
    request.onload = () => {

        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)

    }
    request.onerror = () => {
        console.log("失败了")
    }
    request.send()

}
getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/3.html')
    request.onload = () => {
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)

    }
    request.onerror = () => {
        console.log("失败了")
    }
    request.send()
}