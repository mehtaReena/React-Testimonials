import User from './Users';

function Slide(props) {

    let name=User[props.id].name.first + " " +User[props.id].name.last ;
    let photo=User[props.id].picture.large;
    let jobTitle= User[props.id].title;
    let text='Lorem ipsum dolor sit amet consectetur adipisicing elit. At nesciunt'+
        'vero dolore ab  est, illum cupiditate tenetur aut provident necessitatibus' ;
         
   


    return (

        <div className='slide'>
         <div className='imageBox'>   
        <img src={photo} alt="" ></img>
        </div>
        <div className='user-info'>
            
            <h2>{name}   </h2>
            <h2>{jobTitle}   </h2>
            <p>{text} </p>

        </div>
    </div>
    )

}
export default Slide;