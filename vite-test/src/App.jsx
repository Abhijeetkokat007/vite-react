import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1></h1>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} classNameName="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} classNameName="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div classNameName="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p classNameName="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>



      {/* //////////////// */}

      <div className="offcanvas offcanvas-end  text-bg-dark" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel"><i className="bi bi-person-square text-white fs-3 me-2"></i></h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div>
            <button className="btn"><h5 className="text-white">Sign Up</h5></button>
          </div>
          <hr className="text-white" />
          <div>
            <button className="btn"><h5 className="text-white">Subscribe Now</h5></button>

          </div>
          <hr className="text-white" />
          <div>
            <button className="btn"><h5 className="text-white">Help & Legal</h5></button>

          </div>
        </div>
      </div>
      {/* <!-- 00 --> */}
      <div id="carouselExampleAutoplaying " className="carousel slide " style="margin-top: 80px;" data-bs-ride="carousel" >
        <div className="carousel-inner" >
          <div className="carousel-item active h-50" >
            <img style="height: 40vw" src="https://images.hindustantimes.com/img/2023/01/26/1600x900/gadar_2_1674715753204_1674715789861_1674715789861.jfif" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img style="height: 40vw;" src="https://wallpapercave.com/wp/wp8807390.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img style="height: 40vw;" src="http://3.bp.blogspot.com/-ZPw90QTqr54/VjxMk17TQmI/AAAAAAAADVY/zFh7Tmjv-lA/s1600/Singham-Returns-Bollywood-Movie-Poster-Wallpaper.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img style="height: 40vw; width: 100%;" src="https://wallpapercave.com/wp/wp7009775.jpg" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* <!-- 0000 --> */}
      <p className="fs-3   text-center mt-5"><b>PEOPLE WHO LIKED BOLLYWOOD MOVIES ALSO LIKED</b></p>


      <div className="d-flex flex-wrap justify-content-evenly">
        <a className="text-decoration-none m-2" href="./gadar2.html">
          <div className="card " style="width: 16rem;">
            <img src="https://images.justwatch.com/poster/302620751/s592/gadar-2 " className="card-img-top" alt="gadar 2" />
          </div>
        </a>

        <a className="text-decoration-none m-2 " href="./bholaa.html">
          <div className="card" style="width: 16rem; :hover{width: 18rem;}">
            <img src="https://images.justwatch.com/poster/305505012/s592/bholaa-2022 " className="card-img-top" alt="bhola" />
          </div>
        </a>

        <a className="text-decoration-none m-2" href="./omg2.html">
          <div className="card" style="width: 16rem;">
            <img src="https://images.justwatch.com/poster/305939637/s592/omg-2 " className="card-img-top" alt="omg 2" />
          </div>
        </a>

        <a className="text-decoration-none " href="./adipurush.html">
          <div className="card" style="width: 16rem;">
            <img src="https://images.justwatch.com/poster/301409738/s592/adipurush " className="card-img-top" alt="adipurush" />
          </div>
        </a>


        <a className="text-decoration-none " href=" ">
          <div className="card" style="width: 16rem;">
            <img src="https://images.justwatch.com/poster/306048387/s592/the-kerala-story " className="card-img-top" alt="kerala story" />
          </div>
        </a>
      </div>

      <p className="d-inline-flex gap-1 text-center">
        <div className="d-flex justify-content-center">
          <button className="  btn bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Show More
          </button>
        </div>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="">

          <div className="d-flex flex-wrap justify-content-evenly">
            <a className="text-decoration-none " href=" ">
              <div className="card" style="width: 16rem;">
                <img src="https://images.justwatch.com/poster/306386780/s592/bawaal " className="card-img-top" alt="..." />
              </div>
            </a>

            <a className="text-decoration-none " href=" ">
              <div className="card" style="width: 16rem;">
                <img src="https://images.justwatch.com/poster/305659344/s592/gadar-ek-prem-katha " className="card-img-top" alt="..." />
              </div>
            </a>

            <a className="text-decoration-none " href=" ">
              <div className="card" style="width: 16rem;">
                <img src="https://images.justwatch.com/poster/305933454/s592/rocky-aur-rani-ki-prem-kahani " className="card-img-top" alt="..." />
              </div>
            </a>

            <a className="text-decoration-none " href=" ">
              <div className="card" style="width: 16rem;">
                <img src="https://images.justwatch.com/poster/306314660/s592/lust-stories-2 " className="card-img-top" alt="..." />
              </div>
            </a>

            <a className="text-decoration-none " href=" ">
              <div className="card" style="width: 16rem;">
                <img src="https://images.justwatch.com/poster/179306592/s592/jolly-llb-2 " className="card-img-top" alt="..." />
              </div>
            </a>

          </div>

        </div>
      </div>
    {/* </div > */}
      {/* <!-- 00 --> */ }
        < p className = "fs-3 text-center mt-5" >n </p >
        <div className="scroll-container">
          <div className="d-flex">
            <a className="text-decoration-none m-4" href="./satyapremkikatha.html">
              <div className="card" style="width: 16rem;">
                <img src="https://images.justwatch.com/poster/305543092/s592/satyaprem-ki-katha" className="card-img-top" alt="satya prem ki kayha" />
              </div>
            </a>

            <a className="text-decoration-none m-4" href="./jugjuggjeeyo.html">
              <div className="card" style="width: 16rem;">
                <img src="https://images.justwatch.com/poster/277476027/s592/jug-jugg-jeeyo" className="card-img-top" alt="jug jugg jeeyo" />
              </div>
            </a>



            <a className="text-decoration-none m-4" href=" ">
              <div className="card" style="width: 17rem;">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-XShfWV7YrZQUBMtw8A_RjvAHak70L_AMX9XRiZWvx3vJaZAdzH7RZPPlxB8a&s=10 " className="card-img-top" alt="panipat" />
              </div>
            </a>

            <a className="text-decoration-none m-4" href=" ">
              <div className="card" style="width: 17rem;">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQswr3zHQ5AVnHxbe3LtLHpNJQwt9CVIeuxJumrPKtmXP3eoFRpeqtL58PjTA&s=0 " className="card-img-top" alt="omg" />
              </div>
            </a>

            <a className="text-decoration-none m-4" href=" ">
              <div className="card" style="width: 17rem;">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAXtJGfM-6I_NpeWb09PqRuwVpW0rd7WFOzAb4is4-aXnTOc76R9IDwKqHOoBt&s=10 " className="card-img-top" alt="valyteyar virayya" />
              </div>
            </a>

            <a className="text-decoration-none m-4" href=" ">
              <div className="card" style="width: 17rem;">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI9-SF4dn1iTwJzQdgwWpRE1hvupMkZGb52wK0RyUHI28zD7gqu72jOJKKg2EG&s=10 " className="card-img-top" alt="javan " />
              </div>
            </a>

            <a className="text-decoration-none m-4" href=" ">
              <div className="card" style="width: 17rem;">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRpk3XqGKc3cxdtp9gjAH-Y-VwWCmSBsFOHc2Vk52-KV9aLjxy1v6OuDdvNw&s=0 " className="card-img-top" alt="maayon" />
              </div>
            </a>

            <a className="text-decoration-none m-4" href=" ">
              <div className="card" style="width: 17rem;">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ-adoyM6Ilq0ONWdVEab-U8zYOnmhdsZgTnlRsyxROCOHNSrbr5az7L6pOiGFZA&s=10" className="card-img-top" alt="babali bouncer " />
              </div>
            </a>
          </div>
        </div>

  {/* <!-- 223 --> */ }
  <p className="fs-3   text-center "><b>NEW BOLLYWOOD MOVIES</b></p>
  <div className="scroll-container">
   
  <div className="d-flex">
    <a className="text-decoration-none m-4" href="./ib71.html">
      <div className="card" style="width: 16rem;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHRTZ-NlTrlU5LYmyanMR3Ul8kKlggme9Cp1eha6VBOHbfysBEyGym6XUXdQ&s=0" className="card-img-top" alt="ib71"/>
      </div>
     </a>
     
     <a className="text-decoration-none m-4" href="./kisikabhai.html">
      <div className="card" style="width: 16rem;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyRnCTJIW5JUBJMplKogDxtHgFRGJU2eLsLoMg-pPl43zm05sN-L_wN72W21G4&s=10 " className="card-img-top" alt="kisi ka bhai kisi ki jan"/>
      </div>
     </a>

     <a className="text-decoration-none m-4" href=" ">
      <div className="card" style="width: 16rem;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZfJML1rm-Vs4Hb2pVNZPQMA00L2osulg6Ju_Jn833K_ZJsMD4_E70zEZblFpF&s=10 " className="card-img-top" alt="blind"/>
      </div>
     </a>

     

     <a className="text-decoration-none m-4" href=" ">
      <div className="card" style="width: 16rem;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8TS0sxhYhcoiL9mA2V25jy7p5uY_Y8srCOluOnyZOrQ3Y3csSlXMbsPfKT454&s=10 " className="card-img-top" alt="lust stories"/>
      </div>
     </a>

     <a className="text-decoration-none m-4" href=" ">
      <div className="card" style="width: 16rem;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE73FY_aOwzKDzIulIWj-YTCWj5j32LcaBUORpW363KjFx9Q49zqjuxgzj8dqx&s=10 " className="card-img-top" alt="afwaah"/>
      </div>
     </a>

     <a className="text-decoration-none m-4" href=" ">
      <div className="card" style="width: 16rem;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrZb5uaU2AHqOVvyoxfuSxiouCgVJCVnGp1QTpanL-UTEnFJp5Z9dQnjyOGzWz&s=10 " className="card-img-top" alt="kathar basha"/>
      </div>
     </a>
    </div>
  </div>

  {/* <!-- ... --> */ }
  <p className="fs-3   text-center "><b>ROMANTIC BOLLYWOOD MOVIES</b></p>
  <div className="scroll-container">
  <div className="d-flex">
    <a className="text-decoration-none m-4" href=" ">
      <div className="card" style="width: 16rem;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl3pSrmtWHwAFjrCwxIZEObQlywpTiIyvwpulfOSzAvApxi33dUwrkzsDw0-_1ZQ&s=10" className="card-img-top" alt=" wed"/>
      </div>
     </a>

     <a className="text-decoration-none m-4" href=" ">
      <div className="card" style="width: 16rem;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvDN7zbpnKV1TxSP-MQQoS5qJ9YrN5Vxk-28lD3YUxeMUp5BG2lBLOMfSupA&s=0 " className="card-img-top" alt="ramlila"/>
      </div>
     </a>

     <a className="text-decoration-none m-4" href=" ">
      <div className="card" style="width: 16rem;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYRsyoY9yNJkgFUxdUBM9r6c7DpMBiDB1e06CvgHIXajI__Qcs_KFz0i1oiHYcKw&s=10 " className="card-img-top" alt="mamaiyya vastysvaiya"/>
      </div>
     </a>

     <a className="text-decoration-none m-4" href=" ">
      <div className="card" style="width: 16rem;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREEBLYZCUxpfav3IiOTxyXnNSWIzGYgN4c_e6Upsl-0AVCURs1lDHTm2tL1Q&s=0 " className="card-img-top" alt="mausam" />
      </div>
     </a>

     <a className="text-decoration-none m-4" href=" ">
      <div className="card" style="width: 16rem;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_6VyGOZmdKOXNzejvoAIkUIvy76iYR1F3miUmIX-6dxC1PYmBWW2cP3R1VWwN&s=10" className="card-img-top" alt="love aaj kal " />
      </div>
     </a>

     <a className="text-decoration-none m-4" href=" ">
      <div className="card" style="width: 16rem;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReEADeg8I3QEb9nsiguJBKxOFKay27Gq4QjlDINMV1_3_YXrprE_5P_0FRBg&s=0 " className="card-img-top" alt="shadi me jarur aana " />
      </div>
     </a>
    </div>
  </div>
  {/* <!-- 00 --> */ }
  <p className="fs-3   text-center "><b>SPORT BOLLYWOOD MOVIES</b></p>
  <div className="scroll-container">
  <div className="d-flex">
    <a className="text-decoration-none m-4" href=" ">
      <div className="card" style="width: 16rem;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoS0k2wrGbHdDkxjEmA2RIp1xX7C0JCwYPK5lmw0gvPVjEf9PFYutA_ALnC3q4&s=10" className="card-img-top" alt=" meri corm"/>
      </div>
     </a>

     <a className="text-decoration-none m-4" href=" ">
      <div className="card" style="width: 16rem;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIRIv37Xz3Qzf1ZIjlYif2_0u_xK6aJCvB9Xhx3x8GEqBQ5GtY300uG_4Cq57-9w&s=10 " className="card-img-top" alt="tufan"/>
      </div>
     </a>

     <a className="text-decoration-none m-4" href=" ">
      <div className="card" style="width: 16rem;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4cASh7zWXLa7cvOEXRF7Q6X1eGquvvpGlG2ORzxObltedZG7T48prceE8tJNjQQ&s=10 " className="card-img-top" alt="gold"/>
      </div>
     </a>

     <a className="text-decoration-none m-4" href=" ">
      <div className="card" style="width: 16rem;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCs-cBZMhn8OoCnhDJc87QbKAhMtjyG1m58j_9pnzttwdKhrHRA6TyfjE5xLoF&s=10 " className="card-img-top" alt="jersey"/>
      </div>
     </a>

     <a className="text-decoration-none m-4" href=" ">
      <div className="card" style="width: 16rem;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyeT4g-hg3E2o7ulD9fE3UZdxZ0kxaCmiQBJOV4Dqk38FY1BQi3_UKa39muw7P&s=10" className="card-img-top" alt="83 " />
      </div>
     </a>

     <a className="text-decoration-none m-4" href=" ">
      <div className="card" style="width: 16rem;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_RiFWDxcB0P2wqhJrf7Mn9OHajqIWW64y98PHx4-VRFDn43deZVuG77Eh6bD&s=10 " className="card-img-top" alt="surama " />
      </div>
     </a>
    </div>
  </div>
  

  
    </>
  )
}

export default App
