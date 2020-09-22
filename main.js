/*const links = [
    {
      label: "Week1 notes",
      url: "https://awe19001.github.io/WDD330/"
    }
  ]*/

  const links = [
    { label: 'Week 1 Notes', url: '1index.html', }, // you can add other tags if you like
    { label: 'Week 2 Notes', url: '2index.html', },
    { label: 'Week 3 Notes', url: '3index.html', },
  ];
  
  const ol = document.getElementById('assignments');      // whatever your OL tag ID is
  links.forEach(link => {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.setAttribute('href', link.url);
    a.innerText = link.label;
    // add other tags of interest if you like (date submitted, score)
    li.appendChild(a);
    ol.appendChild(li);
  });
  
  