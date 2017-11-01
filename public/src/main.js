console.log('main.js loaded');
const zenbinApp = {
	loginPresent: false,
	toggleLogin: function(){
		if(zenbinApp.loginPresent){
			zenbinApp.destroyLogin();
			zenbinApp.loginPresent = false;
		}
		else{
			zenbinApp.showLogin();
			zenbinApp.loginPresent = true;
		}
	},
	showLogin: function(){
		if(zenbinApp.registerPresent){
			zenbinApp.destroyRegister();
		}
		zenbinApp.loginPresent = true;
		let form = document.createElement('form');
		form.id = 'formLogin';
		form.action = '/auth/login'; 
		form.method = 'post';
		form.acceptCharset = 'utf-8';
		let username = document.createElement('input');
		username.id = 'inputUsername';
		username.type = 'text';
		username.name = 'username';
		username.placeholder = 'Username';
		form.appendChild(username);
		let password = document.createElement('input');
		password.id = 'inputPassword';
		password.type = 'text';
		password.name = 'password';
		password.placeholder = 'Password';
		form.appendChild(password);
		let submit = document.createElement('input');
		submit.id = 'buttonSubmit';
		submit.type = 'submit';
		submit.value = 'Log in';
		form.appendChild(submit);
		document.querySelector('body').appendChild(form);
	},
	destroyLogin: function(){
		zenbinApp.loginPresent = false;
		document.querySelector('body').removeChild(document.querySelector('#formLogin'));
	},
	registerPresent: false,
	toggleRegister: function(){
		if(zenbinApp.registerPresent){
			zenbinApp.destroyRegister();
			zenbinApp.registerPresent = false;
		}
		else{
			zenbinApp.showRegister();
			zenbinApp.registerPresent = true;
		}
	},
	showRegister: function(){
		if(zenbinApp.loginPresent){	
			zenbinApp.destroyLogin();
		}
		zenbinApp.registerPresent = true;
		let form = document.createElement('form');
		form.id = 'formRegister';
		form.action = '/auth/register'; 
		form.method = 'post';
		form.acceptCharset = 'utf-8';
		let username = document.createElement('input');
		username.id = 'inputUsername';
		username.type = 'text';
		username.name = 'username';
		username.placeholder = 'Username';
		form.appendChild(username);
		let password = document.createElement('input');
		password.id = 'inputPassword';
		password.type = 'text';
		password.name = 'password';
		password.placeholder = 'Password';
		form.appendChild(password);
		let passwordConfirm = document.createElement('input');
		passwordConfirm.id = 'inputPasswordConfirm';
		passwordConfirm.type = 'text';
		passwordConfirm.name = 'passwordConfirm';
		passwordConfirm.placeholder = 'Confirm Password';
		form.appendChild(passwordConfirm);
		let submit = document.createElement('input');
		submit.id = 'buttonSubmit';
		submit.type = 'submit';
		submit.value = 'Sign up';
		form.appendChild(submit);
		document.querySelector('body').appendChild(form);
	},
	destroyRegister: function(){
		zenbinApp.registerPresent = false;
		document.querySelector('body').removeChild(document.querySelector('#formRegister'));
	},
	decorateLanding: function(){
		//I hereby apologize for this shit code....
		let box = document.createElement('div');
		box.style.width = '300px';
		box.style.height = 'auto';
		box.style.position = 'absolute';
		box.style.left = `${Math.floor(Math.random()*50)}%`;
		box.style.top = `${Math.floor(Math.random()*100)}%`;
		let psuedoDistance = Math.floor(Math.random()*6);
		console.log(psuedoDistance);
		box.style.filter = `blur(2px)`;
		box.style.transform = `scale(${psuedoDistance/2},${psuedoDistance/2})`
		box.style.zIndex = '-50';
		box.style.opacity = '0.6';
		box.style.background = 'var(--colorBackgroundWhiteTrans)';
		box.innerText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
		document.querySelector('body').appendChild(box);
		// setTimeout(function(){

		// },3000);
	},
	// moveThing: function(element){

	// },
}