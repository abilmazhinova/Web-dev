export interface Product {
  category: string;
  categoryId: number;
  id: number;
  name: string;
  price: number;
  description: string;
  raiting:string ;
  image: string;
  kaspiLink: string;
  likes: number;
}

export const products = [
  {
    category: 'Dr.Ceuracle',
    categoryId: 1,
    id: 1,
    name: 'Dr.Ceuracle Pro Balance Biotics Moisturizer крем 100 мл    ',
    price: 6199,
    description: 'Этот увлажняющий крем имеет идентичные коже ингредиенты, которые имитируют кожные выделения, увлажняет кожу, а также имеет функцию удерживать влагу. В составе минеральная вода, теанин, глутатион и молочные липиды. Насыщен биомиметической водой, восстанавливает и поддерживает уровень влаги в коже.  ',
    raiting:'5/5⭐',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h63/h92/64090050527262.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/dr-ceuracle-pro-balance-biotics-moisturizer-krem-100-ml-100675870/?c=750000000',
    likes: 0
  },
  {  
    category: 'Dr.Ceuracle',
    categoryId: 1,
    id: 2,
    name: 'Dr.Ceuracle крем Hyal Reyouth Moist Sun SPF50+ PA++++ для лица 50 мл',
    price: 6426,
    description: 'Солнцезащитный крем с гиалуроновой кислотой Dr.Ceuracle Hyal Reyouth Moist Sun SPF 50+ PA++++ надёжно защищает от ультрафиолета, вызывающего фотостарение и повреждение кожи, а также глубоко увлажняет благодаря 2 видам гиалуроновой кислоты в составе. Содержит ниацинамид, биосахаридную смолу, фруктозу, пантенол. Химические фильтры нового поколения обеспечивают продолжительную защиту до 8 часов — продукт не нужно обновлять каждые 2 часа.  ',
    raiting: '5/5⭐',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha7/h52/64367738650654.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/dr-ceuracle-krem-hyal-reyouth-moist-sun-spf50-pa-dlja-litsa-50-ml-104602175/?c=750000000',
    likes: 0
  },
  {
    category: 'Dr.Ceuracle',
    categoryId: 1,
    id: 3,
    name: 'Dr.Ceuracle Pro Balance Night Enzyme Wash энзимная пудра 50 мл',
    price: 6529,
    description: 'Энзимная пудра с древесным углём для жирной кожи Dr.Ceuracle Pro Balance Night Enzyme Wash обеспечивает тщательное глубокое очищение: отшелушивает омертвевшие клетки, удаляет все виды загрязнений, растворяет сальные пробки, стимулирует активное обновление и регенерацию кожи. Укрепляет защитный слой кожи, восстанавливает и оберегает от агрессивного воздействия внешних раздражителей. Содержит порошок древесного угля и комплекс пробиотиков..',
    raiting: '5/5⭐',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha7/h52/64194554986526.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/dr-ceuracle-pro-balance-night-enzyme-wash-enzimnaja-pudra-50-ml-101239648/?c=750000000',
    likes: 0
  },
  {
    category: 'Dr.Ceuracle',
    categoryId: 1,
    id:4,
    name:'Dr.Ceuracle тонер Pro Balance Biotics 300 мл',
    price:6705,
    description:'Увлажняющий тонер с низким уровнем pH на основе биомиметической воды помогает удалить с поверхности кожи остатки загрязнений и очищающих средств, мгновенно устраняет чувство сухости и стянутости после умывания, выравнивает кислотно-щелочной баланс. Восстанавливает оптимальную увлажненность кожи и готовит ее к нанесению последующих этапов ухода.',
    raiting:'4/5⭐',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h38/h0e/64048306061342.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/dr-ceuracle-toner-pro-balance-biotics-300-ml-100904330/?c=750000000',
    likes: 0
  },
  {
    category: 'Dr.Ceuracle',
    categoryId: 1,
    id: 5,
    name: 'Dr.Ceuracle ампульная сыворотка Royal Vita Propolis 33 Ampoule для лица 30 мл',
    price: 10499,
    description: 'Успокаивает и выравнивает тон кожи лица.Ампульная сыворотка предназначена для всех типов кожи. Производство Корея.',
    raiting: '3/5⭐',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf9/h58/84484555898910.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/dr-ceuracle-ampul-naja-syvorotka-royal-vita-propolis-33-ampoule-dlja-litsa-30-ml-114515914/?c=750000000',
    likes: 0
  },
  {
    category: 'Round Lab',
    categoryId:2,
    id:6,
    name:'Round Lab тонер 1025 Dokdo Toner 200 мл',
    price:4600,
    description:'Отшелушивающий тоник с морской водой Round Lab 1025 Dokdo Toner восстанавливает кислотно-щелочной баланс кожи, поддерживает оптимальный уровень увлажнения в коже и регулирует работу сальных желёз. Тоник прекрасно удаляет омертвевшие клетки кожи, излишки кожного сала и способствует очищению пор. Завершает процесс очищения и подготавливает кожу к нанесению уходовых средств.',
    raiting:'5/5⭐',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h74/hdf/64923792539678.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/round-lab-toner-1025-dokdo-toner-200-ml-104770477/?c=750000000',
    likes: 0
  },
  {
    category: 'Round Lab',
    categoryId:2,
    id: 7,
    name: 'Round Lab Мягкая пенка для умывания 1025 Dokdo Cleanser пенка 150 мл',
    price: 4339,
    description: 'Мягкая пенка для умывания с морской водой Round Lab1025 Dokdo Cleanser подходит для деликатного очищения сухой и чувствительной кожи. Нежно удаляет все загрязнения, не провоцирует появления сухости и стянутости, сохраняет кожу увлажнённой даже после умывания. Слабокислотная пенка имеет нейтральный рН, мягко воздействует на поверхность кожи и защищает от агрессивного воздействия проточной воды.',
    raiting: '5/5⭐',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h27/h6d/84738057207838.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/round-lab-mjagkaja-penka-dlja-umyvanija-1025-dokdo-cleanser-penka-150-ml-115419628/?c=750000000',
    likes: 0
  },
  {
    category: 'Round Lab',
    categoryId:2,
    id:8,
    name:'Round Lab крем 1025 Dokdo Cream для лица 80 мл',
    price:7771,
    description:'Интенсивно увлажняет в течение 24 часов, устраняет сухость и восстанавливает обезвоженную кожу, разглаживает и питает, дарит комфорт, успокаивает, сглаживает неровности рельефа, смягчает шелушение и укрепляет защитный гидролипидный барьер. ',
    raiting:'5/5⭐',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hb7/hdf/68135096057886.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/round-lab-krem-1025-dokdo-cream-dlja-litsa-80-ml-108549053/?c=750000000',
    likes: 0
  },
  {
    category: 'Round Lab',
    categoryId:2,
    id: 9,
    name: 'Round Lab Dokdo Cleansing Oil гидрофильное масло 150 мл',
    price: 6977 ,
    description: 'Гидрофильное масло подходит для всех типов кожи, бережно очищает её от макияжа и сохраняет уровень pH. ',
    raiting: '5/5⭐',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hff/h85/64513452179486.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/round-lab-dokdo-cleansing-oil-gidrofil-noe-maslo-150-ml-105297609/?c=750000000',
    likes: 0
  },
  {
    category: 'Round Lab',
    categoryId:2,
    id:10,
    name:'Увлажняющий крем 1025 Dokdo Cream 80мл',
    price:8269,
    description:'Увлажняющий крем для лица 1025 Dokdo Cream, интенсивно увлажняет вашу кожу в течение 24 часов, укрепляет кожный барьер и эпидермис, устраняя сухость. Содержит в себе 3 вида гиалуроновой кислоты, которые активно увлажняют кожу. Гиалуроновые кислоты насыщают кожу влагой, делают более упругой и здоровой.',
    raiting:'5/5⭐',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hb4/h26/68223102746654.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/uvlazhnjajuschii-krem-1025-dokdo-cream-80ml-108580591/?c=750000000',
    likes: 0
  },
  {
    category: 'COSRX',
    categoryId: 3,
    id: 11,
    name: 'COSRX Low pH Good Morning гель-пенка 150 мл',
    price: 2919,
    description: 'Гель для умывания с BHA-кислотами и низким pH COSRX Low pH Good Morning Gel Cleanser идеальный вариант для очищения кожи лица утром: превосходно удаляет излишки кожного себума и омертвевшие клетки, даря ощущение чистоты, увлажненности и комфорта на весь день. Очищает мягко, не провоцирует обезвоженность.  ',
    raiting:'5/5⭐',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h0e/hb2/63912361230366.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/cosrx-low-ph-good-morning-gel--penka-150-ml-100375636/?c=750000000',
    likes: 0
  },
  {  
    category: 'COSRX',
    categoryId: 3,
    id: 12,
    name: 'COSRX эссенция Advanced Snail 96 Mucin Power 100 мл',
    price: 4999,
    description: 'Усиленная многофункциональная эссенция с 96% содержанием фильтрата улитки COSRX Advanced Snail 96 Mucin Power Essence предназначена для интенсивного ухода за увядающей, с признаками стресса, проблемной кожей лица и вокруг глаз. Эссенция выравнивает тон и рельеф кожи, подтягивает ее, расправляет морщинки, осветляет пигментацию, сужает поры, нормализует салоотделение, ускоряет заживление повреждений, улучшает общий вид кожи.  ',
    raiting: '5/5⭐',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h57/hd4/63828699742238.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/cosrx-essentsija-advanced-snail-96-mucin-power-100-ml-100001281/?c=750000000',
    likes: 0
  },
  {
    category: 'COSRX',
    categoryId: 3,
    id: 13,
    name: 'COSRX тонер Centella Water Alcohol 150 мл',
    price: 3899,
    description: 'Безалкогольный тоник увлажняет и успокаивает кожу, обеспечивая ее витаминами и минералами, позволяет справиться с покраснениями, куперозом, а также высыпаниями акне, помогает повысить тонус и упругость зрелой кожи, сделать ее более гладкой и подтянутой.',
    raiting: '5/5⭐',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hae/h7d/63877201494046.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/cosrx-toner-centella-water-alcohol-150-ml-100274476/?c=750000000',
    likes: 0
  },
  {
    category: 'COSRX',
    categoryId: 3,
    id:14,
    name:'Патчи COSRX точечные Clear Fit Master противовоспалительные 18 шт',
    price:1299 ,
    description:'Ультратонкие гидроколлоидные патчи предотвращают попадание инфекции в поражённый участок и устраняют гнойные выделения. Патчи защищают кожу от пересыхания и удерживают влагу в ней.',
    raiting:'4/5⭐',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h15/hb6/63979910692894.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/cosrx-tochechnye-clear-fit-master-protivovospalitel-nye-18-sht-103332234/?c=750000000',
    likes: 0
  },
  {
    category: 'COSRX',
    categoryId: 3,
    id: 15,
    name: 'COSRX One Step Original Clear Pads тонер диски (пэды) для лица 70 шт',
    price: 6974,
    description: 'Очищающие пэды от CosRX, контролирующие работу сальных желез, а также обладающий антисептическими и противовоспалительными свойствами. Эффективная пропитка пэдов – действенная эссенция на основе ВНА-кислоты и экстракта коры белой ивы. За счет этих компонентов средство контролирует гидро-липидный баланс кожи, решает проблемы кожи с акне, угревой сыпью, гнойничками.',
    raiting: '3/5⭐',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hfb/hf7/63769181028382.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/cosrx-one-step-original-clear-pads-toner-diski-pedy-dlja-litsa-70-sht-100476929/?c=750000000',
    likes: 0
  },
  {
    category: 'SKIN1004',
    categoryId: 4,
    id:16,
    name:'Skin1004 сыворотка Madagascar Centella Ampoule для лица 55 мл',
    price:6000,
    description:'Имеет противовоспалительный эффект, лечит прыщи, затягивает шрамы, расширенные поры, предотвращает потерю упругости и тонких линий, делая вашу кожу более сильной, увлажненной.',
    raiting:'5/5⭐',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hb3/h8b/64910388396062.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/skin1004-syvorotka-madagascar-centella-ampoule-dlja-litsa-55-ml-104765457/?c=750000000',
    likes: 0
  },
  {
    category: 'SKIN1004',
    categoryId: 4,
    id: 17,
    name: 'Skin1004 Madagascar Centella Ampoule пенка 125 мл',
    price: 3889,
    description: 'Слабокислотная пенка для умывания, которая укрепляет и восстанавливает естественный защитный барьер кожи, успокаивает и увлажняет ее, делая цвет лица более здоровым.',
    raiting: '5/5⭐',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/he2/hfa/65122471870494.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/skin1004-madagascar-centella-ampoule-penka-125-ml-104868246/?c=750000000',
    likes: 0
  },
  {
    category: 'SKIN1004',
    categoryId: 4,
    id:18,
    name:'Skin1004 Madagascar Centella Light гидрофильное масло 200 мл',
    price:6222,
    description:'Это универсальное гипоаллергенное гидрофильное масло, предназначенное для удаления макияжа и кожного жира. Он производится с использованием метода мицеллы, который хорошо известен эффективным удалением макияжа и микро-пыли с лица. Это легкое очищающее масло не вызывает раздражения на лице, а также воспаление глаз.',
    raiting:'5/5⭐',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h27/82994195300382.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/skin1004-madagascar-centella-light-gidrofil-noe-maslo-200-ml-103907513/?c=750000000',
    likes: 0
  },
  {
    category: 'SKIN1004',
    categoryId: 4,
    id: 19,
    name: 'Skin1004 тоник Toning Toner 210 мл',
    price: 5488 ,
    description: 'Приносит облегчение и освежает раздраженную, чувствительную, проблемную и уставшую кожу, возвращая ей потерянную влагу, упругость и эластичность.',
    raiting: '5/5⭐',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/hea/64916331659294.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/skin1004-tonik-toning-toner-210-ml-104762771/?c=750000000',
    likes: 0
  },
  {
    category: 'SKIN1004',
    categoryId: 4,
    id:20,
    name:'Skin1004 крем Madagascar Centella Cream для лица 75 мл',
    price:6900 ,
    description:'Питательный крем с центеллой SKIN1004 Madagascar Centella Cream наполняет кожу влагой, устраняет сухость, шелушение и чувство стянутости, укрепляет естественный защитный барьер, смягчает и разглаживает. Средство успокаивает, стимулирует регенерацию, снимает покраснение и раздражение.',
    raiting:'5/5⭐',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h07/hb2/69823195480094.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/skin1004-krem-madagascar-centella-cream-dlja-litsa-75-ml-109249274/?c=750000000',
    likes: 0
  }
];

