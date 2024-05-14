import React from 'react';
import img1 from './assets/Group 4.png';
import img2 from './assets/Weighing.png';
import img3 from './assets/Edit Pie Chart Report.png';
import img4 from './assets/Rectangle 26.png';
import p4 from './assets/Rectangle 26.png';
import p2 from './assets/Group 26.png';
import p3 from './assets/Line 13.png'
import p5 from './assets/Ellipse 7.png'
import { FontAwesomeIcon }  from  '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import p6 from  './assets/Rectangle 52.png'
import p7 from './assets/Rectangle 54.png'
import p8 from './assets/Line 2.png'
import Footer from '../Component/Footer';
import p10 from '../pages/assets/Line 2.png'



const Home = () => {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };
  return (
    <div>
      <div className='maintxt space-y-8 mt-60 text-center '>
        <div className='text-5xl text-[#FEE715] font-averia-serif-libre'>
        CHANGE
        </div>
        <div className='text-5xl text-white font-averia-serif-libre'>
        YOUR LIFESTYLE
        </div>
      </div>

      <div className='overlay -space-y-12'>
        <div className='threeimg h-20 bg-[#707070B5] rounded-lg  w-2/3 mt-20 opacity-50  flex justify-center items-center space-x-10 ml-60'> 
        <div className="img1 flex justify-center items-center">
          <img className='size-16' src={img1} alt="" />
          <div className="text1 text-2xl font-averia-serif-libre font-bold text-white"> Quality Equipments</div>
        </div>

        <div className="img2 flex justify-center items-center">
          <img className='size-16' src={img2} alt="" />
          <div className="text1 text-2xl font-averia-serif-libre font-bold text-white">Weight Loss</div>
        </div>

        <div className="img3 flex justify-center items-center">
          <img className='size-16' src={img3} alt="" />
          <div className="text1 text-2xl font-averia-serif-libre font-bold text-white"> Diet Chart</div>
        </div>
        </div>
        {/* button-overlay */}
        <div className='bg-[#373737] pt-20  w-full flex justify-between p-20'>
          <div className="pic1 px-40 flex justify-center mt-24 -space-x-28">
            <img className=" size-72 " src={img4} alt="" />
            <div className="btn"><button className='text-black mt-40 bg-white rounded-full p-5 font-averia-serif-libre font-bold w-60 '>Best Workout Machines</button></div>
          </div>
          <div className='space-y-6 w-1/3 pt-16  justify-center '>
            <div className="head font-averia-serif-libre font-bold text-2xl text-white">Get Ready to Reach
Your Fitness Goals</div>
<div className="popfont">Combining aerobic exercise with other kinds of exercises like strength training with weights and stretching keeps muscles, ligaments, joints, and tendons healthy, flexible, and strong, so when one becomes older, 
He is stronger and has less risk of being out of balance and falling causing fractures or other injuries</div>
<div className="btn1 rounded-full bg-[#FEE715] text-black w-20 p-2 w-28 text-center"><button>Buy Now</button></div>
          </div>
        </div>
        
        </div>
        {/* latest prodecucts */}
        <div className="prod bg-[#373737] pt-20 space-y-4 items-center">
          <div className="head1 text-white font-averia-serif-libre font-bold text-center text-4xl">Latest Products</div>
          <div className="pics flex justify-between items-center  space-x-10 p-16 ">
            <img className='size-60' src={p2} alt="" />
            <img className='size-60' src={p2} alt="" />
            <img className='size-60' src={p2} alt="" />
          </div>
          <div className="dots text-6xl text-center">.<span className='text-[#FEE715]'>.</span>..</div>
        </div>

        {/* calculator */}
        <div className="calulat bg-[#373737] flex flex-col ...  justify-center items-center py-8 pt-10">
          <div className="ead3 border-b-lime-400 text-6xl font-averia-serif-libre text-white text-center">Calculate Your BMI</div>
          <div className="line mt-8">
            <img  className="  "  src={p3} alt='' />
          </div>
          </div>
          <div className="imgcal bg-[#373737] flex   space-x-28 py-10 ">
       <div className="img pt-20">
        <img src={p4} alt="" />
       </div>
       <div className="cal  mt-28 space-x-28 space-y-6">
      <span className="cal text-4xl font-averia-serif-libre text-white text-center ml-24  "> Advanced Calculator</span>
       <form>
        <span className='text-2xl font-averia-serif-libre text-white text-center' >Gender</span><br></br>
        <select className='p-3 rounded-md w-32' id='gender' name='gender'  >
        <option value="" disabled selected>Male</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
       </form>
       <div className="2form flex space-x-24">
        <div className="age py-10">
        <span className='text-2xl font-averia-serif-libre text-white text-center' >Gender</span><br></br>
        <form action="">
       <input className=' rounded-md p-3 w-32 items-center' type='number' name='age' placeholder='20'></input>
        </form>
        </div>

        <div className="age py-10">
        <span className='text-2xl font-averia-serif-libre text-white text-center' >Weight</span><br></br>
        <form action="">
       <input className=' rounded-md p-3 w-32 items-center' type='number' name='age' placeholder='42'></input>
        </form>
        </div>
       </div>


       <div className="2form flex space-x-24">
        <div className="age">
        <span className='text-2xl font-averia-serif-libre text-white text-center' >Height</span><br></br>
        <form action="">
       <input className=' rounded-md p-3 w-32 items-center' type='number' name='age' placeholder='5'></input>
        </form>
        </div>

        <div className="age mt-7">
        <button className='bg-[#FEE715] text-[#000000] font-averia-serif-libre text-2xl rounded-md p-3 w-32 items-center'>Calculate</button>
        </div>
       </div>
       <div className="result flex space-x-20 border-1 h-20 rounded-md border-[#FEE715]">
        <span className='text-2xl font-averia-serif-libre text-white text-center'>Result</span>
        <div className="im ml-20 mt-7">
        <img  className="" src={p3} alt='' />
        </div>
       </div>

       </div>


       </div>
       {/* clients feedback */}
       <div className="calulat bg-[#373737] flex flex-col ...  justify-center items-center py-8 pt-10">
          <div className="ead3 border-b-lime-400 text-3xl font-averia-serif-libre text-white text-center">Client’s Feedback</div>
          <div className="line size-32 mt-6">
            <img  className="  "  src={p3} alt='' />
          </div>
          </div>


          <div className="testinomial bg-[#373737] space-y-10 ">
            {/* <div className="img rounded-full size-32 bg-white -space-x-10 ">
              <img src={p5} alt='' />
            </div> */}
            <div className="comments bg-[#808080] border-8 rounded-full  border-[#FEE715]   justify-center flex " > 
            
            <div className="img rounded-full size-40 border-8 border-[#FEE715] bg-white mb-5 mr-60 -space-x-60">
              <img src={p5} alt='' width={400} height={400} />
            </div>
            <div className="kot ml-24 ">
            <h1 className='text-2xl text-white ml-8'>MR JACK</h1>
            <p className='text-white ml-4 mr-8'>This is  Brilliant store i buy a treadmil from this store the results is marvellous</p>
            <span className='text-[#FEE715] size-10 ml-60'>  <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            
            
            
            </span>
            </div>
        
            </div>

{/* testimials#3 */}
            <div className="comments bg-[#808080] border-8 rounded-full  border-[#FEE715]   justify-center flex " > 
            
            
            <div className="kot ml-24 ">
            <h1 className='text-2xl text-white ml-8'>MR JOHN</h1>
            <p className='text-white ml-4 mr-8'>This is  Brilliant store i buy a treadmil from this store the results is marvellous</p>
            <span className='text-[#FEE715] size-10 ml-60'>  <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            
            
            
            </span>
            </div>
            <div className="img rounded-full size-40 border-8 border-[#FEE715] bg-white mb-5 ">
              <img src={p5} alt='' width={400} height={400} />
            </div>
        
            </div>
            {/* testionomial#3 */}
            <div className="comments bg-[#808080] border-8 rounded-full  border-[#FEE715]   justify-center flex " > 
            
            <div className="img rounded-full size-40 border-8 border-[#FEE715] bg-white mb-5 mr-60">
              <img src={p5} alt='' width={400} height={400} />
            </div>
            <div className="kot ml-24 ">
            <h1 className='text-2xl text-white ml-8'>MR JOHN</h1>
            <p className='text-white ml-4 mr-8'>This is  Brilliant store i buy a treadmil from this store the results is marvellous</p>
            <span className='text-[#FEE715] size-10 ml-60'>  <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            
            
            
            </span>
            </div>
        
            </div>

            <div className="dots text-8xl text-[#808080] text-center ">
              ..<span className='text-[#FEE715]'>.</span>.
            </div>


          </div>
       

     
      {/* blog */}
          <div className="calulat bg-[#373737] flex flex-col ...  justify-center items-center py-8 pt-10">
          <div className="ead3 border-b-lime-400 text-3xl font-averia-serif-libre text-white text-center">Best Blogs</div>
          <div className="line size-32 mt-6">
            <img  className="  "  src={p3} alt='' />
          </div>
          <div className="14img flex justify-evenly">
            <div className="1 w-1/4 ">
            <img  src={p6} alt=' ' height={200} />
            </div>
           <div className="2 bg-[#808080] py-8  space-y-10 w-1/4 ">
            <div className="2 1 font-averia-serif-libre font-bold text-black text-center">
            Gym Equipments 
            </div>
            <div className="2 2 font-Poppins text-white text-center ">
            Weight loss is really important for our health
            </div>
<div className="2 3 rounded-lg border-2 w-36 border-black font-averia-serif-libre flex items-center  justify-center ml-16">
Read More
</div>
           </div>
           <div className="3 w-1/4">
           <img src={p7} alt=' '  height={200}/>
           </div>
           <div className="4 bg-[#808080] py-8  space-y-10 w-1/4 ">
           <div className="2 1 font-averia-serif-libre font-bold  text-white text-center">
           Yoga
            </div>
            <div className="2 2 font-Poppins  text-black text-center">
            Weight loss is really important for our health
            </div>
<div className="2 3 rounded-lg border-2 w-36 border-black font-averia-serif-libre flex items-center  justify-center ml-16 bg-[#FEE715]">
Read More
</div>
           </div>

            
</div>

{/* second-flex-items */}

<div className="14img flex justify-evenly">
<div className="4 bg-[#808080] py-8  space-y-10 w-1/4 ">
           <div className="2 1 font-averia-serif-libre font-bold  text-white text-center">
           Weight Loss
            </div>
            <div className="2 2 font-Poppins  text-black text-center">
            Weight loss is really important for our health
            </div>
<div className="2 3 rounded-lg border-2 w-36 border-black font-averia-serif-libre flex items-center  justify-center ml-16 bg-[#FEE715]">
Read More
</div>
           </div>
            <div className="1 w-1/4">
            <img src={p6} alt=' '  height={200}/>
            </div>
            <div className="4 bg-[#808080] py-8  space-y-10 w-1/4 ">
           <div className="2 1 font-averia-serif-libre font-bold  text-white text-center">
           Healthy LifeStyle
            </div>
            <div className="2 2 font-Poppins  text-black text-center">
            Weight loss is really important for our health
            </div>
<div className="2 3 rounded-lg border-2 w-36 border-black font-averia-serif-libre flex items-center  justify-center ml-16 bg-[#FEE715]">
Read More
</div>
           </div>
          
           <div className="3 w-1/4">
           <img src={p7} alt=' '  height={200}/>
           </div>
           

            
</div>
<div className="mt-16">
    <img src={p8} alt='' />
  </div>
          </div>

      

     <Footer />

     <div className="img">
        <img src={p10} alt='' />
      </div>

      <div className="st text-white font-averia-serif-libre text-bold text-center items-center h-10 bg-[#636363]">
        @2024 GymMiniStore
      </div>
        </div>
  );
}

export default Home;












