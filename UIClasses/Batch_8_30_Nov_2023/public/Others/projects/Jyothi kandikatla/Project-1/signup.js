var signUp ={
    imageUrl:'https://www.pngplay.com/wp-content/uploads/1/Sign-Up-PNG-Royalty-Free-Image.png',
    signUpFun(){
        signUp.mainli = document.createElement('li');
        signUp.ul2 = document.createElement('ul');
        signUp.ul2.setAttribute('class','login');
        signUp.litag1 = document.createElement('li');
        signUp.imgtag = document.createElement('img');
        signUp.imgtag.setAttribute('src',signUp.imageUrl);
        signUp.litag1.append(signUp.imgtag);
        signUp.ul2.append(signUp.litag1);


//li tag2
signUp.litag2 = document.createElement('li');
//label1
signUp.lbtag1 = document.createElement('label');
signUp.lbtag1.setAttribute('class','setsize');
signUp.lbtag1.setAttribute('for','UserName');
signUp.lbtag1.innerText = 'UserName :';
signUp.litag2.append(signUp.lbtag1);
// input tag 1

signUp.inputtag1 = document.createElement('input');
signUp.inputtag1.setAttribute('class','name');
signUp.inputtag1.setAttribute('type','text');
signUp.inputtag1.setAttribute('name','UserName');
signUp.inputtag1.setAttribute('maxlength','12');
signUp.litag2.append(signUp.inputtag1);
signUp.ul2.append(signUp.litag2);
//+++++++++++++++++++++++++++
signUp.litag3 = document.createElement('li');
//label2
signUp.lbtag2 = document.createElement('label');
signUp.lbtag2.setAttribute('class','setsize');
signUp.lbtag2.setAttribute('for','Password');
signUp.lbtag2.innerText = 'Password:';
signUp.litag3.append(signUp.lbtag2);
// input tag 2
signUp.inputtag2 = document.createElement('input');
signUp.inputtag2.setAttribute('class','password');
signUp.inputtag2.setAttribute('type','passowrd');
signUp.inputtag2.setAttribute('name','Passord');
signUp.inputtag2.setAttribute('maxlength','12');
signUp.litag3.append(signUp.inputtag2);
signUp.ul2.append(signUp.litag3);
//=======================================
signUp.litag4 = document.createElement('li');
//label3
signUp.lbtag3 = document.createElement('label');
signUp.lbtag3.setAttribute('class','setsize');
signUp.lbtag3.setAttribute('for','Password');
signUp.lbtag3.innerText = 'Confirm Password:';
signUp.litag4.append(signUp.lbtag3);
// input tag 3
signUp.inputtag3 = document.createElement('input');
signUp.inputtag3.setAttribute('class','confirmpassword');
signUp.inputtag3.setAttribute('type','passowrd');
signUp.inputtag3.setAttribute('name','confirmPassord');
signUp.inputtag3.setAttribute('maxlength','12');
signUp.litag4.append(signUp.inputtag3);
signUp.ul2.append(signUp.litag4);
//-------------------------------------------------
signUp.litag5 = document.createElement('li');
//label4
signUp.lbtag4 = document.createElement('label');
signUp.lbtag4.setAttribute('class','setsize');
signUp.lbtag4.setAttribute('for','mobileno');
signUp.lbtag4.innerText = 'Mobile No:';
signUp.litag5.append(signUp.lbtag4);
// input tag 4
signUp.inputtag4 = document.createElement('input');
signUp.inputtag4.setAttribute('class','mobileno');
signUp.inputtag4.setAttribute('type','text');
signUp.inputtag4.setAttribute('name','mobileno');
signUp.inputtag4.setAttribute('maxlength','12');
signUp.litag5.append(signUp.inputtag4);
signUp.ul2.append(signUp.litag5);
//+++++++++++++++++++++++++++++++++++++++++++++++++++++
signUp.litag6 = document.createElement('li');
//label5
signUp.lbtag5 = document.createElement('label');
signUp.lbtag5.setAttribute('class','setsize');
signUp.lbtag5.setAttribute('for','emailid');
signUp.lbtag5.innerText = 'Email Id:';
signUp.litag6.append(signUp.lbtag5);
// input tag 5
signUp.inputtag5 = document.createElement('input');
signUp.inputtag5.setAttribute('class','emailid');
signUp.inputtag5.setAttribute('type','text');
signUp.inputtag5.setAttribute('name','emailid');
signUp.litag6.append(signUp.inputtag5);
signUp.ul2.append(signUp.litag6);
//+++++++++++++++++++++++++++++++++++++++++++++++++++++
signUp.litag7 = document.createElement('li');
// input tag 6
signUp.inputtag6 = document.createElement('input');
signUp.inputtag6.setAttribute('class','button');
signUp.inputtag6.setAttribute('type','button');
signUp.inputtag6.setAttribute('value','Submit ');
signUp.litag7.append(signUp.inputtag6);
signUp.ul2.append(signUp.litag7);
//==================================================
signUp.mainli.append(signUp.ul2);
console.log(signUp.mainli);
document.querySelector('.signuppage').append(signUp.mainli);

    }
};
signUp.signUpFun();