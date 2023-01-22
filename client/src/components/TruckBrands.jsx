import React from 'react'

const TruckBrands = () => {
  return (
    <div className='culture-content'>
        <div className='brands-headline'>
          <h2 className='culture-history font-mono text-xl'><b>featured skateboarding truck companies</b></h2>
        <p className='hello font-mono text-xs'>the 2x2 metal baseplate with axels screwed onto the board</p>
      </div>

      <div className='brand m-0.5'>
          <div className='brandcontent -mt-20'>
            <div className='logoimage hover:scale-125 duration-700'> 
              <a href="https://www.acetrucks.com/">
                <img className='-rotate-6' src="/images/logos/ace-logo.png" alt="anti-hero-logo" />
              </a>
            </div>

            <div className='textcontent'>
              <p className='texttag font-mono text-sm mr-24'><b>ace:</b> founded in 2012 by professional skaters Eric Koston and Guy Mariano. the company's trucks are known for their precision and durability, and are popular among professional skaters. ace trucks quickly gained a reputation for being a high-quality alternative to the more established truck brands in the industry. the company's marketing strategy has focused heavily on partnerships with professional skateboarders, which helped to establish ace trucks as a reputable brand in the industry. in addition to manufacturing traditional trucks, ace trucks also offers a line of "low" trucks, which are designed for skaters who prefer a lower riding style.</p>
            </div>
          </div>
        </div>

        <div className='brand m-0.5 '>
          <div className='brandcontent -mt-20'>
            <div className='textcontent'>
              <p className='texttag font-mono text-sm'><b>independent:</b> founded 1978 by Richard Novak, Jay Shuirman, and Fausto Vitello. the company is one of the oldest and most well-known truck brands in the skateboarding industry. they are known for their high-quality construction and durability, which has made them a popular choice among professional skaters. independent trucks is also known for its collaborations and partnerships with other brands in the skateboarding industry, such as Vans, Thrasher, and many others. independent remains one of the most respected and iconic brands and continues to produce high-quality trucks for skateboarders of all levels.</p>
            </div>
            <div className='logoimage hover:scale-125 duration-700'>
              <a href="https://independenttrucks.com/">
                <img className='rotate-6' src="/images/logos/indy-logo.png" alt="" />
                </a>
            </div>
          </div>
        </div>

        <div className="brand m-0.5">
          <div className="brandcontent -mt-20">
            <div className="logoimage hover:scale-125 duration-700">
              <a href="https://www.thundertrucks.com/">
                <img className='-rotate-6 ml-16' src="/images/logos/thunder-trucks-logo.png" alt="" />
              </a>
            </div>

            <div className='textcontent'>
              <p className='texttag font-mono text-sm mr-48'><b>thunder:</b> founded in 1986 by skateboarding legends George Powell and Stacy Peralta. the company is known for its high-quality construction and durability which quickly gained them reputation as a reliable and high-performance truck brand in the industry. they have a wide range of truck models and sizes that cater to different riding styles and preferences, they also offer a line of truck accessories such as hangers, baseplates, and bushings. thunder trucks is also known for its unique design of the hanger, which is said to be stronger and more durable than traditional hangers and is also still a popular choice among professional and amateur skateboarders alike.</p>
            </div>
          </div>
        </div>

        <div className="brand">
          <div className='textcontent'>
            <p className='texttag font-mono text-sm mb-48'><b> these are some of the most influential brands in skateboarding history, which is why they're featured on this application. more brands to be added in the future, so be on the lookout.</b> </p>
          </div>
          </div>

    </div>
  )
}

export default TruckBrands