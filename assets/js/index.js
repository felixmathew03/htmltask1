function displayNav() {
    document.getElementById('threedots').style.display = 'none';
    document.getElementById('header').style.background='none';
    document.getElementById('twolines').style.display = "flex";
}

function removeNav() {
    document.getElementById('threedots').style.display = 'block';
    document.getElementById('header').style.backgroundImage="url('./assets/images/fbg.png')";
    document.getElementById('header').style.backgroundPosition='center';
    document.getElementById('header').style.backgroundSize='cover';
    document.getElementById('twolines').style.display = "none";
    document.getElementById('navSection').classList.remove("show"); 
    document.getElementById('navfoot').classList.remove("show"); 
}

function displayServices(){
    document.getElementById('navSection').classList.add("show"); 
    document.getElementById('navfoot').classList.add("show"); 
}