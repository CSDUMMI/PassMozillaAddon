function init() {
  select_services = document.getElementById("select-service");

  // Init storage.sync if isn't already done
  let is_init = browser.storage.sync.get('is_init');
  is_init.then(() => 

  insert_services(select_services);
}

function insert_services(select_services) {
  let services = browser.storage.sync.get('services');
  services.then((value) => {
    html = "";
    value = value.map(
      service =>
        "<option name="
        + service
        + ">"
        + service
        + "</option>");

    for(let i = 0; i < value.length;i++) {
      html += service[i];
    }
    select_services.innerHTML = html;
  });

}
