import React from "react" ; 

function Meme () {



    const [meme , setMeme] = React.useState({
        topText : "" , 
        bottomText : "" , 
        randomImage : "https://i.imgflip.com/43a45p.png"
    })

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then (data => setAllMemeImages(data))
    } , [])


    const [allMemeImages , setAllMemeImages] = React.useState()
 
    function memeImg () {
         const dataArr = allMemeImages.data.memes
         let num =  Math.floor(Math.random() * dataArr.length)
         let url = dataArr[num].url
         setMeme( prevMeme =>({
                ...prevMeme , 
                randomImage : url
         }) )

        }

    

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ( 
             {
                ...prevMeme , 
                [name] : value , 
            }
        ))
    }

    return ( 
        <main>
            <div className="form"  > 
            <div className="meme-input" > 

            <input typeof ="text" className="input-field" name="topText" value={meme.topText} onChange = {handleChange}>  
            </input>

            <input typeof ="text" className="input-field" name="bottomText" value={meme.bottomText} onChange = {handleChange}>
            </input>
            </div>
             <br></br>
            <div className="meme-output" >
            <button className="get-meme-Btn" onClick={memeImg}> Get a New Meme Image </button>
            </div>

                <div className="meme-div">  
                <img src = {meme.randomImage} alt = "" className="meme-poster" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
               
         </div> 
        </main>
    )
}

export default Meme ; 