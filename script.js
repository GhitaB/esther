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
          ro: "Estera 1:1-4",
          en: "Esther 1:1-4"
        }
      },
      {
        id: 2,
        img: '02.png',
        done: 30,
        text: {
          ro: "Estera 1:5-8",
          en: "Esther 1:5-8"
        }
      },
      {
        id: 3,
        img: '03.png',
        done: 30,
        text: {
          ro: "Estera 1:9-12",
          en: "Esther 1:9-12"
        }
      },
      {
        id: 4,
        img: '04.png',
        done: 30,
        text: {
          ro: "Estera 1:13-20",
          en: "Esther 1:13-20"
        }
      },
      {
        id: 5,
        img: '05.png',
        done: 30,
        text: {
          ro: "Estera 1:21-22",
          en: "Esther 1:21-22"
        }
      },
      {
        id: 6,
        img: '06.png',
        done: 30,
        text: {
          ro: "Estera 2:1-4",
          en: "Esther 2:1-4"
        }
      },
      {
        id: 7,
        img: '07.png',
        done: 30,
        text: {
          ro: "Estera 2:5-7",
          en: "Esther 2:5-7"
        }
      },
      {
        id: 8,
        img: '08.png',
        done: 30,
        text: {
          ro: "Estera 2:8-11",
          en: "Esther 2:8-11"
        }
      },
      {
        id: 9,
        img: '09.png',
        done: 30,
        text: {
          ro: "Estera 2:12-14",
          en: "Esther 2:12-14"
        }
      },
      {
        id: 10,
        img: '10.png',
        done: 30,
        text: {
          ro: "Estera 2:15-20",
          en: "Esther 2:15-20"
        }
      },
      {
        id: 11,
        img: '11.png',
        done: 30,
        text: {
          ro: "Estera 2:21-23",
          en: "Esther 2:21-23"
        }
      },
      {
        id: 12,
        img: '12.png',
        done: 30,
        text: {
          ro: "Estera 3:1-6",
          en: "Esther 3:1-6"
        }
      },
      {
        id: 13,
        img: '13.png',
        done: 30,
        text: {
          ro: "Estera 3:7-11",
          en: "Esther 3:7-11"
        }
      },
      {
        id: 14,
        img: '14.png',
        done: 30,
        text: {
          ro: "Estera 3:12-15",
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
