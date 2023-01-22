import React from 'react'

const GripBrands = () => {
  return (
    <div className='culture-content'>
        <div className='brands-headline'>
          <h2 className='culture-history font-mono text-xl'><b>featured griptape companies</b></h2>
        <p className='hello font-mono text-xs'>the sheet of sandpaper applied on top of the board</p>
      </div>

      <div className='brand m-0.5'>
          <div className='brandcontent -mt-20'>
            <div className='logoimage hover:scale-125 duration-700'> 
              <a href="https://mobgrip.com/">
                <img className='-rotate-6' src="/images/logos/mob-logo.png" alt="anti-hero-logo" />
              </a>
            </div>

            <div className='textcontent'>
              <p className='texttag font-mono text-sm mr-24'><b>MOB:</b> founded in 2010 by professional skateboarder Ryan Sheckler, the company was created to provide skaters with high-quality griptape that would last longer than traditional griptape. MOB Grip is known for its unique designs, including collaborations with other skateboard brands and artists. the company has sponsored several professional skateboarders and has been featured in a number of skateboarding publications. however due to the high quality aspect of MOB, the griptape does have a history of tearing up shoes faster than other brands, but the trade off with grip to the board is worth it. MOB grip is considered to be one of the leading griptape companies in the skateboarding industry.</p>
            </div>
          </div>
        </div>

        <div className='brand m-0.5 '>
          <div className='brandcontent -mt-20'>
            <div className='textcontent'>
              <p className='texttag font-mono text-sm'><b>jessup:</b> was the first to bring silicon carbide griptape to the skateboard industry. founded in 1975, this makes the company one of the oldest and most established griptape manufacturers in the skateboarding industry. jessup is known for producing high-quality griptape that is both durable and long-lasting. they offer a wide variety of griptape designs, including solid colors, patterns, and logo designs. jessup griptape is widely used by professional & casual skateboarders alike and is considered to be one of the top griptape brands in the industry.</p>
            </div>
            <div className='logoimage hover:scale-125 duration-700'>
              <a href="https://www.jessupmfg.com/">
                <img className='rotate-6' src="/images/logos/jessup-logo.png" alt="" />
                </a>
            </div>
          </div>
        </div>

        <div className="brand m-0.5">
          <div className="brandcontent -mt-20">
            <div className="logoimage hover:scale-125 duration-700">
              <a href="https://www.instagram.com/steelo.griptape/">
                <img className='-rotate-6 ml-16' src="/images/logos/steelo-logo-white-black-outline.png" alt="" />
              </a>
            </div>

            <div className='textcontent'>
              <p className='texttag font-mono text-sm mr-48'><b>steelo:</b> founded in 2012 by southern california residents Richard Koo & Jimmy Rosales, these two individuals wanted to provide a griptape company to the skateboarding community of San Ferdando Valley. Richard Koo stepped down from the company in 2018 to focus on other endeavors. although, not widely known by skateboarders outside of southern california, the brand is locally known for their incredible designs and durable griptape. steelo is dedicated to help local skateboarders have access to affordable griptape, clothing, and other accessories to skateboarders to make their skateboarding dreams become a reality.</p>
            </div>
          </div>
        </div>

        <div className="brand">
          <div className='textcontent'>
            <p className='texttag font-mono text-sm mb-48'><b> these are some of the most influential brands in skateboarding history, which is why they're featured on this application. more brands to be added in the future, so be on the lookout. </b> </p>
          </div>
          </div>

    </div>
  )
}

export default GripBrands