import React from 'react'

const WheelBrands = () => {
  return (
    <div className='culture-content'>
    <div className='brands-headline'>
      <h2 className='culture-history font-mono text-xl text-stone-600'><b>featured skateboarding wheel companies</b></h2>
    <p className='hello font-mono text-xs text-slate-600'>the polyurethane wheels attached to your trucks</p>
  </div>

  <div className='brand m-0.5'>
      <div className='brandcontent -mt-20'>
        <div className='logoimage hover:scale-125 duration-700'> 
          <a href="https://www.spitfirewheels.com/">
            <img className='-rotate-6' src="/images/logos/spitfire-logo.png" alt="anti-hero-logo" />
          </a>
        </div>

        <div className='textcontent'>
          <p className='texttag font-mono text-sm mr-24 text-stone-600'><b className='text-slate-600'>spitfire:</b> founded in 1988 by Jim Thiebaud and skateboarding legend George Powell. spitfire wheels are known for its high-quality construction and durability as well as it's signature logo, which has made them a popular choice among professional & amateur skaters alike. their most recent innovation, the "formula four" is considered the best wheel forumla amongst many skateboarders around the world due to it's smooth ride, speed and durability. spitfire offers a wide range of wheel sizes and durometers to suit different riding styles and preferences. spitfire has been a respected brand in the skateboarding industry for over 30 years due to their high-quality construction that is built to withstand the demands of skateboarding.</p>
        </div>
      </div>
    </div>

    <div className='brand m-0.5 '>
      <div className='brandcontent -mt-20'>
        <div className='textcontent'>
          <p className='texttag font-mono text-sm text-stone-600'><b className='text-slate-600'>bones:</b> founded in 1983 by skateboarding legends George Powell and Stacy Peralta. bones wheels is known for its signature "bones" logo, which features a stylized image of a skull as well as its high-quality construction and durability. bones wheels has done many collaborations and partnerships with other brands in the skateboarding industry, such as Vans, Thrasher, and many others. bones wheels offers a wide range of wheel sizes and durometers to suit different riding styles and preferences. they also offer a line of wheel accessories such as speed rings and bearing spacers. furthermore, they have been known to be the leading brand in terms of technology and innovation in the wheel industry, always looking for ways to improve their products.</p>
        </div>
        <div className='logoimage hover:scale-125 duration-700'>
          <a href="https://bones.com/">
            <img className='rotate-6' src="/images/logos/bones-logo.png" alt="" />
            </a>
        </div>
      </div>
    </div>

    <div className="brand m-0.5">
      <div className="brandcontent -mt-20">
        <div className="logoimage hover:scale-125 duration-700">
          <a href="https://ojwheels.com/">
            <img className='-rotate-6' src="/images/logos/oj-wheels-logo.png" alt="" />
          </a>
        </div>

        <div className='textcontent'>
          <p className='texttag font-mono text-sm mr-48 text-stone-600'><b className='text-slate-600'>O.J.:</b> founded in the early 1970s by skateboarding legend Omar "OJ" Hassan himself. OJ was one of the first pro skateboarders to start a wheel company, and he was one of the pioneers of the modern skateboard wheel. his company quickly gained a reputation as a reliable and high-performance wheel brand in the industry. they continue to sponsor professional skateboarders and teams, which helps to keep the company at the forefront of the industry. the company has been a respected brand in the skateboarding industry for over decades, known for their speed, grip, and durability as well as their unique and colorful designs which differentiate them from other brands in the market.</p>
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

export default WheelBrands