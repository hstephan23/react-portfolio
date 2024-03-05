export default function Resume() {
    return (
      <div>
        <h1 className="title-center">Resume</h1>
        <p className="download-paragraph"><a href="src/assets/Resume.docx" className="download" download>Download Harrison's Resume</a></p>
        <section id="main_resume">
            <section id="education">
                <h2 className="title" id="education-title">EDUCATION</h2>
                <section className="subtext">
                    <p><b>Brigham Young University: Aug 2019 to Present</b></p>
                    <p><em>Bachelor of General Studies, Emphasis in Business Management</em></p>
                    <p><em>Minor in Chemistry</em></p>
                    <ul>
                        <li>GPA 3.62</li>
                        <li>Half-Tuition Scholarship with National Merit</li>
                        <li>Program Director for the Boys and Girls Club</li>
                    </ul>
                </section>
            </section>
            <section id="experience">
                <h2 className="title" id="experience-title">EXPERIENCE</h2>
                <section className="subtext">
                    <p><b>Flextechs: May 2023 to Nov 2023</b></p>
                    <p><em>End User Support Specialist</em></p>
                    <ul>
                        <li>Configured various devices for the deployment and use by St. Luke's employees</li>
                        <li>Learned how to troubleshoot to get users back up and running</li>
                        <li>Learned to work quicklyl and efficiently, as was necessary for the job</li>
                    </ul>
                    <br />
                    <p><b>Brigham Young University: Aug 2020 to Dec 2022</b></p>
                    <p><em>Teaching Assistant</em></p>
                    <ul>
                        <li>Led sections of students each semester in a guided review, helping with concepts that were confusing</li>
                        <li>Gave 10 exam reviews, to about 100 students each time. This resulted in higher test scores than average</li>
                        <li>Created 4 exam keys for exams, giving the professor more time to focus on the students</li>
                    </ul>
                    <br />
                    <p><b>Brigham Young University: Oct 2021 to Aug 2022</b></p>
                    <p><em>Research Assistant</em></p>
                    <ul>
                        <li>Synthesized 5 various crystal structures that generated desired light</li>
                        <li>Learned from my peers how to successfully perform experiments</li>
                        <li>Demonstrated critical thinking by learning from the mistakes I made during the synthesis of a crystal</li>
                    </ul>
                </section>
            </section>
            <section id="volunteer">
                <h2 className="title" id="volunteer-title">VOLUNTEER EXPERIENCE</h2>
                <section className="subtext">
                    <p><b>Non-Profit Organization: Jun 2018 to Apr 2019</b></p>
                    <p><em>Full-Time Service</em></p>
                    <ul>
                        <li>Helped to train an individual in learning the Filipino language (Tagalog)</li>
                        <li>Performed in a choir for 8 religious leaders, strengthening the bonds between groups</li>
                        <li>Learned the Tagalog language</li>
                    </ul>
                </section>
            </section>
            <section id="skills">
                <h2 className="title" id="skills-title">SKILLS</h2>
                <section className="subtext">
                    <ul>
                        <li>Fluent in Tagalog</li>
                        <li>HTML, CSS, Bootstrap</li>
                        <li>Javascript</li>
                        <li>Python</li>
                        <li>Visual Basics for Applications (VBA) Programming in Excel</li>
                        <li>Flow Chart Diagramming</li>
                        <li>Structured Query Language (SQL)</li>
                        <li>Database Design Development</li>
                        <li>Published in the ACS Photonics Journal</li>
                        <li>Tableau</li>
                        <li>React</li>
                        <li>MongoDB</li>
                    </ul>
                </section>
            </section>
        </section>
      </div>
    );
  }