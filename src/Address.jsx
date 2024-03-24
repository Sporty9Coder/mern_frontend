import Contact from "./Contact";

function Address()
{
    return (
        <p>
        <hr/>
        <h1>Ganesh Nagar Bti</h1>
        <i>punjab india</i>
        <hr/>
        {Contact()}
        <Contact/>
        </p>
    )
}

export default Address;