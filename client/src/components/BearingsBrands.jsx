import React from 'react'

const BearingsBrands = () => {
  return (
    <div className='culture-content'>
    <div className='brands-headline'>
      <h2 className='culture-history font-mono text-xl text-stone-600'><b>featured skateboarding bearing companies</b></h2>
    <p className='hello font-mono text-xs text-slate-600'>the small circular devices placed inside the wheel </p>
  </div>

  <div className='brand m-0.5'>
      <div className='brandcontent -mt-20'>
        <div className='logoimage hover:scale-125 duration-700'> 
          <a href="https://bonesbearings.com/">
            <img className='-rotate-6' src="/images/logos/bones-bearings-logo.png" alt="anti-hero-logo" />
          </a>
        </div>

        <div className='textcontent'>
          <p className='texttag font-mono text-sm mr-24 text-stone-600'><b className='text-slate-600'>bones bearings:</b> founded in 1983 by skateboarding legends George Powell and Stacy Peralta, you may have noticed these are the same founders of bones wheels. bones bearings is one of the most reputable and well-known bearing brands in the skateboarding industry, as well as being one of the most affordable options for bearings. known for their speed, durability and precision, bones bearings is a staple in the skateboarding industry. the company has been a respected brand in the skateboarding industry for over 30 years, collaborating with other skateboarding brands such as Vans, Trasher, and many others.</p>
        </div>
      </div>
    </div>

    <div className='brand m-0.5 '>
      <div className='brandcontent -mt-20'>
        <div className='textcontent'>
          <p className='texttag font-mono text-sm text-stone-600'><b className='text-slate-600'>bronson:</b> founded in the early 2000s, bronson speed bearings are designed to withstand the harsh demands of skateboarding and are known to be reliable and long lasting. bronson offers a wide range of bearings options, including different types of shields, spacers, and lubricants to suit different riding styles and preferences. they also offer a variety of color options for the shields to match with different board designs. bronson bearings are also considered as an affordable option compared to some of the other well-known bearing brands in the industry.</p>
        </div>
        <div className='logoimage hover:scale-125 duration-700'>
          <a href="https://bronsonspeedco.com/">
            <img className='rotate-6' src="/images/logos/bronson-logo.png" alt="" />
            </a>
        </div>
      </div>
    </div>

    <div className="brand m-0.5">
      <div className="brandcontent -mt-20">
        <div className="logoimage hover:scale-125 duration-700">
          <a href="https://cortinabearingco.com/">
            <img className='-rotate-6' src="/images/logos/cortina-logo.png" alt="" />
          </a>
        </div>

        <div className='textcontent'>
          <p className='texttag font-mono text-sm mr-48 text-stone-600'><b className='text-slate-600'>cortina:</b> founded in the mid 2010's, cortina specializes in high performance bearings. cortina bearings are premium, polished, precision ball-bearings, equipped with durable custom cages; ready for a long-lasting smooth ride. these high performance raceway bearings are fully laser etched with engraved outer race patterns. interchangeable with removable frictionless rubber shields, built for everlasting effect. you can choose to skate the signature series of favorite skateboard pros such as Elijah Berle, Na-Kel Smith, and Tristan "T-Funk" Funkhouser. designed strictly for power, speed, and luxury, cortina bearings are engineered to be a rolling force in style.</p>
        </div>
      </div>
    </div>

    <div className="brand">
      <div className='textcontent'>
        <p className='texttag font-mono text-sm mb-48 text-stone-600'><b> these are some of the most influential brands in skateboarding history, which is why they're featured on this application. more brands to be added in the future, so be on the lookout.</b> </p>
      </div>
      </div>

</div>
  )
}

export default BearingsBrands