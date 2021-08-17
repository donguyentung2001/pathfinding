import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {NavDropdown, Navbar, Container, Nav, Modal, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom'
import pic1 from './pic1.png'
import pic2 from './pic2.png'
import pic4 from './pic4.png'
import pic5 from './pic5.png'
import pic6 from './pic6.png'
import pic7 from './pic7.png'

 /* TODO: 
-  add A* search 
 */

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

class TutorialPopUp extends Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      tutorialOn: true
    }
    this.handleClose = this.handleClose.bind(this)
  }

  componentDidUpdate(prevProps) { 
    if (this.props.showTutorial != prevProps.showTutorial) { 
      this.setState(state => ({ 
        tutorialOn: true 
      }))
    }
  }

  handleClose() { 
    this.setState(state => ({ 
      tutorialOn: false 
    }))
  }

  render() { 
    return (
      <div> 
      <Modal show = {this.state.tutorialOn} style={customStyles} onHide = {this.handleClose} > 
      <Modal.Header
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      <Modal.Title> 
      Tutorial
      </Modal.Title>
      </Modal.Header>          
      <Modal.Body> 
      <p> For a quick start, click on two grids. </p>
       <img src = {pic1} alt="two grids" style = {{width:"400px", height:"200px"}}/>
       <p> Then, click on "Run Pathfinding Algorithms" and choose an algorithm you want to find the shortest path with</p>
       <img src = {pic2} alt="run pathfinding algorithms" style = {{width:"400px", height:"200px"}}/>
       <p> Now you can see how the algorithms find the shortest path between two grids! </p>
       <img src = {pic4} alt="shortest path" style = {{width:"400px", height:"200px"}}/>
       <p> Click twice on a grid to make it an obstacle. </p>
       <img src = {pic5} alt="obstacle" style = {{width:"400px", height:"200px"}}/>
       <p> You can also choose to quickly build a maze, aka placing obstacles "smartly", from one of the maze generation algorithms by clicking on "Generate Maze" and choose one algorithm. </p>
       <img src = {pic6} alt="maze" style = {{width:"400px", height:"200px"}}/>
       <p> Now you can watch how our algorithm builds a maze! You can put two start/end grids on this new maze and run the pathfinding algorithm as well! </p>
       <img src = {pic7} alt="maze-run" style = {{width:"400px", height:"200px"}}/>
       <p> Finally, to reset our board, click on "Reset board" on the nagivation bar. </p>
       <p> Enjoy pathfinding! </p>
       </Modal.Body>
       <Modal.Footer style={{
          display: "flex",
          justifyContent: "center",
        }}>
          <Button variant="primary" style = {{width: "70px", height: "50px"}} onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    )
  }
}
class Element extends Component { 
  constructor(props) {
    super(props);
  };
  componentDidUpdate(prevProps) {
    if (this.props.condition != prevProps.condition) { 
      var current_element = document.getElementById(this.props.id);
      if (this.props.condition == "default") { 
        current_element.style.background = '#FFFFFF';
      }
      else if (this.props.condition == "block") { 
        current_element.style.background = "#000000";
      }
      else if (this.props.condition == "considered-d") { 
        current_element.style.background = "#FFB266"
      }
      else if (this.props.condition == "considered") { 
        current_element.style.background = "#FF8000";
      }
      else if (this.props.condition == "endpoint") { 
        current_element.style.background = "#FF99FF";
      }
      else if (this.props.condition == "chosen") { 
        current_element.style.background = "#80FF00";
      }
    }; 
  };
  render() { 
    return <button className="square" id = {this.props.id} condition = {this.props.condition} onClick = {this.props.changecond}>  </button>;
  };
};
class Graph extends Component { 
  constructor(props) { 
    super(props); 
    this.changeInitialCondition = this.changeInitialCondition.bind(this);
    this.addNodeToGraph = this.addNodeToGraph.bind(this);
    this.changeTraverseCondition = this.changeTraverseCondition.bind(this);
    this.resetExceptEndPoints = this.resetExceptEndPoints.bind(this); 
    this.reset = this.reset.bind(this); 
    this.resetHelper = this.resetHelper.bind(this); 
    this.BFS = this.BFS.bind(this);
    this.dijkstra = this.dijkstra.bind(this);
    this.notVertical = this.notVertical.bind(this)
    this.findCoordinates = this.findCoordinates.bind(this)
    this.findDistance = this.findDistance.bind(this)
    this.deleteNodeFromGraph = this.deleteNodeFromGraph.bind(this)
    this.generateMazePrimHelper = this.generateMazePrimHelper.bind(this)
    this.generateMazeRandomHelper = this.generateMazeRandomHelper.bind(this)
    this.generateMazeRandom = this.generateMazeRandom.bind(this)
    this.generateMazePrim = this.generateMazePrim.bind(this)
    this.restoreEndpoints = this.restoreEndpoints.bind(this)
    this.showTutorial = this.showTutorial.bind(this)
    this.getSumArray = this.getSumArray.bind(this)
    this.a_star = this.a_star.bind(this)
    this.state = { 
      adjacency_list: {},
      endpoints:[], 
      conditions:{}, 
      tutorialIsOpen: false, 
    };
    for (let i = 1; i <= 400; i++) {
      this.state.conditions[i] = "default"; 
    };
    /* TODO: initialize adjacency_list */
    var new_adjacency_list = {}
    var first_row = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    var last_row = [382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399]
    var first_col = [21,41,61,81,101,121,141,161,181,201,221,241,261,281,301,321,341,361]
    var last_col = [40,60,80,100,120,140,160,180,200,220,240,260,280,300,320,340,360,380]
    for (let i = 1; i <= 400; i++) { 
      if (i == 1) { 
        new_adjacency_list[1] = [2,21, 22]
      }
      else if (i == 20) { 
        new_adjacency_list[20] = [19,39,40]
      }
      else if (i == 381) { 
        new_adjacency_list[381] = [361,362,382]
      }
      else if (i == 400) { 
        new_adjacency_list[400] = [379, 380, 399]
      }
      else if (first_row.includes(i)) { 
        new_adjacency_list[i] = [i-1, i+1, i+20, i+19, i+21]
      }
      else if (last_row.includes(i)) { 
        new_adjacency_list[i] = [i-1, i+1, i-20, i-19, i-21]
      }
      else if (first_col.includes(i)) { 
        new_adjacency_list[i] = [i-20, i+20, i+1, i-19, i+21]
      }
      else if (last_col.includes(i)) { 
        new_adjacency_list[i] = [i-1, i-21, i + 20, i + 19, i- 20]
      }
      else { 
        new_adjacency_list[i] = [i-1, i+1, i-19, i- 20, i- 21, i+ 19, i +20, i+21]
      }
    };
    //this.state.adjacency_list = new_adjacency_list;
    this.state.adjacency_list = new_adjacency_list
  };

  showTutorial() {   
    this.setState({ 
      tutorialIsOpen: !this.state.tutorialIsOpen
    })
  }

  notVertical(i, j) { 
    var vertical_candidates = [i-1, i+1, i-20, i+20]
    if (vertical_candidates.includes(j)) { 
      return false; 
    }
    else { 
      return true;  
    }
  }

  findCoordinates(i) { 
    var x_coordinate = (i-1)%20; 
    var y_coordinate = Math.floor(((i-1)/20));
    return [x_coordinate, y_coordinate]; 
  }

  findDistance(i, j) { 
    var i_coordinate = this.findCoordinates(i); 
    var j_coordinate = this.findCoordinates(j);
    var distance = Math.sqrt(Math.pow((i_coordinate[0] - j_coordinate[0]),2) + Math.pow(i_coordinate[1] - j_coordinate[1], 2))
    return distance 
  }

  getSumArray(arr) { 
    var count = 0;
   for (let i=0; i < arr.length; i++) 
    { 
      count += arr[i]; 
    }
    return count 
  }

  changeInitialCondition(i) { 
    var new_conditions = this.state.conditions;
    var new_endpoints = this.state.endpoints;
    var new_adjacency_list = this.state.adjacency_list; 
    if (this.state.conditions[i] == "default") { 
      new_conditions[i] = "endpoint"; 
      new_endpoints.push(i) 
    }
    else if (this.state.conditions[i] == "endpoint") { 
      new_conditions[i] = "block"; 
      new_endpoints.splice(new_endpoints.indexOf(i), 1); 
      new_adjacency_list = this.deleteNodeFromGraph(i);
    }
    else if (this.state.conditions[i] == "block") { 
      new_conditions[i] = "default"; 
      new_adjacency_list = this.addNodeToGraph(i)
    }
    this.setState(state => ({ 
      conditions: new_conditions,
      endpoints: new_endpoints,
      adjacency_list: new_adjacency_list, 
    })); 
  }; 

  deleteNodeFromGraph(i) {
    var new_adjacency_list = this.state.adjacency_list; 
    new_adjacency_list[i] = [];
    var candidates = [i-1, i+1, i-19, i- 20, i- 21, i+ 19, i +20, i+21];
    for (var j=0; j < candidates.length; j++) { 
      if (candidates[j] in new_adjacency_list) { 
        if (new_adjacency_list[candidates[j]].includes(i)) { 
          new_adjacency_list[candidates[j]].splice(new_adjacency_list[candidates[j]].indexOf(i), 1); 
        }
      }
    }
    return new_adjacency_list;  
  }

  addNodeToGraph(i) { 
    var new_adjacency_list = this.state.adjacency_list; 
    var first_row = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
    var last_row = [382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399];
    var first_col = [21,41,61,81,101,121,141,161,181,201,221,241,261,281,301,321,341,361];
    var last_col = [40,60,80,100,120,140,160,180,200,220,240,260,280,300,320,340,360,380];
    if (i == 1) { 
      new_adjacency_list[1] = [2,21, 22];
    }
    else if (i == 20) { 
      new_adjacency_list[20] = [19,39,40];
    }
    else if (i == 381) { 
      new_adjacency_list[381] = [361,362,382];
    }
    else if (i == 400) { 
      new_adjacency_list[400] = [379, 380, 399];
    }
    else if (first_row.includes(i)) { 
      new_adjacency_list[i] = [i-1, i+1, i+20, i+19, i+21];
    }
    else if (last_row.includes(i)) { 
      new_adjacency_list[i] = [i-1, i+1, i-20, i-19, i-21];
    }
    else if (first_col.includes(i)) { 
      new_adjacency_list[i] = [i-20, i+20, i+1, i-19, i+21];
    }
    else if (last_col.includes(i)) { 
      new_adjacency_list[i] = [i-1, i-21, i + 20, i + 19, i- 20];
    }
    else { 
      new_adjacency_list[i] = [i-1, i+1, i-19, i- 20, i- 21, i+ 19, i +20, i+21];
    }
    for (let k=0; k < new_adjacency_list[i].length; k++) { 
      var element_need_i = new_adjacency_list[i][k];
      new_adjacency_list[element_need_i].push(i);
    }
    return new_adjacency_list; 
  };

  changeTraverseCondition(i, new_status) { 
    var new_conditions = this.state.conditions; 
    var new_adjacency_list = this.state.adjacency_list; 
    var new_endpoints = this.state.endpoints
    new_conditions[i] = new_status; 
    this.setState(state => ({ 
      conditions: new_conditions,
      endpoints: new_endpoints,
      adjacency_list: new_adjacency_list, 
    })); 
  }

  resetExceptEndPoints() { 
    var new_conditions = this.state.conditions 
    var new_adjacency_list = this.state.adjacency_list
    var new_endpoints = this.state.endpoints
    for (let i = 1; i <= 400; i++) {
      if (!(new_endpoints.includes(i)) && new_conditions[i] != "block") {
        new_conditions[i] = "default";
      } 
      else if (new_endpoints.includes(i)) { 
        new_conditions[i] = "endpoint"; 
      }
    };
    this.setState(state => ({ 
      conditions: new_conditions,
      endpoints: new_endpoints,
      adjacency_list: new_adjacency_list, 
    })); 
  }

  restoreEndpoints() { 
    var new_conditions = this.state.conditions
    for (let i = 0; i < this.state.endpoints.length; i++) { 
      new_conditions[this.state.endpoints[i]] = "endpoint"
    }; 
    this.setState(state => ({ 
      conditions: new_conditions 
    }))
  }

  resetHelper() { 
    var new_conditions = []
    var new_endpoints = []
    var new_adjacency_list = {}
    var first_row = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    var last_row = [382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399]
    var first_col = [21,41,61,81,101,121,141,161,181,201,221,241,261,281,301,321,341,361]
    var last_col = [40,60,80,100,120,140,160,180,200,220,240,260,280,300,320,340,360,380]
    for (let i = 1; i <= 400; i++) { 
      if (i == 1) { 
        new_adjacency_list[1] = [2,21, 22]
      }
      else if (i == 20) { 
        new_adjacency_list[20] = [19,39,40]
      }
      else if (i == 381) { 
        new_adjacency_list[381] = [361,362,382]
      }
      else if (i == 400) { 
        new_adjacency_list[400] = [379, 380, 399]
      }
      else if (first_row.includes(i)) { 
        new_adjacency_list[i] = [i-1, i+1, i+20, i+19, i+21]
      }
      else if (last_row.includes(i)) { 
        new_adjacency_list[i] = [i-1, i+1, i-20, i-19, i-21]
      }
      else if (first_col.includes(i)) { 
        new_adjacency_list[i] = [i-20, i+20, i+1, i-19, i+21]
      }
      else if (last_col.includes(i)) { 
        new_adjacency_list[i] = [i-1, i-21, i + 20, i + 19, i- 20]
      }
      else { 
        new_adjacency_list[i] = [i-1, i+1, i-19, i- 20, i- 21, i+ 19, i +20, i+21]
      }
    };
    for (let i = 1; i <= 400; i++) {
      new_conditions[i] = "default"; 
    };
    return [new_conditions, new_endpoints, new_adjacency_list]
  }

  reset() { 
    this.setState(state => ({ 
      conditions: this.resetHelper()[0],
      endpoints: this.resetHelper()[1],
      adjacency_list: this.resetHelper()[2], 
    })); 
  }

  generateMazeRandom() { 
    this.setState(state => ({ 
      conditions: this.resetHelper()[0],
      endpoints: this.resetHelper()[1],
      adjacency_list: this.resetHelper()[2], 
    }), this.generateMazeRandomHelper); 
  }
  generateMazePrim() { 
    this.setState(state => ({ 
      conditions: this.resetHelper()[0],
      endpoints: this.resetHelper()[1],
      adjacency_list: this.resetHelper()[2], 
    }), this.generateMazePrimHelper); 
  }

  generateMazeRandomHelper() { 
    var block_nodes = []
    var new_conditions = this.state.conditions; 
    var number_blocks = Math.floor(Math.random()*50 + 50) 
    for (let i = 0; i < number_blocks; i++) { 
      var random_elem = Math.floor(Math.random()*400 + 1) 
      while (new_conditions[random_elem] != "default") { 
        random_elem = Math.floor(Math.random()*400 + 1) 
      }
      new_conditions[random_elem] = "block"
      block_nodes.push(random_elem)
    }
    this.setState(state => ({ 
      conditions: new_conditions
    }))
    for (let i=0; i < block_nodes.length; i++) { 
      this.setState({ 
        adjacency_list: this.deleteNodeFromGraph(block_nodes[i])
      })
    }
  }

  generateMazePrimHelper() { 
    var new_conditions = this.state.conditions; 
    var original_graph = this.state.adjacency_list; 
    var explored = {}
    var cell_list = [] 
    for (let i=1; i <= 400; i++) { 
      new_conditions[i] = "block";
    }
    var first_elem = Math.floor(Math.random() * 400 + 1); 
    new_conditions[first_elem] = "default"; 
    explored[1] = true 
    for (let j=0; j < original_graph[1].length; j++) { 
      cell_list.push(original_graph[1][j]); 
    }
    var building_blocks = setInterval(function() { 
      if (cell_list.length == 0) { 
        clearInterval(building_blocks); 
        for (let i = 1; i <= 400; i++) { 
          if (!(i in explored)) { 
            this.setState(state => ({ 
              adjacency_list: this.deleteNodeFromGraph(i)
            }))
          }
        }
        return 
      }
      var current_node = cell_list[Math.floor(Math.random()*cell_list.length)]; 
      var neighbors = original_graph[current_node]; 
      var nums_explored = 0 
      for (let i=0; i < neighbors.length; i++) { 
        if (neighbors[i] in explored) { 
          nums_explored += 1
        }
      }
      if (nums_explored < 2) { 
        explored[current_node] = true 
        new_conditions[current_node] = "default" 
        for (let j=0; j < original_graph[current_node].length; j++) { 
          if (!(original_graph[current_node][j] in explored)) { 
            cell_list.push(original_graph[current_node][j]); 
          }
        }
      }
      cell_list.splice(cell_list.indexOf(current_node), 1); 
      this.setState(state => ({ 
        conditions: new_conditions,
      })); 
    }.bind(this), 0.001)
  }

  BFS() { 
    this.resetExceptEndPoints(); 
    if (this.state.endpoints.length != 2) { 
      return 
    }
    var start_node = this.state.endpoints[0];
    var target_node = this.state.endpoints[1];
    var graph = this.state.adjacency_list;
    var queue = [start_node]; 
    var visited = {};
    visited[start_node] = true; 
    var new_queue = [];
    var parents = {};
    var considering_intervals = setInterval(function(){
        if (queue.length == 0 || target_node in visited) { 
          clearInterval(considering_intervals);
          if (target_node in visited) { 
            var current_node = target_node; 
            var getting_path = setInterval(function() { 
              if (current_node == start_node) { 
                this.changeTraverseCondition(current_node, "chosen");
                clearInterval(getting_path); 
                this.restoreEndpoints(); 
                return 
              }
              if (current_node != target_node) { 
                this.changeTraverseCondition(current_node, "chosen");
              }
              current_node = parents[current_node]; 
            }.bind(this), 100)
          }
          return 
        }
        new_queue = [];  
        for (let i = 0; i < queue.length; i++) { 
            for (let j = 0; j < graph[queue[i]].length; j++) { 
                if (!(graph[queue[i]][j] in visited)) { 
                    parents[graph[queue[i]][j]] = queue[i];
                    new_queue.push(graph[queue[i]][j]);
                    visited[graph[queue[i]][j]] = true;
                }
            }
        }
        queue = new_queue; 
        for (let k = 0; k < queue.length; k++) { 
            if (this.state.conditions[queue[k]] != "endpoint") { 
            this.changeTraverseCondition(queue[k], "considered");
            }
          }
        }.bind(this), 400)
  }

  dijkstra() { 
    this.resetExceptEndPoints(); 
    if (this.state.endpoints.length != 2) { 
      return 
    }
    var start_node = this.state.endpoints[0];
    var target_node = this.state.endpoints[1];
    var graph = this.state.adjacency_list;
    var distances = [1000]
    var visited = {}
    var parents = {}
    for (let i=1; i <= 400;i++) { 
        if (i == start_node) { 
            distances.push(0)
        }
        else { 
            distances.push(1000)
        }
    } 
    var current_min_distance = 0 
    var current_min_node = start_node
    var considering_nodes = setInterval(function() { 
        if (!(this.state.endpoints.includes(current_min_node))) { 
          this.changeTraverseCondition(current_min_node, "considered")
        }
        if ((target_node in visited) || current_min_distance == 1000) { 
            clearInterval(considering_nodes); 
            var current_node = target_node; 
            var getting_path = setInterval(function() { 
              if (current_node == start_node) { 
                this.changeTraverseCondition(current_node, "chosen");
                this.restoreEndpoints(); 
                clearInterval(getting_path); 
                return 
              }
              if (current_node != target_node) { 
                this.changeTraverseCondition(current_node, "chosen");
              }
              current_node = parents[current_node]; 
            }.bind(this), 100)
            return 
        }
        var current_distances = {}
        for (let j=0; j < graph[current_min_node].length; j++) { 
            if (!(graph[current_min_node][j] in visited)) { 
              if (this.notVertical(current_min_node, graph[current_min_node][j])) { 
                current_distances[graph[current_min_node][j]] = current_min_distance + 1.4 
              }
              else { 
                current_distances[graph[current_min_node][j]] = current_min_distance + 1 
              }
        }
        }
        Object.keys(current_distances).forEach(function(key) { 
            if (current_distances[key] < distances[key]) { 
                distances[key] = current_distances[key]
                parents[key] = current_min_node
                if (!(this.state.endpoints.includes(parseInt(key)))) { 
                  this.changeTraverseCondition(key, "considered-d")
                }
            }
        }, this)
        distances[current_min_node] = 1000
        visited[current_min_node] = true
        current_min_distance = Math.min.apply(Math, distances);
        current_min_node = distances.indexOf(current_min_distance);

    }.bind(this), 40)
  };

  a_star() { 
    this.resetExceptEndPoints(); 
    if (this.state.endpoints.length != 2) { 
      return 
    }
    var start_node = this.state.endpoints[0];
    var target_node = this.state.endpoints[1];
    var graph = this.state.adjacency_list;
    var to_be_visited = {}
    to_be_visited[start_node] = 0
    var visited = {}
    var parents = {}
    var current_node = start_node 
    var considering_nodes = setInterval(function() { 
      if (to_be_visited.length == 0 || current_node == target_node) { 
        clearInterval(considering_nodes); 
        var getting_path = setInterval(function() { 
          if (current_node == start_node) { 
            this.changeTraverseCondition(current_node, "chosen");
            this.restoreEndpoints(); 
            clearInterval(getting_path); 
            return 
          }
          if (current_node != target_node) { 
            this.changeTraverseCondition(current_node, "chosen");
          }
          current_node = parents[current_node]; 
        }.bind(this), 100)
        return 
      }
      visited[current_node] = true;
      if (current_node != start_node) { 
        this.changeTraverseCondition(current_node, "considered")
      }
      delete to_be_visited[current_node];
      for (let i=0; i < graph[current_node].length; i++) { 
        if (!(graph[current_node][i] in visited)) { 
          if (this.notVertical(graph[current_node][i], current_node)) { 
            var start_cost = 1.4; 
          }
          else { 
            var start_cost = 1; 
          }
          var heuristic_cost = this.findDistance(graph[current_node][i], target_node)
          if (!(graph[current_node][i] in to_be_visited)) { 
            to_be_visited[graph[current_node][i]] = [start_cost, heuristic_cost]
            parents[graph[current_node][i]] = current_node
          }
          else { 
            if (this.getSumArray(to_be_visited[graph[current_node][i]]) > start_cost + heuristic_cost) { 
              to_be_visited[graph[current_node][i]] = [start_cost, heuristic_cost]
              parents[graph[current_node][i]] = current_node
            }
            else if (this.getSumArray(to_be_visited[graph[current_node][i]]) == start_cost + heuristic_cost && to_be_visited[graph[current_node][i]][1] > heuristic_cost) {
              to_be_visited[graph[current_node][i]] = [start_cost, heuristic_cost]
              parents[graph[current_node][i]] = current_node
            }
          }
          if (graph[current_node][i] != target_node) { 
            this.changeTraverseCondition(graph[current_node][i], "considered-d")
          }
        }
      }
      var next_node = 1000; // a big value which needs to be replaced later by the first key
      for (const [key, value] of Object.entries(to_be_visited)) {
        if (next_node == 1000) { 
          next_node = key 
        }
        else if (this.getSumArray(value) < this.getSumArray(to_be_visited[next_node])) { 
          next_node = key; 
        }
        else if ((this.getSumArray(value) == this.getSumArray(to_be_visited[next_node])) && (value[1] < to_be_visited[next_node][1])) { 
          next_node = key;
        }
        current_node = next_node; 
      }
    }.bind(this), 100)

  }

  renderElement(i) { 
    return <Element id={i} condition={this.state.conditions[i]} changecond={() => this.changeInitialCondition(i)}/>
  }

  renderElements(start) { 
    var elements = []; 
    for (let i = 20*(start-1) + 1; i <= 20*start; i++) { 
      elements.push(this.renderElement(i)); 
    }
    return elements
  }

  renderBoard() { 
    var board = []; 
    for (let i = 1; i <= 20; i++) { 
      board.push(<div className = "board-row" style={{marginLeft: "400px"}}> {this.renderElements(i)}  </div>); 
    }
    return board
  }

  render() { 
    return (
      <div> 
      <Navbar sticky="top" bg="dark" variant="dark" style={{marginBottom: "15px"}}>
        <Container>
        <Navbar.Brand> Pathfinding Visualizer</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick = {this.showTutorial}> Tutorial </Nav.Link>
          <NavDropdown title="Run Pathfinding Algorithms" id="basic-nav-dropdown"> 
          <NavDropdown.Item onClick = {this.BFS}>Breadth First Search</NavDropdown.Item>
          <NavDropdown.Item onClick = {this.dijkstra}> Dijkstra's Algorithm</NavDropdown.Item>
          <NavDropdown.Item onClick = {this.a_star}> A* search Algorithm</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Generate Maze" id="basic-nav-dropdown">
          <NavDropdown.Item onClick = {this.generateMazePrim}> Randomized Prim's Algorithm</NavDropdown.Item>
          <NavDropdown.Item onClick = {this.generateMazeRandom}> Just a random maze</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link onClick = {this.reset}> Reset Board </Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <div  style = {{marginBottom: "10px"}}> 
      <div style = {{marginLeft: "auto", marginRight: "auto", width: "700px"}}> Click on a grid to make it a start/end grid. We need two grids to run path finding algorithms. </div>
      <div style = {{marginLeft: "auto", marginRight: "auto", width: "500px"}}> Click twice on a grid to make it an obstacle. </div>
      <div style = {{marginLeft: "auto", marginRight: "auto", width: "500px"}}> Click three times on a grid to reset it to the original grid. </div>
      </div>
      <div style = {{marginLeft: "auto", marginRight: "auto", width: "1000px", marginBottom: "15px"}}> 
      <button style = {{background: "#FF99FF"}}> </button> <span class ="legend"> Start/end grid</span>
      <button style = {{background: "#000000"}}> </button> <span class ="legend"> Obstacle grid</span>
      <button style = {{background: "#FF8000"}}> </button> <span class ="legend"> Explored grid</span>
      <button style = {{background: "#FFB266"}}> </button> <span class ="legend"> Soon-to-be-explored grid</span>
      <button style = {{background: "#80FF00"}}> </button> <span class ="legend"> Shortest-path grid</span>
       </div>
       <TutorialPopUp showTutorial={this.state.tutorialIsOpen}/>
      {this.renderBoard()}
      </div>
    )
  }
}


function App() {
  return (
    <div className="App">
    <Graph/>
    </div>
  );
}

export default App;
