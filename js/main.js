const pokemonList = [
    { id: 1, name: 'Bulbasaur', type1: 'Grass', type2: 'Poison' },
    { id: 2, name: 'Ivysaur', type1: 'Grass', type2: 'Poison' },
    { id: 3, name: 'Venusaur', type1: 'Grass', type2: 'Poison' },
    { id: 4, name: 'Charmander', type1: 'Fire', type2: 'None' },
    { id: 5, name: 'Charmeleon', type1: 'Fire', type2: 'None' },
    { id: 6, name: 'Charizard', type1: 'Fire', type2: 'Flying' },
    { id: 7, name: 'Squirtle', type1: 'Water', type2: 'None' },
    { id: 8, name: 'Wartortle', type1: 'Water', type2: 'None' },
    { id: 9, name: 'Blastoise', type1: 'Water', type2: 'None' },
    { id: 10, name: 'Caterpie', type1: 'Bug', type2: 'None' },
    { id: 11, name: 'Metapod', type1: 'Bug', type2: 'None' },
    { id: 12, name: 'Butterfree', type1: 'Bug', type2: 'Flying' },
    { id: 13, name: 'Weedle', type1: 'Bug', type2: 'Poison' },
    { id: 14, name: 'Kakuna', type1: 'Bug', type2: 'Poison' },
    { id: 15, name: 'Beedrill', type1: 'Bug', type2: 'Poison' },
    { id: 16, name: 'Pidgey', type1: 'Normal', type2: 'Flying' },
    { id: 17, name: 'Pidgeotto', type1: 'Normal', type2: 'Flying' },
    { id: 18, name: 'Pidgeot', type1: 'Normal', type2: 'Flying' },
    { id: 19, name: 'Rattata', type1: 'Normal', type2: 'None' },
    { id: 20, name: 'Raticate', type1: 'Normal', type2: 'None' },
    { id: 21, name: 'Spearow', type1: 'Normal', type2: 'Flying' },
    { id: 22, name: 'Fearow', type1: 'Normal', type2: 'Flying' },
    { id: 23, name: 'Ekans', type1: 'Poison', type2: 'None' },
    { id: 24, name: 'Arbok', type1: 'Poison', type2: 'None' },
    { id: 25, name: 'Pikachu', type1: 'Electric', type2: 'None' },
    { id: 26, name: 'Raichu', type1: 'Electric', type2: 'None' },
    { id: 27, name: 'Sandshrew', type1: 'Ground', type2: 'None' },
    { id: 28, name: 'Sandslash', type1: 'Ground', type2: 'None' },
    { id: 29, name: 'Nidoran♀', type1: 'Poison', type2: 'None' },
    { id: 30, name: 'Nidorina', type1: 'Poison', type2: 'None' },
    { id: 31, name: 'Nidoqueen', type1: 'Poison', type2: 'Ground' },
    { id: 32, name: 'Nidoran♂', type1: 'Poison', type2: 'None' },
    { id: 33, name: 'Nidorino', type1: 'Poison', type2: 'None' },
    { id: 34, name: 'Nidoking', type1: 'Poison', type2: 'Ground' },
    { id: 35, name: 'Clefairy', type1: 'Normal', type2: 'None' },
    { id: 36, name: 'Clefable', type1: 'Normal', type2: 'None' },
    { id: 37, name: 'Vulpix', type1: 'Fire', type2: 'None' },
    { id: 38, name: 'Ninetales', type1: 'Fire', type2: 'None' },
    { id: 39, name: 'Jigglypuff', type1: 'Normal', type2: 'None' },
    { id: 40, name: 'Wigglytuff', type1: 'Normal', type2: 'None' },
    { id: 41, name: 'Zubat', type1: 'Poison', type2: 'Flying' },
    { id: 42, name: 'Golbat', type1: 'Poison', type2: 'Flying' },
    { id: 43, name: 'Oddish', type1: 'Grass', type2: 'Poison' },
    { id: 44, name: 'Gloom', type1: 'Grass', type2: 'Poison' },
    { id: 45, name: 'Vileplume', type1: 'Grass', type2: 'Poison' },
    { id: 46, name: 'Paras', type1: 'Bug', type2: 'Grass' },
    { id: 47, name: 'Parasect', type1: 'Bug', type2: 'Grass' },
    { id: 48, name: 'Venonat', type1: 'Bug', type2: 'Poison' },
    { id: 49, name: 'Venomoth', type1: 'Bug', type2: 'Poison' },
    { id: 50, name: 'Diglett', type1: 'Ground', type2: 'None' },
    { id: 51, name: 'Dugtrio', type1: 'Ground', type2: 'None' },
    { id: 52, name: 'Meowth', type1: 'Normal', type2: 'None' },
    { id: 53, name: 'Persian', type1: 'Normal', type2: 'None' },
    { id: 54, name: 'Psyduck', type1: 'Water', type2: 'None' },
    { id: 55, name: 'Golduck', type1: 'Water', type2: 'None' },
    { id: 56, name: 'Mankey', type1: 'Fighting', type2: 'None' },
    { id: 57, name: 'Primeape', type1: 'Fighting', type2: 'None' },
    { id: 58, name: 'Growlithe', type1: 'Fire', type2: 'None' },
    { id: 59, name: 'Arcanine', type1: 'Fire', type2: 'None' },
    { id: 60, name: 'Poliwag', type1: 'Water', type2: 'None' },
    { id: 61, name: 'Poliwhirl', type1: 'Water', type2: 'None' },
    { id: 62, name: 'Poliwrath', type1: 'Water', type2: 'Fighting' },
    { id: 63, name: 'Abra', type1: 'Psychic', type2: 'None' },
    { id: 64, name: 'Kadabra', type1: 'Psychic', type2: 'None' },
    { id: 65, name: 'Alakazam', type1: 'Psychic', type2: 'None' },
    { id: 66, name: 'Machop', type1: 'Fighting', type2: 'None' },
    { id: 67, name: 'Machoke', type1: 'Fighting', type2: 'None' },
    { id: 68, name: 'Machamp', type1: 'Fighting', type2: 'None' },
    { id: 69, name: 'Bellsprout', type1: 'Grass', type2: 'Poison' },
    { id: 70, name: 'Weepinbell', type1: 'Grass', type2: 'Poison' },
    { id: 71, name: 'Victreebel', type1: 'Grass', type2: 'Poison' },
    { id: 72, name: 'Tentacool', type1: 'Water', type2: 'Poison' },
    { id: 73, name: 'Tentacruel', type1: 'Water', type2: 'Poison' },
    { id: 74, name: 'Geodude', type1: 'Rock', type2: 'Ground' },
    { id: 75, name: 'Graveler', type1: 'Rock', type2: 'Ground' },
    { id: 76, name: 'Golem', type1: 'Rock', type2: 'Ground' },
    { id: 77, name: 'Ponyta', type1: 'Fire', type2: 'None' },
    { id: 78, name: 'Rapidash', type1: 'Fire', type2: 'None' },
    { id: 79, name: 'Slowpoke', type1: 'Water', type2: 'Psychic' },
    { id: 80, name: 'Slowbro', type1: 'Water', type2: 'Psychic' },
    { id: 81, name: 'Magnemite', type1: 'Electric', type2: 'None' },
    { id: 82, name: 'Magneton', type1: 'Electric', type2: 'None' },
    { id: 83, name: "Farfetch'd", type1: 'Normal', type2: 'Flying' },
    { id: 84, name: 'Doduo', type1: 'Normal', type2: 'Flying' },
    { id: 85, name: 'Dodrio', type1: 'Normal', type2: 'Flying' },
    { id: 86, name: 'Seel', type1: 'Water', type2: 'None' },
    { id: 87, name: 'Dewgong', type1: 'Water', type2: 'Ice' },
    { id: 88, name: 'Grimer', type1: 'Poison', type2: 'None' },
    { id: 89, name: 'Muk', type1: 'Poison', type2: 'None' },
    { id: 90, name: 'Shellder', type1: 'Water', type2: 'None' },
    { id: 91, name: 'Cloyster', type1: 'Water', type2: 'Ice' },
    { id: 92, name: 'Gastly', type1: 'Ghost', type2: 'Poison' },
    { id: 93, name: 'Haunter', type1: 'Ghost', type2: 'Poison' },
    { id: 94, name: 'Gengar', type1: 'Ghost', type2: 'Poison' },
    { id: 95, name: 'Onix', type1: 'Rock', type2: 'Ground' },
    { id: 96, name: 'Drowzee', type1: 'Psychic', type2: 'None' },
    { id: 97, name: 'Hypno', type1: 'Psychic', type2: 'None' },
    { id: 98, name: 'Krabby', type1: 'Water', type2: 'None' },
    { id: 99, name: 'Kingler', type1: 'Water', type2: 'None' },
    { id: 100, name: 'Voltorb', type1: 'Electric', type2: 'None' },
    { id: 101, name: 'Electrode', type1: 'Electric', type2: 'None' },
    { id: 102, name: 'Exeggcute', type1: 'Grass', type2: 'Psychic' },
    { id: 103, name: 'Exeggutor', type1: 'Grass', type2: 'Psychic' },
    { id: 104, name: 'Cubone', type1: 'Ground', type2: 'None' },
    { id: 105, name: 'Marowak', type1: 'Ground', type2: 'None' },
    { id: 106, name: 'Hitmonlee', type1: 'Fighting', type2: 'None' },
    { id: 107, name: 'Hitmonchan', type1: 'Fighting', type2: 'None' },
    { id: 108, name: 'Lickitung', type1: 'Normal', type2: 'None' },
    { id: 109, name: 'Koffing', type1: 'Poison', type2: 'None' },
    { id: 110, name: 'Weezing', type1: 'Poison', type2: 'None' },
    { id: 111, name: 'Rhyhorn', type1: 'Ground', type2: 'Rock' },
    { id: 112, name: 'Rhydon', type1: 'Ground', type2: 'Rock' },
    { id: 113, name: 'Chansey', type1: 'Normal', type2: 'None' },
    { id: 114, name: 'Tangela', type1: 'Grass', type2: 'None' },
    { id: 115, name: 'Kangaskhan', type1: 'Normal', type2: 'None' },
    { id: 116, name: 'Horsea', type1: 'Water', type2: 'None' },
    { id: 117, name: 'Seadra', type1: 'Water', type2: 'None' },
    { id: 118, name: 'Goldeen', type1: 'Water', type2: 'None' },
    { id: 119, name: 'Seaking', type1: 'Water', type2: 'None' },
    { id: 120, name: 'Staryu', type1: 'Water', type2: 'None' },
    { id: 121, name: 'Starmie', type1: 'Water', type2: 'Psychic' },
    { id: 122, name: 'Mr. Mime', type1: 'Psychic', type2: 'None' },
    { id: 123, name: 'Scyther', type1: 'Bug', type2: 'Flying' },
    { id: 124, name: 'Jynx', type1: 'Ice', type2: 'Psychic' },
    { id: 125, name: 'Electabuzz', type1: 'Electric', type2: 'None' },
    { id: 126, name: 'Magmar', type1: 'Fire', type2: 'None' },
    { id: 127, name: 'Pinsir', type1: 'Bug', type2: 'None' },
    { id: 128, name: 'Tauros', type1: 'Normal', type2: 'None' },
    { id: 129, name: 'Magikarp', type1: 'Water', type2: 'None' },
    { id: 130, name: 'Gyarados', type1: 'Water', type2: 'Flying' },
    { id: 131, name: 'Lapras', type1: 'Water', type2: 'Ice' },
    { id: 132, name: 'Ditto', type1: 'Normal', type2: 'None' },
    { id: 133, name: 'Eevee', type1: 'Normal', type2: 'None' },
    { id: 134, name: 'Vaporeon', type1: 'Water', type2: 'None' },
    { id: 135, name: 'Jolteon', type1: 'Electric', type2: 'None' },
    { id: 136, name: 'Flareon', type1: 'Fire', type2: 'None' },
    { id: 137, name: 'Porygon', type1: 'Normal', type2: 'None' },
    { id: 138, name: 'Omanyte', type1: 'Rock', type2: 'Water' },
    { id: 139, name: 'Omastar', type1: 'Rock', type2: 'Water' },
    { id: 140, name: 'Kabuto', type1: 'Rock', type2: 'Water' },
    { id: 141, name: 'Kabutops', type1: 'Rock', type2: 'Water' },
    { id: 142, name: 'Aerodactyl', type1: 'Rock', type2: 'Flying' },
    { id: 143, name: 'Snorlax', type1: 'Normal', type2: 'None' },
    { id: 144, name: 'Articuno', type1: 'Ice', type2: 'Flying' },
    { id: 145, name: 'Zapdos', type1: 'Electric', type2: 'Flying' },
    { id: 146, name: 'Moltres', type1: 'Fire', type2: 'Flying' },
    { id: 147, name: 'Dratini', type1: 'Dragon', type2: 'None' },
    { id: 148, name: 'Dragonair', type1: 'Dragon', type2: 'None' },
    { id: 149, name: 'Dragonite', type1: 'Dragon', type2: 'Flying' },
    { id: 150, name: 'Mewtwo', type1: 'Psychic', type2: 'None' },
    { id: 151, name: 'Mew', type1: 'Psychic', type2: 'None' }
];

const moveList = [
    { id: 0, name: 'None', type: 'None', category: 'None' },
    { id: 1, name: 'Pound', type: 'Normal', category: 'Physical' },
    { id: 2, name: 'Karate Chop', type: 'Normal', category: 'Physical' },
    { id: 3, name: 'Double Slap', type: 'Normal', category: 'Physical' },
    { id: 4, name: 'Comet Punch', type: 'Normal', category: 'Physical' },
    { id: 5, name: 'Mega Punch', type: 'Normal', category: 'Physical' },
    { id: 6, name: 'Pay Day', type: 'Normal', category: 'Physical' },
    { id: 7, name: 'Fire Punch', type: 'Fire', category: 'Special' },
    { id: 8, name: 'Ice Punch', type: 'Ice', category: 'Special' },
    { id: 9, name: 'Thunder Punch', type: 'Electric', category: 'Special' },
    { id: 10, name: 'Scratch', type: 'Normal', category: 'Physical' },
    { id: 11, name: 'ViceGrip', type: 'Normal', category: 'Physical' },
    { id: 12, name: 'Guillotine', type: 'Normal', category: 'Physical' },
    { id: 13, name: 'Razor Wind', type: 'Normal', category: 'Physical' },
    { id: 14, name: 'Swords Dance', type: 'Normal', category: 'Status' },
    { id: 15, name: 'Cut', type: 'Normal', category: 'Physical' },
    { id: 16, name: 'Gust', type: 'Normal', category: 'Physical' },
    { id: 17, name: 'Wing Attack', type: 'Flying', category: 'Physical' },
    { id: 18, name: 'Whirlwind', type: 'Normal', category: 'Status' },
    { id: 19, name: 'Fly', type: 'Flying', category: 'Physical' },
    { id: 20, name: 'Bind', type: 'Normal', category: 'Physical' },
    { id: 21, name: 'Slam', type: 'Normal', category: 'Physical' },
    { id: 22, name: 'Vine Whip', type: 'Grass', category: 'Special' },
    { id: 23, name: 'Stomp', type: 'Normal', category: 'Physical' },
    { id: 24, name: 'Double Kick', type: 'Fighting', category: 'Physical' },
    { id: 25, name: 'Mega Kick', type: 'Normal', category: 'Physical' },
    { id: 26, name: 'Jump Kick', type: 'Fighting', category: 'Physical' },
    { id: 27, name: 'Rolling Kick', type: 'Fighting', category: 'Physical' },
    { id: 28, name: 'Sand-Attack', type: 'Normal', category: 'Status' },
    { id: 29, name: 'Headbutt', type: 'Normal', category: 'Physical' },
    { id: 30, name: 'Horn Attack', type: 'Normal', category: 'Physical' },
    { id: 31, name: 'Fury Attack', type: 'Normal', category: 'Physical' },
    { id: 32, name: 'Horn Drill', type: 'Normal', category: 'Physical' },
    { id: 33, name: 'Tackle', type: 'Normal', category: 'Physical' },
    { id: 34, name: 'Body Slam', type: 'Normal', category: 'Physical' },
    { id: 35, name: 'Wrap', type: 'Normal', category: 'Physical' },
    { id: 36, name: 'Take Down', type: 'Normal', category: 'Physical' },
    { id: 37, name: 'Thrash', type: 'Normal', category: 'Physical' },
    { id: 38, name: 'Double-Edge', type: 'Normal', category: 'Physical' },
    { id: 39, name: 'Tail Whip', type: 'Normal', category: 'Status' },
    { id: 40, name: 'Poison Sting', type: 'Poison', category: 'Physical' },
    { id: 41, name: 'Twineedle', type: 'Bug', category: 'Physical' },
    { id: 42, name: 'Pin Missle', type: 'Bug', category: 'Physical' },
    { id: 43, name: 'Leer', type: 'Normal', category: 'Status' },
    { id: 44, name: 'Bite', type: 'Normal', category: 'Physical' },
    { id: 45, name: 'Growl', type: 'Normal', category: 'Status' },
    { id: 46, name: 'Roar', type: 'Normal', category: 'Status' },
    { id: 47, name: 'Sing', type: 'Normal', category: 'Status' },
    { id: 48, name: 'Supersonic', type: 'Normal', category: 'Status' },
    { id: 49, name: 'Sonic Boom', type: 'Normal', category: 'Physical' },
    { id: 50, name: 'Disable', type: 'Normal', category: 'Status' },
    { id: 51, name: 'Acid', type: 'Poison', category: 'Physical' },
    { id: 52, name: 'Ember', type: 'Fire', category: 'Special' },
    { id: 53, name: 'Flamethrower', type: 'Fire', category: 'Special' },
    { id: 54, name: 'Mist', type: 'Ice', category: 'Status' },
    { id: 55, name: 'Water Gun', type: 'Water', category: 'Special' },
    { id: 56, name: 'Hydro Pump', type: 'Water', category: 'Special' },
    { id: 57, name: 'Surf', type: 'Water', category: 'Special' },
    { id: 58, name: 'Ice Beam', type: 'Ice', category: 'Special' },
    { id: 59, name: 'Blizzard', type: 'Ice', category: 'Special' },
    { id: 60, name: 'Psybeam', type: 'Psychic', category: 'Special' },
    { id: 61, name: 'BubbleBeam', type: 'Water', category: 'Special' },
    { id: 62, name: 'Aurora Beam', type: 'Ice', category: 'Special' },
    { id: 63, name: 'Hyper Beam', type: 'Normal', category: 'Physical' },
    { id: 64, name: 'Peck', type: 'Flying', category: 'Physical' },
    { id: 65, name: 'Drill Peck', type: 'Flying', category: 'Physical' },
    { id: 66, name: 'Submission', type: 'Fighting', category: 'Physical' },
    { id: 67, name: 'Low Kick', type: 'Fighting', category: 'Physical' },
    { id: 68, name: 'Counter', type: 'Fighting', category: 'Physical' },
    { id: 69, name: 'Seismic Toss', type: 'Fighting', category: 'Physical' },
    { id: 70, name: 'Strength', type: 'Normal', category: 'Physical' },
    { id: 71, name: 'Absorb', type: 'Grass', category: 'Special' },
    { id: 72, name: 'Mega Drain', type: 'Grass', category: 'Special' },
    { id: 73, name: 'Leech Seed', type: 'Grass', category: 'Status' },
    { id: 74, name: 'Growth', type: 'Normal', category: 'Status' },
    { id: 75, name: 'Razor Leaf', type: 'Grass', category: 'Special' },
    { id: 76, name: 'Solar Beam', type: 'Grass', category: 'Special' },
    { id: 77, name: 'PoisonPowder', type: 'Poison', category: 'Status' },
    { id: 78, name: 'Stun Spore', type: 'Grass', category: 'Status' },
    { id: 79, name: 'Sleep Powder', type: 'Grass', category: 'Status' },
    { id: 80, name: 'Petal Dance', type: 'Grass', category: 'Special' },
    { id: 81, name: 'String Shot', type: 'Bug', category: 'Status' },
    { id: 82, name: 'Dragon Rage', type: 'Dragon', category: 'Special' },
    { id: 83, name: 'Fire Spin', type: 'Fire', category: 'Special' },
    { id: 84, name: 'ThunderShock', type: 'Electric', category: 'Special' },
    { id: 85, name: 'Thunderbolt', type: 'Electric', category: 'Special' },
    { id: 86, name: 'Thunder Wave', type: 'Electric', category: 'Status' },
    { id: 87, name: 'Thunder', type: 'Electric', category: 'Special' },
    { id: 88, name: 'Rock Throw', type: 'Rock', category: 'Physical' },
    { id: 89, name: 'Earthquake', type: 'Ground', category: 'Physical' },
    { id: 90, name: 'Fissure', type: 'Ground', category: 'Physical' },
    { id: 91, name: 'Dig', type: 'Ground', category: 'Physical' },
    { id: 92, name: 'Toxic', type: 'Poison', category: 'Status' },
    { id: 93, name: 'Confusion', type: 'Psychic', category: 'Special' },
    { id: 94, name: 'Psychic', type: 'Psychic', category: 'Special' },
    { id: 95, name: 'Hypnosis', type: 'Psychic', category: 'Status' },
    { id: 96, name: 'Meditate', type: 'Psychic', category: 'Status' },
    { id: 97, name: 'Agility', type: 'Psychic', category: 'Status' },
    { id: 98, name: 'Quick Attack', type: 'Normal', category: 'Physical' },
    { id: 99, name: 'Rage', type: 'Normal', category: 'Physical' },
    { id: 100, name: 'Teleport', type: 'Psychic', category: 'Status' },
    { id: 101, name: 'Night Shade', type: 'Ghost', category: 'Physical' },
    { id: 102, name: 'Mimic', type: 'Normal', category: 'Status' },
    { id: 103, name: 'Screech', type: 'Normal', category: 'Status' },
    { id: 104, name: 'Double Team', type: 'Normal', category: 'Status' },
    { id: 105, name: 'Recover', type: 'Normal', category: 'Status' },
    { id: 106, name: 'Harden', type: 'Normal', category: 'Status' },
    { id: 107, name: 'Minimize', type: 'Normal', category: 'Status' },
    { id: 108, name: 'Smokescreen', type: 'Normal', category: 'Status' },
    { id: 109, name: 'Confuse Ray', type: 'Normal', category: 'Status' },
    { id: 110, name: 'Withdraw', type: 'Water', category: 'Status' },
    { id: 111, name: 'Defense Curl', type: 'Normal', category: 'Status' },
    { id: 112, name: 'Barrier', type: 'Psychic', category: 'Status' },
    { id: 113, name: 'Light Screen', type: 'Psychic', category: 'Status' },
    { id: 114, name: 'Haze', type: 'Ice', category: 'Status' },
    { id: 115, name: 'Reflect', type: 'Psychic', category: 'Status' },
    { id: 116, name: 'Focus Energy', type: 'Normal', category: 'Status' },
    { id: 117, name: 'Bide', type: 'Normal', category: 'Physical' },
    { id: 118, name: 'Metronome', type: 'Normal', category: 'Status' },
    { id: 119, name: 'Mirror Move', type: 'Flying', category: 'Status' },
    { id: 120, name: 'Selfdestruct', type: 'Normal', category: 'Physical' },
    { id: 121, name: 'Egg Bomb', type: 'Normal', category: 'Physical' },
    { id: 122, name: 'Lick', type: 'Ghost', category: 'Physical' },
    { id: 123, name: 'Smog', type: 'Poison', category: 'Physical' },
    { id: 124, name: 'Sludge', type: 'Poison', category: 'Physical' },
    { id: 125, name: 'Bone Club', type: 'Ground', category: 'Physical' },
    { id: 126, name: 'Fire Blast', type: 'Fire', category: 'Special' },
    { id: 127, name: 'Waterfall', type: 'Water', category: 'Special' },
    { id: 128, name: 'Clamp', type: 'Water', category: 'Special' },
    { id: 129, name: 'Swift', type: 'Normal', category: 'Physical' },
    { id: 130, name: 'Skull Bash', type: 'Normal', category: 'Physical' },
    { id: 131, name: 'Spike Cannon', type: 'Normal', category: 'Physical' },
    { id: 132, name: 'Constrict', type: 'Normal', category: 'Physical' },
    { id: 133, name: 'Amnesia', type: 'Psychic', category: 'Status' },
    { id: 134, name: 'Kinesis', type: 'Psychic', category: 'Status' },
    { id: 135, name: 'Softboiled', type: 'Normal', category: 'Status' },
    { id: 136, name: 'Hi Jump Kick', type: 'Fighting', category: 'Physical' },
    { id: 137, name: 'Glare', type: 'Normal', category: 'Status' },
    { id: 138, name: 'Dream Eater', type: 'Psychic', category: 'Special' },
    { id: 139, name: 'Poison Gas', type: 'Poison', category: 'Status' },
    { id: 140, name: 'Barrage', type: 'Normal', category: 'Physical' },
    { id: 141, name: 'Leech Life', type: 'Bug', category: 'Physical' },
    { id: 142, name: 'Lovely Kiss', type: 'Normal', category: 'Status' },
    { id: 143, name: 'Sky Attack', type: 'Flying', category: 'Physical' },
    { id: 144, name: 'Transform', type: 'Normal', category: 'Status' },
    { id: 145, name: 'Bubble', type: 'Water', category: 'Special' },
    { id: 146, name: 'Dizzy Punch', type: 'Normal', category: 'Physical' },
    { id: 147, name: 'Spore', type: 'Grass', category: 'Status' },
    { id: 148, name: 'Flash', type: 'Normal', category: 'Status' },
    { id: 149, name: 'Psywave', type: 'Psychic', category: 'Special' },
    { id: 150, name: 'Splash', type: 'Normal', category: 'Status' },
    { id: 151, name: 'Acid Armor', type: 'Poison', category: 'Status' },
    { id: 152, name: 'Crabhammer', type: 'Water', category: 'Special' },
    { id: 153, name: 'Explosion', type: 'Normal', category: 'Physical' },
    { id: 154, name: 'Fury Swipes', type: 'Normal', category: 'Physical' },
    { id: 155, name: 'Bonemerang', type: 'Ground', category: 'Physical' },
    { id: 156, name: 'Rest', type: 'Psychic', category: 'Status' },
    { id: 157, name: 'Rock Slide', type: 'Rock', category: 'Physical' },
    { id: 158, name: 'Hyper Fang', type: 'Normal', category: 'Physical' },
    { id: 159, name: 'Sharpen', type: 'Normal', category: 'Status' },
    { id: 160, name: 'Conversion', type: 'Normal', category: 'Status' },
    { id: 161, name: 'Tri Attack', type: 'Normal', category: 'Physical' },
    { id: 162, name: 'Super Fang', type: 'Normal', category: 'Physical' },
    { id: 163, name: 'Slash', type: 'Normal', category: 'Physical' },
    { id: 164, name: 'Substitute', type: 'Normal', category: 'Status' },
    { id: 165, name: 'Struggle', type: 'Normal', category: 'Physical' },
];

// account stuffs

var registeredAccounts = [
    { username: 'aihoi', password: 'botruongtraloi' }
];

var a = [
    { name: 'Log In', href: 'login.html' }, { name: 'Sign Up', href: 'signup.html' }
];



// Menu styling
window.onscroll = function () { animateDiv() };
content1 = document.getElementById("content1");
content2 = document.getElementById("content2");
content3 = document.getElementById("content3");

function animateDiv() {
    if (window.scrollY >= 250) {
        content2.classList.add('animate__animated');
        content2.classList.add('animate__fadeInRight');
        content2.style.display = 'grid';
    }
    if (window.scrollY >= 500) {
        content3.classList.add('animate__animated');
        content3.classList.add('animate__fadeInLeft');
        content3.style.display = 'grid';
    }
}

// $(document).ready(function () {
// 	$(window).scroll(function (event) {
// 		var pos_body = $('html,body').scrollTop();
// 		console.log(pos_body);
// 		if (pos_body > 20) {
// 			$('.container').addClass('animate__animated animate__bounceInLeft');
// 		}
// 		else {
// 			$('.container').removeClass('animate__animated animate__bounceInLeft');
// 		}
// 	});
// });

// master data


// map stuffs

const allAreas = [
    palletTown = [
        {
            name: 'Bulbasaur',
            level: 'Lv. 5',
            move1: 'Tackle',
            move2: 'Growl',
            move3: 'None',
            move4: 'None'
        }, {
            name: 'Charmander',
            level: 'Lv. 5',
            move1: 'Scratch',
            move2: 'Leer',
            move3: 'None',
            move4: 'None'
        }, {
            name: 'Squirtle',
            level: 'Lv. 5',
            move1: 'Tackle',
            move2: 'Growl',
            move3: 'None',
            move4: 'None'
        }],
    route1 = [
        { 
            name: 'Pidgey',
            level: 'Lv. 2-4',
            move1: 'Gust',
            move2: 'None',
            move3: 'None',
            move4: 'None'
        }, { 
            name: 'Pidgey',
            level: 'Lv. 5',
            move1: 'Gust',
            move2: 'Sand-Attack',
            move3: 'None',
            move4: 'None'
        }, { 
            name: 'Rattata',
            level: 'Lv. 2-5',
            move1: 'Tackle',
            move2: 'Tail Whip',
            move3: 'None',
            move4: 'None'
        }
    ]
];

displayBox = document.getElementById('pokemonDisplay')

function displayPokemon(location) {
    var areaLocator = allAreas.filter((location) => {
        var htmldisplay = location.map((pokemonLocated) => {
            var pokemonData = pokemonList.filter((pokemon) => {
                return pokemon.name == pokemonLocated.name;
            })
            pokemon = pokemonData;
            var move1Data = moveList.filter((move) => {
                return move.name == pokemonLocated.move1;
            })
            move1 = move1Data;
            var move2Data = moveList.filter((move) => {
                return move.name == pokemonLocated.move2;
            })
            move2 = move2Data;
            var move3Data = moveList.filter((move) => {
                return move.name == pokemonLocated.move3;
            })
            move3 = move3Data;
            var move4Data = moveList.filter((move) => {
                return move.name == pokemonLocated.move4;
            })
            move4 = move4Data;
            return `<div class="pokemon_info_holder">
            <img src="images/pokemon/${pokemon[0]?.name}.png" alt="" class="pokemon_info_holder_image">
            <div class="pokemon_info_holder_name">
                <div class="pokemon_info_holder_name_content">
                    ${pokemon[0]?.name} ${pokemonLocated.level}
                </div>
            </div>
            <div class="pokemon_info_holder_info_type">
                Type:
                <div class="pokemon_info_holder_types">
                    <div class="pokemon_info_holder_type1 ${pokemon[0]?.type1}">${pokemon[0]?.type1}</div>
                    <div class="pokemon_info_holder_type2 ${pokemon[0]?.type2}">${pokemon[0]?.type2}</div>
                </div>
            </div>
            <div class="pokemon_info_holder_move">
                <div class="pokemon_info_holder_move_name">
                    ${move1[0]?.name}
                </div>
                <div class="pokemon_info_holder_move_type ${move1[0]?.type}">${move1[0]?.type}</div>
                <div class="pokemon_info_holder_move_category ${move1[0]?.category}">${move1[0]?.category}</div>
            </div>
            <div class="pokemon_info_holder_move">
                <div class="pokemon_info_holder_move_name">
                    ${move2[0]?.name}
                </div>
                <div class="pokemon_info_holder_move_type ${move2[0]?.type}">${move2[0]?.type}</div>
                <div class="pokemon_info_holder_move_category ${move2[0]?.category}">${move2[0]?.category}</div>
            </div>
            <div class="pokemon_info_holder_move">
                <div class="pokemon_info_holder_move_name">
                    ${move3[0]?.name}
                </div>
                <div class="pokemon_info_holder_move_type ${move3[0]?.type}">${move3[0]?.type}</div>
                <div class="pokemon_info_holder_move_category ${move3[0]?.category}">${move3[0]?.category}</div>
            </div>
            <div class="pokemon_info_holder_move">
                <div class="pokemon_info_holder_move_name">
                    ${move4[0]?.name}
                </div>
                <div class="pokemon_info_holder_move_type ${move4[0]?.type}">${move4[0]?.type}</div>
                <div class="pokemon_info_holder_move_category ${move4[0]?.category}">${move4[0]?.category}</div>
            </div>
            </div>`
        });
        displayBox.innerHTML = htmldisplay.join(' ');
    });
};

// signup human confirm function

const pokemonForConfirmation = [
    { image: 'images/pokemon/Bulbasaur.png', name: 'Bulbasaur' },
    { image: 'images/pokemon/Charmander.png', name: 'Charmander' },
    { image: 'images/pokemon/Squirtle.png', name: 'Squirtle' }
];

var random = pokemonForConfirmation[Math.floor(Math.random() * pokemonForConfirmation.length)];

function checkIfHuman() {
    document.getElementById('human_checker_image').src = random.image;
    document.getElementById('human_checker_image').style.display = 'inline-block';
    document.getElementById('human_checker_input').style.display = 'inline-block';
    document.getElementById('human_checker_confirm').style.display = 'inline-block';
};

function completeCheck() {
    var userAnswer = document.getElementById('human_checker_input').value;
    if (userAnswer == random.name) {
        alert('Registeration complete!');
        registeredAccounts.push({ username: document.getElementById('signup_username').value, password: document.getElementById('signup_password').value });
        location.href = "login.html";
    } else {
        random = pokemonForConfirmation[Math.floor(Math.random() * pokemonForConfirmation.length)];
        document.getElementById('human_checker_image').src = random.image;
        alert('Try again');
    }
};

// login check if account exists

function checkForLogin() {
    attemptLogin = { username: document.getElementById('login_username').value, password: document.getElementById('login_password').value };
    console.log(attemptLogin);
    for (var i = 0; i < registeredAccounts.length; i++) {
        console.log(registeredAccounts[i])
        if (registeredAccounts[i]?.username === attemptLogin?.username && registeredAccounts[i]?.password === attemptLogin?.password) {
            alert('Login successful!');
            localStorage.setItem("myAccount", attemptLogin.username);
            return true;
        } else {
            alert('Login failed!');
            return false;
        };
    };
};

var activeAccount = localStorage.getItem('myAccount');

function checkIsActiveAccount() {
    if (activeAccount) {
        return true;
    } else {
        return false;
    };
};

const loginSignupButtons = document.getElementById('login_signup');

const login_SignupButtons = (a) => {
    // var username = activeAccount;
    var username_1 = `<div class="logout">
    <div class="logout_button">
        <span>${activeAccount}</span>
    </div>
    <div class="logout_button_dropdown" onclick="logOut()">
        Log Out
    </div>
    </div>`;
    console.log(username_1);
    var htmlDisplay = a?.map((e) => {
        return `
        <a href="${e?.href}" class="header_button">
            ${e?.name}
        </a>`
    });
    if (activeAccount) {
        loginSignupButtons.innerHTML = username_1;
    } else {
        loginSignupButtons.innerHTML = htmlDisplay.join(' ');
    }
};

login_SignupButtons(a);

function logOut() {
    localStorage.removeItem('myAccount');
    console.log('log out');
    location.reload();
};

// // timer

// var timer = document.getElementById('timer');
// var seconds = 0;
// var minutes = 0;
// var hours = 0;
// setInterval(() => {
//     seconds += 1;
//     if (seconds >= 60) {
//         seconds = 0;
//         minutes += 1;
//     };
//     if (minutes >= 60) {
//         minutes += 60;
//         hours += 1;
//     };
//     timer.innerHTML = `${hours}:${minutes}:${seconds}`;
//     console.log(seconds, minutes, hours, timer);
// }, 1000);

// pokemon adder team manager

var pokemonOptions = '';
for (var i = 0; i < pokemonList.length; i++) {
    pokemonOptions += '<option value="' + pokemonList[i].name + '"/>';
};
document.getElementById('pokemon').innerHTML = pokemonOptions;
var moveOptions = '';
for (var i = 0; i < moveList.length; i++) {
    moveOptions += '<option value="' + moveList[i].name + '"/>';
};
document.getElementById('move').innerHTML = moveOptions;

function addPokemon() {
    document.getElementById("add_pokemon_info").style.display = 'inline-block';
};

var realhtmldisplay = document.getElementById('pokemon_list');

function actuallyAddPokemon() {
    var pokemonData = pokemonList.filter((pokemon) => {
        return pokemon.name == document.getElementById('pokemon_name').value;
    })
    pokemon = pokemonData;
    level = document.getElementById('pokemon_level').value;
    var move1Data = moveList.filter((move) => {
        return move.name == document.getElementById('pokemon_move_1').value;
    })
    move1 = move1Data;
    var move2Data = moveList.filter((move) => {
        return move.name == document.getElementById('pokemon_move_2').value;
    })
    move2 = move2Data;
    var move3Data = moveList.filter((move) => {
        return move.name == document.getElementById('pokemon_move_3').value;
    })
    move3 = move3Data;
    var move4Data = moveList.filter((move) => {
        return move.name == document.getElementById('pokemon_move_4').value;
    })
    move4 = move4Data;
    realhtmldisplay.innerHTML += `<div class="pokemon_info_holder">
    <img src="images/pokemon/${pokemon[0]?.name}.png" alt="" class="pokemon_info_holder_image">
    <div class="pokemon_info_holder_name">
        <div class="pokemon_info_holder_name_content">
            ${pokemon[0]?.name} Lv. ${level[0]}
        </div>
    </div>
    <div class="pokemon_info_holder_info_type">
        Type:
        <div class="pokemon_info_holder_types">
            <div class="pokemon_info_holder_type1 ${pokemon[0]?.type1}">${pokemon[0]?.type1}</div>
            <div class="pokemon_info_holder_type2 ${pokemon[0]?.type2}">${pokemon[0]?.type2}</div>
        </div>
    </div>
    <div class="pokemon_info_holder_move">
        <div class="pokemon_info_holder_move_name">
            ${move1[0]?.name}
        </div>
        <div class="pokemon_info_holder_move_type ${move1[0]?.type}">${move1[0]?.type}</div>
        <div class="pokemon_info_holder_move_category ${move1[0]?.category}">${move1[0]?.category}</div>
    </div>
    <div class="pokemon_info_holder_move">
        <div class="pokemon_info_holder_move_name">
            ${move2[0]?.name}
        </div>
        <div class="pokemon_info_holder_move_type ${move2[0]?.type}">${move2[0]?.type}</div>
        <div class="pokemon_info_holder_move_category ${move2[0]?.category}">${move2[0]?.category}</div>
    </div>
    <div class="pokemon_info_holder_move">
        <div class="pokemon_info_holder_move_name">
            ${move3[0]?.name}
        </div>
        <div class="pokemon_info_holder_move_type ${move3[0]?.type}">${move3[0]?.type}</div>
        <div class="pokemon_info_holder_move_category ${move3[0]?.category}">${move3[0]?.category}</div>
    </div>
    <div class="pokemon_info_holder_move">
        <div class="pokemon_info_holder_move_name">
            ${move4[0]?.name}
        </div>
        <div class="pokemon_info_holder_move_type ${move4[0]?.type}">${move4[0]?.type}</div>
        <div class="pokemon_info_holder_move_category ${move4[0]?.category}">${move4[0]?.category}</div>
    </div>
    <button class="delete_button" onclick="deletePokemon(this)">
        Delete
    </button>
    </div>`
    document.getElementById("add_pokemon_info").style.display = 'none';
    localStorage.setItem('pokemon_stored_info', realhtmldisplay.innerHTML);
};

realhtmldisplay.innerHTML = localStorage.getItem('pokemon_stored_info');

function deletePokemon(btn) {
    btn.parentNode.style.display = 'none';
    localStorage.setItem('pokemon_stored_info', realhtmldisplay.innerHTML);
}

