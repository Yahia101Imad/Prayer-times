axios.get('https://api.aladhan.com/v1/methods')
  .then(res => {
    const methods = res.data.data
    const select = document.getElementById('addresses')
    for (let id in methods) {
      const option = document.createElement('option')
      option.textContent = methods[id].name
      option.className = "address"
      select.appendChild(option)
    }
    select.addEventListener('change', function() {
        let address = this.value
        console.log(address)
    })
  })
  .catch(err => console.log(err))