angular.module('galleryApp', [])
  .controller('galleryController', function() {
    var gallery = this;
    gallery.language = "en";

    gallery.get_global_progress = function() {
      var index;
      var total = 0;
      for (index = 0; index < gallery.items.length; ++index) {
        total = total + gallery.items[index].done;
      }
      return (total/gallery.items.length).toFixed(2);
    };

    gallery.title = {
      ro: "Estera",
      en: "Esther"
    };

    gallery.description = {
      ro: "carte de colorat",
      en: "coloring book"
    };

    gallery.episode = {
      ro: "Imaginea",
      en: "Image"
    };

    gallery.complete = {
      ro: "Realizat",
      en: "Complete"
    };

    gallery.you_can_help = {
      ro: "Poți să ajuți.",
      en: "You can help."
    };

    gallery.credits = {
      title: {
        ro: "Despre",
        en: "About"
      },
      text: {
        ro: "Autori: Ghiță Bizău, Adriana Precup",
        en: "Authors: Ghiță Bizău, Adriana Precup"
      }
    };

    gallery.languages = [
      {
        short: "ro",
        text: "Română"
      },
      {
        short: "en",
        text: "English"
      }
    ];

    gallery.change_language = function(language) {
      gallery.language = language;
      console.log(language);
    };

    gallery.get_progress = function(done) {
      if(done <= 10) {
        return "danger"
      } else {
        if(done > 80) {
          return "success"
        } else {
          if(done <= 50) {
            return "warning"
          } else {
            return "info"
          }
        }
      }
    };

    // EDIT HERE
    gallery.items = [
      {
        id: 0,
        img: '00.png',
        done: 70,
        title: {
          ro: "Coperta",
          en: "Cover"
        },
        text: {
          ro: "Coperta cărții (color)",
          en: "Book cover (color)"
        }
      },
      {
        id: 1,
        img: '01.png',
        done: 30,
        text: {
          ro: "Estera 1:1-4: Era pe vremea lui Ahaşveroş, al acelui " +
            "Ahaşveroş care domnea de la India până în Etiopia, peste o " +
            "sută douăzeci şi şapte de ţinuturi. Împăratul Ahaşveroş şedea " +
            "atunci pe scaunul lui împărătesc la Susa, în capitală. În al " +
            "treilea an al domniei lui, a dat un ospăţ tuturor domnitorilor " +
            "şi slujitorilor săi. Căpeteniile oştirii perşilor şi mezilor, " +
            "mai marii şi capii ţinuturilor s-au strâns înaintea lui. " +
            "El le-a arătat bogăţia strălucită a împărăţiei lui şi slava " +
            "minunată a mărimii lui, în multe zile, timp de o sută optzeci " +
            "de zile.",
          en: "Esther 1:1-4: Now it came to pass in the days of Ahasuerus, " +
            "(this is Ahasuerus which reigned, from India even unto " +
            "Ethiopia, over an hundred and seven and twenty provinces:) " +
            "That in those days, when the king Ahasuerus sat on the throne " +
            "of his kingdom, which was in Shushan the palace, " +
            "In the third year of his reign, he made a feast unto all his " +
            "princes and his servants; the power of Persia and Media, the " +
            "nobles and princes of the provinces, being before him: " +
            "When he shewed the riches of his glorious kingdom and the " +
            "honour of his excellent majesty many days, even an hundred " +
            "and fourscore days."
        }
      },
      {
        id: 2,
        img: '02.png',
        done: 30,
        text: {
          ro: "Estera 1:5-8: După ce au trecut aceste zile, împăratul a " +
            "dat întregului popor care se afla în capitala Susa, de la cel " +
            "mai mare până la cel mai mic, un ospăţ care a ţinut şapte " +
            "zile, în curtea grădinii casei împărăteşti. " +
            "Covoare albe, verzi şi albastre erau legate cu funii de in " +
            "subţire şi de purpură de nişte verigi de argint şi de nişte " +
            "stâlpi de marmură. Paturi de aur şi de argint stăteau pe o " +
            "podea de porfir, de marmură, de sidef şi de pietre negre. " +
            "Iar de băut turnau în vase de aur de felurite soiuri. Era " +
            "belşug de vin împărătesc, mulţumită dărniciei împăratului. " +
            "Dar nimeni nu era silit să bea, căci împăratul poruncise " +
            "tuturor oamenilor din casa lui să facă după voia fiecăruia.",
          en: "Esther 1:5-8: And when these days were expired, the king " +
"made a feast unto all the people that were present in Shushan the palace, " +
"both unto great and small, seven days, in the court of the garden of the " +
"king's palace; Where were white, green, and blue, hangings, fastened " +
"with cords of fine linen and purple to silver rings and pillars of " +
"marble: the beds were of gold and silver, upon a pavement of red, and " +
"blue, and white, and black, marble. And they gave them drink in vessels " +
"of gold, (the vessels being diverse one from another,) and royal wine in " +
"abundance, according to the state of the king. And the drinking was " +
"according to the law; none did compel: for so the king had appointed to " +
"all the officers of his house, that they should do according to every " +
"man's pleasure."
        }
      },
      {
        id: 3,
        img: '03.png',
        done: 30,
        text: {
          ro: "Estera 1:9-12: Împărăteasa Vasti a dat şi ea un ospăţ " +
            "femeilor, în casa împărătească a împăratului Ahaşveroş. " +
            "A şaptea zi, pe când inima împăratului era veselă de vin, a " +
            "poruncit lui Mehuman, Bizta, Harbona, Bigta, Abagta, Zetar şi " +
            "Carcas, cei şapte fameni care slujeau înaintea împăratului " +
            "Ahaşveroş, să aducă în faţa lui pe împărăteasa Vasti, cu " +
            "cununa împărătească, pentru ca să arate frumuseţea ei " +
            "popoarelor şi mai marilor săi, căci era frumoasă la chip. " +
            "Dar împărăteasa Vasti n-a vrut să vină când a primit prin " +
            "fameni porunca împăratului. Şi împăratul s-a supărat foarte " +
            "tare, s-a aprins de mânie.",
          en: "Esther 1:9-12 Also Vashti the queen made a feast for the " +
"women in the royal house which belonged to king Ahasuerus. " +
"On the seventh day, when the heart of the king was merry with wine, he " +
"commanded Mehuman, Biztha, Harbona, Bigtha, and Abagtha, Zethar, and " +
"Carcas, the seven chamberlains that served in the presence of Ahasuerus " +
"the king, To bring Vashti the queen before the king with the crown royal, " +
"to shew the people and the princes her beauty: for she was fair to look " +
"on. But the queen Vashti refused to come at the king's commandment by his " +
"chamberlains: therefore was the king very wroth, and his anger burned " +
"in him."
        }
      },
      {
        id: 4,
        img: '04.png',
        done: 30,
        text: {
          ro: "Estera 1:13-20: Atunci împăratul a vorbit cu înţelepţii " +
            "care cunoşteau obiceiurile vremii. Căci aşa se puneau la cale " +
            "treburile împăratului: înaintea tuturor celor ce cunoşteau " +
            "legile şi dreptul. Avea lângă el pe Carşena, pe Şetar, pe " +
            "Admata, pe Tarsis, pe Meres, pe Marsena, pe Memucan, şapte " +
            "domnitori ai Persiei şi Mediei, care vedeau faţa împăratului " +
            "și care aveau locul întâi în împărăţie. \"Ce trebuie\", a zis " +
            "el, \"să se facă împărătesei Vasti, după lege, pentru că n-a " +
            "împlinit ce i-a poruncit împăratul Ahaşveroş prin fameni?\" " +
            "Memucan a răspuns înaintea împăratului şi domnitorilor: \"Nu " +
            "numai faţă de împărat s-a purtat rău împărăteasa Vasti; ci şi " +
            "faţă de toţi domnitorii şi de toate popoarele care sunt în " +
            "toate ţinuturile împăratului Ahaşveroş. Căci fapta împărătesei " +
            "va ajunge la cunoştinţa tuturor femeilor şi le va face să-şi " +
            "nesocotească bărbaţii. Ele vor zice: \"Împăratul Ahaşveroş a " +
            "poruncit să i se aducă înainte împărăteasa Vasti, şi ea nu " +
            "s-a dus.\" Şi din ziua aceasta crăiesele Persiei şi Mediei, " +
            "care vor afla de fapta împărătesei, vor vorbi tot aşa tuturor " +
            "căpeteniilor împăratului: de aici va veni mult dispreţ şi " +
            "mânie. Dacă împăratul găseşte cu cale, să se dea poruncă din " +
            "partea lui şi să se scrie în legile perşilor şi mezilor, cu " +
            "arătarea că nu trebuie să se calce o poruncă împărătească, " +
            "după care Vasti să nu se mai arate înaintea împăratului " +
            "Ahaşveroş. Iar împăratul să dea vrednicia de împărăteasă " +
            "alteia mai bună decât ea. Porunca împăratului se va vesti " +
            "astfel în toată împărăţia lui - căci este mare - şi toate " +
            "femeile vor da cinste bărbaţilor lor, de la mare până la mic.\"",
          en: "Esther 1:13-20 Then the king said to the wise men, which " +
"knew the times, (for so was the king's manner toward all that knew law " +
"and judgment: And the next unto him was Carshena, Shethar, Admatha, " +
"Tarshish, Meres, Marsena, and Memucan, the seven princes of Persia and " +
"Media, which saw the king's face, and which sat the first in the kingdom;) " +
"What shall we do unto the queen Vashti according to law, because she hath " +
"not performed the commandment of the king Ahasuerus by the chamberlains? " +
"And Memucan answered before the king and the princes, Vashti the queen " +
"hath not done wrong to the king only, but also to all the princes, and " +
"to all the people that are in all the provinces of the king Ahasuerus. " +
"For this deed of the queen shall come abroad unto all women, so that they " +
"shall despise their husbands in their eyes, when it shall be reported, " +
"The king Ahasuerus commanded Vashti the queen to be brought in before him, " +
"but she came not. Likewise shall the ladies of Persia and Media say this " +
"day unto all the king's princes, which have heard of the deed of the " +
"queen. Thus shall there arise too much contempt and wrath. If it please " +
"the king, let there go a royal commandment from him, and let it be written " +
"among the laws of the Persians and the Medes, that it be not altered, That " +
"Vashti come no more before king Ahasuerus; and let the king give her royal " +
"estate unto another that is better than she. And when the king's decree " +
"which he shall make shall be published throughout all his empire, (for " +
"it is great,) all the wives shall give to their husbands honour, both to " +
"great and small."
        }
      },
      {
        id: 5,
        img: '05.png',
        done: 30,
        text: {
          ro: "Estera 1:21-22 Părerea aceasta a fost primită de împărat " +
            "şi de domnitori, şi împăratul a lucrat după cuvântul lui " +
            "Memucan. A trimis scrisori tuturor ţinuturilor din împărăţia " +
            "lui, fiecărui ţinut după scrierea lui şi fiecărui popor după " +
            "limba lui; ele spuneau că orice bărbat trebuie să fie stăpân " +
            "în casa lui şi că va vorbi limba poporului său.",
          en: "Esther 1:21-22 And the saying pleased the king and the " +
"princes; and the king did according to the word of Memucan: For he sent " +
"letters into all the king's provinces, into every province according to " +
"the writing thereof, and to every people after their language, that every " +
"man should bear rule in his own house, and that it should be published " +
"according to the language of every people."
        }
      },
      {
        id: 6,
        img: '06.png',
        done: 30,
        text: {
          ro: "Estera 2:1-4 După aceste lucruri, când s-a potolit mânia " +
            "împăratului Ahaşveroş, s-a gândit la Vasti, la ce făcuse ea " +
            "şi la hotărârea luată cu privire la ea. Atunci cei ce slujeau " +
            "împăratului au zis: \"Să se caute pentru împărat nişte fete " +
            "fecioare şi frumoase. Împăratul să pună în toate ţinuturile " +
            "din împărăţia lui dregători însărcinaţi să strângă pe toate " +
            "fetele fecioare şi frumoase, în capitala Susa, în casa " +
            "femeilor, sub privegherea lui Hegai, famenul împăratului şi " +
            "păzitorul femeilor, care să le dea cele trebuincioase pentru " +
            "gătit. Și fata care-i va plăcea împăratului să fie " +
            "împărăteasă în locul Vastiei.\" Părerea aceasta a fost " +
            "primită de împărat, şi aşa a făcut.",
          en: "Esther 2:1-4 After these things, when the wrath of king " +
"Ahasuerus was appeased, he remembered Vashti, and what she had done, and " +
"what was decreed against her. Then said the king's servants that " +
"ministered unto him, Let there be fair young virgins sought for the king: " +
"And let the king appoint officers in all the provinces of his kingdom, " +
"that they may gather together all the fair young virgins unto Shushan the " +
"palace, to the house of the women, unto the custody of Hege the king's " +
"chamberlain, keeper of the women; and let their things for purification " +
"be given them: And let the maiden which pleaseth the king be queen " +
"instead of Vashti. And the thing pleased the king; and he did so."
        }
      },
      {
        id: 7,
        img: '07.png',
        done: 30,
        text: {
          ro: "Estera 2:5-7 În capitala Susa era un iudeu, numit " +
            "Mardoheu, fiul lui Iair, fiul lui Şimei, fiul lui Chis, " +
            "bărbat din Beniamin, care fusese luat din Ierusalim printre " +
            "robii strămutaţi împreună cu Ieconia, împăratul lui Iuda, " +
            "de Nebucadneţar, împăratul Babilonului. El creştea pe Hadasa, " +
            "adică Estera, fata unchiului său; căci ea n-avea nici tată, " +
            "nici mamă. Fata era frumoasă la statură şi plăcută la vedere. " +
            "După moartea tatălui şi a mamei sale, Mardoheu o luase de " +
            "suflet.",
          en: "Esther 2:5-7 Now in Shushan the palace there was a certain " +
"Jew, whose name was Mordecai, the son of Jair, the son of Shimei, the " +
"son of Kish, a Benjamite; Who had been carried away from Jerusalem with " +
"the captivity which had been carried away with Jeconiah king of Judah, " +
"whom Nebuchadnezzar the king of Babylon had carried away. And he brought " +
"up Hadassah, that is, Esther, his uncle's daughter: for she had neither " +
"father nor mother, and the maid was fair and beautiful; whom Mordecai, " +
"when her father and mother were dead, took for his own daughter."
        }
      },
      {
        id: 8,
        img: '08.png',
        done: 30,
        text: {
          ro: "Estera 2:8-11 Când s-a auzit porunca împăratului şi " +
            "hotărârea lui, au fost strânse un mare număr de fete în " +
            "capitala Susa, sub privegherea lui Hegai. Odată cu ele a " +
            "fost luată şi Estera şi adusă în casa împăratului, sub " +
            "privegherea lui Hegai, păzitorul femeilor. Fata i-a plăcut şi " +
            "a căpătat trecere înaintea lui. El s-a grăbit să-i dea cele " +
            "de trebuinţă pentru găteală şi hrană, i-a dat şapte slujnice " +
            "alese din casa împăratului şi a pus-o împreună cu slujnicele " +
            "ei în cea mai bună încăpere din casa femeilor. Estera nu şi-a " +
            "făcut cunoscut nici poporul, nici naşterea, căci Mardoheu o " +
            "oprise să vorbească despre aceste lucruri. Şi în fiecare zi " +
            "Mardoheu se ducea şi venea înaintea curţii casei femeilor ca " +
            "să afle cum îi merge Esterei şi ce se face cu ea.",
          en: "Esther 2:8-11 So it came to pass, when the king's " +
"commandment and his decree was heard, and when many maidens were gathered " +
"together unto Shushan the palace, to the custody of Hegai, that Esther " +
"was brought also unto the king's house, to the custody of Hegai, keeper " +
"of the women. And the maiden pleased him, and she obtained kindness of " +
"him; and he speedily gave her her things for purification, with such " +
"things as belonged to her, and seven maidens, which were meet to be given " +
"her, out of the king's house: and he preferred her and her maids unto the " +
"best place of the house of the women. Esther had not shewed her people " +
"nor her kindred: for Mordecai had charged her that she should not shew it. " +
"And Mordecai walked every day before the court of the women's house, to " +
"know how Esther did, and what should become of her."
        }
      },
      {
        id: 9,
        img: '09.png',
        done: 30,
        text: {
          ro: "Estera 2:12-14 Fiecare fată se ducea la rândul ei la " +
            "împăratul Ahaşveroş, după ce timp de douăsprezece luni " +
            "împlinea ce era poruncit femeilor. În timpul acesta, aveau " +
            "grijă să se gătească, ungându-se şase luni cu untdelemn de " +
            "mirt, şi şase luni, cu miresme de mirozne femeieşti. " +
            "Aşa se ducea fiecare fată la împărat. Şi, când trecea din " +
            "casa femeilor în casa împăratului, o lăsau să ia cu ea tot ce " +
            "voia. Se ducea seara; şi a doua zi dimineaţa trecea în a doua " +
            "casă a femeilor, sub privegherea lui Şaaşgaz, famenul " +
            "împăratului şi păzitorul ţiitoarelor împăratului. Nu se mai " +
            "întorcea la împărat, decât când ar fi dorit împăratul şi " +
            "ar fi chemat-o pe nume.",
          en: "Esther 2:12-14 Now when every maid's turn was come to go " +
"in to king Ahasuerus, after that she had been twelve months, according to " +
"the manner of the women, (for so were the days of their purifications " +
"accomplished, to wit, six months with oil of myrrh, and six months with " +
"sweet odours, and with other things for the purifying of the women;) " +
"Then thus came every maiden unto the king; whatsoever she desired was " +
"given her to go with her out of the house of the women unto the king's " +
"house. In the evening she went, and on the morrow she returned into the " +
"second house of the women, to the custody of Shaashgaz, the king's " +
"chamberlain, which kept the concubines: she came in unto the king no " +
"more, except the king delighted in her, and that she were called by name."
        }
      },
      {
        id: 10,
        img: '10.png',
        done: 30,
        text: {
          ro: "Estera 2:15-20 Când i-a venit rândul să se ducă la împărat, " +
            "Estera, fata lui Abihail, unchiul lui Mardoheu, care o " +
            "înfiase, n-a cerut decât ce a fost rânduit de Hegai, famenul " +
            "împăratului şi păzitorul femeilor. Estera căpăta trecere " +
            "înaintea tuturor celor ce o vedeau. Estera a fost dusă la " +
            "împăratul Ahaşveroş, în casa împărătească, în luna a zecea, " +
            "adică luna Tebet, în al şaptelea an al domniei lui. " +
            "Împăratul a iubit pe Estera mai mult decât pe toate celelalte " +
            "femei, şi ea a căpătat trecere şi iubire înaintea lui mai " +
            "mult decât toate celelalte fete. I-a pus cununa împărătească " +
            "pe cap şi a făcut-o împărăteasă în locul Vastiei. " +
            "Împăratul a dat un mare ospăţ tuturor domnitorilor şi " +
            "slujitorilor lui, un ospăţ în cinstea Esterei. Cu prilejul " +
            "acesta a uşurat sarcinile ţinuturilor şi a împărţit daruri " +
            "cu o dărnicie împărătească. A doua oară când s-au strâns " +
            "fetele, Mardoheu şedea la poarta împăratului. Estera nu-şi " +
            "spusese nici naşterea, nici poporul, căci o oprise Mardoheu. " +
            "Şi ea urma acum poruncile lui Mardoheu cu tot atâta " +
            "scumpătate ca atunci când o creştea el.",
          en: "Esther 2:15-20 Now when the turn of Esther, the daughter " +
"of Abihail the uncle of Mordecai, who had taken her for his daughter, was " +
"come to go in unto the king, she required nothing but what Hegai the " +
"king's chamberlain, the keeper of the women, appointed. And Esther " +
"obtained favour in the sight of all them that looked upon her. " +
"So Esther was taken unto king Ahasuerus into his house royal in the tenth " +
"month, which is the month Tebeth, in the seventh year of his reign." +
"And the king loved Esther above all the women, and she obtained grace " +
"and favour in his sight more than all the virgins; so that he set the " +
"royal crown upon her head, and made her queen instead of Vashti." +
"Then the king made a great feast unto all his princes and his servants, " +
"even Esther's feast; and he made a release to the provinces, and gave " +
"gifts, according to the state of the king. And when the virgins were " +
"gathered together the second time, then Mordecai sat in the king's gate." +
"Esther had not yet shewed her kindred nor her people; as Mordecai had " +
"charged her: for Esther did the commandment of Mordecai, like as when she " +
"was brought up with him."
        }
      },
      {
        id: 11,
        img: '11.png',
        done: 30,
        text: {
          ro: "Estera 2:21-23 În acelaşi timp, pe când Mardoheu stătea " +
            "la poarta împăratului, Bigtan şi Tereş, doi fameni ai " +
            "împăratului, păzitorii pragului, s-au lăsat biruiţi de o " +
            "supărare şi au vrut să întindă mâna împotriva împăratului " +
            "Ahaşveroş. Mardoheu a avut cunoştinţă de lucrul acesta şi a " +
            "dat de ştire împărătesei Estera, care l-a spus împăratului " +
            "din partea lui Mardoheu. Faptul fiind cercetat şi găsit " +
            "întocmai, cei doi fameni au fost spânzuraţi de un lemn. Şi " +
            "lucrul acesta a fost scris în cartea Cronicilor, în faţa " +
            "împăratului.",
          en: "Esther 2:21-23: In those days, while Mordecai sat in the " +
"king's gate, two of the king's chamberlains, Bigthan and Teresh, of those " +
"which kept the door, were wroth, and sought to lay hand on the king " +
"Ahasuerus. And the thing was known to Mordecai, who told it unto Esther " +
"the queen; and Esther certified the king thereof in Mordecai's name. " +
"And when inquisition was made of the matter, it was found out; therefore " +
"they were both hanged on a tree: and it was written in the book of the " +
"chronicles before the king."
        }
      },
      {
        id: 12,
        img: '12.png',
        done: 30,
        text: {
          ro: "Estera 3:1-6 După aceste lucruri, împăratul Ahaşveroş a " +
            "ridicat la putere pe Haman, fiul lui Hamedata, agaghitul. L-a " +
            "ridicat în cinste şi a pus scaunul lui mai presus de scaunele " +
            "tuturor căpeteniilor care erau lângă el. Toţi slujitorii " +
            "împăratului care stăteau la poarta împăratului plecau " +
            "genunchiul şi se închinau înaintea lui Haman, căci aşa era " +
            "porunca împăratului cu privire la el. Dar Mardoheu nu-şi " +
            "pleca genunchiul şi nu se închina. Și slujitorii împăratului " +
            "care stăteau la poarta împăratului au zis lui " +
            "Mardoheu: \"Pentru ce calci porunca împăratului?\" Fiindcă ei " +
            "îi spuneau în fiecare zi lucrul acesta, şi el nu-i asculta, " +
            "l-au spus lui Haman ca să vadă dacă Mardoheu are să se ţină " +
            "de hotărârea lui; căci el spusese că este iudeu. Şi Haman a " +
            "văzut că Mardoheu nu-şi pleca genunchiul şi nu se închina " +
            "înaintea lui. S-a umplut de mânie; dar a crezut prea puţin " +
            "pentru el să pună mâna numai pe Mardoheu, căci i se spusese " +
            "din ce popor era Mardoheu, şi a voit să nimicească pe poporul " +
            "lui Mardoheu, pe toţi iudeii care se aflau în toată " +
            "împărăţia lui Ahaşveroş.",
          en: "Esther 3:1-6: After these things did king Ahasuerus promote " +
"Haman the son of Hammedatha the Agagite, and advanced him, and set his " +
"seat above all the princes that were with him. And all the king's " +
"servants, that were in the king's gate, bowed, and reverenced Haman: for " +
"the king had so commanded concerning him. But Mordecai bowed not, nor " +
"did him reverence. Then the king's servants, which were in the king's " +
"gate, said unto Mordecai, Why transgressest thou the king's commandment? " +
"Now it came to pass, when they spake daily unto him, and he hearkened not " +
"unto them, that they told Haman, to see whether Mordecai's matters would " +
"stand: for he had told them that he was a Jew. And when Haman saw that " +
"Mordecai bowed not, nor did him reverence, then was Haman full of wrath. " +
"And he thought scorn to lay hands on Mordecai alone; for they had " +
"shewed him the people of Mordecai: wherefore Haman sought to destroy all " +
"the Jews that were throughout the whole kingdom of Ahasuerus, even the " +
"people of Mordecai."
        }
      },
      {
        id: 13,
        img: '13.png',
        done: 30,
        text: {
          ro: "Estera 3:7-11 În luna întâi, adică luna Nisan, în al " +
            "doisprezecelea an al împăratului Ahaşveroş, au aruncat Pur, " +
            "adică sorţul, înaintea lui Haman, pentru fiecare zi şi pentru " +
            "fiecare lună, până în luna a douăsprezecea, adică luna Adar. " +
            "Atunci Haman a zis împăratului Ahaşveroş: \"În toate " +
            "ţinuturile împărăţiei tale este risipit un popor deosebit " +
            "între popoare, care are legi deosebite de ale tuturor " +
            "popoarelor şi nu ţine legile împăratului. Nu este în folosul " +
            "împăratului să-l lase liniştit. Dacă împăratul găseşte cu " +
            "cale, să se scrie o poruncă pentru ca ei să fie nimiciţi, şi " +
            "eu voi cântări zece mii de talanţi de argint în mâinile " +
            "slujbaşilor, ca să-i ducă în vistieria împăratului.\" " +
            "Împăratul şi-a scos inelul din deget şi l-a dat lui Haman, " +
            "fiul lui Hamedata, agaghitul, vrăjmaşul iudeilor. Şi împăratul " +
            "a zis lui Haman: \"Îţi dăruiesc şi argintul şi pe poporul " +
            "acesta; fă cu el ce vei voi.",
          en: "Esther 3:7-11: In the first month, that is, the month Nisan, " +
"in the twelfth year of king Ahasuerus, they cast Pur, that is, the lot, " +
"before Haman from day to day, and from month to month, to the twelfth " +
"month, that is, the month Adar. And Haman said unto king Ahasuerus, " +
"There is a certain people scattered abroad and dispersed among the people " +
"in all the provinces of thy kingdom; and their laws are diverse from all " +
"people; neither keep they the king's laws: therefore it is not for the " +
"king's profit to suffer them. If it please the king, let it be written " +
"that they may be destroyed: and I will pay ten thousand talents of " +
"silver to the hands of those that have the charge of the business, to " +
"bring it into the king's treasuries. And the king took his ring from his " +
"hand, and gave it unto Haman the son of Hammedatha the Agagite, " +
"the Jews' enemy. And the king said unto Haman, The silver is given to " +
"thee, the people also, to do with them as it seemeth good to thee."
        }
      },
      {
        id: 14,
        img: '14.png',
        done: 30,
        text: {
          ro: "Estera 3:12-15 Logofeţii împăratului au fost chemaţi " +
            "în a treisprezecea zi a lunii întâi şi au scris în totul cum a " +
            "poruncit Haman mai marilor oştirii, dregătorilor fiecărui " +
            "ţinut şi căpeteniilor fiecărui popor, fiecărui ţinut după " +
            "scrierea lui şi fiecărui popor după limba lui. Au scris în " +
            "numele împăratului Ahaşveroş şi au pecetluit scrisorile cu " +
            "inelul împăratului. Scrisorile au fost trimise prin " +
            "alergători în toate ţinuturile împăratului, ca să " +
            "nimicească, să omoare şi să piardă pe toţi iudeii, tineri şi " +
            "bătrâni, prunci şi femei, şi anume într-o singură zi, în " +
            "ziua a treisprezecea a lunii a douăsprezecea, adică luna Adar, " +
            "şi să li se prade averile. Aceste scrisori cuprindeau " +
            "porunca împăratului, care trebuia vestită în fiecare ţinut, " +
            "şi îndemnau pe toate popoarele să fie gata pentru ziua aceea. " +
            "Alergătorii au plecat în grabă mare, după porunca " +
            "împăratului. Porunca a fost vestită şi în capitala Susa. Şi " +
            "pe când împăratul şi Haman stăteau şi beau, cetatea Susa " +
            "era îngrozită.",
          en: "Esther 3:12-15 Then were the king's scribes called on the " +
"thirteenth day of the first month, and there was written according to all " +
"that Haman had commanded unto the king's lieutenants, and to the " +
"governors that were over every province, and to the rulers of every people " +
"of every province according to the writing thereof, and to every people " +
"after their language; in the name of king Ahasuerus was it written, " +
"and sealed with the king's ring. And the letters were sent by posts into " +
"all the king's provinces, to destroy, to kill, and to cause to perish, " +
"all Jews, both young and old, little children and women, in one day, even " +
"upon the thirteenth day of the twelfth month, which is the month Adar, " +
"and to take the spoil of them for a prey. The copy of the writing for a " +
"commandment to be given in every province was published unto all people, " +
"that they should be ready against that day. The posts went out, being " +
"hastened by the king's commandment, and the decree was given in Shushan " +
"the palace. And the king and Haman sat down to drink; but the city " +
"Shushan was perplexed."
        }
      },
      {
        id: 15,
        img: '15.jpg',
        done: 25,
        text: {
          ro: "Estera 4:1-8 Mardoheu, aflând tot ce se petrecea, şi-a " +
            "sfâşiat hainele, s-a îmbrăcat cu un sac şi s-a presărat cu " +
            "cenuşă. Apoi s-a dus în mijlocul cetăţii, scoţând cu putere " +
            "strigăte amare, şi a mers până la poarta împăratului, a cărei " +
            "intrare era oprită oricui era îmbrăcat cu un sac. " +
            "În fiecare ţinut unde ajungea porunca împăratului şi " +
            "hotărârea lui a fost o mare jale printre iudei; posteau, " +
            "plângeau şi se boceau, şi mulţi se culcau în sac şi cenuşă. " +
            "Slujnicele Esterei şi famenii ei au venit şi i-au spus lucrul " +
            "acesta. Şi împărăteasa a rămas îngrozită. A trimis haine " +
            "lui Mardoheu ca să-l îmbrace şi să ia sacul de pe el, dar el " +
            "nu le-a primit. Atunci Estera a chemat pe Hatac, unul din " +
            "famenii pe care-i pusese împăratul în slujba ei, şi l-a " +
            "însărcinat să se ducă să întrebe pe Mardoheu ce înseamnă " +
            "lucrul acesta şi de unde vine. Hatac s-a dus la Mardoheu în " +
            "locul deschis al cetăţii, înaintea porţii împăratului. " +
            "Şi Mardoheu i-a istorisit tot ce i se întâmplase şi i-a spus " +
            "suma de argint pe care făgăduise Haman că o va da " +
            "vistieriei împăratului în schimbul măcelăririi iudeilor. " +
            "I-a dat şi cuprinsul poruncii vestite în Susa în vederea " +
            "nimicirii lor, ca s-o arate Esterei şi să-i spună totul. Şi " +
            "a poruncit ca Estera să se ducă la împărat să-l roage şi să " +
            "stăruie de el pentru poporul său.",
          en: "Esther 4:1-8: When Mordecai perceived all that was done, " +
"Mordecai rent his clothes, and put on sackcloth with ashes, and went out " +
"into the midst of the city, and cried with a loud and a bitter cry; " +
"And came even before the king's gate: for none might enter into the king's " +
"gate clothed with sackcloth. And in every province, whithersoever the " +
"king's commandment and his decree came, there was great mourning among " +
"the Jews, and fasting, and weeping, and wailing; and many lay in " +
"sackcloth and ashes. So Esther's maids and her chamberlains came and told " +
"it her. Then was the queen exceedingly grieved; and she sent raiment to " +
"clothe Mordecai, and to take away his sackcloth from him: but he received " +
"it not. Then called Esther for Hatach, one of the king's chamberlains, " +
"whom he had appointed to attend upon her, and gave him a commandment to " +
"Mordecai, to know what it was, and why it was. So Hatach went forth to " +
"Mordecai unto the street of the city, which was before the king's gate. " +
"And Mordecai told him of all that had happened unto him, and of the sum " +
"of the money that Haman had promised to pay to the king's treasuries for " +
"the Jews, to destroy them. Also he gave him the copy of the writing of " +
"the decree that was given at Shushan to destroy them, to shew it unto " +
"Esther, and to declare it unto her, and to charge her that she should go " +
"in unto the king, to make supplication unto him, and to make request " +
"before him for her people."
        }
      },
      {
        id: 16,
        img: '16.jpg',
        done: 25,
        text: {
          ro: "Estera 4:9-17 Hatac a venit şi a spus Esterei cuvintele " +
            "lui Mardoheu. Estera a însărcinat pe Hatac să se ducă să spună " +
            "lui Mardoheu: \"Toţi slujitorii împăratului şi poporul din " +
            "ţinuturile împăratului ştiu că este o lege care pedepseşte cu " +
            "moartea pe oricine, fie bărbat, fie femeie, care intră la " +
            "împărat, în curtea dinăuntru, fără să fie chemat. Numai acela " +
            "scapă cu viaţă căruia îi întinde împăratul toiagul lui " +
            "împărătesc de aur. Şi eu n-am fost chemată la împărat de " +
            "treizeci de zile. \" Când s-au spus cuvintele Esterei lui " +
            "Mardoheu, Mardoheu a trimis următorul răspuns Esterei: \"Să " +
            "nu-ţi închipui că numai tu vei scăpa dintre toţi iudeii, " +
            "pentru că eşti în casa împăratului. Căci, dacă vei tăcea acum, " +
            "ajutorul şi izbăvirea vor veni din altă parte pentru iudei, " +
            "şi tu şi casa tatălui tău veţi pieri. Şi cine ştie dacă nu " +
            "pentru o vreme ca aceasta ai ajuns la împărăţie?\" Estera a " +
            "trimis să spună lui Mardoheu: \"Du-te, strânge pe toţi " +
            "iudeii care se află în Susa şi postiţi pentru mine, fără să " +
            "mâncaţi, nici să beţi, trei zile, nici noaptea, nici ziua. " +
            "Şi eu voi posti odată cu slujnicele mele; apoi voi intra la " +
            "împărat, în ciuda legii; şi, dacă va fi să pier, voi pieri. \" " +
            "Mardoheu a plecat şi a făcut tot ce-i poruncise Estera.",
          en: "Esther 4:9-17"
        }
      },
      {
        id: 17,
        img: '17.jpg',
        done: 25,
        text: {
          ro: "Estera 5:1-5 A treia zi, Estera s-a îmbrăcat cu hainele " +
            "împărăteşti şi a venit în curtea dinăuntru a casei " +
            "împăratului, înaintea casei împăratului. Împăratul şedea pe " +
            "scaunul lui împărătesc în casa împărătească, în faţa uşii " +
            "casei. Când a văzut împăratul pe împărăteasa Estera în " +
            "picioare în curte, ea a căpătat trecere înaintea lui. Şi " +
            "împăratul a întins Esterei toiagul împărătesc pe care-l " +
            "ţinea în mână. Estera s-a apropiat şi a atins vârful " +
            "toiagului. Împăratul i-a zis: \"Ce ai tu, împărăteasă Estero, " +
            "şi ce ceri? Chiar dacă ai cere jumătate din împărăţie, îţi " +
            "voi da.\" Estera a răspuns: \"Dacă împăratul găseşte cu cale, " +
            "să vină împăratul astăzi cu Haman la ospăţul pe care i l-am " +
            "pregătit.\" Şi împăratul a zis: \"Duceţi-vă îndată şi " +
            "aduceţi pe Haman, cum doreşte Estera.\" Împăratul s-a dus " +
            "cu Haman la ospăţul pe care-l pregătise Estera.",
          en: "Esther 5:1-5"
        }
      },
      {
        id: 18,
        img: '18.jpg',
        done: 25,
        text: {
          ro: "Estera 5:6-8 Şi pe când beau vin, împăratul a zis " +
            "Esterei: \"Care este cererea ta? Ea îţi va fi împlinită. Ce " +
            "doreşti? Chiar dacă ai cere jumătate din împărăţie, o vei " +
            "căpăta.\" Estera a răspuns: \"Iată ce cer şi ce doresc. " +
            "Dacă am căpătat trecere înaintea împăratului şi dacă găseşte " +
            "cu cale împăratul să-mi îndeplinească cererea şi să-mi facă " +
            "dorinţa, să mai vină împăratul cu Haman şi la ospăţul pe " +
            "care li-l voi pregăti, şi mâine voi da răspuns împăratului " +
            "după porunca lui.\"",
          en: "Esther 5:6-8"
        }
      },
      {
        id: 19,
        img: '19.jpg',
        done: 25,
        text: {
          ro: "Estera 5:9-14 Haman a ieşit în ziua aceea vesel şi cu inima " +
            "mulţumită. Dar, când a văzut la poarta împăratului pe " +
            "Mardoheu, care nu se scula, nici nu se mişca înaintea lui, " +
            "s-a umplut de mânie împotriva lui Mardoheu. A ştiut totuşi să " +
            "se stăpânească şi s-a dus acasă. Apoi a trimis să aducă pe " +
            "prietenii săi şi pe nevasta sa, Zereş. Haman le-a vorbit " +
            "despre strălucirea bogăţiilor lui, despre numărul fiilor săi, " +
            "despre tot ce făcuse împăratul ca să-l ridice în vrednicie " +
            "şi despre locul pe care i-l dăduse mai presus de căpeteniile " +
            "şi slujitorii împăratului. Şi a adăugat: \"Eu sunt chiar " +
            "singurul pe care împărăteasa Estera l-a primit împreună cu " +
            "împăratul la ospăţul pe care l-a făcut, şi sunt poftit şi pe " +
            "mâine la ea cu împăratul. Dar toate acestea n-au niciun preţ " +
            "pentru mine câtă vreme voi vedea pe Mardoheu, iudeul acela, " +
            "şezând la poarta împăratului.\" Nevasta sa, Zereş, şi toţi " +
            "prietenii lui i-au zis: \"Să se pregătească o spânzurătoare " +
            "înaltă de cincizeci de coţi, şi mâine dimineaţă cere " +
            "împăratului ca Mardoheu să fie spânzurat. Apoi vei merge " +
            "vesel la ospăţ cu împăratul.\" Părerea aceasta a plăcut lui " +
            "Haman şi a pus să pregătească spânzurătoarea.",
          en: "Esther 5:9-14"
        }
      },
      {
        id: 20,
        img: '20.jpg',
        done: 25,
        text: {
          ro: "Estera 6:1-5 În noaptea aceea, împăratul n-a putut să " +
            "doarmă şi a poruncit să-i aducă lângă el cartea aducerilor " +
            "aminte, Cronicile. Le-au citit înaintea împăratului, " +
            "şi s-a găsit scris ce descoperise Mardoheu cu privire la " +
            "Bigtan şi Tereş, cei doi fameni ai împăratului, păzitorii " +
            "pragului, care voiseră să întindă mâna asupra împăratului " +
            "Ahaşveroş. Împăratul a zis: \"Ce cinste şi mărire i s-a făcut " +
            "lui Mardoheu pentru aceasta?\" - \"Nu i s-a făcut nimic\", " +
            "au răspuns cei ce slujeau împăratului. Atunci împăratul " +
            "a zis: \"Cine este în curte?\" - Haman venise în curtea de " +
            "afară a casei împăratului să ceară împăratului să spânzure " +
            "pe Mardoheu pe lemnul pe care-l pregătise pentru el. - " +
            "Slujitorii împăratului i-au răspuns: \"Haman este în curte.\" " +
            "Şi împăratul a zis: \"Să intre.\"",
          en: "Esther 6:1-5"
        }
      },
      {
        id: 21,
        img: '21.jpg',
        done: 25,
        text: {
          ro: "Estera 6:6-9 Haman a intrat, şi împăratul i-a zis: \"Ce " +
            "trebuie făcut pentru un om pe care vrea să-l cinstească " +
            "împăratul?\" Haman şi-a zis în sine: \"Pe cine altul decât " +
            "pe mine ar vrea împăratul să-l cinstească?\" Şi Haman a " +
            "răspuns împăratului: \"Omului pe care vrea împăratul să-l " +
            "cinstească trebuie să i se aducă haina împărătească, aceea " +
            "cu care se îmbracă împăratul, şi calul pe care călăreşte " +
            "împăratul şi să i se pună cununa împărătească pe cap. " +
            "Să se dea haina şi calul uneia din căpeteniile de seamă ale " +
            "împăratului, apoi să îmbrace cu haina pe omul acela pe " +
            "care vrea să-l cinstească împăratul, să-l plimbe călare pe " +
            "cal prin locul deschis al cetăţii şi să se strige înaintea " +
            "lui: \"Aşa se face omului pe care vrea împăratul să-l " +
            "cinstească!\"",
          en: "Esther 6:6-9"
        }
      },
      {
        id: 22,
        img: '22.jpg',
        done: 25,
        text: {
          ro: "Estera 6:10-14 Împăratul a zis lui Haman: \"Ia îndată haina " +
            "şi calul, cum ai zis, şi fă aşa iudeului Mardoheu, care şade " +
            "la poarta împăratului. Nu lăsa nefăcut nimic din ce ai spus.\" " +
            "Şi Haman a luat haina şi calul, a îmbrăcat pe Mardoheu, l-a " +
            "plimbat călare pe cal prin locul deschis al cetăţii şi a " +
            "strigat înaintea lui: \"Aşa se face omului pe care vrea " +
            "împăratul să-l cinstească!\" Mardoheu s-a întors la poarta " +
            "împăratului, şi Haman s-a dus în grabă acasă, mâhnit şi cu " +
            "capul acoperit. Haman a istorisit nevestei sale, Zereş, şi " +
            "tuturor prietenilor săi tot ce i se întâmplase. Şi înţelepţii " +
            "lui şi nevasta sa, Zereş, i-au zis: \"Dacă Mardoheu, înaintea " +
            "căruia ai început să cazi, este din neamul iudeilor, nu vei " +
            "putea face nimic împotriva lui, ci vei cădea înaintea lui.\" " +
            "Pe când îi vorbeau ei încă, au venit famenii împăratului şi " +
            "au luat îndată pe Haman la ospăţul pe care-l pregătise Estera.",
          en: "Esther 6:10-14"
        }
      },
      {
        id: 23,
        img: '23.jpg',
        done: 25,
        text: {
          ro: "Estera 7:1-6 Împăratul şi Haman s-au dus la ospăţ la " +
"împărăteasa Estera. În această a doua zi, împăratul a zis iarăşi Esterei " +
"pe când beau vin: \"Care este cererea ta, împărăteasă Estero? Ea îţi va " +
"fi împlinită. Ce doreşti? Chiar dacă ai cere jumătate din împărăţie, o vei " +
"căpăta.\" Împărăteasa Estera a răspuns: \"Dacă am căpătat trecere " +
"înaintea ta, împărate, şi dacă găseşte cu cale împăratul, dă-mi viaţa: " +
"iată cererea mea; şi scapă pe poporul meu: iată dorinţa mea! Căci eu şi " +
"poporul meu suntem vânduţi să fim nimiciţi, înjunghiaţi şi prăpădiţi. " +
"Măcar dacă am fi vânduţi să fim robi şi roabe, aş tăcea, dar vrăjmaşul " +
"n-ar putea să înlocuiască pierderea făcută împăratului.\" Împăratul " +
"Ahaşveroş a luat cuvântul şi a zis împărătesei Estera: \"Cine şi unde " +
"este acela care are de gând să facă aşa?\" Estera a răspuns: \"Apăsătorul, " +
"vrăjmaşul este Haman, răul acesta!\" Haman a rămas îngrozit în faţa " +
"împăratului şi a împărătesei.",
          en: "Esther 7:1-6"
        }
      },
      {
        id: 24,
        img: '24.jpg',
        done: 25,
        text: {
          ro: "Estera 7:7-10 Şi împăratul, în mânia lui, s-a sculat şi " +
"a părăsit ospăţul, şi s-a dus în grădina casei împărăteşti. Haman a " +
"rămas să-şi ceară viaţa de la împărăteasa Estera, căci vedea bine că " +
"pierderea lui era hotărâtă în mintea împăratului. Când s-a întors " +
"împăratul din grădina casei împărăteşti în odaia ospăţului, a văzut pe " +
"Haman că se aruncase spre patul pe care era Estera şi i-a zis: \"Cum, " +
"să mai şi sileşti pe împărăteasă, la mine, în casa împărătească?\" Cum " +
"au ieşit cuvintele acestea din gura împăratului, i-au şi acoperit faţa " +
"lui Haman. Şi Harbona, unul din fameni, a zis în faţa împăratului: \"Iată, " +
"spânzurătoarea pregătită de Haman pentru Mardoheu, care a vorbit spre " +
"binele împăratului, este ridicată în casa lui Haman, la o înălţime de " +
"cincizeci de coţi.\" Împăratul a zis: \"Haman să fie spânzurat pe ea!\" Şi " +
"au spânzurat pe Haman pe spânzurătoarea pe care o pregătise el pentru " +
"Mardoheu. Şi mânia împăratului s-a potolit.",
          en: "Esther 7:7-10"
        }
      },
      {
        id: 25,
        img: '25.jpg',
        done: 25,
        text: {
          ro: "Estera 8:1-6 În aceeaşi zi, împăratul Ahaşveroş a dat " +
"împărătesei Estera casa lui Haman, vrăjmaşul iudeilor. Şi Mardoheu a " +
"venit înaintea împăratului, căci Estera arătase legătura ei de rudenie " +
"cu el. Împăratul şi-a scos inelul, pe care-l luase înapoi de la Haman, " +
"şi l-a dat lui Mardoheu. Estera, din partea ei, a pus pe Mardoheu peste " +
"casa lui Haman. Apoi Estera a vorbit din nou înaintea împăratului. S-a " +
"aruncat la picioarele lui, a plâns, l-a rugat să oprească urmările " +
"răutăţii lui Haman, agaghitul, şi izbânda planurilor lui împotriva " +
"iudeilor. Împăratul a întins toiagul împărătesc de aur Esterei, care s-a " +
"ridicat şi a stat în picioare înaintea împăratului. Ea a zis atunci: \"Dacă " +
"împăratul găseşte cu cale şi dacă am căpătat trecere înaintea lui, dacă " +
"lucrul pare potrivit împăratului şi dacă eu sunt plăcută înaintea lui, " +
"să se scrie ca să se întoarcă scrisorile făcute de Haman, fiul lui " +
"Hamedata, agaghitul, şi scrise de el cu gând să piardă pe iudeii care " +
"sunt în toate ţinuturile împăratului. Căci cum aş putea eu să văd " +
"nenorocirea care ar atinge pe poporul meu şi cum aş putea să văd " +
"nimicirea neamului meu?\"",
          en: "Esther 8:1-6"
        }
      },
      {
        id: 26,
        img: '26.jpg',
        done: 25,
        text: {
          ro: "Estera 8:7-9 Împăratul Ahaşveroş a zis împărătesei " +
"Estera şi iudeului Mardoheu: \"Iată, am dat Esterei casa lui Haman, şi " +
"el a fost spânzurat pe spânzurătoare, pentru că întinsese mâna " +
"împotriva iudeilor. Scrieţi, dar, în folosul iudeilor cum vă va " +
"plăcea, în numele împăratului, şi pecetluiţi cu inelul împăratului. " +
"Căci o scrisoare scrisă în numele împăratului şi pecetluită cu inelul " +
"împăratului nu poate fi desfiinţată.\" Logofeţii împăratului au fost " +
"chemaţi în vremea aceea, în a douăzeci şi treia zi a lunii a treia, " +
"adică luna Sivan, şi au scris, după tot ce a poruncit Mardoheu, " +
"iudeilor, căpeteniilor oştirii, dregătorilor şi mai marilor celor o " +
"sută douăzeci şi şapte de ţinuturi aşezate de la India la Etiopia, " +
"fiecărui ţinut după scrierea lui, fiecărui popor după limba lui, şi " +
"iudeilor după scrierea şi limba lor.",
          en: "Esther 8:7-9"
        }
      },
      {
        id: 27,
        img: '27.jpg',
        done: 25,
        text: {
          ro: "Estera 8:10-13 Au scris în numele împăratului Ahaşveroş şi " +
"au pecetluit cu inelul împăratului. Au trimis scrisorile prin alergători " +
"călare pe cai şi catâri născuţi din iepe. Prin aceste scrisori, " +
"împăratul dădea voie iudeilor, ori în care cetate ar fi fost, să se " +
"adune şi să-şi apere viaţa, să nimicească, să omoare şi să piardă, " +
"împreună cu pruncii şi femeile lor, pe toţi aceia din fiecare popor şi " +
"din fiecare ţinut care ar lua armele să-i lovească, şi să le prade " +
"averile. Aceasta să se facă într-o singură zi, în toate ţinuturile " +
"împăratul Ahaşveroş, şi anume în a treisprezecea zi a lunii a " +
"douăsprezecea, adică luna Adar. Aceste scrisori cuprindeau hotărârea " +
"care trebuia vestită în fiecare ţinut şi dădeau de ştire tuturor " +
"popoarelor că iudeii stau gata pentru ziua aceea ca să se răzbune " +
"pe vrăjmaşii lor.",
          en: "Esther 8:10-13"
        }
      },
      {
        id: 28,
        img: '28.jpg',
        done: 25,
        text: {
          ro: "Estera 8:14-17 Alergătorii călare pe cai şi pe catâri au " +
"plecat îndată şi în toată graba, după porunca împăratului. Hotărârea a " +
"fost vestită şi în capitala Susa. Mardoheu a ieşit de la împărat cu o " +
"haină împărătească albastră şi albă, cu o mare cunună de aur şi cu o " +
"mantie de in subţire şi de purpură. Cetatea Susa striga şi se bucura. " +
"Pentru iudei nu era decât fericire şi bucurie, veselie şi slavă. " +
"În fiecare ţinut şi în fiecare cetate, pretutindeni unde ajungea porunca " +
"împăratului şi hotărârea lui, a fost între iudei bucurie şi veselie, " +
"ospeţe şi zile de sărbătoare. Şi mulţi oameni dintre popoarele ţării " +
"s-au făcut iudei, căci îi apucase frica de iudei.",
          en: "Esther 8:14-17"
        }
      },
      {
        id: 29,
        img: '29.jpg',
        done: 25,
        text: {
          ro: "Estera 9:1-4 În luna a douăsprezecea, adică luna Adar, în " +
"a treisprezecea zi a lunii, ziua în care avea să se aducă la îndeplinire " +
"porunca şi hotărârea împăratului şi când vrăjmaşii iudeilor " +
"nădăjduiseră să stăpânească peste ei, s-a întâmplat tocmai dimpotrivă, " +
"că iudeii au stăpânit asupra vrăjmaşilor lor. Iudeii s-au strâns în " +
"cetăţile lor, în toate ţinuturile împăratului Ahaşveroş, ca să pună mâna " +
"pe cei ce căutau să-i piardă. Nimeni n-a putut să le stea împotrivă, " +
"căci frica de ei apucase pe toate popoarele! Şi toţi mai marii " +
"ţinuturilor, căpeteniile oştirii, dregătorii, slujbaşii împăratului au " +
"sprijinit pe iudei, din pricina fricii pe care le-o insufla Mardoheu. " +
"Căci Mardoheu era puternic în casa împăratului, şi faima lui se " +
"răspândea în toate ţinuturile, pentru că ajungea din ce în ce " +
"mai puternic.",
          en: "Esther 9:1-4"
        }
      },
      {
        id: 30,
        img: '30.jpg',
        done: 25,
        text: {
          ro: "Estera 9:5-10 Iudeii au ucis cu lovituri de sabie pe " +
"toţi vrăjmaşii lor, i-au omorât şi i-au prăpădit. Au făcut ce au vrut " +
"cu vrăjmaşii lor. În capitala Susa, iudeii au ucis şi au prăpădit " +
"cinci sute de oameni, şi au înjunghiat pe Parşandata, Dalfon, Aspata, " +
"Porata, Adalia, Aridata, Parmaşta, Arizai, Aridai şi Vaiezata, cei zece " +
"fii ai lui Haman, fiul lui Hamedata, vrăjmaşul iudeilor. Dar n-au pus " +
"mâna pe averile lor.",
          en: "Esther 9:5-10"
        }
      },
      {
        id: 31,
        img: '31.jpg',
        done: 25,
        text: {
          ro: "Estera 9:11-16 În ziua aceea, numărul celor ce " +
"fuseseră ucişi în capitala Susa a ajuns la cunoştinţa împăratului. Şi " +
"împăratul a zis împărătesei Estera: \"Iudeii au ucis şi au prăpădit în " +
"capitala Susa cinci sute de oameni şi pe cei zece fii ai lui Haman. Ce " +
"vor fi făcut în celelalte ţinuturi ale împăratului?… Care-ţi este " +
"cererea? Ea îţi va fi împlinită. Ce mai doreşti? Vei căpăta.\" Estera a " +
"răspuns: \"Dacă împăratul găseşte cu cale, să fie îngăduit iudeilor care " +
"sunt la Susa să facă şi mâine după porunca de azi şi să spânzure pe " +
"lemn pe cei zece fii ai lui Haman.\" Şi împăratul a poruncit să se facă " +
"aşa. Porunca a fost adusă la cunoştinţa poporului din Susa. Au spânzurat " +
"pe cei zece fii ai lui Haman. Iudeii care se aflau în Susa s-au strâns " +
"din nou în a paisprezecea zi a lunii Adar şi au ucis în Susa trei sute " +
"de oameni. Dar n-au pus mâna pe averile lor. Ceilalţi iudei din " +
"celelalte ţinuturi ale împăratului s-au strâns şi şi-au apărat viaţa. " +
"Au căpătat astfel odihnă, scăpând de vrăjmaşii lor, şi au ucis " +
"şaptezeci şi cinci de mii din cei ce le erau vrăjmaşi. Dar n-au pus " +
"mâna pe averile lor.",
          en: "Esther 9:11-16"
        }
      },
      {
        id: 32,
        img: '32.jpg',
        done: 25,
        text: {
          ro: "Estera 9:17-22 Aceste lucruri s-au întâmplat în a " +
"treisprezecea zi a lunii Adar. În ziua a paisprezecea, iudeii s-au " +
"odihnit şi au făcut din ea o zi de ospăţ şi de bucurie. " +
"Cei ce se aflau la Susa s-au strâns în ziua a treisprezecea şi a " +
"paisprezecea, dar în ziua a cincisprezecea s-au odihnit şi au făcut din " +
"ea o zi de ospăţ şi de bucurie. De aceea iudeii de la ţară, care " +
"locuiesc în cetăţi fără ziduri, au făcut din ziua a paisprezecea a " +
"lunii Adar o zi de bucurie, de ospăţ şi de sărbătoare, în care îşi " +
"trimit daruri unii altora. Mardoheu a scris aceste lucruri şi a trimis " +
"scrisori tuturor iudeilor din toate ţinuturile împăratului Ahaşveroş, de " +
"aproape şi din depărtare. Le poruncea să prăznuiască în fiecare an ziua " +
"a paisprezecea şi a cincisprezecea a lunii Adar, ca zile în care " +
"căpătaseră odihnă scăpând de vrăjmaşii lor. Le-a poruncit să " +
"prăznuiască luna în care întristarea lor se prefăcuse în bucurie, şi " +
"jalea lor, în zi de sărbătoare, şi să facă din aceste zile nişte zile de " +
"ospăţ şi de bucurie, când să-şi trimită daruri de mâncare unii altora şi " +
"să împartă daruri celor lipsiţi.",
          en: "Esther 9:17-22"
        }
      },
      {
        id: 33,
        img: '33.jpg',
        done: 25,
        text: {
          ro: "Estera 9:23-27 Iudeii s-au îndatorat să facă ceea ce şi " +
"începuseră să facă şi ce le scrisese Mardoheu. Căci Haman, fiul lui " +
"Hamedata, agaghitul, vrăjmaşul tuturor iudeilor, făcuse planul să-i " +
"piardă şi aruncase Pur, adică sorţul, ca să-i omoare şi să-i nimicească. " +
"Dar Estera, venind înaintea împăratului, împăratul a poruncit în scris " +
"să întoarcă asupra capului lui Haman planul cel rău pe care-l făcuse " +
"împotriva iudeilor şi să-l spânzure pe lemn, pe el şi pe fiii lui. " +
"De aceea zilele acestea s-au numit Purim, de la numirea Pur. Potrivit cu " +
"tot cuprinsul acestei scrisori, potrivit cu cele ce văzuseră ei înşişi " +
"şi potrivit cu cele ce li se întâmplaseră, iudeii au luat pentru ei, " +
"pentru sămânţa lor şi pentru toţi cei ce se vor lipi de ei hotărârea şi " +
"îndatorirea neschimbătoare ca să prăznuiască în fiecare an aceste două " +
"zile, în felul rânduit şi la vremea hotărâtă.",
          en: "Esther 9:23-27"
        }
      },
      {
        id: 34,
        img: '34.jpg',
        done: 25,
        text: {
          ro: "Estera 9:28-32 Zilele acestea trebuiau să fie pomenite şi " +
"prăznuite din neam în neam, în fiecare familie, în fiecare ţinut şi în " +
"fiecare cetate. Şi zilele acestea Purim nu trebuiau desfiinţate niciodată " +
"din mijlocul iudeilor, nici să se şteargă aducerea aminte de ele " +
"printre urmaşii lor. Împărăteasa Estera, fata lui Abihail, şi iudeul " +
"Mardoheu au scris stăruitor a doua oară pentru ca să întărească " +
"scrisoarea privitoare la Purim. Au trimis scrisori tuturor iudeilor, în " +
"cele o sută douăzeci şi şapte de ţinuturi ale împăratului Ahaşveroş. Ele " +
"cuprindeau cuvinte de pace şi de credincioşie, întărind ţinerea acestor " +
"zile Purim la vremea hotărâtă, cum le rânduiseră iudeul Mardoheu şi " +
"împărăteasa Estera pentru ei şi cum şi le rânduiseră şi pentru ei înşişi " +
"şi pentru sămânţa lor, cu prilejul postului lor şi ţipetelor lor. " +
"Porunca Esterei a întărit aşezarea acestei sărbători Purim, şi lucrul " +
"acesta a fost scris în carte.",
          en: "Esther 9:28-32"
        }
      },
      {
        id: 35,
        img: '35.jpg',
        done: 25,
        text: {
          ro: "Estera 10:1-3 Împăratul Ahaşveroş a pus un bir asupra ţării " +
"şi asupra ostroavelor mării. Toate faptele privitoare la puterea lui şi " +
"isprăvile lui şi amănuntele despre mărimea la care a ridicat împăratul " +
"pe Mardoheu, nu sunt scrise în cartea Cronicilor împăraţilor Mezilor şi " +
"Perşilor? Căci Iudeul Mardoheu era cel dintâi după împăratul Ahaşveroş. " +
"El era cu vază între Iudei şi iubit de mulţimea fraţilor săi, căci a " +
"căutat binele poporului său şi a vorbit pentru fericirea întregului " +
"său neam.",
          en: "Esther 10:1-3"
        }
      }
    ];
  });
