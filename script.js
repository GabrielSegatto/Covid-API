
const btn = document.getElementById('btnRepos');
const url = 'https://api.covid19api.com/summary';

async function getBrazil() {
  const response = await fetch(url)
  const result =  await response.json()
  const pais = await result.Countries;

  console.log(response);
  console.log(result);
  console.log(pais);
}

//   result.forEach(element => {
//     const link = document.createElement("a");
//     link.href = element.html_url;
//     link.textContent = element.full_name;
//     divResult.appendChild(link);
//     divResult.appendChild(document.createElement("br"));
//     console.log('teste1')
//   });

// }
// console.log("Olá")