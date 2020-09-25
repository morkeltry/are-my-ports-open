const ip = ;

const ping = port=> {
 const url = `http://${ip}:${port}`;
 console.log(`fetch('${url}')`);
  fetch(url)
    .then (console.log)
}
