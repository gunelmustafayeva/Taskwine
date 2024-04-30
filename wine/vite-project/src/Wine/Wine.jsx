import './Wine.css'


function Wine(props){
    return (
        <>
        <div className='winekomp'>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <p>{props.rating}</p>
        </div>
        </>
      
    );
};


export default Wine