import Header from "../(components)/header/Header";
import ImageCard from "../(components)/imageCard/imageCard";
import TextCard from "../(components)/textCard/textCard";


const Courses = () => {
    return (
        <>
            <Header  title="our courses"/>
             <section className="course">
        <h1>Course We Offer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
            <TextCard heading="Undergraduate Programs"/>
            <TextCard heading="Graduate Programs"/>
            <TextCard heading="Adult Learning & Degree Completion"/>
        </div>
    </section>

    <section class="facilities">
        <h1>Best Courses</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div class="row">
            <ImageCard title="Web Development" pic="/img/course1.png" />
            <ImageCard title="Artificial Intelligence" pic="/img/course2.png" />
            <ImageCard title="Data Science" pic="/img/course3.png" />
        </div>
    </section>
        </>
    );
}

export default Courses;
