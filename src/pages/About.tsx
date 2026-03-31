import Layout from "@/components/Layout";

const heroImage = "https://images.squarespace-cdn.com/content/v1/5a8a382cf14aa1408b29abde/1522189957475-6QPOHA9PIAZL4G5Y6DIB/color+%2829+of+37%29.jpg";
const jesseImage = "https://images.squarespace-cdn.com/content/v1/5a8a382cf14aa1408b29abde/1522190631574-7N209GCT4OK2IGYQIXVW/jesse.png";
const lauraImage = "https://images.squarespace-cdn.com/content/v1/5a8a382cf14aa1408b29abde/1522190979657-2WRXR8SFJM8QA7SIU8WR/laura.png";

const About = () => (
  <Layout>
    <div className="w-full h-[40vh] sm:h-[50vh] overflow-hidden">
      <img
        src={heroImage}
        alt="United Noshes dinner"
        className="w-full h-full object-cover"
      />
    </div>

    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8">About United Noshes</h1>

      <div className="prose-like space-y-5 text-muted-foreground leading-relaxed">
        <p>
          United Noshes is a series of 194 dinner parties, one for each member of the United Nations, in alphabetical order.
          We started in July 2011 in Brooklyn, squeezing friends and strangers alike into a 500-square-foot apartment, and in August 2014 moved to Portland, Oregon.
        </p>
        <p>
          We strive to create as authentic a meal as our capacity and resources afford, carefully researching recipes and investing the necessary time in traditional preparation methods.
          We love it when someone who's from, lived in, has family from, or otherwise familiar with a country helps us figure out what to make and how.
          It's even better when they join us in the kitchen and at the table.
        </p>
        <p>
          We feel so lucky to be able to eat for enjoyment and share food with our friends through our United Noshes dinners.
          We recognize that so many people around the world struggle to meet their daily needs, so we ask our guests to bring a donation in support of{" "}
          <a href="https://www.mercycorps.org/people/unitednoshes/wheremostneeded" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
            Mercy Corps
          </a>
          , an international development and relief non-profit organization, which is then matched.
        </p>
      </div>

      {/* Bios */}
      <div className="mt-16 space-y-14">
        {/* Jesse */}
        <div className="flex flex-col sm:flex-row gap-8 items-start">
          <img src={jesseImage} alt="Jesse Friedman" className="w-32 h-32 rounded-full object-cover flex-shrink-0" />
          <div>
            <h2 className="text-2xl font-bold">Jesse Friedman</h2>
            <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">Chef / Writer</p>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>
                Jesse hails from Oakland, CA, where he learned to cook from his dad and bake from his mom.
                His parents ran the Friedmans Microwave Ovens store in San Francisco, his mom is a registered dietitian,
                and his grandfather was a melon and papaya farmer in Mexico, so food runs deep in the family.
              </p>
              <p>
                At the University of Chicago, he studied linguistics, studied abroad in France and Switzerland,
                and got his start cooking for crowds as the food coordinator for a folk festival.
                He spent eleven years as a marketer at Google, across Google Maps, policy advocacy, and Google Translate;
                at the latter he was instrumental in producing a{" "}
                <a href="http://theinspirationroom.com/daily/2016/everyone-speaks-food/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
                  pop-up restaurant
                </a>{" "}
                with star chefs cooking food from around the world.
              </p>
              <p>
                He's now a marketing and communications consultant, which is a fancy way of saying he can now easily work bread-baking into his weekday schedule.
              </p>
            </div>
          </div>
        </div>

        {/* Laura */}
        <div className="flex flex-col sm:flex-row gap-8 items-start">
          <img src={lauraImage} alt="Laura Hadden" className="w-32 h-32 rounded-full object-cover flex-shrink-0" />
          <div>
            <h2 className="text-2xl font-bold">Laura Hadden</h2>
            <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">Host / Photographer</p>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>
                Laura is a picky eater who grew up in Tacoma, WA by way of Vancouver, Canada.
              </p>
              <p>
                By day, she is the Executive Producer of Live Wire Radio, a public radio variety show currently reaching over 300,000 listeners across the country.
                She also collaborates with Tennessee Watson on Wage/Working, a jukebox-based oral history project in which stories from workers are edited to the length of time it takes them to earn a dollar… hence the jukebox in the dining room.
              </p>
              <p>
                Previously, she spent three years producing media for The Moth and taught storytelling and media production through the Center for Digital Storytelling as well as at CUNY Hunter College.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default About;
