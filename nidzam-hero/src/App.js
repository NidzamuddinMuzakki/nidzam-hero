import React,{useState} from "react";


import img1 from './naruto1.jpg';
import img2 from './naruto2.jpg';
import Logo from './TIXID.png';
import Menu from './menu.png';

import './App.css'
import Slider from "react-slick";
import img3 from './naruto3.jpg';
import Draggable from 'react-draggable';
// zIndex:ind==indexNow?3:indexNow+1==ind || indexNow==images?.length-1 && ind==0?2:1, transform:indexNow?'':indexNow+1==ind || indexNow==images?.length-1 && ind==0?'rotateX(45deg)':'rotateX(-45deg)',
const images = [img1, img2, img3];
const juduls = ["PENGABDI SETAN 2","BULLET TRAIN","FREE FIRE"] 
function App() {
  const settings = {
    dots: false,
    autoplay:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const [indexNow, setIndexNow] = useState(1)
  const eventHandler = (e, data) => {
    console.log('Event Type', e.type);
    if(e.type=="touchend"){
      console.log({e, data});
      if(e.target.id!=indexNow){
        return
      }
      if(data.x<-100 || data.x>100){
        setTimeout(()=>{
          if(indexNow==2){
            setIndexNow(0)
          }else{
            setIndexNow(state=>state+1)
          }
        },400)
      }
      if(data.x<-100){
        e.target.parentNode.style.left = "-50%"
        setTimeout(()=>{
          e.target.parentNode.style.left = "0%"
        },300)
      }else  if(data.x>100){
        e.target.parentNode.style.left = "-50%"
        setTimeout(()=>{
          e.target.parentNode.style.left = "0%"
        },300)
      }
      e.target.parentNode.style.transition="0.4s"

    }else if(e.type=="touchstart"){
      e.target.parentNode.style.transition=""
    }
  }
  return (
    <div style={{margin:0, padding:0,background:'linear-gradient(white,white,rgba(0,0,0,0.3),rgba(0,0,0,0.1),white)',width:'100vw', height:'calc(100vh - 0px)', overflow:'hidden'}}>
        <div style={{position:'relative',overflow:'hidden',width:'100vw',height:'calc(100vh)'}}>
          <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",display:'flex',justifyContent:'space-between',width:'calc(100vw - 20px)',position:'relative',background:'white',top:0,padding:'15px 10px'}}>
              <div>
              <img style={{width:'30px'}} src={Menu}></img>
              </div>
              <div style={{marginLeft:'0px'}}>
                <img style={{width:'120px'}} src={Logo}></img>
              </div>
              <div style={{fontWeight:800,fontFamily:'Roboto',color:'black',fontSize:'12px',display:'flex',justifyContent:'center',alignItems:'center',width:'130px', borderRadius:'20px', background:'#D6A54F'}}>
                Downdload Now
              </div>
          </div>
          <div style={{position:'relative', top:0,width:'100%',height:'200px'}}>
          <Slider {...settings}>
            
              <img style={{width:'100%', height:'100%'}} src={"https://asset.tix.id/wp-content/uploads/2022/07/993902c4-9c4f-4848-b937-9a20f2906b90.jpg"} />
           
           
              <img style={{width:'100%', height:'100%'}} src={"https://asset.tix.id/wp-content/uploads/2022/07/049fadd0-af80-487f-8cd3-5e7f2cf74dd1.jpg"} />
            
              <img style={{width:'100%', height:'100%'}} src={"https://asset.tix.id/promo/0a364d760f5b7c2383e5737a4c34e3b5.jpg"} />
            
            
          </Slider>

        </div>
        <div style={{transition:'0.5s',opacity:1,fontWeight:800,textShadow:"0px 15px 5px rgba(0,0,0,0.1),10px 20px 5px rgba(0,0,0,0.05),-10px 20px 5px rgba(0,0,0,0.05)",color:'#D6A54F',fontSize:'30px',fontFamily:'Roboto',position:'absolute',top:250,width:'100vw', display:'flex', justifyContent:'start', paddingLeft:'20px',alignItems:'center'}}>
           NOW SHOWING
          </div>
          {images?.map((data,ind)=>{
           
              return(
              <Draggable
              
              id={ind}
              position={{x: 0, y: 0}}
              onMouseDown={eventHandler}
              onStart={eventHandler}
              onDrag={eventHandler}
              onStop={eventHandler}
                      >
                        <div id={ind}  style={{transition:'0.4s',top:ind==indexNow?340:350,position:'absolute',display:ind==1?'block':'block',left:ind==indexNow?"calc((100%/2) - (100px))":((indexNow-1==ind) || (indexNow==0 && ind==2))?"calc((100%/2) - (150px))":"calc((100%/2) - (50px))",zIndex:((indexNow-1==ind) || (indexNow==0 && ind==2))?1:ind==indexNow?3:2}}>
                          <img id={ind} style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",transform:((indexNow-1==ind) || (indexNow==0 && ind==2))?'rotate(-10deg)':ind==indexNow?'':'rotate(10deg)',borderRadius:'10px',width:ind==indexNow?'210px':'200px',height:ind==indexNow?'310px':'300px'}} src={data}></img>
                        
                        </div>
                      </Draggable>)
            
            
          })} 
          <div style={{transition:'0.5s',opacity:juduls[indexNow]==="PENGABDI SETAN 2"?1:0,textShadow:"0px 15px 5px rgba(0,0,0,0.1),10px 20px 5px rgba(0,0,0,0.05),-10px 20px 5px rgba(0,0,0,0.05)",color:'#D6A54F',fontSize:'30px',fontFamily:'Roboto',position:'relative',top:juduls[indexNow]==="PENGABDI SETAN 2"?440:0,width:'100vw', display:'flex', justifyContent:'center', alignItems:'center'}}>
            {juduls[indexNow]}
          </div>
          <div style={{transition:'0.5s',opacity:juduls[indexNow]==="BULLET TRAIN"?1:0,textShadow:"0px 15px 5px rgba(0,0,0,0.1),10px 20px 5px rgba(0,0,0,0.05),-10px 20px 5px rgba(0,0,0,0.05)",color:'#D6A54F',fontSize:'30px',fontFamily:'Roboto',position:'relative',top:juduls[indexNow]==="BULLET TRAIN"?400:0,width:'100vw', display:'flex', justifyContent:'center', alignItems:'center'}}>
            {juduls[indexNow]}
          </div>
          <div style={{transition:'0.5s',opacity:juduls[indexNow]==="FREE FIRE"?1:0,textShadow:"0px 15px 5px rgba(0,0,0,0.1),10px 20px 5px rgba(0,0,0,0.05),-10px 20px 5px rgba(0,0,0,0.05)",color:'#D6A54F',fontSize:'30px',fontFamily:'Roboto',position:'relative',top:juduls[indexNow]==="FREE FIRE"?380:0,width:'100vw', display:'flex', justifyContent:'center', alignItems:'center'}}>
            {juduls[indexNow]}
          </div>
        
        </div>
    </div>
  );
}

export default App;
