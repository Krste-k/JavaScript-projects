let cssLink = document.createElement('link');
cssLink.rel = 'stylesheet';
cssLink.href = './Css/style.css'
document.head.appendChild(cssLink);

document.addEventListener('DOMContentLoaded', function () {
    var textElement = document.getElementsByTagNameNS('p');
    var textContent = textElement.textContent;
    var newText = textContent
        .split('')
        .map(function (letter) {
            return '<span>' + letter + '</span>';
        })
        .join('');

    textElement.innerHTML = newText;
});

let newElement = document.createElement('div');

newElement.classList = "newElement";

let body = document.querySelector('body').appendChild(newElement);

newElement.innerHTML = `<div class="print-area">
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
        <br>
            <h1>SKILLS</h1>
            <div class="bars">
                <div class="bar">
                    <p>HTML/CSS</p>
                    <span></span>
                </div>
                <div class="bar">
                    <p>BOOTSTRAP</p>
                    <span></span>
                </div>
                <div class="bar">
                    <p>jQuery</p>
                    <span></span>
                </div>
                <div class="bar">
                    <p>JAVASCRIPT</p>
                    <span></span>
                </div>
                <div class="bar">
                    <p>REACT</p>
                    <span></span>
                </div>
                <div class="bar">
                    <p>ANGULAR</p>
                    <span></span>
                </div>
                <div class="bar">
                    <p>C#</p>
                    <span></span>
                </div>
                <div class="bar">
                    <p>API</p>
                    <span></span>
                </div>
                <div class="bar">
                    <p>MVC</p>
                    <span></span>
                </div>
                <div class="bar">
                    <p>SQL</p>
                    <span></span>
                </div>
                <div class="bar">
                    <p>Git / Github</p>
                    <span></span>
                </div>
                <div class="bar">
                
                    <p>Leadership</p>
                    <span></span>
                </div>
                <div class="bar">
                    <p>Project management</p>
                    <span></span>
                </div>
                <div class="bar">
                <p>Googling</p>
                <span></span>
            </div>
            
            </div>
        </div>
        <br>
        <div class="follow">
            <h4>Social Network</h4>
            <br>  
            <a href="https://github.com/Krste-k"><img src="./src/Github.png" alt="github logo"></a>
        </div>
        <br>
        <br>
        <img src="./src/download.jpg" width=300 height=180 alt="Linkedin logo">
    </div>

    <div class="right-area">
        <div class="about">
            <h1><span><i class=""><img src="./src/Me.png" width="70" height="70"></i>
                </span>ABOUT ME</h1>
            <p>
            Results-driven leader with 11 years of experience, currently excelling as a Supervisor Assistant at Vanhool Macedonia,
             overseeing a team of 400 employees, including 5 foremen, 21 team leaders, and 6 specialists. 
             Proven track record in operational efficiency, training, and fostering positive work environments. 
             Eager to pivot into a dynamic career in programming, leveraging strong analytical and problem-solving skills developed through leadership roles. 
             Seeking opportunities to apply my diverse skill set and contribute to innovative projects within the programming field.
            </p>
        </div>
        <div class="work">
            <h1><span><img src="./src/images.jpg" width="70" height="70" alt="">
            </span> WORK EXPERIENCE </h1>
            <div class="work-group">
                <h3>ASSISTANT SUPERVISOR</h3>
                <h4>VANHOOL MACEDONIA</h4>
                <span>2023/now</span>
                <p>
                Currently, I play a key role as a Supervisor Assistant, overseeing a team of 400 individuals to achieve our departmental goals.
                 Responsible for the supervision of 407 employees, including 5 foremen, 21 team leaders, and 6 specialists.
                 I work closely with the supervisor to ensure day-to-day operations run smoothly and meet high-quality standards.
                 One of my key responsibilities involves conducting training sessions to enhance the skills of team members,
                 contributing to their professional development. I've been instrumental in analyzing and improving workflow processes,
                 resulting in a increase in overall efficiency. Acting as a liaison between frontline staff and upper management,
                 I facilitate effective communication to ensure everyone is aligned with our objectives.
                
                       </p>
            </div>
            <div class="work-group">
                <h3>TEAM LEADER</h3>
                <h4>VANHOOL MACEDONIA</h4>
                <span>2013/2023</span>
                <p>In my previous role as a Team Leader, I successfully managed a team of 20 employees. 
                I provided guidance and mentorship to ensure optimal performance and fostered a positive and collaborative work environment.
                Through the implementation of strategic initiatives ,
                showcasing my ability to drive positive change within the team.
                Regular performance evaluations were a part of my responsibilities, 
                and I consistently provided constructive feedback for continuous improvement.
                </p>
            </div>
            <div class="work-group">
                <h3>CNC OPERATOR</h3>
                <h4>DI PORTE</h4>
                <span>2010/2013</span>
               <p>
                Directly involved in the programming, set-up, and operation of CNC machines.
                Study blueprints, materials, and production plans prior to machining.
                Translate blueprints and drawings into dimensions for production.               
                </p>
            </div>
        </div>
        <div class="education">
            <h1><span><img src="./src/Edu.png" width="70" height="70" alt="">
            </span>EDUCATION</h1>
            <div class="edu-group">
                <h4>SUGS Georgi Dimitrov
                    <br>
                    Wood Tehnican
                </h4>
                <span>2004/2008</span>
            </div>
            <div class="edu-group">
                <h4>University "St. Kiril and Metodi"
                <br>
                Faculty of Forestry
                </h4>
                <span>2009/</span>
            </div>
              <div class="edu-group">
                <h4>Seavus Education & Development Center
                <br>
                Academy for programming and web development
                </h4>
                <span>2022/2023</span>
            </div>              
        </div>

    </div>
</div>
</div>`

function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle('dark-mode');
}

var container = document.getElementById('dark');
container.addEventListener('click', toggleDarkMode);


