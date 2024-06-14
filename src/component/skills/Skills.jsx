import React from 'react';
import "./Skills.scss"


const Skills = () => {
    return (
        <div className='skills-container'>
            <div className="top" data-aos="fade-right"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine">
                <div>
                    <h3><span>#</span>Skills</h3>
                    <div className='line'></div>
                </div>
            </div>
            <div className="bottom" data-aos="fade-left">
                <div className="shapes">
                    <img src="./images/skills.png" alt="" />
                </div>
                <div className="content">
                    <div className="item first">
                        <h4>Languages</h4>
                        <p><span className='important'>#<span>JavaScript</span></span> <span className='important'>#<span>HTML5</span></span> <span className='important'>#<span>TypeScript</span></span> <span className='important'>#<span>CSS3</span></span> SQL Java Pascal Python C C++ C#</p>
                    </div>
                    <div className="item second">
                        <h4>Front-End Frameworks & Libraries</h4>
                        <p><span className='important'>#<span>React-Js</span></span> <span className='important'>#<span>Next-Js</span></span> <span className='important'>#<span>Sass-CSS</span></span> <span className='important'>#<span>Tailwind-Css</span></span></p>
                    </div>
                    <div className="item third">
                        <h4>Back-End Frameworks & Libraries</h4>
                        <p><span className='important'>#<span>Express-Js</span></span> <span className='important'>#<span>Node-Js</span></span> <span className='important'>#<span>Mongodb</span></span></p>
                    </div>
                    <div className="item fourth">
                        <h4>DataBases</h4>
                        <p><span className='important'>#<span>MongoDb</span></span> MySQL</p>
                    </div>
                    <div className="item fifth">
                        <h4>Tools</h4>
                        <p><span className='important'>#<span>Git</span></span> <span className='important'>#<span>GitHub</span></span> <span className='important'>#<span>VS-code</span></span> <span className='important'>#<span>Figma</span></span> <span className='important'>#<span>Vercel</span></span> Netlify</p>
                    </div>
                    <div className="item sixth">
                        <h4>Others</h4>
                        <p><span className='important'>#<span>Redux</span></span> <span className='important'>#<span>Material-UI</span></span> <span className='important'>#<span>Mantine</span></span> Framer-Motion</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
