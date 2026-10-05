// Reviewed 2026-10-05. Source verification concerns attribution, not proof of alien life.
const REFERENCES = {
  alienint: {title:'AlienINT — Types of Aliens',url:'https://alienint.com/types-of-aliens/',type:'Folklore overview',access:'Previously reviewed',note:'Starting summaries and illustrative image links.'},
  pbsGreys: {title:'PBS Monstrum — Why Are Grays So Common?',url:'https://www.pbs.org/video/alien-abduction-and-ufos-why-are-grays-so-common-d5uw7p/',type:'Cultural history',access:'Page reviewed',note:'Video description and transcript; examines the development of the Grey image.'},
  hillArchive: {title:'University of New Hampshire — Using the Hill Collection',url:'https://library.unh.edu/find/archives/collections/using-materials/using-betty-barney-hill-collection',type:'Archival finding aid',access:'Page reviewed',note:'A guide to accessing primary documents, not independent confirmation of an abduction.'},
  adamski: {title:'Adamski Foundation — The Landing, November 20, 1952',url:'https://www.adamskifoundation.com/html/Landing.htm',type:'Claimant archive',access:'Indexed text reviewed',note:'The homepage timed out; this specific account was available through indexed text. The foundation advocates Adamski’s claims.'},
  robertson: {title:'David G. Robertson — Reptilians, the New Age and Globalisation',url:'https://davidgrobertson.wordpress.com/2013/05/21/presentation-universalising-the-other-reptilians-the-new-age-and-globalisation/',type:'Academic interpretation',access:'Page reviewed',note:'A researcher’s presentation about the social and religious meaning of the narrative.'},
  marciniak: {title:'Barbara Marciniak — Bringers of the Dawn',url:'https://www.simonandschuster.com/books/Bringers-of-the-Dawn/Barbara-Marciniak/9780939680986',type:'Publisher description / channeling',access:'Page reviewed',note:'Describes channeled teachings; the complete book was not reviewed.'},
  mack: {title:'John Mack Institute — Alien Concepts',url:'https://johnemackinstitute.org/2001/07/alien-concepts-an-interview-with-dr-john-mack/',type:'Researcher interview',access:'Page reviewed',note:'Andrew Lawler’s 2001 interview records Mack’s views and acknowledges controversy over his methods.'},
  kelly: {title:'PBS Kentucky Life — Little Green Men',url:'https://www.pbs.org/video/little-green-men-khvig8/',type:'Local history / reported testimony',access:'Page reviewed',note:'Transcript includes a witness’s daughter and a local historian.'},
  hall: {title:'Charles James Hall — Millennial Hospitality',url:'https://www.authorhouse.com/en/bookstore/bookdetails/232208-millennial-hospitality',type:'Publisher description / claimed experience',access:'Page reviewed',note:'Book details and excerpts, not the complete book or independent corroboration.'},
  jacobs: {title:'David M. Jacobs — Walking Among Us',url:'https://redwheelweiser.com/book/walking-among-us-9781938875144/',type:'Publisher description / abduction literature',access:'Page reviewed',note:'Bibliographic details and promotional text were reviewed. Specific hybrid anatomy is not established by this page.'},
  milanovich: {title:'Milanovich, Rice and Ploski — We, the Arcturians',url:'https://athenalctr.com/product/we-the-arcturians/',type:'Author-associated book description / channeling',access:'Page reviewed',note:'Describes claimed transmissions; it is not an astronomical or biological study.'},
  cori: {title:'Patricia Cori — The New Sirian Revelations',url:'https://www.innertraditions.com/books/the-new-sirian-revelations',type:'Publisher description / channeling',access:'Indexed text reviewed',note:'Direct retrieval failed on recheck. Indexed publisher text supports the limited summary here.'},
  oracc: {title:'Nicole Brisch / ORACC — Anunna (Anunnaku, Anunnaki)',url:'https://oracc2.museum.upenn.edu/amgg/listofdeities/anunna/index.html',type:'Scholarly historical reference',access:'Indexed text reviewed',note:'Direct retrieval failed on recheck. Indexed scholarly text identifies a group of Mesopotamian gods.'},
  royal: {title:'Lyssa Royal and Keith Priest — The Prism of Lyra',url:'https://www.lyssaroyal.net/ebooks.html',type:'Author bibliography / channeling',access:'Page reviewed',note:'Book description and chapter list; it does not substantiate a feline appearance.'}
};
const RESEARCH = {
  greys: {aliases:['Grays','Grey aliens','Gray aliens','Zeta Reticulans','Roswell Greys'], sections:[
    ['Reported appearance','PBS describes a humanoid form with elongated limbs, dark oversized eyes, a small nose and a narrow mouth.',['pbsGreys']],
    ['Origins of the story','Monstrum places Grey imagery within older abduction folklore and modern screen culture. It discusses the Hill narrative and the influence of film and publishing.',['pbsGreys']],
    ['Encounter records','The University of New Hampshire holds the Betty and Barney Hill Papers. Its access guide is a route to original material rather than another retelling.',['hillArchive']],
    ['Evidence and interpretation','An archive preserves an account; its existence does not authenticate every event described. PBS supplies cultural context rather than a species identification.',['hillArchive','pbsGreys']]
  ]},
  nordics: {aliases:['Nordic aliens','Nordic'],sections:[
    ['Origins of the story','The Adamski Foundation presents a claimed face-to-face meeting with a human-looking visitor in the California desert on November 20, 1952.',['adamski']],
    ['Reported appearance','The foundation’s landing account emphasizes an ordinary human appearance. Its page alone does not establish every physical trait attributed to Nordics in later retellings.',['adamski']],
    ['Evidence and interpretation','This is an advocacy archive presenting an encounter claim. Keep its account attributed to Adamski and distinguish the foundation’s arguments from independent verification.',['adamski']],
    ['Related traditions','Compare Pleiadians as a separate spiritual-contact tradition; similar portrayals are not sufficient reason to merge the two entries.',['marciniak']]
  ]},
  reptilians: {aliases:['Reptilian','Reptilian aliens','Reptoids'],sections:[
    ['Origins and interpretation','Robertson’s presentation examines David Icke’s reptilian narrative in relation to New Age thought and globalization. He analyzes how it assigns the source of social inequality to nonhuman agents.',['robertson']],
    ['Evidence and interpretation','The presentation is research about a belief system. It does not supply biological evidence or validate allegations that particular people are reptiles.',['robertson']]
  ]},
  pleiadians: {aliases:['Pleiadian','Pleiadian aliens'],sections:[
    ['Published tradition','Barbara Marciniak’s Bringers of the Dawn was published in 1992. Its publisher describes a compilation drawn from hundreds of hours of channeling.',['marciniak']],
    ['Claimed role and communication','The book presents Pleiadians as teachers addressing human spiritual development and collective change. The communication method is described as channeling, not a documented physical meeting.',['marciniak']],
    ['Evidence and interpretation','The publisher page verifies the book’s identity and its stated premise. It does not verify the source of the messages or establish the beings’ physical characteristics.',['marciniak']]
  ]},
  insectoids: {aliases:['Mantis','Mantids','Mantid','Mantis aliens','Insectoids','Insectoid aliens'],sections:[
    ['Reported appearance','In his 2001 interview, John Mack explicitly mentions insectlike and praying-mantis-like figures among the varieties described by experiencers.',['mack']],
    ['Research context','Mack discusses interviews and his approach to assessing testimony. The article also describes professional controversy surrounding his interpretation of abduction reports.',['mack']],
    ['Evidence and interpretation','This interview establishes that Mack discussed the category. It does not provide a confirmed homeworld, standardized anatomy, or a documented hierarchy placing mantids above Greys.',['mack']]
  ]},
  'little-green-men': {aliases:['Little green man'],sections:[
    ['Notable encounter story','Kentucky Life revisits the 1955 Kelly encounter near Hopkinsville with a witness’s daughter and a local historian. The transcript describes a frightened household seeking help after alleged encounters.',['kelly']],
    ['Appearance discrepancy','The program’s retelling describes a small, luminous silver figure. The familiar green label should not be treated as an exact eyewitness description.',['kelly']],
    ['Evidence and interpretation','The program documents a lasting local story and testimony about it. Those are different from independently identifying an extraterrestrial creature.',['kelly']]
  ]},
  'tall-whites': {aliases:['Tall White','Tall White aliens'],sections:[
    ['Published account','AuthorHouse lists Charles James Hall’s Millennial Hospitality with a 2003 publication date. Its description connects the narrative to his experiences as an Air Force weather observer in the 1960s.',['hall']],
    ['Themes in the account','The available excerpts involve desert ranges, fear, and encounters with beings the narrative calls white creatures. The description also emphasizes relationships and family life.',['hall']],
    ['Evidence and interpretation','This publisher page identifies Hall’s book and its autobiographical claims. It cannot establish military agreements, a home planet, or independently verified alien biology.',['hall']]
  ]},
  hybrids: {aliases:['Hybrid','Human alien hybrids','Human-alien hybrid'],sections:[
    ['Published tradition','Red Wheel/Weiser lists David M. Jacobs’s Walking Among Us as a 2015 book. Its promotional description advances a narrative of alien integration and concealed interaction with humanity.',['jacobs']],
    ['Evidence and interpretation','The page is useful for publication details and the author’s stated subject. Its accessible text does not substantiate particular hybrid physical traits; those require examination of the underlying accounts.',['jacobs']]
  ]},
  arcturians: {aliases:['Arcturian','Arcturian aliens'],sections:[
    ['Claimed origin and communication','The description of We, the Arcturians credits Norma Milanovich, Betty Rice and Cynthia Ploski. It presents messages received through Milanovich using a computer, attributed to beings identifying with Arcturus.',['milanovich']],
    ['Claimed role','The described messages concern a starship, a way of life, and a spiritual transition for Earth. These are assertions within the book’s framework.',['milanovich']],
    ['Evidence and interpretation','The page documents how the authors frame their material. It does not provide independent evidence of the transmitting beings or their location.',['milanovich']]
  ]},
  sirians: {aliases:['Sirian','Sirian aliens'],sections:[
    ['Origins of the account','The publisher links Patricia Cori’s Sirian teachings to an out-of-body experience she reports from 1996. The New Sirian Revelations presents messages attributed to a Sirian High Council.',['cori']],
    ['Claimed role','The material offers spiritual guidance about consciousness and collective transformation. It is presented as communication with interdimensional beings.',['cori']],
    ['Evidence and interpretation','Publisher text supports an account of Cori’s beliefs and writing. It does not establish aquatic anatomy or an archaeological link to ancient civilizations. Direct page access failed during rechecking.',['cori']]
  ]},
  anunnaki: {aliases:['Anunna','Anunnaku','Annunaki'],sections:[
    ['Historical origins','Nicole Brisch’s ORACC entry describes the Anunna as a group of Mesopotamian gods. The term varies across periods and can refer to high-ranking deities, a city’s pantheon, or underworld gods.',['oracc']],
    ['Traditional role','Deciding fates is among the functions discussed in the scholarly entry. The number and membership of the group are not fixed across the textual record.',['oracc']],
    ['Evidence and interpretation','Historical attestation concerns religious texts and beliefs. It does not establish that the deities were extraterrestrials. Later alien interpretations must be documented separately from the ancient sources.',['oracc']]
  ]},
  lyrans: {aliases:['Lyran','Lyran aliens'],sections:[
    ['Published tradition','Lyssa Royal’s author page identifies The Prism of Lyra, coauthored with Keith Priest, as a channeled work first published in 1989, with a revised 2011 edition.',['royal']],
    ['Claimed connections','The listed chapters connect Lyra with broader narratives involving Sirius, Orion, the Pleiades, Arcturus and Zeta Reticuli. These are relationships inside the book’s spiritual framework.',['royal']],
    ['Appearance and evidence','The reviewed description does not specify feline anatomy. That feature remains part of the original AlienINT summary rather than a detail corroborated by this author page.',['royal']]
  ]}
};
