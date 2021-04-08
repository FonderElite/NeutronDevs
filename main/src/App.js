import React, {useState} from 'react';
import data from './data';
import List from './List';
import Information from './info';
import textdata from './textdata.js';
import $ from "jquery";
import skillsdata from "./skilldata";
import Moreinfo from './Moreinfo';
import Swal from 'sweetalert2'
const  App = () =>{
  const [people, setPeople] = useState(data);
  const [text, setText] = useState(textdata);
  const [skills, setSkills] = useState(skillsdata);
  function refresh(){
   location.reload();
  };
  const Change = () =>{
    try{
article = $('article');
age = $("#age");
if(article.background == "#181818"){
$('h4').css({color:'white'})
}else{
  age.css({color:"black"});
}
    }
    catch(err) {
 console.log(err.message);
}
  }
  Change();
  const hide = () =>{
$('article').toggle(1000);
  }
  const mobile = () =>{

  }
  const hideMobile = () =>{
    Swal.fire({
      title: 'Neutron Nation!',
      text: 'We are people who are into softwares and techology.',
      imageUrl: 'https://avatars.githubusercontent.com/u/15052701?v=4',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      confirmButtonText: 'Yes, Join Neutron-Nation!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true,
      showCancelButton: true
    }).then((result) =>{
if(result.isConfirmed){
  Swal.fire({
    title:'Discord Server',
    text:'Your file has been deleted.',
    text:'wrngnz.ga/discord',
    imageUrl: 'https://steamuserimages-a.akamaihd.net/ugc/1631947648964785474/81CBA15178466DD47195A239232202E78987B714/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
    imageWidth: 400,
    imageHeight: 200,
    confirmButtonText: 'Ok',
    reverseButtons: true,
   
  }).then(() => {
    window.location = "https://wrngnz.ga/discord";
  });
}
else if(result.isDismissed){
  Swal.fire({
    title:'❌Cancelled❌',
    imageUrl:'https://i.pinimg.com/originals/c7/eb/5b/c7eb5bbae52025b4d2ad9b8224022bd4.gif',
    imageWidth: 400,
    imageHeight: 200,
    timer:2000
  })
}
    })
  }
 

 return(
    <main>
      <section className='container'>   
      <div onClick={mobile}class="hamburger">
        <span class="layer" id="layer1"></span>
        <span  class="layer" id="layer2"></span>
        <span  class="layer" id="layer3"></span>
        </div>
        <h3 id="h3-title"> Top {people.length} Developers Of the Week</h3>
        <div id="box-svg">
        {/*<h2 id="box-title">N-Devs</h2>*/}
        <div class="glitch" data-text="Neutron">Nation</div> 
        </div>
        <img onClick={refresh} id="react-svg"src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"></img>
        <Information text={text}/>
        <a href="https://github.com/user/repo" target="_blank" id="fork-corner" class="fork-corner fc-pos-tr fc-animate fc-theme-git"></a>
        <List people={people} />
        <button class="hide" id="buttona" onClick={hide}>Click Me</button>
        <button id="buttonb" onClick={hideMobile}>Click Me</button>
      </section>
      <div id="box"></div>
<img id="html" src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png' class="lang"></img>
<img id="css" src='https://coryrylan.com/assets/images/posts/types/css.svg'  class="lang"></img>
<img id="scss" src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png'  class="lang"></img>
<img id="js" src='https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png' class="lang"></img>
<img id="react" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'  class="lang"></img>
<img id="vm" src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Vmware_workstation_16_icon.svg/1026px-Vmware_workstation_16_icon.svg.png'  class="lang"></img>
<img id="vbox" src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Virtualbox_logo.png/200px-Virtualbox_logo.png'  class="lang"></img>


  <div id="main-info">
        <h2 id="group">Discord</h2>
        <img id="discord" src="https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/discord-512.png"></img>
        <div id="side-info">
            <div id="first">
<h3 id="neutron-nation" class="dtitle">Neutron Nation</h3>
<img id="first-group" src=""></img>
<p id="discordp1" class="discordp">Neutron Nation is a discord server which it's main topic is about softwares, hardwares and pretty much building stuff and knowing the architecture of a computer.</p>
<button id="discordl1" class="discordl"><a href="#">Join Neutron Nation</a></button>
</div>
<div id="second">
<h3 id="void" class="dtitle">VVm9pZA==</h3>
<img id="second-group"></img>
<p id="discordp2" class="discordp">
VVm9pZA== or also known as void is originally my discord server, i made this server because i would like to meet innovative minds and also try learn from other people's opinion on technology and opensource.
</p>
<button id="discordl2" class="discordl"><a href="#">Join VVm9pZA==</a></button>
</div>
<div id="third">
<h3 id="sololearn" class="dtitle">Solo Learn</h3>
<img id="third-group"></img>
<p id="discordp2" class="discordp">
Solo Learn is an app with a big community for developers. It implements learning the fundamentals of a programming language, it also has Machine Learning and Data Structures and Algorithms. 
</p>
<button id="discordl3" class="discordl"><a href="#">Join Solo Learn</a></button>
</div>
        </div>
        </div>
    </main>
  );
}

export default App;
