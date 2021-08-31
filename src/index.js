//import react dom

import ReactDOM from"react-dom"
//creat App component-function


function App() {
    const style = {
        backgroundColor : "brown",
        color : "Wheat",
    };
    

    const buttonText="Send";
    const labelText="Your username";
    
    
    return (
        
        <div>
            <h1>My first React project</h1>
            <label htmlFor="name" className="label-class">{labelText}</label>
            <input id="name" type="text"></input>
            <button style={style}>{buttonText}</button>
            <ul className="test-list">
                <li>Animals</li>
                <li>Books</li>
                <li>Music</li>
                <li>Traveling</li>
            </ul>
            <h2>Demons</h2>
            <h4>Imagine Dragons</h4>
            <article>When the days are cold and the cards all fold
                <br/>
                And the saints we see are all made of gold
                <br/>
                When your dreams all fail and the ones we hail
                <br/>
                Are the worst of all, and the blood's run stale
                <br/>
                <br/>
                I wanna hide the truth, I wanna shelter you
                <br/>
                But with the beast inside, there's nowhere we can hide
                <br/>
                No matter what we breed, we still are made of greed
                <br/>
                This is my kingdom come, this is my kingdom come
                
            </article>
            
        </div>
        
    );
    
}


//render on html document
ReactDOM.render (<App/>,document.querySelector("#root"));