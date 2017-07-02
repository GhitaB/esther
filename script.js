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
        img: 'ZZ.png',
        done: 0,
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
        img: 'ZZ.png',
        done: 0,
        title: {
          ro: "Titlu",
          en: "Title"
        },
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 2,
        img: 'ZZ.png',
        done: 0,
        title: {
          ro: "Titlu",
          en: "Title"
        },
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 3,
        img: 'ZZ.png',
        done: 0,
        title: {
          ro: "Titlu",
          en: "Title"
        },
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 4,
        img: 'ZZ.png',
        done: 0,
        title: {
          ro: "Titlu",
          en: "Title"
        },
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 5,
        img: 'ZZ.png',
        done: 0,
        title: {
          ro: "Titlu",
          en: "Title"
        },
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 6,
        img: 'ZZ.png',
        done: 0,
        title: {
          ro: "Titlu",
          en: "Title"
        },
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 7,
        img: 'ZZ.png',
        done: 0,
        title: {
          ro: "Titlu",
          en: "Title"
        },
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 8,
        img: 'ZZ.png',
        done: 0,
        title: {
          ro: "Titlu",
          en: "Title"
        },
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 9,
        img: 'ZZ.png',
        done: 0,
        title: {
          ro: "Titlu",
          en: "Title"
        },
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 10,
        img: 'ZZ.png',
        done: 0,
        title: {
          ro: "Titlu",
          en: "Title"
        },
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 11,
        img: 'ZZ.png',
        done: 0,
        title: {
          ro: "Titlu",
          en: "Title"
        },
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 12,
        img: 'ZZ.png',
        done: 0,
        title: {
          ro: "Titlu",
          en: "Title"
        },
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 13,
        img: 'ZZ.png',
        done: 0,
        title: {
          ro: "Titlu",
          en: "Title"
        },
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 14,
        img: 'ZZ.png',
        done: 0,
        title: {
          ro: "Titlu",
          en: "Title"
        },
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 15,
        img: 'ZZ.png',
        done: 0,
        title: {
          ro: "Titlu",
          en: "Title"
        },
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 16,
        img: 'ZZ.png',
        done: 0,
        title: {
          ro: "Titlu",
          en: "Title"
        },
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 17,
        img: 'ZZ.png',
        done: 0,
        title: {
          ro: "Titlu",
          en: "Title"
        },
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 18,
        img: 'ZZ.png',
        done: 0,
        title: {
          ro: "Titlu",
          en: "Title"
        },
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 19,
        img: 'ZZ.png',
        done: 0,
        title: {
          ro: "Titlu",
          en: "Title"
        },
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 20,
        img: 'ZZ.png',
        done: 0,
        title: {
          ro: "Titlu",
          en: "Title"
        },
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 21,
        img: 'ZZ.png',
        done: 0,
        title: {
          ro: "Titlu",
          en: "Title"
        },
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 22,
        img: 'ZZ.png',
        done: 0,
        title: {
          ro: "Titlu",
          en: "Title"
        },
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 23,
        img: 'ZZ.png',
        done: 0,
        title: {
          ro: "Titlu",
          en: "Title"
        },
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 24,
        img: 'ZZ.png',
        done: 0,
        title: {
          ro: "Titlu",
          en: "Title"
        },
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 25,
        img: 'ZZ.png',
        done: 0,
        title: {
          ro: "Titlu",
          en: "Title"
        },
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 26,
        img: 'ZZ.png',
        done: 0,
        title: {
          ro: "Titlu",
          en: "Title"
        },
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 27,
        img: 'ZZ.png',
        done: 0,
        title: {
          ro: "Titlu",
          en: "Title"
        },
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 28,
        img: 'ZZ.png',
        done: 0,
        title: {
          ro: "Titlu",
          en: "Title"
        },
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 29,
        img: 'ZZ.png',
        done: 0,
        title: {
          ro: "Titlu",
          en: "Title"
        },
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 30,
        img: 'ZZ.png',
        done: 0,
        title: {
          ro: "Titlu",
          en: "Title"
        },
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 31,
        img: 'ZZ.png',
        done: 0,
        title: {
          ro: "Titlu",
          en: "Title"
        },
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 32,
        img: 'ZZ.png',
        done: 0,
        title: {
          ro: "Titlu",
          en: "Title"
        },
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 33,
        img: 'ZZ.png',
        done: 0,
        title: {
          ro: "Titlu",
          en: "Title"
        },
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 34,
        img: 'ZZ.png',
        done: 0,
        title: {
          ro: "Titlu",
          en: "Title"
        },
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      },
      {
        id: 35,
        img: 'ZZ.png',
        done: 0,
        title: {
          ro: "Titlu",
          en: "Title"
        },
        text: {
          ro: "Text aici",
          en: "Text here"
        }
      }
    ];
  });
