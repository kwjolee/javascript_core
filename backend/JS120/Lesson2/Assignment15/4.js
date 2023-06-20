const TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    console.log(this);
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ': ' + title);
    });
  }
};

TESgames.listGames();
let stuff = TESgames.listGames;
console.log('-----');
stuff();

/*
the callback function passed to the forEach method is invoked as an ordinary function
the `this` variable within in points to the global object
this.seriesTitle will return undefined
the title variable is correctly extracting the elements of the titles property of TES games
*/