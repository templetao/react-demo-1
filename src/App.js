import React from 'react'

class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      n: 1,
      array: [1, 2, 3]
    }
  }

  onClick = () => {
    this.setState(state => ({n: state.n + 1}))
  }

  render() {
    return this.state.array.map(n => <div key={n}>{n}</div>)

    // let result = []
    // for (let i = 0; i < this.state.array.length; i++) {
    //   result.push(this.state.array[i])
    // }
    // return result

    // return (
    //   <>
    //     {this.state.n % 2 === 0 ?
    //       <div>偶数</div> :
    //       <span>奇数</span>}
    //     <button onClick={this.onClick}>+1</button>
    //   </>
    // )
  }
}

export default App
