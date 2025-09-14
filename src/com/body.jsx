import React, { useEffect, useState } from "react";

import s1 from '../assets/s1.png'
import s3 from '../assets/s3.png'
import s21 from '../assets/s2_1.png'
import s22 from '../assets/s2_2.png'
import s23 from '../assets/s2_3.png'
import s24 from '../assets/s2_4.png'
import s4 from '../assets/s4.png'
import s51 from '../assets/s51.png'
import s52 from '../assets/s52.png'
import s53 from '../assets/s53.png'
import ar from '../assets/uparo.png'
import clk from '../assets/clock.png'

import s2n1 from '../assets/S4/Group (1).png'
import s2n2 from '../assets/S4/Group 35667.png'
import s2n3 from '../assets/S4/Group.png'
import s2n4 from '../assets/S4/icon-park-outline_market-analysis.png'
import s2n5 from '../assets/S4/lsicon_report-outline.png'
import s2n6 from '../assets/S4/material-symbols_group.png'
import s2n7 from '../assets/S4/octicon_ai-model-24.png'
import s2n8 from '../assets/S4/Vector.png'
// bottom
import li from '../assets/bootem/image 65 (1).png'
import b1 from '../assets/bootem/Vector (1).png'
import b2 from '../assets/bootem/Vector (2).png'
import b3 from '../assets/bootem/Vector (4).png'
import b4 from '../assets/bootem/Vector (3).png'
import b5 from '../assets/bootem/Group (2).png'
import bp from '../assets/bootem/Frame 309.png'

function Hero() {

    return (
        <>
            <div className="hero-1">
                <div className="section1 selectedt">
                    <div style={{ width: '100%' }}>
                        <div>

                            <h1>Business Plans</h1>
                            <h1 style={{ color: '#4FC3DD' }}>for Investors</h1>
                        </div>
                        <p>Tailored, professional business plans for SBA loans, startups, and growth-stage companies.</p>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <button className="bluebutton">Start your Plan</button>
                            <button className="whitebutton">Learn More</button>
                        </div>
                    </div>
                    <img src={s1} style={{ height: '44%' }}></img>
                </div>
                <div className="section2">
                    <h1>Services</h1>
                    <div className="cards">
                        <div className="card">
                            <img src={s21}></img>
                            <h3>Pre-Planning</h3>
                            <p>Thorough pre-planning helps avoid resource-draining hurdles, unplanned delays, and cost overruns.</p>
                            <button className="blackbutton">Learn More</button>
                        </div>
                        <div className="card">
                            <img src={s22}></img>
                            <h3>Planning</h3>
                            <p>Most entrepreneurs start with planning because it's easy, but this approach is flawed and must shift for real success.</p>
                            <button className="blackbutton">Learn More</button>
                        </div>
                        <div className="card">
                            <img src={s23}></img>
                            <h3>Post-Planning</h3>
                            <p>Post-planning helps you assess local economic trends and build networks to shape strong business strategies.</p>
                            <button className="blackbutton">Learn More</button>
                        </div>
                        <div className="card">
                            <img src={s24}></img>
                            <h3>Investor Pitch</h3>
                            <p>With top analysts, expert consultants, and a vast report repository, we provide consulting services worldwide.</p>
                            <button className="blackbutton">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="section3 selectedt">
                    <div style={{ width: '100%', marginRight: 'auto' }}>
                        <h1 style={{ margin: '0 auto' }}>Industries We Serve</h1>
                        <p style={{ maxWidth: '500px' }}>We specialize in creating customized business plans for a wide range of industries. Whether you're in food, retail, healthcare, or tech — we craft strategies tailored to your market, ensuring your business stands out and succeeds.</p>
                        <button className="bluebutton">See all Industries</button>
                    </div>
                    <img src={s3} style={{ height: '400px' }}></img>
                </div>
            </div>
            <Section2></Section2>
        </>
    );
}
export function Section2() {
    return (<>

        <div className="section2-n">
            <h1>Products</h1>
            <div>
                <div className="grid_crd">
                    <div className="gcard">
                        <img src={s2n4}></img>
                        <div>
                            <b>Market Research & Opportunity Analysis</b>
                            <p>Unlock actionable insights with our MROAR reports—identify the most feasible and sustainable market opportunities to guide your next big move.</p>
                        </div>
                    </div>
                    <div className="gcard">
                        <img src={s2n2}></img>
                        <div>
                            <b>Project Profile</b>
                            <p>A great product alone won’t guarantee success. We help define your project’s identity and direction to set the foundation for a thriving business.</p>
                        </div>
                    </div>
                    <div className="gcard">
                        <img src={s2n3}></img>
                        <div>
                            <b>Business Plans</b>
                            <p>A roadmap to your business future. Our plans outline your vision, goals, and strategies in a compelling, investor-ready format.</p>
                        </div>
                    </div>
                    <div className="gcard">
                        <img src={s2n7}></img>
                        <div>
                            <b>Business Modelling</b>
                            <p>Build a strong foundation with strategic models that set your brand apart and drive lasting success.</p>
                        </div>
                    </div>
                    <div className="gcard">
                        <img src={s2n1}></img>
                        <div>
                            <b>Business Feasibility Study</b>
                            <p>Evaluate the viability of your business idea with in-depth feasibility reports that assess risk, potential, and impact—before you invest time and money.</p>
                        </div>
                    </div>
                    <div className="gcard">
                        <img src={s2n5}></img>
                        <div>
                            <b>Detailed Project Report</b>
                            <p>Tell the full story of your business. Our DPRs detail your objectives, execution plan, and financials—perfect for stakeholders and funding proposals.</p>
                        </div>
                    </div>
                    <div className="gcard">
                        <img src={s2n6}></img>
                        <div>
                            <b>Investment Pitch</b>
                            <p>Have a great idea? We turn it into a persuasive pitch deck that grabs investor attention and secures funding.</p>
                        </div>
                    </div>
                    <div className="gcard">
                        <img src={s2n8}></img>
                        <div>
                            <b>Sales & Marketing</b>
                            <p>Success isn’t just about a good product. We craft sales and marketing strategies that reach the right audience and fuel growth.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="section4 ">
            <div style={{marginRight: 'auto'}}>

                <div style={{ marginRight: 'auto' }}>
                    <h1>About Meticulous Business Plans</h1>
                    <p style={{maxWidth:'500px'}}>As the saying goes “A Planned Fool will always defeat the unplanned wise” plan your business by the best reports provided by us. Being the best organization for generating effective business reports, we are confined to the success of our brands. At MBP we take the huge responsibility of analyzing the brands keenly at every stage of development ranging from pre-launch to the post-launch of the brands.</p>
                    <button className="bluebutton">Learn More</button>
                </div>
            </div><img src={s4} style={{ width: '38%' }}></img>

        </div>
        <div className="section5">
            <h1>Latest News</h1>

            <div>
                <div className="s4crds">
                    <div className="s4crd">
                        <img src={s53}></img>
                        <b>INDONESIA – Business Opportunities and Market Analysis</b>
                        <p>Our expert team has studied Indonesia based upon changing market trends, demand & supply of...</p>
                        <div className="s4_bootom">
                            <button style={{ display: 'flex', alignItems: 'center', gap: '5px', marginRight: 'auto' }}>Read More <img src={ar} style={{ height: '14px', width: '14px' }}></img></button>
                            <div className="date"><img style={{ height: '18px', width: '18px' }} src={clk}></img> 5 Apr 2025</div>
                        </div>
                    </div>
                    <div className="s4crd">
                        <img src={s51}></img>
                        <b>NEW YORK Startup Business Investment Opportunities</b>
                        <p>Our expert team has studied New York state based upon changing market trends, demand &...</p>
                        <div className="s4_bootom">
                            <button style={{ display: 'flex', alignItems: 'center', gap: '5px', marginRight: 'auto' }}>Read More <img src={ar} style={{ height: '14px', width: '14px' }}></img></button>
                            <div className="date"><img style={{ height: '18px', width: '18px' }} src={clk}></img> 5 Apr 2025</div>
                        </div>
                    </div>
                    <div className="s4crd">
                        <img src={s52}></img>
                        <b>NEW JERSEY Business Investment Opportunities</b>
                        <p>Market Research & Opportunity Analysis Report – New Jersey. Our expert team has studied New...</p>
                        <div className="s4_bootom">
                            <button style={{ display: 'flex', alignItems: 'center', gap: '5px', marginRight: 'auto' }}>Read More <img src={ar} style={{ height: '14px', width: '14px' }}></img></button>
                            <div className="date"><img style={{ height: '18px', width: '18px' }} src={clk}></img> 5 Apr 2025</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className="section6">
            <div className="section6-cont">
                <div className="topsection">
                    <div className="left">

                        <img src={li}></img>
                        <div style={{ gap: '40px', display: 'flex', marginTop: '69px' }}>
                           <img style={{ height: '20px' }} src={b1}></img>
                            <img style={{ height: '20px' }} src={b2}></img>
                            <img style={{ height: '20px' }} src={b3}></img>
                            <img style={{ height: '20px' }} src={b4}></img>
                            <img style={{ height: '20px' }} src={b5}></img>
                            {/* <img src=""></img> */}
                        </div>

                    </div>
                    <div className="right">
                        <p>Want to receive amazing updates on ideas and business plans?</p>
                        <input placeholder="Email Id"></input>
                        <button style={{border:'none',backgroundColor:'#4FC3DD',padding:'10px 40px',marginTop:'20px',width:'95%'}}>Subscribe</button>
                    </div>
                </div>
                <div className="topsection f1">
                    <div className="about">
                        <h3>Quick Links</h3>
                        <label>Home</label>
                        <label>Services</label>
                        <label>Pricing</label>
                        <label>Industries</label>
                        <label>Blog</label>
                        <label>Contact us</label>
                    </div>
                    <div className="about">
                        <h3>Company</h3>
                        <label>About Us</label>
                        <label>Careers</label>
                        <label>Help Center</label>
                        <label>Privacy Policy</label>
                        <label>Terms & Conditions</label>
                    </div>
                    <div className="about">
                        <h3>Our Services</h3>
                        <label>Market Research Reports</label>
                        <label>Business Feasibility Studies</label>
                        <label>Business Modelling</label>
                        <label>Detailed Project Reports</label>
                        <label>Investment Pitch Decks</label>
                    </div>
                </div>
                <hr></hr>
                <div style={{ display: 'flex' }} className="paymentinfo"><label style={{ color: 'white', marginRight: 'auto' }} >© 2025 Meticulous BPlans. All rights reserved.</label><img src={bp} style={{scale:'0.7'}}></img></div>
            </div>
        </div>

    </>);
}

// export default ;

export default Hero;