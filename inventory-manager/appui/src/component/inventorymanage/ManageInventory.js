import { Form, Button, Table } from "react-bootstrap";
import { createRef, Component } from 'react';
import InventoryService from "../../service/InventoryService";

export default class ManageInventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: []
    }
    this.formData = createRef();
    // this.addHandler = this.addHandler.bind(this);
  }

  addHandler = (event) => {
    event.preventDefault();
    let newItem = {
      brand: this.formData.current.brandName.value,
      size: this.formData.current.size.value,
      quantity: this.formData.current.quant.value,
      price: this.formData.current.price.value,
      in_stock: this.formData.current.inStock.value
    };
    console.log('item => ' + JSON.stringify(newItem));
    InventoryService.addInventory(newItem).then(res => {
      this.state.inventory.push(newItem);
      this.setState({
        inventory: this.state.inventory
      });
      this.formData.current = '';
    })
  }

  // clearForm= () =>{
  //   ReactDOM.findDOMNode(this.formData).reset();
  // }

  componentDidMount() {
    InventoryService.getAllInventory().then((res) => {
      this.setState({ inventory: res.data });
    });
    // console.log(res.data);
  }

  render() {
    const { item } = this.state;
    return (
      <><div className="card col-md-6 offset-md-3 offset-md-3">
        <h2>Manage-Add Inventory</h2>
        <div className="card-body">
          <Form onSubmit={this.addHandler} ref={this.formData}>
            <Form.Group className="mb-3" controlId="brandName">
              <Form.Label>Brand: </Form.Label>
              <Form.Control type="text" placeholder="Enter brand name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="size">
              <Form.Label>Size: </Form.Label>
              <Form.Control type="number" placeholder="Enter size" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="quant">
              <Form.Label>Quantity: </Form.Label>
              <Form.Control type="number" placeholder="Enter quantity" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="price">
              <Form.Label>Price: </Form.Label>
              <Form.Control type="decimal" placeholder="Enter price" />
            </Form.Group>
            <Form.Group controlId="inStock">
              <Form.Label>In stock?</Form.Label>
              <Form.Select>
                <option>Must select</option>
                <option value="true">true</option>
                <option value="false">false</option>
              </Form.Select>
            </Form.Group>
            <br></br>
            <Button variant="primary" type="submit">
              Add Item
            </Button>
            {/* &nbsp;&nbsp;&nbsp;
            <Button onClick={this.clearForm} variant="secondary" type="button">
              Clear
            </Button> */}
          </Form>
        </div>
      </div>        <br></br>
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Brand</th>
                <th>Size</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>In stock</th>
              </tr>
            </thead>
            <tbody>
              {this.state.inventory.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.brand}</td>
                    <td>{item.size}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    <td>{String(item.in_stock)}</td>
                    {/* <td>{String(item.in_stock === false? 'No' : 'Yes')}</td> */}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div></>
    )
  }

}