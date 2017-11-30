angular.module('galleryApp', [])
  .controller('galleryController', function() {
    var gallery = this;
    gallery.language = "ro";

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
          en: "Esther 1:1-4"
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
          en: "Esther 1:5-8"
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
          en: "Esther 1:9-12"
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
          en: "Esther 1:13-20"
        }
      },
      {
        id: 5,
        img: '05.png',
        done: 30,
        text: {
          ro: "Estera 1:21-22 21. Părerea aceasta a fost primită de împărat " +
            "şi de domnitori, şi împăratul a lucrat după cuvântul lui " +
            "Memucan. A trimis scrisori tuturor ţinuturilor din împărăţia " +
            "lui, fiecărui ţinut după scrierea lui şi fiecărui popor după " +
            "limba lui; ele spuneau că orice bărbat trebuie să fie stăpân " +
            "în casa lui şi că va vorbi limba poporului său.",
          en: "Esther 1:21-22"
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
          en: "Esther 2:1-4"
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
          en: "Esther 2:5-7"
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
          en: "Esther 2:8-11"
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
          en: "Esther 2:12-14"
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
          en: "Esther 2:15-20"
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
          en: "Esther 2:21-23"
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
          en: "Esther 3:1-6"
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
          en: "Esther 3:7-11"
        }
      },
      {
        id: 14,
        img: '14.png',
        done: 30,
        text: {
          ro: "Estera 3:12-15 12. Logofeţii împăratului au fost chemaţi " +
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
          en: "Esther 3:12-15"
        }
      },
      {
        id: 15,
        img: '15.jpg',
        done: 25,
        text: {
          ro: "Estera 4:1-8",
          en: "Esther 4:1-8"
        }
      },
      {
        id: 16,
        img: '16.jpg',
        done: 25,
        text: {
          ro: "Estera 4:9-17",
          en: "Esther 4:9-17"
        }
      },
      {
        id: 17,
        img: '17.jpg',
        done: 25,
        text: {
          ro: "Estera 5:1-5",
          en: "Esther 5:1-5"
        }
      },
      {
        id: 18,
        img: '18.jpg',
        done: 25,
        text: {
          ro: "Estera 5:6-8",
          en: "Esther 5:6-8"
        }
      },
      {
        id: 19,
        img: '19.jpg',
        done: 25,
        text: {
          ro: "Estera 5:9-14",
          en: "Esther 5:9-14"
        }
      },
      {
        id: 20,
        img: '20.jpg',
        done: 25,
        text: {
          ro: "Estera 6:1-5",
          en: "Esther 6:1-5"
        }
      },
      {
        id: 21,
        img: '21.jpg',
        done: 25,
        text: {
          ro: "Estera 6:6-9",
          en: "Esther 6:6-9"
        }
      },
      {
        id: 22,
        img: '22.jpg',
        done: 25,
        text: {
          ro: "Estera 6:10-14",
          en: "Esther 6:10-14"
        }
      },
      {
        id: 23,
        img: '23.jpg',
        done: 25,
        text: {
          ro: "Estera 7:1-6",
          en: "Esther 7:1-6"
        }
      },
      {
        id: 24,
        img: '24.jpg',
        done: 25,
        text: {
          ro: "Estera 7:7-10",
          en: "Esther 7:7-10"
        }
      },
      {
        id: 25,
        img: '25.jpg',
        done: 25,
        text: {
          ro: "Estera 8:1-6",
          en: "Esther 8:1-6"
        }
      },
      {
        id: 26,
        img: '26.jpg',
        done: 25,
        text: {
          ro: "Estera 8:7-9",
          en: "Esther 8:7-9"
        }
      },
      {
        id: 27,
        img: '27.jpg',
        done: 25,
        text: {
          ro: "Estera 8:10-13",
          en: "Esther 8:10-13"
        }
      },
      {
        id: 28,
        img: '28.jpg',
        done: 25,
        text: {
          ro: "Estera 8:14-17",
          en: "Esther 8:14-17"
        }
      },
      {
        id: 29,
        img: '29.jpg',
        done: 25,
        text: {
          ro: "Estera 9:1-4",
          en: "Esther 9:1-4"
        }
      },
      {
        id: 30,
        img: '30.jpg',
        done: 25,
        text: {
          ro: "Estera 9:5-10",
          en: "Esther 9:5-10"
        }
      },
      {
        id: 31,
        img: '31.jpg',
        done: 25,
        text: {
          ro: "Estera 9:11-16",
          en: "Esther 9:11-16"
        }
      },
      {
        id: 32,
        img: '32.jpg',
        done: 25,
        text: {
          ro: "Estera 9:17-22",
          en: "Esther 9:17-22"
        }
      },
      {
        id: 33,
        img: '33.jpg',
        done: 25,
        text: {
          ro: "Estera 9:23-27",
          en: "Esther 9:23-27"
        }
      },
      {
        id: 34,
        img: '34.jpg',
        done: 25,
        text: {
          ro: "Estera 9:28-32",
          en: "Esther 9:28-32"
        }
      },
      {
        id: 35,
        img: '35.jpg',
        done: 25,
        text: {
          ro: "Estera 10:1-3",
          en: "Esther 10:1-3"
        }
      }
    ];
  });
