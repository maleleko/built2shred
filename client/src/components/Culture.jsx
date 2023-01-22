import React, {useState} from 'react'
import '../App.css'
import ReactPlayer from 'react-player'




const Culture = () => {
  const [youtubeID] = useState('Am3pP6CW_S4')


  return (
    <div className='culture-content'>

      <div className='culture-history font-mono text-xl'>
        <h2>the history of skateboarding.</h2>
      </div>

        <div className='section1'>
          <div className='cultureimage hover:scale-125 duration-700'>
            <img className='-rotate-3 shadow-md opacity-75 hover:opacity-100 duration-500 border-solid' src="https://a.espncdn.com/photo/2015/0225/as_skate_rhino14_2048.jpg" alt="ronnie sandoval: stylish backside indy" />
            <p className='photoCC -rotate-3 text-sm'>photo cc: rhino | skateboarder: ronnie sandoval</p>
          </div>

          <div className='textcontent1'>
            <p className='texttag font-mono text-sm mr-32'>for many people, skateboarding is more than just a sport. it's an escape from the pressures and responsibilities of life weighing down on you. skateboarding gives the rider a way to express themselves without judgment from their peers. it's one of the few activities that truly makes you feel "free." <br />
            
            <br /> “Skateboarding is a poetry of motion.” - Stevie Williams</p>
          </div>
        </div>



      {/* section 2 */}
      <div className="section2">
        <div className='textcontent'>
          <p className='texttag font-mono text-sm'>starting around the 1950s, surfers came up with an idea of a "land surfer" as a way to practice balance when the waves were flat. the act of riding these land surfers was nicknamed "sidewalk surfing" at first, many surfers loved the idea since it was essentailly surfboarding, but on concrete! truly an innovative idea for that time period. <br />
          <br /> surfers used to shave down their old, shorter surfboards to attach wheels onto them. wooden surfboards were essentailly the first skateboards.</p>
        </div>

        <div className='cultureimage hover:scale-125 duration-700'>
          <img className='rotate-3 shadow-md opacity-75 hover:opacity-100 duration-500 border-solid' src="https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/8921485/image/f8f629a199c8c82d8b6ca16c9e0565b8" height='500px' width='500px' alt="groups of surfers riding their sidewalk surfers"/>
          <p className='photoCC rotate-3'>photo cc: <a href="https://www.timetoast.com/timelines/the-evolution-of-skateboards-292cacd5-1169-4473-9527-ca1331d846c4">timetoast</a></p>
        </div>
      </div>


      {/* section 3 */}
      <div className='section3'>
        <div className='cultureimage hover:scale-125 duration-700'>
          <img className='-rotate-3 shadow-md opacity-75 hover:opacity-100 duration-500' src="https://cdn.shopify.com/s/files/1/0018/9081/1993/articles/original-skateboard-1.jpg?v=1536826678" height='500' width='341' alt="" />
          <p className='photoCC -rotate-3'>photo cc: <a href="https://www.disruptsports.com/">disruptsports</a></p>
        </div>

        <div className='textcontent font-mono text-sm'>
          <p className='texttag'>as time passed by, skateboards evolved. many companies realized the innovation of easy transportation and picked up the idea. it wasn't until 1959 a company by the name of Roller Derby released the very first official skateboard with metal wheels. shortly after, other companies such as Makaha, Hobie, and Jacks - would then create their own version of the skateboard. as innovations were made in the 1960s, the popularity of skateboarding started growing at exponential rates. the event that pushed the popularity of skateboarding was the very first skateboarding exihibition which was held in california organized by the founder of Makaha Skateboards. </p>
          <br/>
          <p className='texttag'>however, due to countless injuries, the Pasadena Youth Council appealed to City Directors to request that skateboards become outlawed to cut down on the growing list of accidents caused by affixing skate wheels on short lengths of 2x4's due to the lack of grip these wheels provided to the concrete.</p>
        </div>
      </div>


      {/* section 4 */}
      <div className="section4">
        <div className='textcontent '>
          <p className='texttag font-mono text-sm'>as the 1960s ended, skateboarding started becoming mundane due to the lack of innovations as well as the risk of injury. however, in 1973 a new innovation of wheels was introduced: urethane wheels. these wheels offered immense grip to concrete compared to the prior metal wheels. what was once a noisy, bumpy, slippery ride, was now a smoother, faster, and quieter ride. shortly after this, skateboarding experienced a resurgence in popularity with the development of new tricks and access to skateparks built in the mid 1960s, many people started utilizing these plots of land with obstacles to practice their craft. however due to the growing list of insurance claims, the majority of skateparks started closing down, forcing local skateboarders to move to the street or to backyard pools.</p>
        </div>

        <div className='cultureimage hover:scale-125 duration-700'>
            <img className='rotate-3 shadow-md opacity-75 hover:opacity-100 duration-500' src="https://s.yimg.com/ny/api/res/1.2/D6tq91ZmAnFxpN9tF.EFQw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYwODtjZj13ZWJw/https://media.zenfs.com/en/the-florida-times-union/daee88df2aafcc5791fca20e8e172717" height='650px' width='412px' alt="" />
            <p className='photoCC rotate-3'>photo cc: <a href="https://shorturl.at/cmzC7">yahoo</a> <br /> skateboarders: tom mcconnell & mitch kaufmann</p>
          </div>
      </div>


      {/* section 5 */}
      <div className='section5'>
        <div className='cultureimage hover:scale-125 duration-700'>
            <img className='-rotate-3 shadow-md opacity-75 hover:opacity-100 duration-500' src="https://www.thrashermagazine.com/images/image/Features/2020/Louie_Lopez_/LouieLopez_BluntTransfer_PhotoCoulthard_DSC_4912_1x.jpg?t=1606524856" height='500px' width='333px' alt="louie lopez- bluntslide trick on handrail" />
            <p className='photoCC -rotate-3'>photo cc: <a href="https://www.thrashermagazine.com/">thrasher mag</a> | skateboarder: louie lopez</p>
          </div>


        <div className='textcontent font-mono text-sm'>
          <p className='texttag'>with time continuing to pass by, more innovations were made. in 1977, Tom Stewart built the world's first halfpipe called "The Rampage" in Encinitas, California. skaters from all over were inspired to create their own backyard ramps. skateboarders went from rolling around on the street and abandoned backyard pools to a mixture of backyard ramps and skateparks. the following year of 1978, a skateboarder by the name of Alan Gelfand invented a trick named the "Ollie", the most important manuever to street style skateboarding. this trick single-handedly paved the way for more complex manuevers that we see in skateboarding today.</p> <br />

          <p className='texttag mr-28' >time skip to the 1980s, street style skateboarding was gaining popularity, the idea of skating handrails and ramps slowly started becoming the norm within the skateboarding community. this allowed skaters to have diversity within their skateboarding style. you could choose to skate at the skateparks with the ramps and bowls, or on the streets with the handrails and stairsets, or a mixture of both. that is the beauty of skateboarding, you can essentially skate however you want.</p> <br />
        
          <p className='texttag'>in 1981 one of the biggest skateboarding companies was founded: Thrasher Magazine, a staple in the skateboarding community, with their infamous motto: "skate and destroy". shortly after this, more and more skate companies were founded.</p>
        </div>
      </div>


      {/* section 6 */}
      <div className='section6'>
        <div className='textcontent font-mono text-sm'>
          <p className='texttag'>the 1980s was a good time for skateboarding, people were advancing the style of skateboarding with many new tricks being introduced, naturally skateboarders attempted to grow their arsenal of tricks. private jams, public skateboarding contests and many more events were being held, allowing skateboarders to prove themselves and potentailly gain sponsors and adverts in magazines. take in mind, professional skateboarding was a thing since the 1970s, but with the access to skateparks and backyard ramps, skaters had many ways on improving, thus allowing skateboarders to become professional if given the opportunity, which is just about every skateboarder's dream.</p><br />

          <p className='texttag'>let's skip to the 1990s, this is when skateboarding exploded in popularity. in 1995, the X-Games were held and covered by ESPN which broadcasts many of the sports we see on television today. professional skaters around the nation, arguably the world, came to compete in the X-Games for a chance at becoming a gold medalist. the contest was split up in 2 different categories: street and vertical. points were tallied by contestants "line", which is a string of successfully landed tricks followed by one another within a certain timeframe. with the coverage of the competiton hosted by ESPN, this helped boost the popularity of skateboarding by a very large margin. people became so inspired and amazed by what these skateboarders were doing, they wanted to try it out for themselves.</p>
        </div>

        <div className='cultureimage hover:scale-125 duration-700'>
          <img className='rotate-3 shadow-md opacity-75 hover:opacity-100 duration-500' src="https://boardridingstorageus.blob.core.windows.net/images/resize/x-games-relives-top-25-moments-in-honor-of-25th-anniversary-june-24-1032.jpg" alt="tony hawk stalefish at x-games" />
          <p className='photoCC rotate-3'>photo cc: espn, nick guise-smith | skateboarder: tony hawk</p>
        </div>
      </div>


      {/* section 7 */}
      <div className="section7">
        <div className='textcontent font-mono text-sm'>
          <p className='texttag font-mono text-sm'>now we're here in the 2000s, skateboarding is very much alive and well. with thousands of skateparks built around the world and with much support of the skateboarding community, millions of people have access to the ability to learn, shred, express themselves, have fun, make new friends, and make memories. skateboarding is an art, and the pavement is your canvas. express yourself in whichever way you see fit, put your feet on the board and experience freedom. go out, eat some concrete, shred and most importantly, have fun.</p> <br />

          <p className='texttag font-mono text-sm'>below, is a featured video of the skateboarding legend Jeff Grosso(may he rest in peace), go more into detail about the underlying philosophy of skateboarding.</p>

          
        </div>
      </div>

      <div>
                {/* <div>
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${youtubeID}?autoplayer=0`} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div> */}
      </div>

    </div>
  )
}

export default Culture