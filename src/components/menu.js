

export default function Menu(){

    function handleClick(){
        
    }

    return(
        <div className="menu">
            <input className='search' placeholder='search....'></input>
          <button className='btn' onClick={(e)=>handleClick()}>+ Nueva nota</button>
        </div>
    )
}