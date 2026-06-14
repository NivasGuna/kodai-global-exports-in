export interface ProductType {
  id: string;
  label: string;
  image: string;
  overview: string;
  specifications: string[];
}

export interface Product {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  types: ProductType[];
}

export const products: Product[] = [
  {
    id: "tapioca-starch",
    title: "Tapioca Starch",
    shortDescription: "High-quality tapioca starch processed from selected cassava roots for consistent texture, purity, and dependable export quality.",
    image: "/images/tapioca-starch.png",
    types: [
      {
        id: "food-grade",
        label: "Food Grade",
        image: "/images/tapioca-starch-food-grade.png",
        overview: "Food-grade tapioca starch is widely used in food applications for its smooth texture, neutral taste, and excellent thickening and binding properties. It enhances consistency in sauces, bakery items, snacks, and processed foods.",
        specifications: [
          "Product Name: Native Tapioca Starch - Food Grade",
          "Grade: Food Grade",
          "Appearance: Fine white free-flowing powder",
          "Moisture: 13% max",
          "Starch Content: 98% min, dry basis",
          "Whiteness: 90% min",
          "Ash: 0.20% max",
          "Fibre: 0.20% max",
          "pH: 5.0 - 7.0",
          "SO2: 30 ppm max / as per destination regulation",
          "Mesh Size: 60 - 120 mesh",
          "Foreign Matter: Free from visible foreign matter",
          "GMO Status: Non-GMO / as per buyer requirement",
          "Packaging: 25 kg PP bags / HDPE bags with inner liner / as per buyer requirement",
          "Shelf Life: 12 months from date of manufacturing",
          "Storage: Store in a cool, dry, hygienic place away from moisture and direct sunlight"
        ]
      },
      {
        id: "industrial-grade",
        label: "Industrial Grade",
        image: "/images/tapioca-starch-industrial-grade.png",
        overview: "Industrial-grade tapioca starch is used in non-food applications requiring stable viscosity and bonding strength. It is suitable for textile, paper, adhesive, and related industrial uses.",
        specifications: [
          "Product Name: Tapioca Starch - Industrial Grade",
          "Grade: Industrial Grade",
          "Appearance: White to off-white powder",
          "Moisture: 13% max",
          "Starch Content: 85% min / as per buyer application",
          "Ash: 0.50% max",
          "Fibre: 0.30% max",
          "pH: 5.0 - 7.5",
          "Viscosity: As per buyer application",
          "Mesh Size: 60 - 100 mesh / as per buyer requirement",
          "Foreign Matter: Free from visible foreign matter",
          "Packaging: 25 kg / 50 kg PP bags or as per buyer requirement",
          "Shelf Life: 12 months from date of manufacturing",
          "Storage: Store in a cool and dry place away from moisture",
          "Applications: Paper, textile sizing, adhesives, corrugation gum, plywood, foundry, drilling and other industrial uses"
        ]
      }
    ]
  },
  {
    id: "tapioca-flour",
    title: "Tapioca Flour",
    shortDescription: "Finely processed tapioca flour made from cassava roots, suitable for food-grade applications and export requirements.",
    image: "/images/tapioca-flour.png",
    types: [
      {
        id: "food-grade",
        label: "Food Grade",
        image: "/images/tapioca-flour-food-grade.png",
        overview: "Tapioca flour is a finely milled cassava product valued for its light texture and versatility. It is commonly used in baking, snacks, and gluten-free food preparations.",
        specifications: [
          "Product Name: Tapioca Flour",
          "Grade: Food Grade",
          "Appearance: White fine powder",
          "Moisture: 13% max",
          "Mesh Size: 85 mesh min / as per buyer requirement",
          "Ash: 0.50% max",
          "Fibre: 0.50% max",
          "pH: 5.0 - 7.0",
          "Foreign Matter: Free from visible foreign matter",
          "Odour: Neutral / characteristic",
          "Packaging: 25 kg PP bags / customized packing as per buyer requirement",
          "Shelf Life: 12 months from date of manufacturing",
          "Storage: Store in a cool, dry and hygienic place",
          "Applications: Bakery products, snacks, noodles, gluten-free foods, thickening agent and food processing"
        ]
      }
    ]
  },
  {
    id: "sago-varieties",
    title: "Sago Varieties",
    shortDescription: "Premium sago varieties with consistent pearl size, clean appearance, and reliable cooking performance for domestic and export markets.",
    image: "/images/sago-sabudana.png",
    types: [
      {
        id: "milk-white",
        label: "Milk White",
        image: "/images/milk-white.png",
        overview: "Milk white sago is known for its high whiteness, clean appearance, and uniform size. It is suitable for food applications where visual quality and consistency matter.",
        specifications: [
          "Product Name: Milk White Sago",
          "Grade: Food Grade",
          "Appearance: Milky white uniform round pearls",
          "Colour: Bright milk white",
          "Moisture: 12% max / as per buyer requirement",
          "Starch Content: 98.5% min, dry basis",
          "Ash: 0.40% max",
          "Protein: 0.30% max",
          "Crude Fibre: 0.20% max",
          "pH: 4.5 - 7.0",
          "SO2: 20 ppm max / as per destination regulation",
          "Hydrocyanic Acid: As per food safety regulation",
          "Foreign Matter: Free from visible foreign matter",
          "Packaging: 25 kg PP bags / as per buyer requirement",
          "Shelf Life: 12 months from date of manufacturing",
          "Storage: Store in a cool, dry and hygienic place"
        ]
      },
      {
        id: "glassy-nylon",
        label: "Glassy Nylon",
        image: "/images/glassy-nylon.png",
        overview: "Glassy nylon is a premium sago variety known for its transparent and glossy appearance. It is preferred in specialty food preparations where visual appeal is important.",
        specifications: [
          "Product Name: Glassy Nylon Sago",
          "Grade: Food Grade",
          "Appearance: Glassy / translucent uniform round pearls",
          "Colour: Crystal white to translucent",
          "Moisture: 12% max / as per buyer requirement",
          "Starch Content: 98.5% min, dry basis",
          "Ash: 0.40% max",
          "Protein: 0.30% max",
          "Crude Fibre: 0.20% max",
          "pH: 4.5 - 7.0",
          "SO2: 20 ppm max / as per destination regulation",
          "Hydrocyanic Acid: As per food safety regulation",
          "Pearl Shape: Uniform round pearls",
          "Foreign Matter: Free from visible foreign matter",
          "Packaging: 25 kg PP bags / as per buyer requirement",
          "Shelf Life: 12 months from date of manufacturing",
          "Storage: Store in a cool, dry and hygienic place"
        ]
      },
      {
        id: "mini-nylon",
        label: "Mini Nylon",
        image: "/images/mini-nylon.png",
        overview: "Mini nylon consists of small-sized sago pearls designed for faster cooking. It is commonly used in instant foods, ready-to-cook mixes, and desserts.",
        specifications: [
          "Product Name: Mini Nylon Sago",
          "Grade: Food Grade",
          "Appearance: Small uniform round pearls",
          "Colour: White to translucent",
          "Moisture: 12% max / as per buyer requirement",
          "Starch Content: 98.5% min, dry basis",
          "Ash: 0.40% max",
          "Protein: 0.30% max",
          "Crude Fibre: 0.20% max",
          "pH: 4.5 - 7.0",
          "SO2: 20 ppm max / as per destination regulation",
          "Hydrocyanic Acid: As per food safety regulation",
          "Pearl Size: Mini / small size",
          "Foreign Matter: Free from visible foreign matter",
          "Packaging: 25 kg PP bags / as per buyer requirement",
          "Shelf Life: 12 months from date of manufacturing",
          "Storage: Store in a cool, dry and hygienic place"
        ]
      },
      {
        id: "sago-sabudana",
        label: "Sago / Sabudana",
        image: "/images/sago-sabudana.png",
        overview: "Sago, also known as sabudana, is processed into uniform pearls with good cooking consistency. It becomes soft and translucent after cooking and is widely used in traditional foods and desserts.",
        specifications: [
          "Product Name: Tapioca Sago / Sabudana",
          "Grade: Food Grade",
          "Appearance: White / translucent round pearls",
          "Moisture: 12% max / as per buyer requirement",
          "Starch Content: 98.5% min, dry basis",
          "Ash: 0.40% max",
          "Protein: 0.30% max",
          "Crude Fibre: 0.20% max",
          "pH: 4.5 - 7.0",
          "SO2: 20 ppm max / as per destination regulation",
          "Hydrocyanic Acid: As per food safety regulation",
          "Foreign Matter: Free from visible foreign matter",
          "Packaging: 25 kg PP bags / 1 kg, 5 kg, 10 kg packs / as per buyer requirement",
          "Shelf Life: 12 months from date of manufacturing",
          "Storage: Store in a cool, dry and hygienic place",
          "Applications: Household consumption, snacks, desserts, fasting foods and food processing"
        ]
      },
      {
        id: "modidana",
        label: "Modidana",
        image: "/images/modidana.png",
        overview: "Modidana is a traditional cassava-based product valued for its distinct texture and cooking characteristics. It is commonly used in regional and specialty food preparations.",
        specifications: [
          "Product Name: Modidana Sago",
          "Grade: Food Grade",
          "Appearance: Medium to large uniform round pearls",
          "Colour: White / milky white",
          "Moisture: 12% max / as per buyer requirement",
          "Starch Content: 98.5% min, dry basis",
          "Ash: 0.40% max",
          "Protein: 0.30% max",
          "Crude Fibre: 0.20% max",
          "pH: 4.5 - 7.0",
          "SO2: 20 ppm max / as per destination regulation",
          "Hydrocyanic Acid: As per food safety regulation",
          "Pearl Size: Medium to big size",
          "Foreign Matter: Free from visible foreign matter",
          "Packaging: 25 kg PP bags / as per buyer requirement",
          "Shelf Life: 12 months from date of manufacturing",
          "Storage: Store in a cool, dry and hygienic place"
        ]
      },
      {
        id: "pappads",
        label: "Pappads",
        image: "/images/pappads.png",
        overview: "Pappads are thin, dried food products known for their crisp texture after cooking. They are commonly served as accompaniments or snacks across cuisines.",
        specifications: [
          "Product Name: Tapioca Pappads",
          "Grade: Food Grade",
          "Appearance: Thin dried round pappads",
          "Colour: White / off-white",
          "Moisture: 12% max",
          "Main Ingredient: Tapioca starch / tapioca-based ingredients",
          "Foreign Matter: Free from visible foreign matter",
          "Texture: Crispy after frying",
          "Taste: Natural / as per recipe",
          "Microbial Quality: As per food safety regulation",
          "Packaging: Retail packs / bulk cartons / as per buyer requirement",
          "Shelf Life: 6 - 12 months based on packing and storage condition",
          "Storage: Store in a cool, dry and hygienic place away from moisture",
          "Applications: Retail, food service, snacks and export food products"
        ]
      }
    ]
  },
  {
    id: "coffee-beans",
    title: "Coffee Beans",
    shortDescription: "Premium coffee beans sourced for export quality. Our Robusta and Arabica varieties are selected for their distinct flavor profiles, consistent grading, and reliable supply.",
    image: "/images/arabica.png",
    types: [
      {
        id: "robusta",
        label: "Robusta",
        image: "/images/robusta.png",
        overview: "Robusta coffee beans are known for their bold taste, strong body, and higher intensity, making them suitable for blends and commercial coffee production.",
        specifications: [
          "Product Name: Robusta Coffee Beans",
          "Botanical Name: Coffea canephora",
          "Origin: Western Ghats Region, Tamil Nadu, India",
          "Type: Green Coffee Beans / Unroasted",
          "Grade: Export Grade",
          "Condition: Well-dried, cleaned and sorted",
          "Appearance: Clean, well-dried green coffee beans",
          "Moisture: 12% max / as per buyer requirement",
          "Screen Size: As per buyer requirement",
          "Defective Beans: 2% max / as per buyer requirement",
          "Foreign Matter: Free from visible foreign matter",
          "Mould: Free from visible mould",
          "Odour: Natural coffee odour, free from musty smell",
          "Processing Method: Natural / Washed / as per buyer requirement",
          "Packaging: 60 kg jute bags / 25 kg bags / as per buyer requirement",
          "Shelf Life: 12 months from date of manufacture",
          "Storage: Store in a cool, dry and ventilated place"
        ]
      },
      {
        id: "arabica",
        label: "Arabica",
        image: "/images/arabica.png",
        overview: "Arabica coffee beans are valued for their smoother taste, pleasant aroma, and balanced flavor profile.",
        specifications: [
          "Product Name: Arabica Coffee Beans",
          "Botanical Name: Coffea arabica",
          "Origin: Western Ghats Region, Tamil Nadu, India",
          "Type: Green Coffee Beans / Unroasted",
          "Grade: Export Grade",
          "Condition: Well-dried, cleaned and sorted",
          "Appearance: Clean, well-dried green coffee beans",
          "Moisture: 12% max / as per buyer requirement",
          "Screen Size: As per buyer requirement",
          "Defective Beans: 2% max / as per buyer requirement",
          "Foreign Matter: Free from visible foreign matter",
          "Mould: Free from visible mould",
          "Odour: Natural coffee odour, free from musty smell",
          "Processing Method: Washed / Natural / as per buyer requirement",
          "Packaging: 60 kg jute bags / 25 kg bags / as per buyer requirement",
          "Shelf Life: 12 months from date of manufacture",
          "Storage: Store in a cool, dry and ventilated place"
        ]
      }
    ]
  },
  {
    id: "clove",
    title: "Clove",
    shortDescription: "High-quality cloves sourced for export. Valued for their strong aroma and flavor, our cloves are carefully selected to meet international standards for food and industrial applications.",
    image: "/images/clove.png",
    types: [
      {
        id: "clove",
        label: "Clove",
        image: "/images/clove.png",
        overview: "Clove is a premium spice known for its strong aroma, warm flavor, and use in food, spice blends, and traditional applications.",
        specifications: [
          "Product Name: Cloves",
          "Botanical Name: Syzygium aromaticum",
          "Origin: India / as per sourcing region",
          "Type: Whole Dried Cloves",
          "Grade: Export Grade",
          "Appearance: Whole, dried and clean clove buds",
          "Colour: Brown to dark brown",
          "Moisture: 10% max / as per buyer requirement",
          "Volatile Oil: 15% min / as per buyer requirement",
          "Foreign Matter: Free from visible foreign matter",
          "Mould: Free from visible mould",
          "Insect Infestation: Free from live insects",
          "Odour: Natural clove aroma, free from musty smell",
          "Packaging: 25 kg / 50 kg bags or as per buyer requirement",
          "Shelf Life: 12 months from date of manufacture",
          "Storage: Store in a cool, dry and hygienic place"
        ]
      }
    ]
  }
];
