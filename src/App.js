import Form from "./Components/Form";
import Render from "./Components/Render";
import "./style.css";

function App() {
  return (
    <div className="container" id="darkmode">
      <div className="row x_center y_center"   >
        <div className="col_md_8" id="nexus">
          <h1>React Sample text Generator</h1>
          <br />
          <Form/>
         <Render/>
        </div>
      </div>
    </div>
  );
}

export default App;

/*

Gereksinimler
Başlangıçta 4 paragraf gösterilmelidir.
Paragraf sayısı bir input aracılığıyla değiştirilebilmelidir.
En az bir paragraf seçilebilmelidir.
Paragraflar bir dropdown aracılığıyla text veya html olarak gösterilebilmelidir.

*/