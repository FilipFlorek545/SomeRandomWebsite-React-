import {Link, Heading, Button, SmallerHeading, Paragraph, Service, Specialist} from "./components/index";
import "./styles/App.css"
function App() {
return(
    <div id="container">
        <div id="top">
            <Link className='companyName' adress='#'>SomeRandomCompany</Link>
            <div id="top_sidebar">
                <Link className='top_nav' adress='#'>About Us</Link>
                <Link className='top_nav' adress='#'>Our Offer</Link>
                <Link className='top_nav' adress='#'>Contact</Link>
            </div>
        </div>
        <div className="container no_1">
            <Heading>Our company strives to offer you products of the best quality</Heading>
            <SmallerHeading>Don't take our word for it, check!</SmallerHeading>
            <Button>CHECK OUR DEALS</Button>
        </div>
        <div className="container no_2">
            <Heading className='specialist_heading'>Our Specialists</Heading>
            <div className="specialist_box">
                <Specialist specialist_class='specialist_bubble nr_1'/>
                <Paragraph className='specialist_desc desc_1'>
                    <b>Name Surname</b><br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit minus similique mollitia explicabo. Ratione quod delectus repellat rem cumque corporis saepe praesentium beatae mollitia aperiam!</Paragraph>
                <Paragraph className='specialist_desc desc_2'>
                    <b>Name Surname</b><br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptas cum dolor perspiciatis blanditiis nostrum repellat vitae quo, quis amet ad veritatis id! Doloremque, cum.</Paragraph>
                <Specialist specialist_class='specialist_bubble nr_2'/>
            </div>
        </div>
        <div className="container no_3">
            <Heading className='heading_no_3'>What can our company do for you?</Heading>
            <div className="servicebox">
                <Service>Service</Service>
                <Service>Service</Service>
                <Service>Service</Service>
                <Service>Service</Service>
                <Service>Service</Service>
                <Service>Service</Service>
            </div>
        </div>
        <div id="footer">
            <Paragraph>SomeRandomCompany™ - all rights reserved, 2021</Paragraph>
                <div id="socials">
                    <Link adress='#' className='fa fa-facebook'></Link>
                    <Link adress='#' className='fa fa-instagram'></Link>
                </div>
            </div>  
        </div>
)
}

export default App;
