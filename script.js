document.querySelector('#shareBtn').addEventListener('click', async () => {
	if(!navigator.share) return;
	let data = {
		text:"I like cats"
	};
	try {
		let result = await navigator.share(data);	
		console.log(result);
	} catch(e) {
		console.error(e);
	}
});

document.querySelector('#shareBtn2').addEventListener('click', async () => {
	if(!navigator.share) return;
	let data = {
		text:"I like cats", 
		title:"This is the title",
		url:"https://www.raymondcamden.com/2023/04/14/need-help-with-coldfusion"
	};

	try {
		let result = await navigator.share(data);	
		console.log(result);
	} catch(e) {
		console.error(e);
	}
});

document.querySelector('#shareBtn3').addEventListener('click', async () => {
	let files = document.querySelector('#myFiles').files;
	if(files.length === 0) {
		alert('For this test, select some files.');
		return;
	}

	if(!navigator.share) return;
	let data = {
		files,
		text:"I like cats", 
		title:"This is the title",
		url:"https://www.raymondcamden.com/2023/04/14/need-help-with-coldfusion"
	};

	let canI = await navigator.canShare(data);
	console.log('Can I share? xxx', canI);
	try {
		let result = await navigator.share(data);	
		console.log('result xxx',result);
	} catch(e) {
		console.error('error from share xxx',e);
	}
});
