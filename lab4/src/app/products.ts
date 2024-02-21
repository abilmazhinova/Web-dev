export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  raiting:string ;
  image: string;
  kaspiLink: string;
}

export const products = [
  {
    id: 1,
    name: 'Round Lab крем Birch Juice Moisturizing SPF50+ 50 мл',
    price: 4890,
    description: 'Солнцезащитный крем для лица для всех типов кожи.Защита от ультрафиолетов SPF50 + / PA ++++. Защищает от пагубного воздействия UVB-лучей и UVA-лучей , комфортно распределяется на коже, не выбеливает и не ощущается в течение дня (в основе санскрина химические фильтры).  ',
    raiting:'5/5⭐',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h54/hb5/64516798775326.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/round-lab-krem-birch-juice-moisturizing-spf50-dlja-litsa-50-ml-105263927/?c=750000000'
  },
  {  
    id: 2,
    name: 'SKIN&LAB Vitamin C Brightening сыворотка 100 мл',
    price: 5979,
    description: 'Мощная, легкая осветляющая сыворотка с 15 комплексами витаминов, концентрированная с витамином С, помогает осветлить кожу и выровнять ее тон. Витаминные пузырьковые капсулы с антиоксидантами помогают сделать кожу здоровой, молодой и сияющей.',
    raiting: '5/5⭐',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/haa/h15/64894199169054.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/skin-lab-vitamin-c-brightening-syvorotka-30-ml-104829563/?c=750000000'
  },
  {
    id: 3,
    name: 'COSRX Advanced Snail 92 крем с муцином улитки 100 мл',
    price: 5988,
    description: 'Многофункциональный крем с 92% содержанием муцина улитки COSRX Advanced Snail 92 All in one Cream активно увлажняет кожу, запускает естественные процессы регенерации, способствует заживлению повреждений, успокаивает и смягчает кожу. Предотвращает появление воспалений и раздражений,  возвращает и сохраняет свежесть и молодость кожи.',
    raiting: '5/5⭐',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf9/hb9/63829060321310.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/cosrx-advanced-snail-92-krem-s-mutsinom-ulitki-100-ml-100001268/?c=750000000'
  },
  {
    id:4,
    name:'CeraVe Увлажняющий крем для сухой и очень сухой кожи лица и тела, 50 мл',
    price:2879,
    description:'Насыщенная, но легкая и нежирная формула, обеспечивает длительное увлажнение в течение всего дня, восстановление и укрепление защитного кожного барьера.Гиалуроновая кислота в составе увлажняющего крема позволяет поддерживать естественный уровень увлажнения кожи в течение долгого времени.',
    raiting:'4/5⭐',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hdf/h70/83888819044382.png?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/cerave-uvlazhnjajuschii-krem-dlja-suhoi-i-ochen-suhoi-kozhi-litsa-i-tela-50-ml-100757355/?c=750000000'
  },
  {
    id: 5,
    name: 'BABOR HSR Lifting Extra Firming Cream Лифтинг-крем для лица 50 мл',
    price: 62099,
    description: 'BABOR HSR Lifting Extra Firming Cream Rich - Анти-возрастной обогащенный крем для лица комфортной текстуры, с направленным действием против морщин. Разглаживает мимические морщины (гусиные лапки, межбровные морщины, морщины в области лба, губ), гравитационные морщины , морщины вызванные дефицитом влаги.',
    raiting: '3/5⭐',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h6d/hed/63772189196318.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/babor-hsr-lifting-extra-firming-cream-lifting-krem-dlja-litsa-50-ml-17600084/?c=750000000'
  },
  {
    id:6,
    name:'Skin1004 сыворотка Madagascar Centella Probio-Cica Intensive Ampoule для лица 50 мл',
    price:6500,
    description:'Высококонцентрированная ампула с пробиотиками предназначена для восстановления, увлажнения и питания ослабленной кожи, оказывает ярко выраженное омолаживающее действие.',
    raiting:'5/5⭐',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h0f/h59/79591575912478.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/skin1004-syvorotka-madagascar-centella-probio-cica-intensive-ampoule-dlja-litsa-50-ml-109664621/?c=750000000'
  },
  {
    id: 7,
    name: 'SKIN&LAB сыворотка Retinol Repair для лица 30 мл',
    price: 8497,
    description: 'Веганская сыворотка, обогащенная липосомным ретинолом, обеспечивает подтягивающий эффект, разглаживая морщины и тонкие линии. Помогает защитить кожу от внешних раздражителей и уменьшает раздражение. Наполняет и разглаживает кожу, сводя к минимуму морщины, доставляя на кожу натуральные ингредиенты.',
    raiting: '5/5⭐',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h43/h41/69905583144990.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/skin-lab-syvorotka-retinol-repair-dlja-litsa-30-ml-109283506/?c=750000000'
  },
  {
    id:8,
    name:'Dr.Ceuracle сыворотка Royal Vita Propolis 33 Ampoule для лица 15 мл',
    price:4899,
    description:'Сыворотка с экстрактом прополиса и экстрактом маточного молочка обеспечивает коже интенсивное питание, осветляет тусклую кожу, регенерируя ее и придавая сияние. Прополис ингибирует рост бактерий, которые вызывают акне, усиливает синтез коллагена,а также обеспечивает антиоксидантную защиту клеток. ',
    raiting:'5/5⭐',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h07/h86/81285690818590.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/dr-ceuracle-syvorotka-royal-vita-propolis-33-ampoule-dlja-litsa-15-ml-110870764/?c=750000000'
  },
  {
    id: 9,
    name: 'Round Lab Birch Juice Moisturizing с берёзовым соком сыворотка 50 мл',
    price: 5328,
    description: 'Увлажняющая сыворотка с берёзовым соком Round Lab Birch Juice Moisturizing Serum подходит для ухода за чувствительной кожей, успокаивает раздражения и покраснения, насыщает эпидермис влагой и способствует ее удержанию внутри клеток. Увлажняющая сыворотка с берёзовым соком прекрасно напитывает кожу необходимой влагой, успокаивает раздражения и покраснения, обладает бактерицидным действием, предотвращает появление воспалений, поддерживает липидный барьер кожи, стимулирует регенерацию клеток и восстанавливает рельеф. ',
    raiting: '5/5⭐',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hca/h2a/64388642078750.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/round-lab-birch-juice-moisturizing-s-berjozovym-sokom-syvorotka-50-ml-104060306/?c=750000000'
  },
  {
    id:10,
    name:'Dr.Ceuracle Hyal Reyouth Ampoule сыворотка 50 мл',
    price:6798,
    description:'Увлажняющая сыворотка на основе комплекса 6 гиалуроновых кислот, витамина В5 и фруктана образует мощный увлажняющий бустер, формирующих влагоудерживающий барьер. Мгновенно увлажняет - наполняет влагой глубокие слои эпидермиса и дермы, восстанавливает гидробаланс кожи.',
    raiting:'5/5⭐',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h2d/h81/64195712679966.jpg?format=gallery-medium',
    kaspiLink: 'https://kaspi.kz/shop/p/dr-ceuracle-hyal-reyouth-ampoule-syvorotka-50-ml-101239742/?c=750000000'
  }
];

