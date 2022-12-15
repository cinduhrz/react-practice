function Heading(props){

    console.log(props)

    const jsx = <h2>Goodbye World</h2>

    // now props.cheese and props.bread changes depending on the properties passed to the instance of the component
    return <> <h1>{props.cheese}</h1> {jsx} {'hiii'} {props.bread} </>
  }


// same as module.exports = heading
// but thats created by node^, you have to use
// the javascript standard which is ESmodules
export default Heading