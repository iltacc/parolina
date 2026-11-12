// Dizionario di parole italiane semplici e pronunciabili (senza accenti).
const GENERALI = `
albero alba amico anello angolo anima arco argento aria arancia
bacio balcone banco barca bello bosco botte bottone brezza buono
cane canto capra carta casa castello cavallo cena cielo cima
collina colore coppa corda corona cortile cuore cuscino dado delfino
dente dono drago duca erba estate fabbro faro farfalla fata
festa fiamma fiore fiume foglia fontana forno forte frutto fumo
gallo gatto gelato giardino giorno giallo goccia grano grotta guanto
isola lago lama lampo lana leone letto libro limone lino
luce luna lupo madre mago mano mare marmo mela miele
monte mondo moneta mulino muro nave neve nido nocciola notte
nuvola oca olio oliva onda orso oro orto pace palazzo
palla pane papavero passo pasta penna pepe perla pesca piano
pietra pino pioggia piuma ponte porta prato quadro radice ramo
rana re riccio riso roccia rosa ruota sale salto scala
scudo seme sentiero sera sole sorriso spada stella strada sogno
tavolo tela tempo terra tetto tigre topo torre treno tromba
uva vaso vela vento verde vetro via vino viola volpe
zaino zucca zucchero barone bandiera campana candela cammino cappello carota
coniglio cometa conchiglia coraggio corallo cupola diamante dolce faggio fagiolo
fragola fulmine gabbiano girasole lanterna lucciola magia matita melone mirtillo
nebbia ombra ortica padella pagina paletta pallone panino pantera pavone
pigna pirata pollo pomodoro posta quercia rame rondine rubino salame
sasso sedia segreto sirena sorgente spiga stagno tamburo tappeto tesoro
timone tortora trota tulipo valle vulcano zebra zefiro
abete acero agnello aquila arancio arena armadio astro autunno balena
banana basilico becco biscotto borsa bottega brodo bussola cacao calza
camino campo canale cantina capanna carbone carro cascata catena cavolo
cedro cerchio cervo chiave chiodo cigno ciliegia cipolla collana colonna
coperta coro cotone cozza criceto cucina cupido destino divano dottore
eco elmo eroe fango fata fieno filo fiocco flauto foca
formica fragile freccia fungo gamba gemma gesso ghianda giglio gioco
gomitolo gufo isola lampada larice lavagna legno lepre lettera lucertola
maglia mandorla mantello marmotta martello medusa melograno mestolo miniera mosca
motore mucca nastro nocciolo nonno occhio orologio ostrica pacco paglia
palma panda pappagallo parola pecora pendolo pesce piatto piccione pinolo
pioppo piroga pittore polpo poltrona pozzo prugna pulce quaderno raggio
regina remo rete rifugio rospo rubinetto sabbia salice sapone scatola
scimmia scoglio serpente sigillo slitta soldato sorella specchio spugna stivale
tazza teatro tenda timo topazio tortino trifoglio tunnel uccello uovo
vagone vapore velluto ventaglio vespa vigna violino volante zampa zenzero
acqua alloro ambra ancora anguria aratro asino bambola biglia burro
caffe calamaro cammello canoa capitano carciofo castagna cavaliere cervello cesto
cioccolato cocco colombo cornice cratere cristallo dattero domino elefante falco
fenice fico finestra fisarmonica foresta formaggio gamberetto gazza ghiaccio giraffa
gondola grillo iris lattuga leggenda lucchetto lumaca mappa margherita melodia
merlo mosaico nuvoletta orchidea organo panchina pappa pattino pinguino pistacchio
pozione quarzo racchetta ragno ricamo ricotta rosmarino salvia scintilla sciroppo
semaforo smeraldo sonetto stambecco statua stoffa tartaruga tegola tesoro tiglio
torta tramonto trottola valzer ventola vetrina vortice zaffiro zanzara zufolo`;

// Argomenti: parole chiave (per riconoscere l'argomento) + parole a tema.
const TEMI = {
  animali: {
    chiavi: "animali animale zoo cane gatto bestie fauna pet cuccioli",
    parole: `cane gatto leone tigre orso lupo volpe cavallo coniglio topo
      rana pavone delfino balena aquila falco gufo pinguino zebra giraffa
      scimmia koala panda lepre riccio capra pecora mucca maiale gallo
      oca anatra cigno farfalla ape formica lucertola serpente tartaruga canguro`
  },
  cucina: {
    chiavi: "cucina cibo mangiare ricetta ricette pranzo cena cuoco chef ristorante pizza pasta dolci colazione food",
    parole: `pasta pizza pane riso sugo pesto olio sale pepe aglio
      basilico pomodoro formaggio burro latte uovo farina lievito torta biscotto
      gelato miele zucchero cacao caffe limone arancia mela pera fragola
      salame prosciutto lasagna gnocchi risotto polenta ragu padella forno mestolo`
  },
  mare: {
    chiavi: "mare spiaggia estate vacanza oceano costa barca vela isola surf sole nuoto",
    parole: `mare onda sabbia spiaggia conchiglia scoglio faro barca vela remo
      ancora porto isola corallo perla medusa polpo granchio delfino gabbiano
      sole estate costa baia vento marea tuffo bagno ombrellone sdraio
      sirena pesce stella nuoto riva laguna golfo scogliera bussola timone`
  },
  montagna: {
    chiavi: "montagna montagne alpi dolomiti neve sci trekking escursione rifugio bosco inverno",
    parole: `monte vetta cima rifugio sentiero bosco pino abete larice neve
      ghiaccio valle torrente cascata roccia sasso baita camino legna slitta
      sci scarpone zaino corda picco crinale lago malga marmotta stambecco
      aquila camoscio nebbia vento stella prato fiore genziana mirtillo fungo`
  },
  sport: {
    chiavi: "sport calcio palestra corsa tennis basket pallavolo squadra partita gioco fitness bici ciclismo",
    parole: `palla pallone porta rete goal campo squadra gara corsa salto
      tennis basket canestro racchetta bici pedale casco tuta maglia scarpa
      arbitro fischio coppa medaglia podio vittoria punto set tifo stadio
      pista nuoto tuffo remo vela atleta forza scatto finale record`
  },
  musica: {
    chiavi: "musica canzone canzoni concerto chitarra piano pianoforte band rock jazz cantare suonare",
    parole: `nota canto voce coro piano chitarra violino flauto tromba tamburo
      basso arpa organo banda ritmo tempo melodia accordo assolo palco
      concerto disco radio cuffia microfono opera aria sonata tango valzer
      rock jazz blues pop rap ballata strofa ritornello musica orchestra`
  },
  viaggi: {
    chiavi: "viaggio viaggi vacanza vacanze turismo aereo treno valigia mondo estero ferie",
    parole: `viaggio valigia zaino mappa bussola treno aereo nave porto stazione
      biglietto passaporto albergo ostello strada sentiero ponte confine citta
      paese mondo isola deserto foresta giungla cammino rotta meta tappa
      cartolina foto ricordo avventura partenza arrivo volo pilota hotel`
  },
  natura: {
    chiavi: "natura giardino piante pianta fiori fiore alberi albero bosco foresta ambiente verde orto",
    parole: `albero foglia ramo radice fiore rosa giglio tulipo viola margherita
      prato erba bosco foresta seme frutto pino quercia acero salice
      fiume lago sorgente pioggia sole vento nuvola terra roccia muschio
      felce edera orto zucca carota fragola ape farfalla nido lucciola`
  },
  casa: {
    chiavi: "casa famiglia arredamento cucina camera salotto appartamento home",
    parole: `casa porta finestra tetto muro scala camera letto cuscino coperta
      tavolo sedia divano lampada tappeto specchio armadio cassetto forno frigo
      tazza piatto bicchiere vaso quadro orologio chiave giardino balcone cortile
      camino libro tenda soffitta cantina portone garage terrazzo mensola`
  },
  tecnologia: {
    chiavi: "tecnologia computer informatica pc internet web app telefono smartphone software programmare codice robot lavoro digitale",
    parole: `codice robot schermo tastiera mouse cavo rete server modem chip
      pixel bit byte dato file cartella sito link pagina app
      cloud backup video audio camera batteria segnale antenna onda radar
      laser drone sensore motore circuito logica algoritmo memoria disco porta`
  },
  spazio: {
    chiavi: "spazio universo stelle stella pianeti pianeta astronomia galassia luna razzo astronauta cielo",
    parole: `stella luna sole pianeta cometa galassia nebulosa orbita razzo satellite
      astro cielo notte buio luce marte venere giove saturno plutone
      meteora cratere polvere vuoto infinito astronauta navicella sonda radar telescopio
      aurora eclissi zenit cosmo nova quasar pulsar via lattea`
  },
  italia: {
    chiavi: "italia citta citta' roma milano napoli venezia firenze torino storia arte cultura",
    parole: `roma milano napoli venezia firenze torino genova bologna palermo bari
      verona siena pisa lecce trento ancona perugia como capri amalfi
      gondola ponte piazza fontana torre duomo arena museo statua colonna
      vespa caffe pizza gelato opera teatro canale palazzo vicolo cupola`
  },
  cinema: {
    chiavi: "cinema film films serie tv attore attrice regista teatro spettacolo netflix",
    parole: `film scena ciak regia attore copione trama eroe mostro drago
      fantasma mago strega pirata cowboy robot alieno spia detective poliziotto
      sala schermo popcorn biglietto poltrona trailer finale sequel saga premio
      stella tappeto palco sipario luce ombra voce mito leggenda`
  },
  scuola: {
    chiavi: "scuola studio studiare universita classe libro libri lezione esame insegnante",
    parole: `libro quaderno penna matita gomma zaino banco lavagna gesso classe
      lezione esame voto pagella compito tema studio aula maestro scienza
      storia arte musica numero lettera parola frase verso poesia mappa
      atlante globo righello squadra compasso diario lettura scrittura`
  },
  auto: {
    chiavi: "auto macchina macchine motori moto formula corsa guida strada garage",
    parole: `auto motore ruota volante freno pedale marcia cambio sedile cofano
      faro clacson casco moto pista curva rettilineo sorpasso gara turbo
      pistone cilindro benzina gomma cerchio garage strada casello ponte galleria
      vespa camion furgone corsa scatto rombo velocita traguardo bandiera`
  }
};

const SPECIALI = "!?@#$%&*+=";

// Nomi propri, città, nazioni e luoghi storici (inclusi anche nelle parole generali)
const NOMI = `
marco luca paolo giulia sara chiara anna maria giorgio franco
matteo andrea davide simone fabio enrico pietro carlo bruno sergio
elena laura silvia marta lucia rosa irene paola vittoria beatrice
alessio dario elisa federica gianni lorenzo nicola riccardo stefano tommaso
aurora bianca camilla emma greta ilaria ludovica noemi sofia viola
john paul peter james david oliver harry jack thomas george
mary emily sophie alice grace lucy olivia hannah chloe laura
pablo diego carlos juan pedro carmen lola elena rosa ines
pierre louis jules hugo marie claire juliette camille chloe lea
hans otto karl felix lukas anna greta heidi frida klara
igor ivan boris olga nadia sasha mila ahmed omar layla
yuki kenji akira hana mei chen ravi amara kofi zara`;

const CITTA = `
roma milano napoli torino palermo genova bologna firenze bari catania
venezia verona messina padova trieste brescia parma modena reggio perugia
livorno cagliari foggia rimini salerno ferrara sassari latina monza siracusa
pescara bergamo vicenza trento bolzano novara piacenza ancona arezzo udine
lecce pisa siena lucca como assisi matera urbino ravenna mantova
cremona pavia aosta potenza taranto ragusa trapani cosenza viterbo capri
parigi londra madrid berlino vienna praga lisbona atene dublino oslo
stoccolma helsinki varsavia budapest zurigo ginevra bruxelles amsterdam monaco lione
marsiglia nizza siviglia valencia porto cracovia mosca istanbul cairo tunisi
dubai tokyo kyoto osaka pechino shanghai seul delhi mumbai bangkok
sydney melbourne toronto montreal boston chicago dallas miami denver seattle
houston lima bogota quito santiago caracas havana rio bahia dakar
nairobi lagos accra marrakech tangeri smirne beirut damasco baghdad teheran`;

const NAZIONI = `
italia francia spagna germania austria svizzera belgio olanda grecia portogallo
irlanda scozia galles inghilterra norvegia svezia danimarca finlandia islanda polonia
ungheria romania bulgaria croazia serbia albania slovenia malta cipro turchia
russia ucraina egitto marocco tunisia algeria libia kenya nigeria ghana
etiopia somalia sudan congo angola senegal mali niger ciad gabon
india cina giappone corea vietnam laos nepal tibet iran iraq
siria libano israele giordania oman qatar yemen kuwait
canada messico cuba brasile argentina cile peru bolivia ecuador colombia
venezuela uruguay paraguay panama haiti giamaica australia samoa tonga figi`;

const STORIA = `
waterloo solferino magenta custoza lepanto legnano caporetto vittorio piave isonzo
marengo austerlitz jena lipsia borodino trafalgar verdun somme marna ypres
hastings azincourt poitiers canne zama alesia farsalo azio pidna maratona
salamina platea termopili troia sparta micene cnosso delfi olimpia tebe
pompei ercolano paestum ostia tivoli canossa pontida calatafimi aspromonte mentana
alamein stalingrado normandia dunkerque tobruk anzio cassino salerno okinawa midway
gettysburg yorktown alamo saratoga lexington concord appomattox shiloh
cartagine babilonia ninive persepoli petra palmira giza luxor tebe karnak
machu cuzco tikal teotihuacan angkor ayutthaya kyoto nara gerusalemme bisanzio
colosseo pantheon partenone acropoli stonehenge versailles alhambra vesuvio etna camelot`;

TEMI.nomi = {
  chiavi: "nomi nome persone persona amici famiglia bambini figli",
  parole: NOMI
};
TEMI.citta = {
  chiavi: "citta citta' metropoli capitali capitale paesi viaggio mondo",
  parole: CITTA
};
TEMI.nazioni = {
  chiavi: "nazioni nazione stati stato paesi geografia bandiere mondo continenti",
  parole: NAZIONI
};
TEMI.storia = {
  chiavi: "storia storico storica battaglia battaglie guerra guerre risorgimento napoleone romani antico antica archeologia impero",
  parole: STORIA
};

// Titoli di canzoni famose (italiane e straniere, parola principale del titolo)
const CANZONI = `
azzurro volare caruso albachiara margherita emozioni gloria felicita generale rimmel
alice titanic soldi brividi sally vivere sapore tintarella malafemmena funiculi
anna gianna laura ancora insieme adesso ragazzo bambola serenata mediterraneo
arrivederci estate notte splendida certe pensiero amore mamma ciao parole
yesterday imagine thriller hello halo yellow creep clocks roxanne layla
angie jolene vogue heroes respect believe despacito macarena gasolina bailando
africa toxic umbrella happy paradise fernando chiquitita michelle help lola
suzanne starman changes titanium hallelujah smooth faith royals shallow dancing`;

// Cantanti e gruppi (italiani e stranieri)
const CANTANTI = `
mina battisti vasco ligabue jovanotti zucchero pausini ramazzotti baglioni dalla
morandi celentano mengoni elisa giorgia mahmood annalisa ultimo gazzelle ferro
guccini venditti battiato modugno carosone gaber jannacci renga nek raf
tozzi masini cocciante paoli tenco endrigo bocelli pavarotti berte rettore
oxa pravo cremonini negramaro maneskin elodie emma noemi arisa marracash
madonna bowie prince elvis sting adele shakira rihanna beyonce eminem
drake coldplay queen abba beatles oasis blur muse nirvana metallica
bono elton lennon jagger dylan marley santana sinatra presley cher
dido sade enya bjork moby avicii lizzo dua sia rosalia`;

// Vegetali: verdure, frutta, piante, fiori ed erbe
const VEGETALI = `
carota zucchina melanzana peperone cipolla aglio patata sedano finocchio carciofo
cavolo broccolo spinaci bietola lattuga rucola radicchio indivia porro asparago
fagiolino pisello cece lenticchia fava zucca cetriolo rapa ravanello pomodoro
mais scalogno cardo cicoria scarola topinambur
mela pera pesca albicocca susina prugna ciliegia fragola lampone mirtillo
ribes uva fico kiwi banana ananas mango papaya cocco dattero
melone anguria limone arancia mandarino cedro pompelmo melograno castagna noce
nocciola mandorla pistacchio avocado lime cachi nespola giuggiola mora clementina
rosa tulipano giglio orchidea girasole margherita violetta lavanda gelsomino geranio
ciclamino begonia azalea camelia magnolia mimosa glicine edera felce cactus
agave aloe bambu palma pino abete quercia faggio betulla salice
olmo tiglio cipresso larice ulivo vite ortensia peonia dalia papavero
ninfea loto basilico salvia timo origano menta prezzemolo rosmarino alloro
erica fucsia gardenia iris narciso croco giacinto oleandro bouganville ginestra`;

// Pesci (di mare e d'acqua dolce)
const PESCI = `
tonno salmone trota sogliola orata branzino spigola merluzzo nasello sardina
acciuga alice sgombro dentice cernia ricciola palamita sarago pagello triglia
rombo rana pescatrice coda razza murena grongo anguilla luccio carpa
tinca persico storione pesce spada squalo manta barracuda pagro scorfano
cefalo muggine aringa baccala stoccafisso platessa halibut tilapia pangasio piranha
cavalluccio pesce palla pagliaccio guppy molly discus scalare neon cobite
lampuga leccia aguglia boga zerro menola salpa occhiata mormora ombrina`;

// Razze di cani
const CANI = `
labrador golden beagle barboncino bassotto boxer bulldog carlino chihuahua dalmata
dobermann rottweiler husky malamute samoiedo akita shiba chow levriero whippet
setter pointer bracco segugio spinone cocker spaniel maltese volpino pastore
maremmano bergamasco corso mastino terranova sanbernardo alano collie border shih
yorkshire jack russell schnauzer pinscher pechinese lhasa bichon papillon spitz
basenji saluki afgano borzoi dingo kelpie corgi bovaro pitbull amstaf
weimaraner vizsla lagotto cirneco pug poodle schipperke briard beauceron leonberger`;

// Vocabolario completo: tutte le liste insieme
const VOCABOLARIO = [GENERALI, PESCI, CANI, NOMI, CITTA, NAZIONI, STORIA, CANZONI, CANTANTI, VEGETALI,
  ...Object.values(TEMI).map(t => t.parole)].join(" ");
