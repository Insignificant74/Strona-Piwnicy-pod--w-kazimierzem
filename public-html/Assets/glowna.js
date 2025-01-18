window.addEventListener("load", function () {
  const galleryKuchnia = document.getElementById("galleryKuchnia");
  const imagesKuchnia = [
    "tarciuch.png",
    "nalesnik.png",
    "camembert.png",
    "pizza.png",
    "stek.png",
    "cebularzyki.png",
    "sledz.png",
  ];
  const commentKuchnia = [
    "Oferujemy rozmaite dania regionalne, napszykład tarciuchy, babki ziemniaczane z tartych surowych ziemniaków z dodatkiem białego sera, podane z sosem grzybowym",
    "Mamy coś na każdą okazje, nastruj i dla każdego, naleśnik z kremem bananowo-czekoladowym jest znakomitym przykładem nietypowego danie które się sprawdza jako deser, przekąska oraz danie dziecęce",
    "Nasze skupienie na kuchni tradycyjnej nie jest ograniczeniem, ten smażony camembert bierze nazwę i sposób przygotowania z Norwegii",
    "Znajdzie się coś dla każdego. Sama nasza oferta pizzy może zadowolić większość gości",
    "Mamy też multum dla mięsożerców, od steka i kurczaka supreme po kaczke i łososia",
    "To nie znaczy że brakuje nam opcji wegetariańskich, cebularzyki, specjalność roztoczańska są dobrym początkiem na wyśmienite danie bezmięsne",
    "Pełne danie nie jest na każdą wizytę, do dni gdzie wystarczy coś do picia i coś do zagryzienia, polecamy tradycyjne śledzie",
  ];
  const galleryBar = document.getElementById("galleryBar");
  const imagesBar = [
    "bar_1.png",
    "pornstar.png",
    "sex.png",
    "grzaniec.png",
    "herbata.png",
    "kawa_1.png",
    "kawa_2.png",
    "kawa_4.png",
    "wina_1.png",
    "wina_2.png",
  ];
  const commentBar = [
    "Nasz bar jest dobrze wyposażony, oferuje wiele możliwości. To miejsce, gdzie szeroki wybór alkoholi, kreatywne koktajle oraz różnorodne atrakcje tworzą wyjątkową atmosferę dla każdego gościa.",
    "Pornstar Martini - elegancki koktajl na bazie wódki i likieru marakujowego, zawierający prawdziwą marakuje i wanilie, podawany z kieliszkiem prosecco na boku, który dodaje mu wyjątkowego charakteru i nuty bąbelkowej świeżości.",
    "Sex on the Beach -  klasyczny, owocowy koktajl na bazie triple sec, likieru brzoskwiniowego, soku pomarańczowego i żurawinowego, który zachwyca słodko-kwaśnym smakiem i tropikalnym charakterem.",
    "Grzaniec z czerwonego wina - wzbogacony aromatycznymi przyprawami, takimi jak cynamon, goździki i pomarańcza, to jeden z naszych najbardziej lubianych napojów, który idealnie rozgrzewa i zachwyca swoim korzennym smakiem.",
    "Herbata Zimowa - podawana z aromatycznym sokiem malinowym, miodem i czasami autorskimi przyprawami na boku, to zdecydowanie nasz najczęściej wybierany napój, który urzeka swoim rozgrzewającym i domowym smakiem.",
    "Świeżo mielona kawa, przygotowywana z najwyższej jakości ziaren, zachwyca intensywnym aromatem i głębokim smakiem, stanowiąc idealny początek każdego dnia.",
    "Profesjonalnie spienione mleko, o kremowej konsystencji i delikatnej, aksamitnej piance, doskonale dopełnia każdą kawę, podkreślając jej wyjątkowy smak.",
    "Nasza pasja do kawy przejawia się w dążeniu do perfekcji w każdym etapie jej przygotowania – od starannego wyboru ziaren po serwowanie napoju, który zachwyca smakiem i aromatem.",
    "Nasz asortyment win to starannie wyselekcjonowane butelki, które łączą wyjątkowe smaki z różnorodnych regionów, zapewniając doskonały wybór dla każdego miłośnika wina.",
    "Nasz duży wybór obejmuje zarówno regionalne wina z Winnicy Zamojskiej i Winiarni Zamojskiej, jak i doskonałe wino domowe, które zachwyca swoim unikalnym charakterem i bogactwem smaku.",
  ];
  const galleryPomieszczenia = document.getElementById("galleryPomieszczenia");
  const imagesPomieszczenia = [
    "barowa_1.png",
    "kolorowa_1.png",
    "niebieska_1.png",
    "ogródek_1.png",
    "ukryta_1.png",
    "barowa_2.png",
    "kolorowa_2.png",
    "ogródek_2.png",
  ];
  const commentPomieszczenia = [
    "Sala barowa pozwala na przytulny pobyt najbliżej baru, z zaletą błyskawicznego podania napoi",
    "Sala kolorowa jest najbliżej wyjścia więć wycieczki na szybki telefon lub zaczerpnięcie powietrza są wygodniejsze",
    "Sala niebieska jest położona pomiędzy barem, kuchnią oraz ubikacjami, wszystko jest w zasięgu ręki",
    "Ogródek zimowy pozwala na popatrywanie na przepiękną architekture zamojskiej starówki",
    "Sala ukryta oferuje najwięcej prywatności przezjednostronne wejście oraz odddalenie od reszty lokalu",
    "Kolejne spojrzenie na salę barową",
    "Ponowne luknięcie na salę kolorową",
    "Dodatkowa perspektywa ogródka zimowego",
  ];
  /*
  const galleryOferty = document.getElementById("galleryOferty");
  const imagesOferty = [];
  const commentOferty = [];
  */

  setupGallery(galleryBar, imagesBar, commentBar);
  setupGallery(galleryKuchnia, imagesKuchnia, commentKuchnia);
  setupGallery(galleryPomieszczenia, imagesPomieszczenia, commentPomieszczenia);
  //setupGallery(galleryOferty, imagesOferty, commentOferty);

  preloadImages(imagesBar);
  preloadImages(imagesKuchnia);
  preloadImages(imagesPomieszczenia);
  //preloadImages(imagesOferty);
});
