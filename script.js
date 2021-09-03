var a = [
  "Catrina Wigington",
  "Judie Creagh",
  "Daisey Huntsberry",
  "Gennie Berti",
  "Justina Campfield",
  "Trang Winkles",
  "Rosita Stillwagon",
  "Leland Burts",
  "Kandis Brassard",
  "Maryln Velasques",
  "Adelia Merriweather",
  "Gianna Coghill",
  "Diedre Nicol",
  "Pamela Pavlick",
  "Abdul Hovland",
  "Londa Mitra",
  "Kristy Attaway",
  "Felipa Mui",
  "Sofia Stricklin",
  "Jennie Brant",
  "Sharleen Vanfossen",
  "Coreen Spaulding",
  "Georgeann Shehane",
  "Dayna Mumm",
  "Gertha Snoddy",
  "Anna Danks",
  "Jessenia Cirillo",
  "Temeka Mulvaney",
  "Mohammad Kram",
  "Noelle Modica",
];
$("#get-btn").click(function (e) {
  e.preventDefault();
  console.log(a);
  let index = Math.floor(Math.random() * 30);
  // console.log(a[index], index);
  const html = "<h4>" + a[index] + "</h4>";
  $("#data").html(html);
});
