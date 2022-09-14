import Header from "./components/Header";

const App = () => {
    return (
        <>
        {/* the props passing here (bgcolor and textColor) could be used inside the component, putting it in the parameters */}
        {/* bgColor='green' textColor='yellow'  */}
        <Header /> 
        <div className="container">
            <h1>My App</h1>
        </div>
        </>
    )
}

export default App;