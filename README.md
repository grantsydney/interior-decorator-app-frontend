//create draggable component for a piece of furniture that is selected from furniture form

{this.props.findCurrentFurniture ? <Draggable
                defaultClassName={`${this.props.findCurrentFurniture.name}`}
                onDrag={this.handleDrag}
                bounds="parent"
                axis="both"
                handle={`.${this.props.findCurrentFurniture.name}`}
                defaultPosition={{x: 0, y: 0}}
                scale={1}
                >

                  <img src={`./images/furniture_sketches/${this.props.findCurrentFurniture.img_sketch}`} alt={this.props.findCurrentFurniture.name}/>

              </Draggable> : null}

              // <button onClick={()=>this.props.saveFurniturePiece(this.props.currentFurniture, this.props.currentRoom, 20, 30)}>Save</button>


*************************************************************************************************************************
handleDrag = (e, ui) => {
  // debugger
  // let foundFurniture = this.state.furniture.find(f => ui.node.classList[0])
  let newFurnitureData = this.props.allFurniture.map(f => { if(ui.node.classList[0] === f.name){
      //ui.node.parentElement.id DIDN'T WORK
      return this.props.roomFurniture.map(rf=>{
        if (e.target.dataset.id === rf.furniture_id){
          debugger
          return {...rf, deltaPosition: {
            x: rf.x_coord + ui.deltaX,
            y: rf.y_coord + ui.deltaY,
            // f.deltaPosition.y
          }
        }
      } return rf
      })

    }
  })

  // console.log("state is: ", this.state.furniture)
  // debugger
  this.setState({ realFurniture: newFurnitureData }, ()=>console.log(this.state.realFurniture))

}


findCurrentFurniture() {
  return this.state.furniture.find(f =>{
    return f.id === this.state.clickedFurnitureId
  })
  this.setState({
    chosenFurniture: [...]
  })
}

<div className="mock-room" style={{border:"1px solid black",width:this.props.findCurrentRoom?`${this.props.findCurrentRoom.dimension1}px`:null,height:this.props.findCurrentRoom?`${this.props.findCurrentRoom.dimension2}px`:null,margin:'auto'}}>
<h3>Mock Room</h3>
<div>

<div>

      <p>Dimension 1: {this.props.findCurrentRoom ? this.props.findCurrentRoom.dimension1 : null}</p>
      <p>Dimension 2: {this.props.findCurrentRoom ? this.props.findCurrentRoom.dimension2 : null}</p>

      </div>


      {this.props.findCurrentFurniture ?
      <h3>Mock Room</h3>
      <div>
      {this.props.findCurrentFurniture ?   <div className="parent" style={{position:"relative",border:"1px solid black",width:this.props.findCurrentRoom?`${this.props.findCurrentRoom.dimension1}px`:null,height:this.props.findCurrentRoom?`${this.props.findCurrentRoom.dimension2}px`:null,margin:'auto'}} id={this.props.findCurrentFurniture.name}><Draggable
                    defaultClassName={`${this.props.findCurrentFurniture.name}`}
                   onDrag={this.handleDrag}
                      bounds="parent"
                      axis="both"
                      handle={`.${this.props.findCurrentFurniture.name}`}
                      defaultPosition={{x: 0, y: 0}}
                      scale={1}
                      onStart={this.handleStart}
                      onDrag={this.handleDrag}
                      onStop={this.handleStop}
                      >

                        <img src={`./images/furniture_sketches/${this.props.findCurrentFurniture.img_sketch}`} alt={this.props.findCurrentFurniture.name}/>

                    </Draggable></div> : null}




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
