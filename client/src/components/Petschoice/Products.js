const pets = [
  "Dog",
  "Cat",
  "Fish",
  "Bird",
  "Reptile",
  "Small Pet",
  "Farm Animals",
];

const products = [
  {
    pet: "Dog",
    petSupplies: [
      {
        section: "Food",
        subSection: [
          "Dry Food",
          "Canned Food",
          "Veterinary Authorized Diets",
          "Fresh &amp;",
          "Frozen Dog Food",
          "Food Toppers",
          "Puppy Food",
          "Shop All",
        ],
        product: [],
      },
      {
        section: "Treats",
        subSection: [
          "Biscuits &amp; Bakery",
          "Bones &amp; Rawhide",
          "Chewy Treats",
          "Dental Treats",
          "Jerky Training",
          "Treats Puppy",
          "Treats",
        ],
        product: [],
      },
      {
        section: "Supplies",
        subSection: [
          "Beds &amp; Furniture",
          "Bowls &amp; Feeders",
          "Cleaning &amp;Supplies",
          "Clothing &amp; Shoes",
          "Collars, Harnesses &amp; Leashes",
          "Crates, Gates &amp; Containment",
          "Vitamins &amp; Supplements",
          "Health &amp; Wellness",
          "Flea &amp; Tick",
          "Grooming Supplies",
          "Pharmacy",
          "Toys",
          "Training &amp; Behavior",
          "Dog Deals",
        ],
        product: [],
      },
    ],
  },

  {
    pet: "Cat",
    petSupplies: [
      {
        section: "Food & Treats",
        subsection: [
          "Wet Food",
          "Dry Food",
          "Treats",
          "Veterinary Authorized Diets",
          "Kitten",
          "Food toppers",
          "Catnip &amp; Grass",
          "Shop All",
        ],
        product: [],
      },
      {
        section: "Litter",
        subsection: [
          "Deodorizers &amp; Filters",
          "Litter",
          "Litter Boxes",
          "Mats &amp; Liners",
          "Waste Disposal",
        ],
        product: [],
      },
      {
        section: "Supplies ",
        subsection: [
          "Beds &amp; Furniture",
          "Bowls &amp; Feeders",
          "Cleaning &amp; Repellents",
          "Clothing &amp; Accessories",
          "Collars, Harnessess &amp; Leashes",
          "Crates, Gates &amp; Containment",
          "Vitamins &amp; Supplements",
          "Health &amp; Wellness",
          "Flea &amp; Tick",
          "Grooming Supplies",
          "Pharmacy",
          "Toys",
          "Cat Deals",
        ],
        product: [],
      },
    ],
  },

  {
    pet: "Fish",
    petSupplies: [
      {
        section: "Fish Shop",
        subsection: [
          "Marine &amp; Freshwater",
          "Goldfish",
          "Koi &amp; Pond",
          "Betta",
          "Shrimp",
          "Cichlid",
          "Live Fish",
          "Shop All",
        ],
        product: [],
      },
      {
        section: "Food",
        subsection: ["Feeders", "Food"],
        product: [],
      },
      {
        section: "Tanks &amp; Accessories",
        subsection: [
          "Starter Kits",
          "Tanks &amp; Aquariums",
          "Decor, Gravel &amp; Substrate",
          "Heating and Lighting",
          "Filters, Media &amp; Pumps",
          "Maintenance &amp; Repair",
        ],
        product: [],
      },
      {
        section: "Wellness",
        subsection: [
          "Disease Treatment",
          "Water Care &amp; Conditioning",
          "Water Quality Testers",
        ],
        product: [],
      },
      {
        section: "Care",
        subsection: ["Plant Care", "Pond Care", "Saltwater Aquarium Care"],
        product: [],
      },
    ],
  },
  {
    pet: "Bird",
    petSupplies: [
      {
        section: "Bird Shop",
        subsection: [
          "Conure",
          "Cockatiel",
          "Parakeet",
          "Finch &amp; Canary",
          "Parrot",
          "Lovebird",
          "Wild Bird",
          "Chicken",
          "Shop All",
        ],
        product: [],
      },
      {
        section: "Food &amp; Treats",
        subsection: ["Pet Bird Food", "Treats", "Feeders &amp; Waterers"],
        product: [],
      },
      {
        section: "Habitats",
        subsection: [
          "Starter Kits",
          "Cages",
          "Stands",
          "Carriers",
          "Litter &amp; Nesting",
        ],
        product: [],
      },
      {
        section: "Care",
        subsection: [
          "Vitamins &amp; Supplements",
          "Grooming",
          "Cleaning &amp; Odor Control",
        ],
        product: [],
      },
      {
        section: "Accessories",
        subsection: ["Toys, Perches, &amp; Décor"],
        product: [],
      },
    ],
  },
  {
    pet: "Reptile",
    petSupplies: [
      {
        section: "Reptile Shop",
        subsection: [
          "Bearded Dragon",
          "Gecko &amp; Lizard",
          "Snake",
          "Frog",
          "Turtle",
          "Hermit Crab",
          "Chameleon",
          "Shop All Live Reptiles",
        ],
        product: [],
      },
      {
        section: "Food",
        subsection: ["Feeders &amp; Food Storage Food"],
        product: [],
      },
      {
        section: "Habitats",
        subsection: ["Starter Kits", "Terrariums"],
        product: [],
      },
      {
        section: "Accessories &amp; Decor",
        subsection: [
          "Habitat Accessories",
          "Habitat Decor",
          "Substrate &amp; Bedding",
        ],
        product: [],
      },
      {
        section: "Heating &amp; Lighting",
        subsection: [
          "Bulbs &amp; Lamps",
          "Heaters",
          "Light Fixture",
          "Humidity &amp; Temperature Control",
        ],
        product: [],
      },
    ],
  },
  {
    pet: "Small Pet",
    petSupplies: [
      {
        section: "Small Pet Shop",
        subsection: [
          "Hamster &amp; Gerbil",
          "Guinea Pig",
          "Rabbit",
          "Ferret",
          "Hedgehog &amp; Sugar Glider",
          "Chinchilla",
          "Rat &amp; Mouse",
          "Shop All Live Small Pet",
        ],
        product: [],
      },
      {
        section: "Food",
        subsection: ["Hay", "Food", "Treats"],
        product: [],
      },
      {
        section: "Habitats",
        subsection: ["Cages, Habitats &amp; Hutches", "Starter Kits"],
        product: [],
      },
      {
        section: "Accessories",
        subsection: [
          "Harnesses &amp; Travel Carriers",
          "Toys &amp; Habitat Accessories",
          "Litter &amp; Bedding",
        ],
        product: [],
      },
      {
        section: "Care &amp; Health",
        subsection: ["Health &amp; Grooming", "Cleaning &amp; Odor Removal"],
        product: [],
      },
    ],
  },
  {
    pet: "Farm Animals",
    petSupplies: [
      {
        section: "Chicken &amp; Poultry",
        subsection: [
          "Feed",
          "Feeder &amp; Waterers",
          "Coops",
          "Nesting &amp; Egg Supplies",
          "Care &amp; Supplements",
          "Accessories",
        ],
        product: [],
      },
      {
        section: "Duck",
        subsection: [
          "Feed",
          "Feeder &amp; Waterers",
          "Hutches &amp; Pens",
          "Care &amp; Supplements",
          "Accessories",
        ],
        product: [],
      },
      {
        section: "Goat",
        subsection: ["Feed", "Care &amp; Supplements"],
        product: [],
      },
      {
        section: "Pig",
        subsection: ["Feed"],
        product: [],
      },
      {
        section: "Horse",
        subsection: ["Feed", "Care &amp; Supplements"],
        product: [],
      },
      {
        section: "Cow",
        subsection: ["Feed"],
        product: [],
      },
      {
        section: "Sheep",
        subsection: ["Feed"],
        product: [],
      },
    ],
  },
];
