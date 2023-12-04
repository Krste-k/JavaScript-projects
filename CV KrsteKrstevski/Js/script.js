let cssLink = document.createElement('link');
cssLink.rel ='stylesheet';
cssLink.href = './Css/style.css'
document.head.appendChild(cssLink);

let newEl = document.createElement('div');
newEl.classList = "newElement";
console.log(newEl);
let body = document.querySelector('body').appendChild(newEl);


newEl.innerHTML = `<div class="print-area">
<div class="header">
    <img src="./src/CV.jpg" alt="">
    <div class="header-text">
        <h1>Krste Krstevski</h1>
    </div>
</div>
<div class="content">
    <div class="left-area">
        <div class="contact">
            <h4>Contact</h4>
            <h5>Phone</h5>
            <p>078 856-177</p>
            <h5>Email</h5>
            <p>krstevskikrste89@yahoo.com</p>
            <h5>Home</h5>
            <p>Ulica 2 br35 jurumleri Skopje</p>
        </div>
        <div class="skills">
            <h1>SKILLS</h1>
            <div class="bars">
                <div class="bar">
                    <p>HTML</p>
                    <span></span>
                </div>
                <div id="ht" class="bar">
                    <p>CSS</p>
                    <span></span>
                </div>
                <div id="ht" class="bar">
                    <p>JAVASCRIPT</p>
                    <span></span>
                </div>
                <div class="bar">
                    <p>BUTSTRAP</p>
                    <span></span>
                </div>
                <div class="bar">
                    <p>.NET</p>
                    <span></span>
                </div>
                <div class="bar">
                    <p>SQL</p>
                    <span></span>
                </div>
                <div class="bar">
                    <p>EXCEL</p>
                    <span></span>
                </div>
                <div class="bar">
                    <p>WORD</p>
                    <span></span>
                </div>
                <div id="ht" class="bar">
                    <p>AI TOOLS</p>
                    <span></span>
                </div>
                <div id="ht" class="bar">
                    <p>WINDOWS</p>
                    <span></span>
                </div>

            </div>
        </div>
        <div class="follow">
            <h1>FOLLOW ME</h1>
            <h4>Facebook</h4>
            <p>facebook.com/krste/krstevski</p>
            <h4>INSTAGRAM</h4>
            <p>instagram.com/krste/krstevski</p>
            <h4>tweeter</h4>
            <p>twetter.com/krste/krstevski</p>
            <h4>git hub</h4>
            <p>github.com/krste/krstevski</p>
        </div>
    </div>

    <div class="right-area">
        <div class="about">
            <h1><span><i class=""><img src="./src/Me.png" width="70" height="70"></i>
                </span>ABOUT ME</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Rerum aspernatur vero earum corporis
                ratione quasi, saepe molestiae quaerat sunt id fugit 
                mollitia exercitationem quos fugiat!
                Officia iusto laudantium minus numquam 
                quae autem eius officiis, exercitationem rerum voluptates
            </p>
        </div>
        <div class="work">
            <h1><span><img src="./src/images.jpg" width="70" height="70" alt="">
            </span> WORK EXPERIENCE </h1>
            <div class="work-group">
                <h3>TEAM LEADER-TRAINER</h3>
                <h4>VANHOOL MACEDONIA</h4>
                <span>2023/now</span>
                <P>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Quod voluptate quam repellat sequi itaque alias dolores,
                      distinctio reprehenderit recusandae animi, fuga cupiditate
                       dolorum ad ratione aspernatur, sit quis cumque et!</P>
            </div>
            <div class="work-group">
                <h3>TEAM LEADER</h3>
                <h4>VANHOOL MACEDONIA</h4>
                <span>2013/2023</span>
                <ul>
                <li>vodenje na grupa</li>
                <li>proverka na kvalitet </li>
                <li></li>               
                </ul>
            </div>
            <div class="work-group">
                <h3>CNC OPERATOR</h3>
                <h4>DI PORTE</h4>
                <span>2010/2013</span>
                <ul>
                <li>Directly involved in the programming, set-up, and operation of CNC machines.</li>
                <li>Study blueprints, materials, and production plans prior to machining.</li>
                <li>Translate blueprints and drawings into dimensions for production.</li>               
                </ul>
            </div>
        </div>
        <div class="education">
            <h1><span><img src="./src/Edu.png" width="70" height="70" alt="">
            </span>EDUCATION</h1>
            <div class="edu-group">
                <h4>ДСУ Георги Димитров
                    <br>
                    Техничар за финална обработка на дрво
                </h4>
                <span>2004/2008</span>
            </div>
            <div class="edu-group">
                <h4>Универзитет „Св. КИРИЛ И МЕТОДИЈ“ - Скопје</h4>
                <span>2009/</span>
            </div>
              <div class="edu-group">
                <h4>Seavus Education & Development Center</h4>
                <p>Full stack developer</p>
            </div>    
            <div class="edu-group">
                <h4>CompTIA A+</h4>
                <p>Certiificate for IT
                    
                </p>
            </div>           
        </div>

    </div>
</div>
</div>`


