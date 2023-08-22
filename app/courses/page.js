import Header from "../(components)/header/Header";
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
        </>
    );
}

export default Courses;
