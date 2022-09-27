import MotionHoc from "../higher order components/MotionHoc"
import "./experience.scss"

const Experience = () => {
    return (

        <section className="experience">
            <h1>Experience</h1>

            <div>
                <h2><strong>Code Sensei</strong></h2>
                <h3>June 2021 - Jan 2022</h3>
                <p>At <strong>Code Ninjas</strong>, I had the pleasure of working with students ages 4 - 15 in learning how to code using <strong>JavaScript</strong>, <strong>C#</strong> and <strong>Lua</strong>. 
                    I assisted students in their coding journey of implementing the curriculum to their games and creations, by teaching them 
                    the concepts in a simple and effective approach.</p>
            </div>

            <div>
                <h2><strong>Book Buddy Volunteer</strong></h2>
                <h3>Jan 2021 - Sept 2021</h3>
                <p>I volunteered for the <strong>Book Buddy Program</strong> at <strong>Windsor Public Library</strong>, which is dedicated to helping children with reading difficulties improve themselves.
                I formed a close bond with my buddy, and together we made a great team.</p>
            </div>

            <div>
                <h2><strong>Graphic Designer</strong></h2>
                <h3>June 2020 - Dec 2020</h3>
                <p><strong>The Invincible Quill Magazine</strong> was a literary magazine run by a passionate team of <strong>editors</strong>, <strong>writers</strong>, and <strong>graphic designers</strong>. I joined the team as a graphic designer, and created
                beautiful pieces for the magazine issues that released every month. I diligently worked on my tasks whilst applying constructive feedback to improve upon my design.</p>
            </div>
            <br></br>

        </section>

    )
}

const ExperienceComponent = MotionHoc(Experience)

export default ExperienceComponent