import React, {useEffect} from 'react'

const BoardBrands = () => {

    
  return (
    <div className='culture-content'>
      <div className='brands-headline'>
        <h2 className='culture-history font-mono text-xl'><b>featured board companies</b></h2>
        <p className='hello font-mono text-xs'>the planks of wood under your feet</p>
      </div>

        <div className='brand m-0.5'>
          <div className='brandcontent -mt-20'>
            <div className='logoimage hover:scale-125 duration-700'> 
              <a href="https://www.antiheroskateboards.com/">
                <img className='-rotate-6' src="/images/logos/anti-hero-logo.png" alt="anti-hero-logo" />
              </a>
            </div>

            <div className='textcontent'>
              <p className='texttag font-mono text-sm mr-24'><b>anti-hero:</b> founded in 1995 by professional skateboarder Julien Stranger. the company is known for its gritty and raw aesthetic, which is reflected in its graphics and team riders. Some of the company's notable riders include Grant Taylor, Tony Trujillo, and John Cardiel. Anti-Hero's first product was a deck with a graphic of a skull wearing a beanie with the name "Anti-Hero" written above it. over time, Anti-Hero was able to establish itself as a reputable brand with a dedicated following, thanks in part to its team riders and their innovative skateboarding styles. today, Anti-Hero is considered one of the most respected and influential skateboarding brands in the industry.</p>
            </div>
          </div>
        </div>

        <div className='brand m-0.5 '>
          <div className='brandcontent -mt-20'>
            <div className='textcontent'>
              <p className='texttag font-mono text-sm'><b>krooked skateboards:</b> founded by professional skateboarder Mark "Gonz" Gonzales in 2002. the company is known for its unique and creative graphics, as well as its team of talented and influential riders such as Sebo Walker, Mike Anderson, and Ronnie Sandoval. Gonz, who is widely considered one of the most innovative and influential skateboarders of all time, created krooked as a way to express his own unique vision for the sport and the culture surrounding it. krooked's first product was a deck with a graphic featuring a cartoon character of Gonz himself, with a crooked smile and a skateboard, which represented the company name. today, krooked is considered one of the most respected and influential skateboarding brands in the industry, known for its creativity, fun, and the way it pushes the limits of what is possible on a skateboard.</p>
            </div>
            <div className='logoimage hover:scale-125 duration-700'>
              <a href="https://krookedskateboarding.com/">
                <img className='rotate-6' src="/images/logos/krooked-eyes-logo.png" alt="" />
                </a>
            </div>
          </div>
        </div>

        <div className="brand m-0.5">
          <div className="brandcontent -mt-20">
            <div className="logoimage hover:scale-125 duration-700">
              <a href="https://faworldentertainment.com/collections/hockey">
                <img className='-rotate-6 ml-16' src="/images/logos/hockey-logo-black.png" alt="" />
              </a>
            </div>

            <div className='textcontent'>
              <p className='texttag font-mono text-sm mr-48'><b>hockey:</b> founded in 2010 by professional skateboarder Anthony Van Engelen, also known as "AVA". the company is known for its unique aesthetic and focus on high-quality products. the company's name and logo is inspired by the sport of hockey, which can be seen in the team's style of skating. the company began by releasing a small range of skateboard decks, each with a unique graphic and high-quality construction. the company continues to release new products, including decks, wheels, clothing, and accessories, all of which are designed to meet the needs of skateboarders at all skill levels. thanks to some team riders such as Brad Cromer, Kevin Terpening, and John Fitzgerald, the company was able to establish it's self a reputable & respected brand. </p>
            </div>
          </div>
        </div>

        <div className="brand">
          <div className='textcontent'>
            <p className='texttag font-mono text-sm mb-48'><b> these are some of the most influential brands in skateboarding history, which is why they're featured on this application. more brands to be added in the future, so be on the lookout.</b></p>
          </div>
          </div>


    </div>
  )
}

export default BoardBrands