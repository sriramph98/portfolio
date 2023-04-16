import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
/* import FadeIn from '@/components/animation/fadeIn' */
import img1 from '../media/work/iphone-show.png'
import img2 from '../media/work/ipad.png'
import img3 from '../media/work/websites.png'
import img4 from '../media/work/filters-vani.png'
import img5 from '../media/work/appleTV.png'
import img6 from '../media/work/cms.png'




export default function Work() {
  return (

    <React.Fragment>
      <div>

        <div className="px-4 md:px-40 lg:px-60 ">

          <div className='py-8'>

             {/* <FadeIn/> */}
              <p className="quote py-8">Crafting experience  that matters</p>
            <div>
              <p className="paragraph">I'm an independant creative based in Chennai.</p>
              <p className="paragraph">Formerly at Zoho Corporation and Campus Avenue.</p>

            </div>


          </div>


          <p className="bigTitle">Portfolio</p>


          <div className="grid grid-cols-2 gap-16 py-6">
            

            <div>

              <div className="card"><Image src={img1} alt="" /></div>

              <div>
                <div className="cardDescription">
                  <div className="cardProduct">01</div>
                  <button className="cardBtn cardBtnText">Button</button>

                </div>

                <div className="cardDescription">
                  <div className="caption">Category</div>
                  <div className="cardYear">Year</div>

                </div>

              </div>


            </div>

            <div>

            <div className="card "><Image src={img2} alt=""  /></div>

              <div>
                <div className="cardDescription">
                  <div className="cardProduct">02</div>
                  <button className="cardBtn cardBtnText">Button</button>

                </div>

                <div className="cardDescription">
                  <div className="caption">Category</div>
                  <div className="cardYear">Year</div>

                </div>

              </div>


            </div>

            <div>

            <div className="card "><Image src={img3} alt=""  /></div>

              <div>
                <div className="cardDescription">
                  <div className="cardProduct">03</div>
                  <button className="cardBtn cardBtnText">Button</button>

                </div>

                <div className="cardDescription">
                  <div className="caption">Category</div>
                  <div className="cardYear">Year</div>

                </div>

              </div>


            </div>
            <div>

            <div className="card "><Image src={img4} alt=""  /></div>


              <div>
                <div className="cardDescription">
                  <div className="cardProduct">04</div>
                  <button className="cardBtn cardBtnText">Button</button>

                </div>

                <div className="cardDescription">
                  <div className="caption">Category</div>
                  <div className="cardYear">Year</div>

                </div>

              </div>


            </div>

            <div className='md:col-span-2 lg:col-span-2'>

            <div className="card"><Image src={img5} alt=""  /></div>


              <div>
                <div className="cardDescription">
                  <div className="cardProduct">05</div>
                  <button className="cardBtn cardBtnText">Button</button>

                </div>

                <div className="cardDescription">
                  <div className="caption">Category</div>
                  <div className="cardYear">Year</div>

                </div>

              </div>


            </div>
            <div>

            <div className="card "><Image src={img6} alt=""  /></div>


              <div>
                <div className="cardDescription">
                  <div className="cardProduct">06</div>
                  <button className="cardBtn cardBtnText">Button</button>

                </div>

                <div className="cardDescription">
                  <div className="caption">Category</div>
                  <div className="cardYear">Year</div>

                </div>

              </div>


            </div>
            <div>

            <div className="card "><Image src={img6} alt=""  /></div>


              <div>
                <div className="cardDescription">
                  <div className="cardProduct">07</div>
                  <button className="cardBtn cardBtnText">Button</button>

                </div>

                <div className="cardDescription">
                  <div className="caption">Category</div>
                  <div className="cardYear">Year</div>

                </div>

              </div>


            </div>

            <div className='md:col-span-2 lg:col-span-2'>

            <div className="card "><Image src={img6} alt=""  /></div>


              <div>
                <div className="cardDescription">
                  <div className="cardProduct">08</div>
                  <button className="cardBtn cardBtnText">Button</button>

                </div>

                <div className="cardDescription">
                  <div className="caption">Category</div>
                  <div className="cardYear">Year</div>

                </div>

              </div>


            </div>

          </div>

        </div>

      </div>

    </React.Fragment>

  )
}
