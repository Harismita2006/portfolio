import React from "react";

const Portfolio = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      {/* Header */}
      <table id="header" border="0" width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: "#4CAF50" }}>
        <tbody>
          <tr>
            <td>
              <table border="0" cellPadding="15" cellSpacing="0" width="90%" align="center">
                <tbody>
                  <tr>
                    <td></td>
                    <td>
                      <font face="Comic sans MS" size="6" color="white">
                        <b>HARISMITA BALAKRISHNAN</b>
                      </font>
                    </td>
                    <td width="15%"></td>
                    <td>
                      <a href="#home" style={{ textDecoration: "none", color: "white" }}>
                        <font face="Verdana" size="5">
                          Home
                        </font>
                      </a>
                    </td>
                    <td>|</td>
                    <td>
                      <a href="#about" style={{ textDecoration: "none", color: "white" }}>
                        <font face="Verdana" size="5">
                          About
                        </font>
                      </a>
                    </td>
                    <td>|</td>
                    <td>
                      <a href="#projects" style={{ textDecoration: "none", color: "white" }}>
                        <font face="Verdana" size="5">
                          Projects
                        </font>
                      </a>
                    </td>
                    <td>|</td>
                    <td>
                      <a href="#achievements" style={{ textDecoration: "none", color: "white" }}>
                        <font face="Verdana" size="5">
                          Achievements
                        </font>
                      </a>
                    </td>
                    <td>|</td>
                    <td>
                      <a href="#contact" style={{ textDecoration: "none", color: "white" }}>
                        <font face="Verdana" size="5">
                          Contact
                        </font>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>

      {/* About Section */}
      <table id="about" border="0" width="100%" cellPadding="0" cellSpacing="0" bgcolor="black">
        <tbody>
          <tr>
            <td>
              <table border="0" cellPadding="15" cellSpacing="0" width="80%" align="center">
                <tbody>
                  <tr>
                    <td height="180" align="center" valign="middle" colSpan="2">
                      <font face="Verdana" size="7" color="#4CAF50">
                        About Me
                      </font>
                      <hr color="#4CAF50" width="90" />
                    </td>
                  </tr>
                  <tr>
                    <td width="40%">
                      <img src="/profile.jpg" alt="About Me" width="400px" />
                    </td>
                    <td width="60%">
                      <font face="Verdana" size="4" color="white">
                        Thanks for your interest, here is a quick introduction about me.
                        <hr color="black" />
                        I am HARISMITA. I completed my schooling in A.V.P trust national matric hr sec school, Tirupur. 
                        I am from a bio stream. I didn't know much about programming languages, but once I joined 
                        engineering, I started learning C from basics and practiced a lot. Now, C has become my 
                        favorite programming language. I am a beginner in Python.
                        <hr color="black" />
                        I do my work mainly in C-Language, C++ and JAVA. C++ and Data Structure & Algorithm are 
                        my stronger sections. Besides these, I know Web Development, LINUX, and database as well.
                        <hr color="black" />
                        This website is basically one of my Web Development projects which is built using React.
                        Thanks again for spending your valuable time.
                        <hr color="black" />
                      </font>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
{/* Projects Section */}
<section
  id="projects"
  style={{
    backgroundColor: "black",
    padding: "40px 0",
    textAlign: "center",
    color: "white",
    fontFamily: "Verdana",
  }}
>
  <h1 style={{ fontFamily: "Verdana", color: "#4CAF50" }}>Projects</h1>
  <hr style={{ border: "1px solid #4CAF50", width: "90px", margin: "10px auto" }} />

  <ul style={{ listStyleType: "none", padding: 0 }}>
    <li style={{ fontSize: "18px", fontWeight: "bold", margin: "10px 0" }}>
      Medhub - Web app for patients
    </li>
    <li style={{ fontSize: "18px", fontWeight: "bold", margin: "10px 0" }}>
      SkillSync - Educational web application
    </li>
    <li style={{ fontSize: "18px", fontWeight: "bold", margin: "10px 0" }}>
      Disease Prediction Using Machine Learning
    </li>
    <li style={{ fontSize: "18px", fontWeight: "bold", margin: "10px 0" }}>
      Smart Shoe for women's safety
    </li>
  </ul>
</section>

{/* Achievements Section */}
<section
  id="achievements"
  style={{
    backgroundColor: "black",
    padding: "40px 0",
    textAlign: "center",
    color: "white",
    fontFamily: "Verdana",
  }}
>
  <h1 style={{ fontFamily: "Verdana", color: "#4CAF50" }}>Achievements</h1>
  <hr style={{ border: "1px solid #4CAF50", width: "120px", margin: "10px auto" }} />

  <ul style={{ listStyleType: "none", padding: 0 }}>
    <li style={{ fontSize: "18px", fontWeight: "bold", margin: "10px 0" }}>
      Secured First Place in TechFusion Hackathon in PSG
    </li>
    <li style={{ fontSize: "18px", fontWeight: "bold", margin: "10px 0" }}>
      Secured Second Position in Technovista in Sri Eshwar
    </li>
    <li style={{ fontSize: "18px", fontWeight: "bold", margin: "10px 0" }}>
      Grabbed runner up in Zelos conducted in Kongu
    </li>
    <li style={{ fontSize: "18px", fontWeight: "bold", margin: "10px 0" }}>
      Top 6 in Prayukti in Bannari
    </li>
  </ul>
</section>

      
 {/* Contact Section */}
 <section id="contact" style={{ backgroundColor: "black", padding: "40px 0", color: "white" }}>
        <h1 style={{ color: "#4CAF50" }}>Contact</h1>
        <hr style={{ border: "1px solid #4CAF50", width: "90px", margin: "10px auto" }} />
        <p style={{ color: "#4CAF50" }}>Email: harismita.b2023ai-ds@sece.ac.in</p>
        <p>GitHub: <a href="https://github.com/Harismita2006" style={{ color: "#4CAF50" }}>github.com/harismita</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/harismita-b-ai-ds-8376992a8/" style={{ color: "#4CAF50" }}>linkedin.com/in/harismita</a></p>
      </section>

    </div>
  );
};

export default Portfolio;
