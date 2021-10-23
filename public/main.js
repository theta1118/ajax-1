let n = 1;
getPage.onclick = () =>{
	const request = new XMLHttpRequest()
	request.open("GET",`/page${n+1}`);
	request.onreadystatechange = () =>{
		if(request.readyState === 4 && request.status === 200){
			const array = JSON.parse(request.response)
			array.forEach(item=>{
				const li = document.createElement('li')
				li.textContent
				li.textContent = item.id
				xxx.appendChild(li);
			});
			n += 1;
		}
	}
	request.send()
};
getJSON.onclick = () =>{
	const request = new XMLHttpRequest()
	request.open("get","/5.json");
	request.onreadystatechange = () =>{
		if(request.readyState === 4 && request.status === 200){
			console.log(request.response)
			//ajax目前最新的状态：把json代替xml，作为数据请求，
			//然后使用JSON.pase就可以得到这个数据，然后这个数据就可以想干嘛干嘛
			const object = JSON.parse(request.response)
			myName.textContent = object.name
		}
	};
	request.send();
};
getXML.onclick = () =>{
	const request = new XMLHttpRequest();
	request.open("GET","/4.xml");
	request.onreadystatechange = () =>{
		if(request.readyState === 4 && request.status === 200){
			const dom = request.responseXML;
			const text = dom.getElementsByTagName('warning')
			[0].textContent;
			console.log(text.trim());
		}
	};
	request.send();
};
getHTML.onclick = () =>{
	const request = new XMLHttpRequest()
	request.open('GET','/3.html')
	request.onload = () =>{
		const div = document.createElement('div')/*第一步：创建一个div*/
		div.innerHTML = request.response/*第二步：填写这个div内容*/
		document.body.appendChild(div)/*第三步：把这个div插到body里面*/
	};
	request.onerror = () =>{}
	request.send()
};
getJS.onclick = () =>{
	const request = new XMLHttpRequest() /*第一步创建一个请求*/
	request.open('GET','/2.js')/*第二步调用open*/
	request.onload = () =>{/*监听它的onload等于一个函数*/

		//创建script标签
		const script = document.createElement('script')
		//填写script内容
		script.innerHTML = request.response
		//插到身体里
		document.body.appendChild(script)

	}/*第三步*/
	request.onerror = () =>{};
	request.send();/*第四步：发送*/
};

getCSS.onclick = () =>{
    const request = new XMLHttpRequest();
	 request.open("GET","/style.css");/*获取资源都用get .open(method.url) readyState = 1*/
    request.onreadystatechange = () =>{
		 // 下载完成，但不知道是成功 2xx(http请求里面只要是开头的都表示成功) 还是失败 4xx 5xx 
		 if(request.readyState === 4){
			 if(request.status >=200 && request.status < 300){
			//创建style标签
			 const style = document.createElement("style");
			 //填写style内容
			 style.innerHTML = request.response;
			 //插到head里面
			 document.head.appendChild(style);
			 }else{
				 alert('加载CSS失败')
			 }
		}
	};
	request.send();//readyState = 2	
};
