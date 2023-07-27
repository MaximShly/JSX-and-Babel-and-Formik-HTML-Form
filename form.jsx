"use strict";

class ReactIntro extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    const size = document.getElementById("size").value;
    const pepperoni = document.getElementById("pepp").checked;
    const glutenFree = document.getElementById("g-free").checked;
    const additionalInstructions = document.getElementById("add-instr").value || "None";
    const nameForOrder = document.getElementById("name-for-order").value || "Anonymous";
    const quantity = document.getElementById("quantity").value || 1;

    const orderStr = `Order for ${quantity} ${size} pizza(s) that are ${
      glutenFree ? `gluten-free` : `not gluten-free`
    } and ${pepperoni ? `have pepperoni` : `dont have pepperoni`} for ${nameForOrder} \n\n Instructions: ${additionalInstructions}`;

    document.getElementById("most-recent-order").innerText = orderStr;
    alert(orderStr);
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Name:</label>
            <input id="name-for-order" type="text" />
          </div>
          
          <div>
            <label>Size</label>
            <select id="size">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>

          <div>
            <label>Pepperoni</label>
            <input id="pepp" type="checkbox" />
          </div>

          <div>
            <label>Gluten Free</label>
            <input id="g-free" type="checkbox" />
          </div>

          <div>
            <label>Quantity</label>
            <input id="quantity" type="number" />
          </div>

          <div>
            <label>Additional Instructions</label>
            <textarea id="add-instr" cols="50" rows="3"></textarea>
          </div>

          <input id="form-submit" type="submit" />
        </form>
      </div>
    );
  }
}

ReactDOM.render(
  React.createElement(ReactIntro),
  document.getElementById("root")
);
