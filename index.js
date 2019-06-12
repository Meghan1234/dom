var header = $('h1');

var button = $('button');

button.on("click",doSomething);
function doSomething() {
  var name = $('.username').val();
  header.text("Hola!");
  console.log(name);
}
