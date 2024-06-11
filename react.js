function tick() {
  const element = (
    <div>
      <h1>hello there</h1>
      <h2>now {new Date().toLocaleTimeString()}</h2>
    </div>
  );

  ReactDOM.render(element, document.querySelector('#root'));
}

setInterval(tick, 1000);
