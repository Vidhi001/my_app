import React , {useEffect, useState} from 'react';
import "./WatchCard.css"
// import * as style from "./WatchCard.module.css"


export default function WatchCard(props) {
  // let {watch_img} = props.watch_img;
  // let {prevRef} = props1.prevRef;
  const [style, setStyle] = useState(0);
  // props.watch_img.img_state = true;

  const [id, setId] = useState(0);
  // props.watch_img.img_state = true;
  // const prevRef = 0;
  // console.log(props.prevRef);

  useEffect(()=>{
    if (props.watch_img.img_state){
      // setState(true);
      setStyle("selected");
    }
    else {
      // setState(false);
      setStyle("not_selected");
    }
  },[props.watch_img.img_state])


  // console.log(prevRef.current,id)

  // useEffect(() => {
  //   prevRef.current = props.watch_img.id;
  // }, [props.watch_img.id]);

  // const MakeFalse = () =>{

  // }

  const imageClick = () => {
    // setStyle("not_selected");
    setId(props.watch_img.id);
    // console.log(prevRef.current);
    // watch_img.img_state = true;
    setStyle("selected");
    props.watch_img.img_state = true;
    // prevRef = watch_img.id;
  }   
  
  console.log(props.watch_img);
  
  return (
    <img src={props.watch_img.imageUrl} alt = {props.watch_img.styleName}className={style} onClick={imageClick}/>
  );

}
