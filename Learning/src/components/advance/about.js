import Dummy from "./reactCreate";
const About = () => {
    function Dummy2()
    {
        for (var i = 0; i < 5; i++) {
            var btn = document.createElement('button');
            btn.appendChild(document.createTextNode('Button ' + i));
            btn.addEventListener('click', function(){ console.log(i); });
            document.body.appendChild(btn);
        }
    }
    return ( <>
    <Dummy2/>
        <Dummy name="Anil"/>
    <p>Testing text</p>
    <p>Testing text</p>
    <p>Testing text</p>
    <p>Testing text</p>
    <p>Testing text</p>
    <p>Testing text</p>
    <p>Testing text</p>
    <p>Testing text</p>
    <p>Testing text</p>
    <p>Testing text</p>
    <p>Testing text</p>
    <p>Testing text</p>
    <p>Testing text</p>
    <p>Testing text</p>
    <p>Testing text</p>
    <p>Testing text</p>
    <p>Testing text</p>
    <p>Testing text</p>

    </> );
}
 
export default About;