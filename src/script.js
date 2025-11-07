const cities = [
  "Adrar", "Aïn Defla", "Alger (Algiers)", "Annaba", "Batna", "Béchar", "Béjaïa",
  "Biskra", "Blida", "Bordj Bou Arréridj", "Bouira", "Boumerdès", "Chlef",
  "Constantine", "Djelfa", "El Bayadh", "El Oued", "El Tarf", "Ghardaïa",
  "Guelma", "Illizi", "Jijel", "Khenchela", "Laghouat", "M'sila", "Mascara",
  "Médéa", "Mila", "Mostaganem", "Naama", "Oran", "Ouargla", "Oum el-Bouaghi",
  "Relizane", "Saïda", "Sétif", "Sidi Bel Abbès", "Skikda", "Souk Ahras",
  "Tamanrasset", "Tébessa", "Tiaret", "Tissemsilt", "Tipaza", "Tizi Ouzou", "Tlemcen"
]

let select = document.getElementById('cities-list')

for (let city of cities) {
  let content = `<option>${city}</option>`
  select.innerHTML += content
}

select.addEventListener('change', function() {
  axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${this.value}&country=Algeria&method=2`)
  .then(res => {
    document.getElementById('day-date').innerHTML = res.data.data.date.readable
    document.getElementById('fajr').innerHTML = res.data.data.timings.Fajr
    document.getElementById('sunrise').innerHTML = res.data.data.timings.Sunrise
    document.getElementById('dhuhr').innerHTML = res.data.data.timings.Dhuhr
    document.getElementById('asr').innerHTML = res.data.data.timings.Asr
    document.getElementById('maghrib').innerHTML = res.data.data.timings.Maghrib
    document.getElementById('isha').innerHTML = res.data.data.timings.Isha
  })
  .catch(error => error)
})